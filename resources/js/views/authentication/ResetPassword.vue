<template>
<main>
    <Header />
    <section id="main" class="clearfix user-page">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-7 mx-auto shadow border">
                    <div class="user-account">
                        <h2 class="useraccounthead mb-2">Reset Your Password?</h2>
                        <p class="mb-2">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                        <form v-on:submit.prevent="onSubmit">
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="email" v-model="user.email" class="form-control" placeholder="Enter Your Email" >
                                        <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="number" v-model="user.varification_code" class="form-control" placeholder="Enter Your Verifcation Code" >
                                        <div class="invalid-feedback" v-if="errors.varification_code">{{errors.varification_code[0]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="password" v-model="user.password" class="form-control" placeholder="Enter Your New Password" >
                                        <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <input type="password" v-model="user.password_confirmation" class="form-control" placeholder="Enter Your Confirm Password" >
                                        <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                    </div>
                                </div>
                            </div>
                            <button type="submit" ref="btnSubmit" class="btn">Reset Password</button>
                        </form>
                    </div>

                    <a href="/register" class="btn-primary">Resend Verification Code</a>
                    <a href="/login" class="btn-primary">Login</a>
                </div>
            </div>
        </div>
    </section>
    <Footer />
</main>
    
</template>

<script>
import * as auth from "../../services/auth_service";
import Header from '../../components/user/Header.vue';
import Footer from '../../components/user/Footer.vue';
export default {
    name: 'resetPassword',
    components:{
        Header,
        Footer
    },
    data() {
        return {
            user: {
                email: '',
                varification_code: '',
                password: '',
                password_confirmation: ''
            },
            btnSubmitOldHtml: '',
            errors: {},
        }
    },
    mounted() {
        // if (this.$store.state.commonMessage === 'reset_password_request') {
        //     this.user.email = this.$store.state.commonVariable;
        //     this.flashMessage.info({
        //         message: "A verification code has been sent to the email you provided",
        //         time: 5000,
        //     });

        //     this.$store.state.commonMessage = null;
        //     this.$store.state.commonVariable = null;
        // }
    },
    beforeRouteEnter (to, from, next) {
        next(vm=>{
            vm.user.email = to.params.email
        });
    },
    methods: {
        togglePasswordShow() {
            let passwordField = this.$refs.passwordField;
            let passwordIcon = this.$refs.passwordIcon;
            if (passwordField.getAttribute('type') === 'password') {
                passwordField.setAttribute('type', 'text');
                passwordIcon.classList.remove('fa-eye');
                passwordIcon.classList.add('fa-eye-slash');
            } else {
                passwordField.setAttribute('type', 'password');
                passwordIcon.classList.remove('fa-eye-slash');
                passwordIcon.classList.add('fa-eye');
            }
        },
        validatePassword() {
            if (this.user.password.length === 0) {
                return;
            }
            this.errors.password = '';
            var matchedCase = new Array();
            matchedCase.push("[$@$!%*#?&]");
            matchedCase.push("[A-Z]");
            matchedCase.push("[0-9]");
            matchedCase.push("[a-z]");

            var ctr = 0;
            for (var i = 0; i < matchedCase.length; i++) {
                if (new RegExp(matchedCase[i]).test(this.user.password)) {
                    ctr++;
                }
            }

            var color = "";
            var strength = "";
            switch (ctr) {
                case 0:
                case 1:
                case 2:
                    strength = "Very Weak";
                    color = "red";
                    break;
                case 3:
                    strength = "Medium";
                    color = "orange";
                    break;
                case 4:
                    strength = "Strong";
                    color = "green";
                    break;
            }
            this.$refs.passwordStrength.innerHTML = strength;
            this.$refs.passwordStrength.style.color = color;
        },
        // onSubmit: async function() {
        //     this.disableSubmission(this.$refs.btnSubmit);

        //     try {
        //         await auth.resetPassword(this.user);
        //         this.errors = {};
        //         this.$store.state.commonMessage = 'password_reseted';
        //         this.$store.state.commonVariable = this.user.email;
        //         this.$router.push({ name: "login" });
        //     } catch (error) {
        //         switch (error.response.status) {
        //             case 422:
        //                 this.errors = error.response.data.errors;
        //                 break;
        //             default:
        //                 this.errors = {};
        //                 this.flashMessage.error({
        //                     message: "Some error occurred please try again",
        //                     time: 5000,
        //                 });
        //                 break;
        //         }

        //         this.enableSubmission(this.$refs.btnSubmit);
        //     }
        // },
        onSubmit:async function (){
            this.disableSubmission(this.$refs.btnSubmit);
            try {
             this.errors = {};
             const response =  await auth.resetPassword(this.user);
             this.flashMessage.success({
                                message: response.data.message,
                                time: 5000,
                        });
            } catch (error) {
                console.log(error + '');
                switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.errors = error.response.data.errors;
                            break;
                        default:
                            this.errors = {};
                            this.flashMessage.error({
                                message: "Some error occurred please try again",
                                time: 5000,
                            });
                            break;
                    }
                this.enableSubmission(this.$refs.btnSubmit);
            }
        },
        disableSubmission(btnSubmit) {
            btnSubmit.setAttribute('disabled', 'disabled');
            this.btnSubmitOldHtml = btnSubmit.innerHTML;
            btnSubmit.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait...';
        },
        enableSubmission(btnSubmit) {
            btnSubmit.removeAttribute('disabled');
            btnSubmit.innerHTML = this.btnSubmitOldHtml;
        },
    }
};
</script>
