
<template>
    <div class="container-fluid">
        <div class="card shadow mb-4">
            <div class="card-header d-flex bd-highlight">
                <h6 class="bd-highlight font-weight-bold text-primary">Profile/Setting</h6>
            </div>
        </div>

        <div class="row">
            <div class="col-md-4">
                <div class="card">
                <h3 class="bg-success p-2 text-center text-white">Change Profile Picture</h3>
                    <div class="card-body">
                        <form>
                            <div class="row">
                                        <div class="col-md-6 mx-auto ">
                                        <div class="avatar-upload" >
                                            <div class="avatar-preview" style="width:100%;height:180px;">
                                                    <img :src="`${$store.state.serverPath}storage/${profile.avatar}`" id="imagePreview1"  ref="editAvatarDisplay" style="width:100%;height:170px;border: none;" />
                                            </div>
                                            <div class="avatar-edit">
                                                <input type='file' v-on:change="editAttachImage" ref="editAvatar" id="imageUpload" accept=".png, .jpg, .jpeg" />
                                                <label for="imageUpload"></label>
                                            </div>
                                        </div>
                                        </div>
                            </div>
                            <button type="submit" class="btn btn-primary d-block mx-auto mt-2"><span class="ti-check"></span>Change</button>
                         </form>
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="card-body">
                        <h3 class="text-success">Update Profile Information</h3>
                        <hr>
                        <form v-on:submit.prevent="updateProfile">
                            <div class="row">
                                <div class="col-md-4">
                                      <div class="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" v-model="profile.name" id="name" class="form-control" placeholder="Your full name" />
                                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                                     </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="name">Phone</label>
                                        <div>
                                            <input type="text" v-model="profile.phone" id="name" class="form-control" />
                                            <div class="invalid-feedback" v-if="errors.phone">{{errors.phone[0]}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="name">Email</label>
                                        <div>
                                            <input type="email" v-model="profile.email" id="name" class="form-control" readonly />
                                            <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             <div>
                                <button type="submit" class="btn btn-primary"><span class="ti-check"></span>Update</button>
                            </div>
                        </form>
                        <hr>
                        <h3 class="mt-3 text-success">Profile Security</h3>
                        <form v-on:submit.prevent="changePassword">
                            <div class="row">
                                <div class="col-md-4">
                                     <div class="form-group">
                                        <label for="current_password">Old Password</label>
                                        <div>
                                            <input type="password" v-model="password.current_password" id="current_password" class="form-control" placeholder="Enter your Password" />
                                            <div class="invalid-feedback" v-if="errors.current_password">{{errors.current_password[0]}}</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                      <div class="form-group">
                                            <label for="new_password">New Password</label>
                                            <div>
                                                <input type="password" v-model="password.new_password" id="new_password" class="form-control" placeholder="New password" />
                                                <div class="invalid-feedback" v-if="errors.new_password">{{errors.new_password[0]}}</div>
                                            </div>
                                     </div>
                                </div>
                                 <div class="col-md-4">
                                    <div class="form-group">
                                        <label for="confirm_password">Confirm Password</label>
                                        <div>
                                            <input type="password" v-model="password.new_password_confirmation" id="confirm_password" class="form-control" placeholder="Password confirmations" />
                                            <div class="invalid-feedback" v-if="errors.new_password_confirmation">{{errors.new_password_confirmation[0]}}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-primary"><span class="ti-check"></span>Change</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import * as authService from '../services/auth_service';
    export default {
        name: 'Profile',
        data() {
            return {
                profile: this.$store.state.profile,
                password: {
                    current_password: '',
                    new_password: '',
                    new_password_confirmation: ''
                },
                verify_password: '',

                errors:{},
            }
        },
        methods: {
            updateProfile: async function() {
                try {
                    const formData = new FormData();
                    formData.append('name', this.profile.name);
                    formData.append('phone', this.profile.phone);
                    formData.append('avater', this.profile.avatar);
                    formData.append('_method' , 'put');
                    const response = await authService.updateProfile(formData);
                    this.errors = {};

                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000,
                    });
                } catch (error) {
                    switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        case 401:
                            this.errors = {};
                            this.flashMessage.error({
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
                }
            },
            changePassword: async function () {
                try {
                    const response = await authService.changePassword(this.password);
                    this.errors = {};
                    this.password = {
                        current_password: '',
                        new_password: '',
                        new_password_confirmation: ''
                    };

                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000,
                    });
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
                }
            },
            editAttachImage(){
                this.profile.avatar = this.$refs.editAvatar.files[0];
                let reader = new FileReader();
                reader.addEventListener('load',function(){
                    this.$refs.editAvatarDisplay.src = reader.result;
                }.bind(this),false);
                reader.readAsDataURL(this.profile.avatar)
            },
        }
    }
</script>

<style scoped>

</style>
