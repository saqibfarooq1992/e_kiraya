<template>
<main>
    <Header />
    <section id="main" class="clearfix user-page">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-6 mx-auto shadow border">
                    <div class="user-account">
                        <h2>Forgot Your Password?</h2>
                        <p class="mb-4">We get it, stuff happens. Just enter your email address below and we'll send you a link to reset your password!</p>
                        <form v-on:submit.prevent="onSubmit">
                            <div class="form-group">
                                <input type="email" v-model="user.email" class="form-control" placeholder="Enter Your Email" >
                                <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                            </div>
                            <button type="submit" ref="btnSubmit" class="btn">Request Password</button>
                        </form>
                    </div>
                    <a href="/register" class="btn-primary">Create a New Account</a>
                    <a href="/login" class="btn-primary">Already have an account? Login!</a>
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
    name: 'resetPasswordRequest',
    components:{
        Header,
        Footer
    },
    data() {
        return {
            email: '',
            errors: {},
            user:{
                email:'',
            },
            btnSubmitOldHtml: '',
        }
    },

    methods: {
        // onSubmit: async function() {
        //     this.disableSubmission(this.$refs.btnSubmit);

        //     try {
        //         const request = {
        //             email: this.email
        //         };

        //         await auth.resetPasswordRequest(request);
        //         this.errors = {};
        //         this.$store.state.commonMessage = 'reset_password_request';
        //         this.$store.state.commonVariable = this.email;
        //         this.$router.push('/reset-password');
        //     } catch (error) {
        //         switch (error.response.status) {
        //             case 422:
        //                 this.errors = error.response.data.errors;
        //                 break;
        //             case 401:
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
        onSubmit:async function ()
        {
                try {
                    this.disableSubmission(this.$refs.btnSubmit);
                    this.errors = {};
                    const response =  await auth.resetPasswordRequest(this.user);
                    this.flashMessage.success({
                                message: response.data.message,
                                time: 5000,
                            });
                    this.$router.push({name:'reset-password' , params:{ email: this.user.email }})
                } catch (error) {
                    switch (error.response.status) {
                            case 422:
                                this.errors = error.response.data.errors;
                                break;
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
