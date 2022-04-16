<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-info">Adding Staff</h6>
                    <div class="ml-auto">
                        <button id="show-btn" @click="showModal"
                            class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                            <span class="icon text-white-50">
                                <i class="far fa-plus-square"></i>
                            </span>
                            <span class="text-white">Add Staff</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <b-modal ref="managerModal" hide-footer size="lg" title="Add Staff">
                    <form v-on:submit.prevent="createManager">
                        <div v-if="user.avatar.name">
                            <img src="images/img_avatar.png" alt="Avatar" ref="newAvaterImageDisplay" style="width:100px; border-radius: 50%; margin-top: -10px; margin-left: 328px;">
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Full Name</label>
                                    <input type="text" class="form-control"
                                        v-model="user.name"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Full name" />
                                    <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                 <div class="form-group">
                                        <label for="exampleFormControlInput1">Email</label>
                                        <input type="text" class="form-control"
                                            v-model="user.email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter Email" />
                                        <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                  </div>
                            </div>
                        </div>
                       <div class="row">
                           <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Password</label>
                                <input type="password" class="form-control"
                                    v-model="user.password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password" />
                                <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                            </div>
                           </div>
                           <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Confirm Password</label>
                                    <input type="text" class="form-control"
                                        v-model="user.password_confirmation"
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        placeholder="Enter Confirm Password" />
                                    <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                </div>
                           </div>
                       </div>
                       <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input-mask type="text" mask="9999-9999999" mask-char="" class="form-control"
                                    v-model="user.phone"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter Phone Number" ></input-mask>
                                <div class="invalid-feedback" v-if="errors.phone">{{errors.phone[0]}}</div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                           <div class="form-group">
                                <label for="exampleFormControlInput1">Select Role</label>
                                <select class="form-control" v-model="user.role">
                                    <option value="">Select Role</option>
                                    <option value="manager">Manager</option>
                                    <option value="employee">Employee</option>
                                    <option value="csr">Customer Service Representative</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.role">{{errors.role[0]}}</div>
                            </div>
                        </div>
                       </div>
                       <div class="row">
                            <div class="col-lg-6 col-sm-6 col-md-6">
                                <label for="exampleFormControlInput1">City</label>
                                <select class="form-control" v-model="user.city_id">
                                    <option value="">Select City</option>
                                    <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.city_id">{{errors.city_id[0]}}</div>
                            </div>
                            <div class="col-lg-6 col-sm-6 col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Avatar</label>
                                    <input type="file" class="form-control"  name="avatar" id="Avatar" v-on:change="attachImage" ref="avaterImage">
                                    <div class="invalid-feedback" v-if="errors.avatar">{{errors.avatar[0]}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success" style="width: 300px; margin-left: 69px;">Save Staff</button>
                        </div>
                    </form>
                </b-modal>
            </div>
             <div>
                <b-modal ref="editManager" hide-footer size="lg" title="Edit Manager">
                    <form v-on:submit.prevent="updateUser">
                        <span>
                            <img :src="`${$store.state.serverPath}storage/${editManagerData.avatar}`" alt="Image1" ref="editAvatarImageDisplay" class="img-thumbnail" style="width:100px; border-radius: 50%; margin-top: -10px; margin-left: 328px; height: 100px;">
                        </span>
                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Full Name</label>
                                    <input type="text" class="form-control"
                                        v-model="editManagerData.name"
                                        id="name"
                                        name="name"
                                        placeholder="Enter Full name" />
                                    <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                 <div class="form-group">
                                        <label for="exampleFormControlInput1">Email</label>
                                        <input type="text" class="form-control"
                                            v-model="editManagerData.email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter Email" />
                                        <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                  </div>
                            </div>
                        </div>
                       <div class="row">
                           <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Password</label>
                                <input type="password" class="form-control"
                                    v-model="editManagerData.password"
                                    id="password"
                                    name="password"
                                    placeholder="Enter Password" />
                                <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                            </div>
                           </div>
                           <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Confirm Password</label>
                                    <input type="password" class="form-control"
                                        v-model="editManagerData.password_confirmation"
                                        id="password_confirmation"
                                        name="password_confirmation"
                                        placeholder="Enter Confirm Password" />
                                    <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                </div>
                           </div>
                       </div>
                       <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Phone</label>
                                <input type="text" class="form-control"
                                    v-model="editManagerData.phone"
                                    id="phone"
                                    name="phone"
                                    placeholder="Enter Phone Number" />
                                <div class="invalid-feedback" v-if="errors.phone">{{errors.phone[0]}}</div>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-6">
                             <div class="form-group">
                                <label for="exampleFormControlInput1">Rule</label>
                                <input type="text" class="form-control"
                                    v-model="editManagerData.role"
                                    id="role"
                                    name="role"/>
                                <div class="invalid-feedback" v-if="errors.role">{{errors.role[0]}}</div>
                            </div>
                        </div>
                       </div>
                       <div class="row">
                           <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select your City</label>
                                    <select class="form-control" id="exampleFormControlSelect1" v-model="editManagerData.city_id">
                                    <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                    </select>
                                </div>
                           </div>
                           <div class="col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Avatar</label>
                                        <input type="file" class="form-control-file" v-on:change="editAttachImage" ref="editAvatarImage" id="exampleFormControlFile1" style="width:103%">
                                    <div class="invalid-feedback" v-if="errors.avatar">{{errors.avatar[0]}}</div>
                                </div>
                           </div>
                       </div>
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1" v-model="editManagerData.terms" >
                            <label class="form-check-label" for="exampleCheck1">Terms</label>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success" style="margin-left: 255px; width: 221px;">Update Manager</button>
                        </div>
                    </form>
                </b-modal>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchUser">
                        <i class="fas fa-search" aria-hidden="true"></i>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                            aria-label="Search" v-model="query" v-on:keyup="searchUser">
                    </form>
                     <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Image</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(user , index) in users" :key="index">
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{user.name}}</td>
                                    <td>{{user.email}}</td>
                                    <td>{{user.phone}}</td>
                                    <td>{{user.city_name}}</td>
                                    <td>{{user.role}}</td>
                                    <td>
                                        <img :src="`${$store.state.serverPath}storage/${user.avatar}`"
                                                style="width:50px; border-radius: 50%; height: 50px;">
                                    </td>
                                    <td>
                                        <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteUser(user)">
                                            <i class="fas fa-trash"></i>Delete
                                        </button>
                                        <!-- <button type="button" class="btn btn-info btn-sm" v-if="user.role == 'manager'" v-on:click="approvedUser(user)">
                                            <i class="fas fa-check"></i>Approved
                                        </button> -->
                                        <button type="button"  class="btn btn-success btn-sm" v-on:click="editUsers(user)">
                                            <i class="fas fa-pencil-alt"></i>Edit
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                     </div>

                </div>
                <div v-show="moreExists">
                    <button type="button" class="btn btn-info btn-sm"  v-on:click="loadUser" >
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    import * as userService from "../../services/user_service";
    export default {
        name: "User",
        data() {
            return {
              query:"",
              users: [],
              cities:[],
              editManagerData: {},
            user: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                phone:"",
                role:"",
                city_id: "" ,
                avatar:''
            },
              moreExists: false,
              nextPage: 0,
              errors: {}
            };
        },
          mounted() {
            this.getUser();
            this.getCity();
          },
        methods: {
            createManager:async function(){
                const formData = new FormData();
                formData.append('name', this.user.name);
                formData.append('email', this.user.email);
                formData.append('password', this.user.password);
                formData.append('password_confirmation', this.user.password_confirmation);
                formData.append('phone', this.user.phone);
                formData.append('role', this.user.role);
                formData.append('city_id', this.user.city_id);
                formData.append('avatar', this.user.avatar);
                try {
                    const response = await userService.createManager(formData);
                    this.users.unshift(response.data);
                    this.hideModel;
                        this.flashMessage.success({
                            message: 'User Added Successfuly!',
                            time:5000,
                    });
                    this.user.name= "";
                    this.user.email="";
                    this.user.password="";
                    this.user.password_confirmation= "";
                    this.user.phone="";
                    this.user.role="";
                    this.user.city_id="";
                } catch (error) {
                     switch(error.response.status){
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                            default:

                        this.flashMessage.error({
                            message: 'Some error occured !',
                            time:500
                        });
                            break;
                    }
                }
            },
            getUser:async function(){
                try {
                    const response = await userService.getUser();
                    this.users = response.data.data;
                    if(response.data.current_page < response.data.last_page)
                        {
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }
                        else{
                            this.moreExists = false;
                        }
                    } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            deleteUser:async function (user){
                if(!window.confirm("Are you sure you want to delete this User")){
                    return;
                }
                try {
                    await userService.deleteUser(user.id);
                    this.users = this.users.filter(obj => {
                                return obj.id !=user.id;
                        });
                        this.flashMessage.success({
                            message: 'User deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            getCity:async function(){
                try {
                    const response = await userService.getCity();
                    this.cities = response.data;
                } catch (error) {
                   this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            editUsers: async function(users) {
                this.editManagerData = {...users};
                this.$refs.editManager.show();
            },
            updateUser: async function (){
                try {
                    const response = await userService.updateUser(this.editManagerData.id , this.editManagerData);
                    this.users.map(users=>{
                            if(users.id == response.data.id){
                                for(let key in response.data){
                                    users[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'User Updated successfully!',
                        time: 5000
                    });
                } catch (error) {
                    switch(error.response.status){
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                            default:
                        this.flashMessage.error({
                            message: 'Some error occured !',
                            time:500
                        });
                            break;
                    }
                }
            },
            showModal() {
                this.$refs.managerModal.show();
            },
            hideModal() {
                this.$refs.managerModal.hide();
            },
            hideEditModal(){
              this.$refs.editManager.hide();
            },
            loadUser:async function() {
                try {
                        const response =  await userService.loadUser(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.users.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred during load more users",
                        time:5000
                    });
                }
            },
            searchUser:async function () {
                try {
                    const query = {
                    query: this.query
                    };
                    const response = await userService.searchUser(query);
                    this.users = response.data;
                } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred",
                        time: 5000
                        });
                    }
            },
            approvedUser:async function(user){
                if(!window.confirm("Are you sure you want to Approve this User")){
                    return;
                }
                try {
                    await userService.approvedUser(user.id);
                    this.users = this.users.filter(obj => {
                                return obj.id !=user.id;
                        });
                        this.flashMessage.success({
                        message: 'User Approved Successfuly!',
                        time:5000,
                });

                } catch (error) {
                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time: 5000
                    });
                }

            },
            attachImage(){
                this.user.avatar = this.$refs.avaterImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load',function(){
                    this.$refs.newAvaterImageDisplay.src = reader.result;
                }.bind(this),false);
                reader.readAsDataURL(this.user.avatar);
            },
            editAttachImage(){
                this.editManagerData.avatar = this.$refs.editAvatarImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load',function(){
                    this.$refs.editAvatarImageDisplay.src = reader.result;
                }.bind(this),false);
                reader.readAsDataURL(this.editManagerData.avatar);
            },
        }
    };

</script>
