<template>
    <div class="row p-0 card" id="jsc">
        <vue-headful 
            title="JavaScript Console • gsk567 • Georgi Karagogov" 
            description="JavaScript console environment application"
            image="https://cdn.gsk567.com/images/javascript-console.jpg" />
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>JavaScript Console</h1>
                    <router-link class="btn btn-back hvr-pop" to="/tools">GO BACK TO TOOLS</router-link>
                </div>
            </div>
        </div>
        <div id="input-data-card">
            <div id="console-container">
                <textarea v-model="consoleContent" id="console-content"></textarea>
            </div>
            <div class="row">
                <div class="form-group mt-5 process-form-group">
                    <button class="btn btn-process hvr-pop" v-on:click="runScript()">RUN</button>
                </div>
            </div>
            <div id="script-result">
                <p v-for="(row, i) in scriptResult" :key="i">{{row}}</p>
            </div>
        </div>
    </div>
</template>

<script>
    import CodeMirror from 'codemirror';
    import './../../../../node_modules/codemirror/addon/search/searchcursor.js';
    import './../../../../node_modules/codemirror/addon/search/search.js';
    import './../../../../node_modules/codemirror/addon/dialog/dialog.js';
    import './../../../../node_modules/codemirror/addon/edit/matchbrackets.js';
    import './../../../../node_modules/codemirror/addon/edit/closebrackets.js';
    import './../../../../node_modules/codemirror/addon/comment/comment.js';
    import './../../../../node_modules/codemirror/addon/wrap/hardwrap.js';
    import './../../../../node_modules/codemirror/addon/fold/foldcode.js';
    import './../../../../node_modules/codemirror/addon/fold/brace-fold.js';
    import './../../../../node_modules/codemirror/mode/javascript/javascript.js';
    import './../../../../node_modules/codemirror/keymap/sublime.js';

    export default {
        data() {
            return {
                consoleContentEditor: null,
                consoleContent: "",
                scriptResult: []
            }
        },
        methods: {
            runScript: function() {
                console.logs = [];
                let consoleContentValue = this.consoleContentEditor.getValue();
                this.scriptResult = [];

                try {
                    JSON.stringify(eval(consoleContentValue));
                    for (let i = 0; i < console.logs.length; i++) {
                        this.scriptResult.push(JSON.stringify(console.logs[i]));
                    }
                } catch(e) {
                    this.scriptResult.push(e.message.toString());
                }
            }
        },
        mounted: function() {
            let editorConfig = {
                mode: "javascript",
                theme: "default",
                lineNumbers: true,
                autoCloseBrackets: true,
                matchBrackets: true,
                showCursorWhenSelecting: true,
                tabSize: 4,
                keyMap: "sublime"
            };
            this.consoleContentEditor = CodeMirror.fromTextArea(document.getElementById("console-content"), editorConfig);

            console.logOrignin = console.log;
            console.logs = [];
            console.log = function(...values){
                console.logs.push(values);
            }
        },
    }
</script>

<style>

@import './../../../../node_modules/codemirror/lib/codemirror.css';
@import './../../../../node_modules/codemirror/addon/fold/foldgutter.css';
@import './../../../../node_modules/codemirror/addon/dialog/dialog.css';

.CodeMirror {
    font-size: 16px;
    line-height: 16px;
}

#jsc .header-card {
    background-image: url('https://cdn.gsk567.com/images/javascript-console.jpg');
}

#console-container {
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    margin: 10px;
}

.project-card .card {
    border: none;
    line-height: 1.42857143;
    border-radius: 2px;
    -webkit-transition: box-shadow .25s; 
    transition: box-shadow .25s; 
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
}

.project-card .card:hover {
    -webkit-box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
    box-shadow: 0 8px 17px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);
}

.project-card .card-body {
    border-top: 1px solid #ddd;
    border-bottom: 1px solid #ddd;
}

.project-card h2 {
    font-size: 16px;
    padding: 10px;
    font-weight: bold;
    margin: 0px;
    padding-bottom: 0px;
}

.project-card .btn-view {
    width: 100%;
    font-weight: bold;
    border-radius: 0px;
}

.project-card img {
    border-radius: 0px;
}


.process-form-group {
    border: 1px solid #bebebe;
    border-radius: 4px;
    width: auto;
    margin: 0px auto !important;
}

.btn-process {
    width: 100%;
    background: transparent !important;
    color: #000 !important;
    font-weight: bold;
    font-size: 24px !important;
}

.section-title {
    font-weight: bold;
    text-align: center;
    font-size: 20px;
    margin-bottom: 20px;
}

.input-data-card {
    margin: 20px;
    margin-top: 0px;
}

.input-data-card form {
    border: 1px solid #bebebe;
    padding: 15px;
}

.input-data-card .form-group {
    text-align: center;
    margin: 0px;
}

.input-data-card .form-group .row .col-2 {
    margin: 0 auto;
}

.input-data-card .form-control {
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

#script-result {
    text-align: center;
    border: 1px solid #bebebe;
    padding: 15px;
    margin-top: 20px;
    text-align: left;
    -webkit-box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    box-shadow: 0 2px 5px 0 rgba(0,0,0,0.16),0 2px 10px 0 rgba(0,0,0,0.12); 
    margin: 10px;
}

#script-result p {
    font-size: 20px;
    line-height: 24px;
    text-align: left;
}
</style>