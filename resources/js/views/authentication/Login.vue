<template>
    <main>
        <Header />
            <section id="main" class="clearfix user-page">
                <div class="container">
                    <div class="row text-center">
                        <!-- user-login -->
                        <div class="col-md-6 mx-auto shadow border">
                            <div class="user-account">
                                <h2 class="loginhead">Login Form</h2>
                                <!-- form -->
                                <form v-on:submit.prevent="onSubmit">
                                    <div class="form-group">
                                        <input type="text" v-model="user.email" class="form-control"  placeholder="Enter Your Email Address" >
                                        <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" v-model="user.password" class="form-control" placeholder="Password" >
                                        <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                    </div>
                                    <button type="submit" ref="btnSubmit" class="btn">Login</button>
                                    <div class="remember">
                                     <div class="row mt-4">
                                     <div class="col-md-6 mx-auto">
                                            <div class="form-group">
                                            <div class="custom-control custom-checkbox small">
                                                <input
                                                    type="checkbox"
                                                    v-model="user.rememberMe"
                                                    class="custom-control-input"
                                                    id="rememberMe" />
                                                <label class="custom-control-label text-success" for="rememberMe">Remember Me</label>
                                            </div>
                                        </div>
                                     </div>
                                     <div class="col-md-6 mx-auto">
                                         <div class="forgot-password ">
                                            <router-link to="/reset-password-request" class="text-success">Forgot password</router-link>
                                        </div>
                                     </div>
                                     </div>
                                    </div>
                                </form>
                            </div>
                            <router-link to="/register" class="btn-primary">Create a New Account</router-link>
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
        name: "Login",
        components: {
            Header,
            Footer
        },
        data() {
            return {
                user: {
                    email: '',
                    password: '',
                    remember_me: false
                },

                errors: {},
                message: ''
            };
        },
        methods: {
            onSubmit: async function() {
                this.disableSubmission(this.$refs.btnSubmit);

                 try {
                    const response = await auth.login(this.user);
                    if (response.data.user.role === 'admin' && response.data.user.status === 'approved'){
                        this.$router.push('/admin');
                    }
                    if (response.data.user.role === 'manager' && response.data.user.status === 'approved') {
                        this.$router.push('/manager');
                    }
                    if (response.data.user.role === 'csr' && response.data.user.status === 'approved') {
                        this.$router.push('/csr');
                    }
                    if (response.data.user.role === 'employee' && response.data.user.status === 'approved') {
                        this.$router.push('/employee');
                    }
                    if (response.data.user.role === 'landloard' && response.data.user.status === 'approved') {
                        this.$router.push('/landloard');
                    }
                    if (response.data.user.role === 'tenant' && response.data.user.status === 'approved') {
                        this.$router.push('/');
                    }

                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.errors = {};
                            this.flashMessage.info({
                                message: error.response.data.message,
                                time: 5000,
                            });
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
<style scoped>
.loginhead{
    letter-spacing: 0.15rem;
}
</style>
