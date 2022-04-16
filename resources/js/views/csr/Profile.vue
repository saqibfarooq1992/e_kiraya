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
                                    <p class="text-muted font-size-sm">City: {{users.city_name}}</p>
                                     <form v-on:submit.prevent="searchProperty">
                                        <div class="btn-group-toggle" data-toggle="buttons">
                                            <label class="btn btn-outline-success  mt-1">
                                                <input type="radio" name="properties" id="option1" value="properties"  v-model="q" @change='searchProperty()' autocomplete="off">Total Property:10
                                            </label>
                                            <label class="btn btn-outline-info  mt-1">
                                                <input type="radio" name="engaged" id="option1" value="engaged"  v-model="q" @change='searchProperty()' autocomplete="off">Engaged Property:10
                                            </label>
                                            <label class="btn btn-outline-warning  mt-1">
                                                <input type="radio" name="reserved" id="option1" value="reserved"  v-model="q" @change='searchProperty()' autocomplete="off">Reserved Property:10
                                            </label>
                                        </div>  
                                     </form>   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body shadow">
                            <form v-on:submit.prevent="updateLandlordProfile">
                                    <h3 class="text-success font-weight-bold"><u> Account Setting</u></h3>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="avatar-upload" >
                                                <div class="avatar-preview" style="width:100%;height:180px;">
                                                    <img :src="`${$store.state.serverPath}storage/${users.avatar}`" id="imagePreview1"  ref="editAvatarDisplay" style="width:100%;height:170px;border: none;" />
                                                </div>
                                                <div class="avatar-edit">
                                                    <input type='file' v-on:change="editAttachImage" ref="editAvatar" id="imageUpload" accept=".png, .jpg, .jpeg" />
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
                                                <label for="phone" class="p-0 m-0">Phone</label>
                                                <input type="text" v-model="users.phone"  class="form-control" />
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="Email" class="p-0 m-0">Email</label>
                                                <input type="email" class="form-control" v-model="users.email" readonly>
                                            </div>
                                            <div class="form-group">
                                                <label for="City" class="p-0 m-0">City</label>
                                                <select class="form-control mt-2" v-model="users.city_name">
                                                    <option value="">Select City</option>
                                                    <option value="Islamabad">Islamabad</option>
                                                    <option value="Rawalpindi">Rawalpindi</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <button type="submit"  class="btn btn-success p-1 d-block mx-auto mt-3">Save Changes</button>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                    <label for="new_password">New Password</label>
                                                    <div>
                                                        <input type="password" v-model="users.new_password" id="new_password" class="form-control" placeholder="New password" />
                                                        <div class="invalid-feedback" v-if="errors.new_password">{{errors.new_password[0]}}</div>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label for="confirm_password">Confirm Password</label>
                                                <div>
                                                    <input type="password" v-model="users.new_password_confirmation" id="confirm_password" class="form-control" placeholder="Password confirmations" />
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
                                <th scope="col" style="width: 5%;">#</th>
                                <th scope="col">Property</th>
                                <th scope="col">City</th>
                                <th scope="col">property size</th>
                                <th scope="col">Rent Price</th>
                                <th scope="col">Furnished</th>
                                <th scope="col">Rent</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(engage , index) in engaged" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{engage.property_name}}</td>
                                <td>{{engage.city_name}}</td>
                                <td>{{engaged.size}} {{engage.unit}}</td>
                                <td>{{engage.rent_price}}</td>
                                <td>{{engage.furnished}}</td>
                                <td>{{engage.rent}}</td>
                                <td>
                                    <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg" class="btn btn-danger btn-sm" v-on:click="deleteReservedProperty(engage)">
                                        <i class="fas fa-trash"></i>
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-info btn-sm"
                                        v-on:click="paidPropertyRent(engage)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="paid rent"
                                        >
                                        <i class="fas fa-money-check-alt" style="color:white"></i>
                                    </button>
                                    <button
                                        type="button"
                                        class="btn btn-info btn-sm"
                                        v-on:click="unPaidPropertyRent(engage)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="un-paid rent"
                                        >
                                        <i class="fas fa-money-check-alt" style="color:white"></i>
                                    </button>
                                    <router-link :to="{name:'invoice-landlord', params: {id: engage.id}}">
                                        <button
                                            type="button"
                                            class="btn btn-info btn-sm"
                                            data-toggle="tooltip"
                                            data-placement="top"
                                            title="invoice"
                                            >

                                            <i class="fas fa-file" style="color:white"></i>
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
import * as csrService from '../../services/csr_service';
import * as authService from '../../services/auth_service';
import * as propertiesService from '../../services/properties_service';

export default {
    data() {
        return {
            // profile: this.$store.state.profile,
            user:{
                name:'',
                email:'',
                phone:'',
                city:'',
            },
            q:"",
            users:[],
            engaged:[],
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
                    const response = await csrService.getLandlord(to.params.id);
                    console.log(response);
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
        
    },
    methods: {
        updateLandlordProfile: async function() {
            try {
                const formData = new FormData();
                formData.append('name', this.users.name);
                formData.append('phone', this.users.phone);
                formData.append('avater', this.users.avatar);
                formData.append('_method' , 'put');
                const response = await authService.updateLandlordProfile(this.users.id , formData);
                // this.errors = {};
                this.flashMessage.success({
                    message: "Record Successffully Updated",
                    time: 5000,
                });
            } catch (error) {
                this.flashMessage.error({
                    message: "some error occurred!",
                    time: 5000,
                });
                // switch (error.response.status) {
                //     case 422:
                //         this.errors = error.response.data.errors;
                //         break;
                //     case 401:
                //         this.errors = {};
                //         this.flashMessage.error({
                //             message: error.response.data.message,
                //             time: 5000,
                //         });
                //         break;
                //     default:
                //         this.errors = {};
                //         this.flashMessage.error({
                //             message: "Some error occurred please try again",
                //             time: 5000,
                //         });
                //         break;
                // }
            }
        },
        searchProperty:async function () {
                try {
                const q = {
                q: this.q
                };
                const response = await csrService.searchProperty(q , this.users.id);
                this.engaged = response.data;
                } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred",
                        time: 5000
                        });
                    }
        },
        // updateImage: async function (){
        //     try {
        //         const formData = new FormData;
        //         formData.append('avater', this.profile.avatar);
        //         formData.append('_method' , 'put');
        //         const response = await authService.updateImage(formData);
        //         this.errors = {};
        //         this.flashMessage.success({
        //             message: response.data.message,
        //             time: 5000,
        //         });
        //     } catch (error) {
        //         switch (error.response.status) {
        //             case 422:
        //                 this.errors = error.response.data.errors;
        //                 break;
        //             case 401:
        //                 this.errors = {};
        //                 this.flashMessage.error({
        //                     message: error.response.data.message,
        //                     time: 5000,
        //                 });
        //                 break;
        //             default:
        //                 this.errors = {};
        //                 this.flashMessage.error({
        //                     message: "Some error occurred please try again",
        //                     time: 5000,
        //                 });
        //                 break;
        //         }
        //     }
        // },
        // changePassword: async function () {
        //     try {
        //         const response = await authService.changePassword(this.password);
        //         this.errors = {};
        //         this.password = {
        //             current_password: '',
        //             new_password: '',
        //             new_password_confirmation: ''
        //         };

        //         this.flashMessage.success({
        //             message: response.data.message,
        //             time: 5000,
        //         });
        //     } catch (error) {
        //         switch (error.response.status) {
        //             case 422:
        //                 this.errors = error.response.data.errors;
        //                 break;
        //             case 401:
        //                 this.errors = {};
        //                 this.flashMessage.info({
        //                     message: error.response.data.message,
        //                     time: 5000,
        //                 });
        //                 break;
        //             default:
        //                 this.errors = {};
        //                 this.flashMessage.error({
        //                     message: "Some error occurred please try again",
        //                     time: 5000,
        //                 });
        //                 break;
        //         }
        //     }
        // },
        editAttachImage(){
            this.users.avatar = this.$refs.editAvatar.files[0];
            let reader = new FileReader();
            reader.addEventListener('load',function(){
                this.$refs.editAvatarDisplay.src = reader.result;
            }.bind(this),false);
            reader.readAsDataURL(this.users.avatar)
        },
    },
}
</script>