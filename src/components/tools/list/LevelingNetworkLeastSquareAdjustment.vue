<template>
    <div class="row p-0 card" id="lls">
        <vue-headful 
            title="Leveling network least square adjustment • gsk567 • Georgi Karagogov" 
            description="Leveling network least square adjustment"
            image="https://cdn.gsk567.com/images/leveling-least-square.jpg"/>
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Leveling Network Least Square Adjustment</h1>
                    <router-link class="btn btn-back hvr-pop" to="/tools">GO BACK TO TOOLS</router-link>
                </div>
            </div>
        </div>
        <div id="input-data-card">
            <form class="row" v-on:submit.prevent="process" method="post">
                <div class="col-sm-5">
                    <h2 class="section-title">Given Points (Number, Height)</h2>
                    <div class="form-group" v-for="(point, i) in givenPoints" :key="i+'p'">
                        <div class="row m-0-auto">
                            <div class="col-5 p-1">
                                <input class="form-control" v-model="point.number" data-rules="required" type="text" placeholder="Number"/>
                            </div>
                            <div class="col-5 p-1">
                                <input class="form-control" v-model.number="point.height" data-rules="required" type="number" step="any" placeholder="Height [m]"/>
                            </div>
                            <div class="col-2 p-1 m-0">
                                <button type="button" v-on:click="removeGivenPoint(i)" class="btn btn-secondary remove-button hvr-pop btn-danger">REMOVE</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-1">
                        <button type="button" v-on:click="addGivenPoint()" class="btn hvr-pop add-button">ADD GIVEN POINT</button>
                    </div>
                </div>
                <div class="col-sm-7">
                    <h2 class="section-title">Measurements (From, To, Delta Height, Distance)</h2>
                    <div class="form-group" v-for="(meas, i) in measurements" :key="i+'m'">
                        <div class="row m-0-auto">
                            <div class="col-2 p-1 m-0">
                                <input class="form-control" type="text" data-rules="required" v-model="meas.from" placeholder="From"/>
                            </div>
                            <div class="col-2 p-1 m-0">
                                <input class="form-control" type="text" data-rules="required" v-model="meas.to" placeholder="To"/>
                            </div>
                            <div class="col-3 p-1 m-0">
                                <input class="form-control" type="number" step="any" data-rules="required" v-model.number="meas.deltaHeight" placeholder="Height Difference [m]"/>
                            </div>
                            <div class="col-3 p-1 m-0">
                                <input class="form-control" type="number" step="any" data-rules="required" v-model.number="meas.distance" placeholder="Distance [km]"/>
                            </div>
                            <div class="col-2 p-2 m-0">
                                <button type="button" v-on:click="removeMeasurement(i)" class="btn btn-secondary remove-button hvr-pop btn-danger">REMOVE</button>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 p-1">
                        <button type="button" v-on:click="addMeasurement()" class="btn hvr-pop add-button">ADD MEASUREMENT</button>
                    </div>
                </div>
                <div class="col-12">
                    <hr/>
                </div>
                <div class="form-group mt-5 process-form-group">
                    <input type="submit" class="btn hvr-pop btn-process pr-5 pl-5" value="PROCESS"/>
                </div>
            </form>
            <div id="calculation-result">
                <div class="row" v-if="resultReport != null">
                    <div class="data-container col-sm-6 col-12">
                        <h2>Input Data</h2>
                        <hr/>
                        <h3>Amount Measurements: {{resultReport.InputData.AmountMeasurements}}</h3>
                        <h3>Amount Given Points: {{resultReport.InputData.AmountGivenPoints}}</h3>
                        <h3>Amount New Points: {{resultReport.InputData.AmountNewPoints}}</h3>
                        <h3>Amount Overmeasurements: {{resultReport.InputData.AmountOvermeasurements}}</h3>
                        <br/>
                        <h3 v-for="(p, i) in resultReport.GivenPointsData" :key="i+'gp'">H<sub class="sub">{{p.Number}}</sub> = {{p.Height}}m</h3>
                        <br/>
                        <h3 v-for="(m, i) in resultReport.Measurements" :key="i+'rm'">h'<sub class="sub">{{m.From}}-{{m.To}}</sub> = {{m.MeasuredDeltaHeight}}m (D = {{m.Distance}}km)</h3>
                    </div>
                    <div class="data-container col-sm-6 col-12">
                        <h2>Results</h2>
                        <hr/>
                        <h3 v-for="(m, i) in resultReport.Measurements" :key="i+'am'"><strong>h<sub class="sub">{{m.From}}-{{m.To}}</sub></strong> = {{m.MeasuredDeltaHeight}}m + <span class="correction">{{m.Residual}}mm</span> = <strong>{{m.AdjustedDeltaHeight}}m</strong></h3>
                        <br/>
                        <h3 v-for="(p, i) in resultReport.NewPointsData" :key="i+'np'"><strong>H<sub class="sub">{{p.Number}}</sub></strong> = {{p.Height}}m + <span class="correction">{{p.LeastSquareCorrection}}mm</span> = <strong>{{p.Height}}m </strong> <span class="small">(<strong>RMS = {{p.RMS}}mm</strong>)</span></h3>
                        <br/>
                        <h3>Root Mean Square For Weight 1 is equal to <strong>{{resultReport.RMSW1}}mm</strong></h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import {configMixin} from '../../../mixins/configMixin'
    export default {
        mixins: [configMixin],
        data() {
            return {
                apiUrl: this.getConfig().apiUrl,
                givenPoints: [],
                measurements: [],
                resultReport: null
            }
        },
        methods: {
            addGivenPoint: function() {
                this.givenPoints.push({
                    "number": "",
                    "height": 0
                });

            },
            removeGivenPoint: function(point) {
                this.givenPoints.splice(point, 1);
            },
            addMeasurement: function() {
                this.measurements.push({
                    "from": "",
                    "to": "",
                    "deltaHeight": 0,
                    "distance": 0
                });
            },
            removeMeasurement: function(point) {
                this.measurements.splice(point, 1);
            },
            process: function() {
                let validInput = true;
                let commandFile = this.givenPoints.length + " " + this.measurements.length + "\r\n";
                this.givenPoints.forEach((point, index) => {
                    if (point.number === "" || point.height === "") {
                        alert("Point " + (index + 1) + " is invalid.");
                        validInput = false;
                    }
                });
                this.measurements.forEach((meas, index) => {
                    if (meas.from === "" || meas.to === "" || meas.deltaHeight === "" || meas.distance === "") {
                        alert("Measurement " + (index + 1) + " is invalid.");
                        validInput = false;
                    }
                });       
                if (validInput === true && this.givenPoints.length > 0 && this.measurements.length > 0) {
                    let self = this;
                    axios.post(this.apiUrl + 'tools/process-leveling-network-least-square-adjustment', {
                        "givenPoints": this.givenPoints,
                        "measurements": this.measurements
                    },
                    { 
                        "Accept": "application/json",
                        "Content-Type": "application/json"
                    })
                    .then(function (response) {
                        if (response.data != null) {
                            self.resultReport = response.data;
                        }
                    })
                    .catch(function (error) {
                        console.log(error);
                    });
                } 
            }
        },
        mounted: function() {
            // example data
            this.givenPoints = [{
                "number": "100",
                "height": 512.882
            },
            {
                "number": "101",
                "height": 525.873
            }];

            this.measurements = [{
                "from": "4",
                "to": "2",
                "deltaHeight": 5.445,
                "distance": 5.01
            },
            {
                "from": "1",
                "to": "2",
                "deltaHeight": 7.81,
                "distance": 1.01
            },
            {
                "from": "100",
                "to": "2",
                "deltaHeight": 10.015,
                "distance": 2.34
            },
            {
                "from": "4",
                "to": "101",
                "deltaHeight": 8.441,
                "distance": 1.91
            },
            {
                "from": "3",
                "to": "2",
                "deltaHeight": 3.517,
                "distance": 4.12
            },
            {
                "from": "3",
                "to": "101",
                "deltaHeight": 6.512,
                "distance": 2.81
            },
            {
                "from": "4",
                "to": "3",
                "deltaHeight": 1.952,
                "distance": 3.12
            },
            {
                "from": "100",
                "to": "3",
                "deltaHeight": 6.491,
                "distance": 1.23
            },
            {
                "from": "1",
                "to": "4",
                "deltaHeight": 2.352,
                "distance": 8.2
            }];
        },
    }
</script>

<style lang="scss" scoped>
#lls {
    .header-card {
        background-image: url('https://cdn.gsk567.com/images/leveling-least-square.jpg');
    }
}

.process-form-group {
    border: 1px solid #bebebe;
    border-radius: 4px;
    width: auto;
    margin: 0px auto !important;
}


.section-title {
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
}

#input-data-card form {
    width: 100%;
    padding: 15px;
}

#input-data-card .form-group {
    text-align: center;
    margin: 0px;
}

#input-data-card .form-group .row .col-2 {
    margin: 0 auto;
}

#input-data-card .form-control {
    padding: 3px;
    height: 25px;
}

.add-button {
    border: 1px solid #bebebe;
    padding: 2px 6px;
    font-weight: 600;
    display: block;
    margin: 10px auto;
}

.remove-button {
    font-size: 12px;
    padding: 2px 4px;
    font-weight: 600;
}

#calculation-result {
    text-align: center;
    border: 1px solid #bebebe;
    padding: 15px;
    margin-top: 20px;
    text-align: left;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    margin: 10px;
}

#calculation-result h2 {
    font-size: 26px;
    text-align: center;
}

#calculation-result .data-container {
    margin: 0 auto;
}

#calculation-result .data-container h3 {
    font-size: 20px;
    line-height: 30px;
}

.correction{
    color: red;
    font-size: 16px;
}

.sub {
    font-size: 14px;
}

.m-0-auto {
    margin: 0 auto !important;
}
</style>