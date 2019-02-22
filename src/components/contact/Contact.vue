<template>
    <div class="row" id="cf">
        <vue-headful 
            title="Contact • gsk567 • Georgi Karagogov" 
            description="Contact with Georgi Karagogov"
            image="https://cdn.gsk567.com/images/hp-contact-form.jpg" />
        <div class="col-12 p-0">
            <div class="header-card d-flex">
                <div class="header-card-container">
                    <h1>Text Me</h1>
                </div>
            </div>
        </div>
        <form id="contact-form" method="post" v-on:submit.prevent="sendMessage">  	
          <div class="wrap-thumbnails contact-form-div">
              <input type="text" v-model="inputName" class="responsive-field" id="name" name="name" placeholder="Enter name" required="required" />
              <input type="email" v-model="inputEmail" class="responsive-field" id="email" name="email" placeholder="Enter email" required="required" />
              <input type="text" v-model="inputSubject" class="responsive-field" id="subject" name="subject" placeholder="Enter subject" required="required" />
              <textarea id="message" v-model="inputMessage" class="responsive-field" name="message" rows="9" cols="25" required="required" placeholder="Message"></textarea>
              <div class="form-group-recaptcha">
                    <vue-recaptcha ref="recaptcha"
                             @expired="onCaptchaExpired"
                             sitekey="6LfomRQUAAAAAIp1RxLUZFGwtjpo6FStNwXgLjQ-"></vue-recaptcha>
              </div>
              <loading-splash v-if="processing === true"></loading-splash>
              <button v-if="processing === false" type="submit" class="hvr-pop" id="btn-contact-me" value="Send Message">Send Message</button>
          </div>
      </form>
      <modal :title="modalTitle" :body="modalBody" :button="modalButton" v-if="showModal" @close="showModal = false"></modal>
    </div>
</template>

<script>
    import VueRecaptcha from 'vue-recaptcha';
    import Modal from './../../components/misc/Modal.vue';
    import LoadingSplash from './../../components/misc/LoadingSplash.vue';


    export default {
        components: {
            vueRecaptcha: VueRecaptcha,
            loadingSplash: LoadingSplash,
            modal: Modal
        },
        data() {
            return {
                processing: false,
                inputEmail: "",
                inputName: "",
                inputSubject: "",
                inputMessage: "",
                showModal: false,
                modalTitle: "Message",
                modalBody: "",
                modalButton: "OK"
            }
        },
        methods: {
            sendMessage: function() {
                if (
                    this.inputEmail === '' ||
                    this.inputName === '' ||
                    this.inputSubject === '' ||
                    this.inputMessage === ''
                )
                {
                    this.modalBody = "Required fields are not filled. Please check your input data.";
                    this.showModal = true;
                    return;
                }
                let self = this;
                let form = document.getElementById("contact-form");
                let promiseResponse = emailjs.sendForm('gsk567_smtp_server', 'email_template_gsk567', form);
                self.processing = true;
                promiseResponse.then(function(response){
                    self.modalBody = "Thank you for your message. It has been sent successfully.";
                    self.showModal = true;
                    self.resetForm();
                    self.$refs.recaptcha.reset();
                    self.processing = false;
                }, function(error) {
                    self.modalBody = "Something wrong happened. Your message has not been sent.";
                    self.showModal = true;
                    self.$refs.recaptcha.reset();
                    self.processing = false;
                });
            },
            onCaptchaExpired: function() {
                this.$refs.recaptcha.reset();
            },
            resetForm: function() {
                this.inputEmail = "";
                this.inputName = "";
                this.inputSubject = "";
                this.inputMessage = "";
            }
        }
    }
</script>

<style lang="scss">
#cf {
    .header-card {
        background-image: url('https://cdn.gsk567.com/images/hp-contact-form.jpg');
    }
}
    #contact-form {
        width: 100%;
        max-width: 480px;
        padding: 20px;
        margin: auto;
        .responsive-field {
            font-size: 25px;
            width: 100%;
            height: 47px;
            background: transparent;
            border: 1px solid #bebebe;
            color: #000;
            border-radius: 4px;
            margin-top: 23px;
            padding-left:15px;
            padding-top: 5px;
            outline: none;
            -webkit-transition: all 1s ease-out;
            -moz-transition: all 1s ease-out;
            -o-transition: all 1s ease-out;
            transition: all 1s ease-out;
        }

        .responsive-field:hover,
        .responsive-field:active,
        .responsive-field:focus {
            background: #e3e3e3;
        }

        textarea.responsive-field {
            min-height: 200px;
            padding-top: 15px !important;
            margin-bottom: 30px;
            margin-top: 23px;
            max-height: 300px;
        }

        #btn-contact-me {
            font-size: 25px;
            height: 47px;
            margin-top: 23px;
            width: 100%;
            outline: none;
            -webkit-transition: all 1s ease-out;
            -moz-transition: all 1s ease-out;
            -o-transition: all 1s ease-out;
            transition: all 1s ease-out;
            cursor: pointer;
            background: transparent;
            border: 1px solid #bebebe;
            color: #000;
            border-radius: 4px;
        }

        .form-group-recaptcha > div > div {
            margin: 0 auto;
        }
    }
</style>