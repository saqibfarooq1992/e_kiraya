<template>
    <div>
        <div class="container-fluid">
            <div class="row gutters-sm">
                <div class="col-md-4 mb-3 ">
                    <div class="card">
                        <div class="card-body shadow">
                            <div class="d-flex flex-column align-items-center text-center">
                                <img :src="`${$store.state.serverPath}storage/${users.avatar}`" alt="Admin" class="profilecircleimage">
                                <div class="mt-3">
                                    <h4>{{users.name}}</h4>
                                    <p class="text-secondary mb-1">Role: {{users.role}}</p>
                                    <p class="text-muted font-size-sm">City: {{users.cities}}</p>
                                     <form v-on:submit.prevent="searchInvoiceQuery">
                                        <label class="btn btn-outline-primary m-1">
                                            <input type="radio" value="engaged"  style="visibility:hidden"   v-model="q" @change='searchProperty(users)' id="value1">Engaged Property:10
                                        </label>
                                        <label class="btn btn-outline-success  m-1">
                                            <input type="radio" value="un-paid" style="visibility:hidden" v-model="q" @change='searchProperty(users)' id="value2">Un Paid Property:5
                                        </label>
                                        <label class="btn btn-outline-info m-1">
                                            <input type="radio" value="paid" style="visibility:hidden" v-model="q" @change='searchProperty(users)' id="value3">Paid Property:5
                                        </label>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                    <div class="card mb-3">
                        <div class="card-body shadow">
                            <form v-on:submit.prevent="updateLandlordProfile" enctype="multipart/form-data">
                                <h3 class="text-success font-weight-bold"><u> Account Setting</u></h3>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="avatar-upload" >
                                            <div class="avatar-preview" style="width:100%;height:170px;">
                                                    <img :src="`${$store.state.serverPath}storage/${users.avatar}`"  id="imagePreview1"  ref="editAvatarDisplay" style="width:100%;height:170px;border: none;" />
                                            </div>
                                            <div class="avatar-edit">
                                                <input type='file' v-on:change="editAttachImageProfile" ref="editAvatar" id="imageUpload" accept=".png, .jpg, .jpeg" />
                                                <label for="imageUpload"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="name" class="p-0 m-0">Name</label>
                                            <input type="text" v-model="users.name"  class="form-control" placeholder="Your full name" />
                                        </div>
                                        <div class="form-group">
                                            <label for="name" class="p-0 m-0">Phone</label>
                                            <input type="text" v-model="users.phone"  class="form-control" />
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="Email" class="p-0 m-0">Email</label>
                                            <input type="text" v-model="users.email" class="form-control" readonly>
                                        </div>
                                        <div class="form-group">
                                            <label for="City" class="p-0 m-0">City</label>
                                            <input type="text" v-model="users.cities"  class="form-control" />

                                            <!-- <select class="form-control mt-1" v-model="users.city_id">
                                                <option value="">Select City</option>
                                                <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                            </select> -->
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <button type="btn" class="btn btn-success p-1 d-block mx-auto mt-3">Save Changes</button>
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
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-body">
            <div class="table-responsive">
                <table class="table table-hover" style="width:100%">
                    <thead>
                       <tr>
                            <th scope="col">#</th>
                            <th scope="col">Landlord</th>
                            <th scope="col">Phone</th>
                            <th scope="col">City</th>
                            <th scope="col">Property</th>
                            <th scope="col">Area Size</th>
                            <th scope="col">Rent Price</th>
                            <th scope="col">Status</th>
                            <th scope="col">React</th>
                            <th scope="col">Rent</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody v-for="(property , index) in properties" :key="index">
                        <tr>
                            <th scope="row">{{index+1}}</th>
                            <router-link :to="{name:'profile-admin', params: {id: property.user_id}}">
                                <td>{{property.name}}</td>
                            </router-link>
                            <td>{{property.phone}}</td>
                            <td>{{property.city_name}}</td>
                            <td>{{property.property_name}}</td>
                            <td>{{property.size}} {{property.unit}}</td>
                            <td>{{property.rent_price}}</td>
                            <td>{{property.status}}</td>
                            <td>
                                <i class="fa fa-heart text-danger" > {{property.favorite_count}}</i>
                                <i class="fa fa-thumbs-up text-success" > {{property.like_count}}</i>
                                <i class="fa fa-eye text-info" > {{property.seen_count}}</i>
                            </td>
                            <td>{{property.rent}}</td>
                            <td>
                                <button
                                    type="button"
                                    data-toggle="modal"
                                    data-target=".bd-example-modal-lg"
                                    class="btn btn-danger btn-sm"
                                    v-on:click="deleteProperty(property)"
                                >
                                    <i class="fas fa-trash"></i>
                                </button>
                                <button
                                    type="button"
                                    class="btn btn-success btn-sm"
                                    v-on:click="editProperty(property)"
                                >
                                    <i class="fas fa-pencil-alt"></i>
                                </button>
                                <router-link :to="{name:'show-admin', params: {id: property.id}}">
                                    <button
                                        type="button"
                                        class="btn btn-info btn-sm"
                                        >
                                        <i class="fas fa-eye" style="color:white"></i>
                                    </button>
                                </router-link>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import * as userService from '../../services/user_service';
import * as authService from '../../services/auth_service';
import * as propertiesService from '../../services/properties_service';
import * as cityService from "../../services/city_service";
import * as adminService from "../../services/admin_service";


export default {
    data() {
        return {
            profile: this.$store.state.profile,
            user:{
                name:'',
                email:'',
                phone:'',
                avatar:'',
                cities:'',
            },
            q:"",
            qu:"",
            invoices:[],
            cities:[],
            users:[],
            engaged:[],
            properties:[],
            password: {
                current_password: '',
                new_password: '',
                new_password_confirmation: ''
            },
            verify_password: '',
            errors:{},
            errors:[],
        }

    },
    beforeRouteEnter: async function(to, from, next) {
            try {
                    const response = await userService.getLandlord(to.params.id);
                    if (!response) {
                        next('/404');
                    }
                    next(vm => {
                        vm.users = response.data;
                    });
                    next();
                    } catch (error) {
                    next('/404');
                    }
            },

    mounted() {
        this.getCity();
    },
    methods: {
        getCity:async function() {
            try {
                const response = await cityService.getCity();
                this.cities = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: "Some error occurred!",
                    time: 5000,
                });
            }
        },
        updateLandlordProfile: async function() {
                    try {
                        const formData = new FormData();
                        formData.append('name', this.users.name);
                        formData.append('phone', this.users.phone);
                        formData.append('avatar', this.users.avatar);
                        formData.append('cities', this.users.cities);
                        formData.append('_method' , 'put');
                        const response = await authService.updateLandlordProfile(this.users.id , formData);
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
        updateImage: async function (){
                    try {
                        const formData = new FormData;
                        formData.append('avater', this.profile.avatar);
                        formData.append('_method' , 'put');
                        const response = await authService.updateImage(formData);
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
        editAttachImageProfile(){
                    this.users.avatar = this.$refs.editAvatar.files[0];
                    let reader = new FileReader();
                    reader.addEventListener('load',function(){
                        this.$refs.editAvatarDisplay.src = reader.result;
                    }.bind(this),false);
                    reader.readAsDataURL(this.users.avatar)
        },
        searchInvoiceQuery:async function(){
            try {
                const invoiceQuery = {
                invoiceQuery: this.invoiceQuery
                };
                const response = await adminService.searchInvoiceQuery(invoiceQuery);
                this.engaged = response.data;
            }   catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred",
                        time: 5000
                        });
                }
        },
        searchProperty:async function (item) {
            try {
                const q = {
                q: this.q
                };
                const response = await propertiesService.searchProperty(q , item.id);
                console.log(response);
                this.properties = response.data.data;
            } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occurred",
                    time: 5000
                    });
                }
        },


    },
}
</script>
