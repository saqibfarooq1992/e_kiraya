<template>
    <div w-100>
        <div class="container-fluid">
            <div class="card-header d-flex bd-highlight mb-3">
                <h6 class="bd-highlight font-weight-bold text-primary">User Profile</h6>
                <div class="ml-auto">
                    <!-- <button class="btn btn-sm btn-primary" @click="toggleTextQuotes">Text Quotes</button> -->
                </div>
            </div>

            <div class="row profile">
                <div class="col-sm-3">
                    <div class="card border-left-success">
                    <div class="card-body">
                        <div class="profile-sidebar">
                        <!-- SIDEBAR USERPIC -->
                        <div class="profile-userpic">
                            <img src=""
                                class="img-responsive" alt="">
                        </div>
                        <!-- END SIDEBAR USERPIC -->
                        <!-- SIDEBAR USER TITLE -->
                        <div class="profile-usertitle">
                            <div class="profile-usertitle-name">
                                Marcus Doe
                            </div>
                            <div class="profile-usertitle-job">
                                Developer
                            </div>
                        </div>
                        <!-- END SIDEBAR USER TITLE -->
                        <!-- SIDEBAR BUTTONS -->
                        <div class="profile-userbuttons">
                            <button type="button" class="btn btn-success btn-sm">Follow</button>
                            <button type="button" class="btn btn-danger btn-sm">Message</button>
                        </div>
                        <!-- END SIDEBAR BUTTONS -->
                        <!-- SIDEBAR MENU -->
                        <div class="profile-item">
                            <ul>
                                <a href="">
                                    <li class="item-hover">
                                        <i class="fas fa-home"></i>
                                        Overview
                                    </li>
                                </a>

                                <li class="item-hover"><i class="fas fa-cog"></i>Activity</li>
                                <li class="item-hover"><i class="fas fa-user"></i>Profile</li>
                            </ul>
                        </div>

                    </div>
                    </div>

                </div>

                </div>
                <div class="col-sm-9">
                    <div class="card border-left-success">
                        <div class="card-body">
                            <form v-on:submit.prevent="onSubmit">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="fname">First Name</label>
                                        <input type="text" v-model="user.fname" class="form-control">
                                        <div class="invalid-feedback" v-if="errors.fname">{{errors.fname[0]}}</div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="lname">Last Name</label>
                                        <input type="text" v-model="user.lname" class="form-control">
                                        <div class="invalid-feedback" v-if="errors.lname">{{errors.lname[0]}}</div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="email">Email</label>
                                        <input type="email" v-model="user.email" class="form-control" disabled>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="contact">Contact</label>
                                        <input type="text" v-model="user.contact" class="form-control">
                                        <div class="invalid-feedback" v-if="errors.content">{{errors.content[0]}}</div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="nationality">Nationality</label>
                                        <input type="text" v-model="user.nationality" class="form-control">
                                        <div class="invalid-feedback" v-if="errors.nationality">{{errors.nationality[0]}}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="dob">DOB</label>
                                        <input type="text" v-model="user.dob" class="form-control">
                                        <div class="invalid-feedback" v-if="errors.dob">{{errors.dob[0]}}</div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="nationality">Picture</label>
                                        <img src="" id="displayImage" ref="displayImage" style="width:100px;">
                                        <input type="file" class="form-control" ref="profile_image" @change="attachImage">
                                        <div class="invalid-feedback" v-if="errors.profile_image">
                                            {{errors.profile_image[0]}}
                                        </div>
                                    </div>
                                    <div class="form-group col-md-6">
                                        <label for="dob">Cover Video</label>
                                        <input type="file" v-on:change="attachVideo" ref="addVideo" class="form-control">
                                        <div class="invalid-feedback" v-if="errors.video">{{errors.video[0]}}</div>
                                    </div>
                                </div>


                                <div class="form-group col-md-6">
                                    <div class="custom-control custom-radio inline-block">
                                        <input type="radio" id="maleCheck" name="account_type" v-model="user.sex" value="male"
                                            class="custom-control-input">
                                        <label class="custom-control-label" for="maleCheck">Male</label>
                                    </div>

                                    <div class="custom-control custom-radio inline-block">
                                        <input type="radio" id="femaleCheck" name="account_type" v-model="user.sex"
                                            value="female" class="custom-control-input">
                                        <label class="custom-control-label" for="femaleCheck">Female</label>
                                    </div>
                                </div>


                                <div class="row">
                                    <div class="form-group col-md-12">
                                        <label for="bio">Bio</label>
                                        <textarea cols="90" rows="3" v-model="user.bio" class="form-control"></textarea>
                                        <div class="invalid-feedback" v-if="errors.bio">{{errors.bio[0]}}</div>
                                    </div>
                                </div>

                                <div class="float-right">
                                    <button type="submit" class="btn btn-success btn-sm">Update Profile</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>


            </div>
        </div>
        <Footer />
    </div>
</template>

<script>
    import * as userProfileService from '../../services/user_profile_service';

    export default {
        name: "Button",
        data() {
            return {
                user: {
                    fname: '',
                    lname: '',
                    contact: '',
                    dob: '',
                    nationality: '',
                    bio: '',
                    sex: '',
                    profile_image: '',
                    video: ''
                },
                errors: {},
                user: []
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            getData: async function () {
                try {
                    const response = await userProfileService.getData();
                    this.user = response.data;
                    console.log(this.user);
                } catch (error) {
                    alert('some error occure');
                }
            },
            onSubmit: async function () {
                let formData = new FormData();
                formData.append('profile_image', this.user.profile_image);
                formData.append('video', this.user.video);
                formData.append('fname', this.user.fname);
                formData.append('lname', this.user.lname);
                formData.append('contact', this.user.contact);
                formData.append('dob', this.user.dob);
                formData.append('nationality', this.user.nationality);
                formData.append('bio', this.user.bio);
                formData.append('sex', this.user.sex);

                try {
                    await userProfileService.updateProfile(formData);
                    this.errors = '';
                    this.flashMessage.success({
                        message: 'Profile is created successfully!',
                        time: 8000
                    });
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.flashMessage.info({
                                message: error.response.data.message,
                                time: 5000
                            });
                            break;
                        default:
                            this.flashMessage.error({
                                message: "Some error occurred please try again",
                                time: 5000
                            });
                            break;
                    }
                }

            },
            attachImage: function () {
                this.user.profile_image = this.$refs.profile_image.files[0];
                let reader = new FileReader();
                reader.addEventListener('load', function () {
                    this.$refs.displayImage.src = reader.result;
                }.bind(this), false);
                reader.readAsDataURL(this.user.profile_image);
            },
            attachVideo() {
                this.user.video = this.$refs.addVideo.files[0];
                let reader = new FileReader();
                reader.readAsDataURL(this.user.video);
            },
        }
    }

</script>

<style scoped>
    .profile-item {
        margin-top: 30px;
    }

    .profile-item ul {
        list-style: none;
    }

    .profile-item ul li i {
        padding: 10px;
    }

    .profile-usermenu ul {
        padding: 0px !important;
    }

    .profile-item ul li {
        padding: 10px;
    }

    .item-hover:hover {
        background-color: lightblue;
    }

    .profile-item a {
        color: black
    }

    body {
        background: #F1F3FA;
    }

    /* Profile container */
    .profile {
        margin: 20px 0;
    }

    /* Profile sidebar */
    .profile-sidebar {
        padding: 20px 0 10px 0;
        background: #fff;
    }

    .profile-userpic img {
        float: none;
        margin: 0 auto;
        width: 50%;
        height: 50%;
        -webkit-border-radius: 50% !important;
        -moz-border-radius: 50% !important;
        border-radius: 50% !important;
    }

    .profile-usertitle {
        text-align: center;
        margin-top: 20px;
    }

    .profile-usertitle-name {
        color: #5a7391;
        font-size: 16px;
        font-weight: 600;
        margin-bottom: 7px;
    }

    .profile-usertitle-job {
        text-transform: uppercase;
        color: #5b9bd1;
        font-size: 12px;
        font-weight: 600;
        margin-bottom: 15px;
    }

    .profile-userbuttons {
        text-align: center;
        margin-top: 10px;
    }

    .profile-userbuttons .btn {
        text-transform: uppercase;
        font-size: 11px;
        font-weight: 600;
        padding: 6px 15px;
        margin-right: 5px;
    }

    .profile-userbuttons .btn:last-child {
        margin-right: 0px;
    }

    .profile-usermenu {
        margin-top: 30px;
    }

    /* Profile Content */
    .profile-content {
        padding: 20px;
        background: #fff;
        min-height: 460px;
    }

</style>
