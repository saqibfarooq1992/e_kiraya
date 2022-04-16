<template>
    <main>
        <Header />
        <section id="main" class="clearfix user-page">
            <div class="container">
                <div class="row text-center">
                    <div class="col-md-8 mx-auto shadow border">
                        <div class="user-account">
                            <h2>Create Eko Account</h2>
                            <form v-on:submit.prevent="onSubmit">
                                    <div v-if="user.avater.name">
                                        <img src="images/img_avatar.png" alt="Avatar" ref="newAvaterImageDisplay" style="width:100px; border-radius: 50%; margin-top: -47px;">
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6" >
                                             <div class="form-group">
                                                <input type="text" class="form-control" v-model="user.Name" placeholder="Name" >
                                                <div class="invalid-feedback" v-if="errors.Name">{{errors.Name[0]}}</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6" >
                                            <div class="form-group">
                                                <input type="email" class="form-control" v-model="user.email" placeholder="Email Id">
                                                <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6" >
                                             <div class="form-group">
                                                <div class="relative">
                                                    <input
                                                        type="password"
                                                        v-model="user.password"
                                                        v-on:keyup="validatePassword"
                                                        ref="passwordField"
                                                        class="form-control form-control-user"
                                                        placeholder="Password" />
                                                    <button class="show-password" type="button" v-on:click="togglePasswordShow">
                                                        <span class="fa fa-eye" ref="passwordIcon"></span>
                                                    </button>
                                                    <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                                    <i v-if="user.password.length" ref="passwordStrength" class="password-strength"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6" >
                                             <div class="form-group">
                                                <input type="password" class="form-control" v-model="user.password_confirmation" placeholder="Confirm Password">
                                                <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 col-md-6 col-sm-6" >
                                              <div class="input-group mb-3">
                                                <div class="input-group-prepend ">
                                                    <span class="input-group-text" id="basic-addon1"><img src="images/bg/pakflag.png"></span>
                                                </div>
                                                <input-mask type="text" class="form-control" v-model="user.phone" mask="9999-9999999" maskChar="" placeholder="Phone No" aria-label="Phone" aria-describedby="basic-addon1"></input-mask>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6" >
                                            <select class="form-control" v-model="user.role">
                                                <option value="">Select Who are you</option>
                                                <option value="landloard">Landlord</option>
                                                <option value="tenant">Tenant</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-6 col-sm-6 col-md-6">
                                            <input type="text" class="form-control" v-model="user.city_name" placeholder="Enter you city">
                                            <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>


                                        </div>
                                        <div class="col-lg-6 col-sm-6 col-md-6">
                                            <div class="form-group">
                                            <label class="float-left text-success ">Image ....(optional)</label>
                                                <input type="file" class="form-control"  name="avatar" id="Avatar" v-on:change="attachImage" ref="avaterImage">
                                                 <div class="invalid-feedback" v-if="errors.avatar">{{errors.avatar[0]}}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div >
                                        <input type="checkbox" v-model="user.terms"  id="signing">
                                        <label for="signing" class="text-success">By signing up for an account you agree to our Terms and Conditions</label>
                                        <router-link to="/faqs">
                                            Readmore
                                        </router-link>
                                    </div>
                                    <button type="submit" class="btn" ref="btnSubmit">Registration</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
	    </section>
        <Footer/>
    </main>
</template>

<style scoped>
    .bg-image {
        background-position: center !important;
        background-size: cover !important;
    }
   .selectcity{
       margin-top: 35px;
   }
    .relative {
    position: relative;
    }

    .password-strength {
    position: absolute;
    right: 0;
    top: -13px;
    font-size: 10px;
    }

    .show-password {
    border: 0;
    font-size: 16px;
    color: #4e73df;
    background-color: transparent;
    position: absolute;
    top: 20px;
    right: 5px;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);
    }
    .show-password:focus {
    outline: 0;
    }
    @media only screen and (max-width: 600px) {
   .selectcity{
       margin-top: 10px;
   }
}
</style>

<script>
    import * as auth from "../../services/auth_service";
    import * as mainService from "../../services/main_service";
    import Header from '../../components/user/Header.vue';
    import Footer from '../../components/user/Footer.vue';
    export default {
        name: "register",
        components: {
            Header,
            Footer
        },
        data() {
            return {
                cities:[],
                user: {
                    Name: '',
                    avater:'',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    phone:'',
                    // role: 'student',
                    role: '',
                    city_name:'',
                    terms: '',
                    signing:''
                },
                length:'',
                errors: {},
                message: '',
                btnSubmitOldHtml: '',
            };
        },
        mounted() {
                this.getCities();
            },
        methods: {
            getCities:async function(){
                try {
                    const response = await mainService.getCities();
                    this.cities = response.data;
                } catch (error) {
                        this.flashMessage.error({
                            message: "Some error occurred during geting categories",
                            time:5000
                        });
                    }
            },
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
            onSubmit: async function() {
                this.disableSubmission(this.$refs.btnSubmit);
                const formData = new FormData();
                formData.append('Name', this.user.Name);
                formData.append('email', this.user.email);
                formData.append('password', this.user.password);
                formData.append('password_confirmation', this.user.password_confirmation);
                formData.append('phone', this.user.phone);
                formData.append('role', this.user.role);
                formData.append('city_name', this.user.city_name);
                formData.append('terms', this.user.terms);
                formData.append('avater', this.user.avater);
                // formData.append('_method' , 'post');
                try {
                  await auth.register(formData);
                    this.errors = {};
                    this.$store.state.commonMessage = "registration";
                    this.$router.push({ name: "login" });
                    this.flashMessage.success({
                        message: "Please wait for Approval",
                        time: 500,
                    });
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
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
            attachImage(){
                this.user.avater = this.$refs.avaterImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load',function(){
                    this.$refs.newAvaterImageDisplay.src = reader.result;
                }.bind(this),false);
                reader.readAsDataURL(this.user.avater);
            },
        }
    };
</script>
