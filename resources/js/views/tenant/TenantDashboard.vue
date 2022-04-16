<template>
    <div class="w-100">
        <div class="container-fluid">
                <b-card no-body>
                    <b-tabs card>
                        <b-tab title="invoice">
                            <b-card-text>
                                <div class="container-fluid" id="invoiceprint">
                                    <!-- <button class="btn btn-danger d-block mx-auto" v-on:click="invoiceprint">Print Invoice</button> -->
                                    <div class="row gutters-sm" >
                                        <div class="col-md-9">
                                            <div class="card mt-3">
                                                <div class="card-body">
                                                    <div class="table-responsive">
                                                        <table class="table table-hover" style="width:100%">
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col" style="width: 5%;">#</th>
                                                                    <th scope="col">Property</th>
                                                                    <th scope="col">City</th>
                                                                    <th scope="col">Size</th>
                                                                    <th scope="col">Price</th>
                                                                    <th scope="col">Rent</th>
                                                                    <th scope="col">Action</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody v-for="(reserv , index) in reserved" :key="index">
                                                                <tr v-if="reserv.rent==='paid'" class="text-success">
                                                                    <th scope="row">{{index+1}}</th>
                                                                    <router-link :to="{name:'show-tenant', params: {id: reserv.id}}">
                                                                        <td>{{reserv.property_name}}</td>
                                                                    </router-link>

                                                                    <td>{{reserv.city_name}}</td>
                                                                    <td>{{reserv.size}} {{reserv.unit}}</td>
                                                                    <td>{{reserv.rent_price}}</td>
                                                                    <td>{{reserv.rent}}</td>
                                                                    <td>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-info btn-sm"
                                                                            v-on:click="unPaidPropertyRent(reserv)"
                                                                            data-toggle="tooltip"
                                                                            data-placement="top"
                                                                            title="un-paid rent"
                                                                            >
                                                                            <i class="fas fa-money-check-alt" style="color:white"></i>
                                                                        </button>
                                                                        <router-link :to="{name:'invoice-tenant', params: {id: reserv.id}}">
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
                                                                        <router-link :to="{name:'show-tenant', params: {id: reserv.id}}">
                                                                            <button
                                                                                type="button"
                                                                                class="btn btn-info btn-sm"
                                                                                >
                                                                                <i class="fas fa-eye" style="color:white"></i>
                                                                            </button>
                                                                        </router-link>
                                                                    </td>
                                                                </tr>
                                                                <tr v-else class="text-danger">
                                                                    <th scope="row">{{index+1}}</th>
                                                                    <router-link :to="{name:'show-tenant', params: {id: reserv.id}}">
                                                                        <td>{{reserv.property_name}}</td>
                                                                    </router-link>
                                                                    <td>{{reserv.city_name}}</td>
                                                                    <td>{{reserv.size}} {{reserv.unit}}</td>
                                                                    <td>{{reserv.rent_price}}</td>
                                                                    <td>{{reserv.rent}}</td>
                                                                    <td>
                                                                        <button
                                                                            type="button"
                                                                            class="btn btn-info btn-sm"
                                                                            v-on:click="paidPropertyRent(reserv)"
                                                                            data-toggle="tooltip"
                                                                            data-placement="top"
                                                                            title="paid rent"
                                                                            >
                                                                            <i class="fas fa-money-check-alt" style="color:white"></i>
                                                                        </button>
                                                                        <router-link :to="{name:'invoice-tenant', params: {id: reserv.id}}">
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
                                                        <!-- <div v-show="moreExists">
                                                            <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                                                <i class="fas fa-arrow-down"></i>
                                                            </button>
                                                        </div> -->
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3" >
                                            <div class="card mt-3">
                                                <div class="card-body shadow">
                                                    <div>
                                                        <div id="smartinvoice">
                                                            <img :src="`${$store.state.serverPath}images/eko.png`" alt="Admin" style="height: 50px; width: 100px;" class="d-block mx-auto" >
                                                            <p class="text-danger mt-4">Pending rent:<span class="float-right">{{rents[2]}} pkr</span></p>
                                                            <p class="text-success">Paid rent:<span class="float-right">{{rents[1]}} pkr</span></p>
                                                            <hr>
                                                            <p class=" text-info font-weight-bold">Total Rent:<span class="float-right">{{rents[0]}} pkr</span></p>
                                                        </div>
                                                        <button class="btn btn-danger btn-sm d-block mx-auto" v-on:click="smartinvoice">Print</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Favourited Properties">
                            <b-card-text>
                                <div class="container-fluid">
                                    <div class="card shadow mb-4">
                                        <div class="card-header d-flex bd-highlight">
                                            <h6 class="bd-highlight font-weight-bold text-success">Total Favourited Properties</h6>
                                        </div>
                                    </div>
                                    <div class="card mt-3">
                                        <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Property</th>
                                                        <th scope="col">City</th>
                                                        <th scope="col">Area Size</th>
                                                        <th scope="col">Rent Price</th>
                                                        <th scope="col">Furnished</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(favourit , index) in favourits" :key="index">
                                                        <th scope="row">{{index+1}}</th>
                                                        <td>{{favourit.property_name}}</td>
                                                        <td>{{favourit.city_name}}</td>
                                                        <td>{{favourit.size}} {{favourit.unit}}</td>
                                                        <td>{{favourit.rent_price}}</td>
                                                        <td>{{favourit.furnished}}</td>
                                                        <td>
                                                            <router-link :to="{name:'show-tenant', params: {id: favourit.id}}">
                                                                <button
                                                                    type="button"
                                                                    class="btn btn-warning btn-sm"
                                                                    >
                                                                    <i class="fas fa-eye"></i>
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
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Liked Properties">
                            <b-card-text>
                                <div class="container-fluid">
                                    <div class="card shadow mb-4">
                                        <div class="card-header d-flex bd-highlight">
                                            <h6 class="bd-highlight font-weight-bold text-success">Total Liked Properties</h6>
                                        </div>
                                    </div>
                                    <div class="card mt-3">
                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Property</th>
                                                            <th scope="col">City</th>
                                                            <th scope="col">Area Size</th>
                                                            <th scope="col">Rent Price</th>
                                                            <th scope="col">Furnished</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr v-for="(like , index) in likes" :key="index">
                                                            <th scope="row">{{index+1}}</th>
                                                            <td>{{like.property_name}}</td>
                                                            <td>{{like.city_name}}</td>
                                                            <td>{{like.size}} {{like.unit}}</td>
                                                            <td>{{like.rent_price}}</td>
                                                            <td>{{like.furnished}}</td>
                                                            <td>
                                                                <router-link :to="{name:'show-tenant', params: {id: like.id}}">
                                                                    <button
                                                                        type="button"
                                                                        class="btn btn-warning btn-sm"
                                                                        >
                                                                        <i class="fas fa-eye"></i>
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
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Engaged Properties">
                            <b-card-text>
                                <div class="container-fluid">
                                    <div class="card shadow mb-4">
                                        <div class="card-header d-flex bd-highlight">
                                            <h6 class="bd-highlight font-weight-bold text-success">Total Engaged Properties</h6>
                                        </div>
                                    </div>
                                    <div class="card mt-3">
                                        <div class="card-body">
                                            <div class="table-responsive">
                                                <table class="table table-hover">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Property</th>
                                                            <th scope="col">City</th>
                                                            <th scope="col">Area Size</th>
                                                            <th scope="col">Rent Price</th>
                                                            <th scope="col">Furnished</th>
                                                            <th scope="col">Action</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody v-for="(engage , index) in engaged" :key="index">
                                                        <tr v-if="engage.rent ==='paid'" class="text-success">
                                                            <th scope="row">{{index+1}}</th>
                                                            <td>{{engage.property_name}}</td>
                                                            <td>{{engage.city_name}}</td>
                                                            <td>{{engage.size}} {{engage.unit}}</td>
                                                            <td>{{engage.rent_price}}</td>
                                                            <td>{{engage.furnished}}</td>
                                                            <td>
                                                                <router-link :to="{name:'show-tenant', params: {id: engage.id}}">
                                                                    <button
                                                                        type="button"
                                                                        class="btn btn-warning btn-sm"
                                                                        >
                                                                        <i class="fas fa-eye"></i>
                                                                    </button>
                                                                </router-link>
                                                                <router-link :to="{name:'invoice-tenant', params: {id: engage.id}}">
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
                                                        <tr v-else class="text-danger">
                                                            <th scope="row">{{index+1}}</th>
                                                            <td>{{engage.property_name}}</td>
                                                            <td>{{engage.city_name}}</td>
                                                            <td>{{engage.size}} {{engage.unit}}</td>
                                                            <td>{{engage.rent_price}}</td>
                                                            <td>{{engage.furnished}}</td>
                                                            <td>
                                                                <router-link :to="{name:'show-tenant', params: {id: engage.id}}">
                                                                    <button
                                                                        type="button"
                                                                        class="btn btn-warning btn-sm"
                                                                        >
                                                                        <i class="fas fa-eye"></i>
                                                                    </button>
                                                                </router-link>
                                                                <router-link :to="{name:'invoice-tenant', params: {id: engage.id}}">
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
                                                                <router-link :to="{name:'show-tenant', params: {id: engage.id}}">
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
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Profile">
                            <b-card-text>
                                <div class="container-fluid">
                                    <div class="row gutters-sm">
                                        <div class="col-md-4 mb-3 ">
                                            <div class="card">
                                                <div class="card-body shadow">
                                                    <div class="d-flex flex-column align-items-center text-center">
                                                        <img :src="`${$store.state.serverPath}storage/${profile.avatar}`" alt="Admin" class="profilecircleimage">
                                                        <div class="mt-3">
                                                            <h4>{{profile.name}}</h4>
                                                            <p class="text-secondary mb-1">Role: {{profile.role}}</p>
                                                            <p class="text-muted font-size-sm">City: {{profile.city_name}}</p>
                                                            <button class="btn btn-outline-primary p-1 mt-1">Total Property:10</button>
                                                            <button class="btn btn-outline-success p-1 mt-1">Engaged Property:5</button>
                                                            <button class="btn btn-outline-success p-1 mt-1">Reserved Property:5</button>
                                                        </div>
                                                    </div>
                                                </div>
                                        </div>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card mb-3">
                                                <div class="card-body shadow">
                                                    <form v-on:submit.prevent="updateProfile" enctype="multipart/form-data">
                                                            <h3 class="text-success font-weight-bold"><u> Account Setting</u></h3>
                                                            <div class="row">
                                                                <div class="col-md-4">
                                                                    <div class="avatar-upload" >
                                                                        <div class="avatar-preview" style="width:100%;height:170px;">
                                                                                <img :src="`${$store.state.serverPath}storage/${profile.avatar}`"  id="imagePreview1"  ref="editAvatarDisplay" style="width:100%;height:170px;border: none;" />
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
                                                                        <input type="text" v-model="profile.name" id="name" class="form-control" placeholder="Your full name" />
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="name" class="p-0 m-0">Phone</label>
                                                                        <input type="text" v-model="profile.phone" id="name" class="form-control" />
                                                                </div>
                                                            </div>
                                                                <div class="col-md-4">
                                                                    <div class="form-group">
                                                                        <label for="Email" class="p-0 m-0">Email</label>
                                                                        <input type="email" v-model="profile.email" class="form-control" readonly>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="City" class="p-0 m-0">City</label>
                                                                        <select class="form-control mt-1" >
                                                                            <option value="">Select City</option>
                                                                            <option value="Islamabad">Islamabad</option>
                                                                            <option value="Rawalpindi">Rawalpindi</option>
                                                                        </select>

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
                                                <tr v-for="(invoice , index) in invoices" :key="index">
                                                    <th scope="row">{{index+1}}</th>
                                                    <td>{{invoice.property_name}}</td>
                                                    <td>{{invoice.city_name}}</td>
                                                    <td>{{invoice.size}} {{invoice.unit}}</td>
                                                    <td>{{invoice.rent_price}}</td>
                                                    <td>{{invoice.furnished}}</td>
                                                    <td>{{invoice.rent}}</td>
                                                    <td>
                                                        <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg" class="btn btn-danger btn-sm" v-on:click="deleteReservedProperty(invoice)">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            class="btn btn-info btn-sm"
                                                            v-on:click="paidPropertyRent(invoice)"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="paid rent"
                                                            >
                                                            <i class="fas fa-money-check-alt" style="color:white"></i>
                                                        </button>
                                                        <button
                                                            type="button"
                                                            class="btn btn-info btn-sm"
                                                            v-on:click="unPaidPropertyRent(invoice)"
                                                            data-toggle="tooltip"
                                                            data-placement="top"
                                                            title="un-paid rent"
                                                            >
                                                            <i class="fas fa-money-check-alt" style="color:white"></i>
                                                        </button>
                                                        <router-link :to="{name:'invoice-landlord', params: {id: invoice.id}}">
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
                            </b-card-text>
                        </b-tab>
                        <b-tab title="Annoucment">
                            <b-card-text>
                                <div class="container-fluid">
                                    <div class="card shadow mb-4">
                                        <div class="card-header">
                                            <p class="text-center text-danger">This Module is under progress soon will be available</p>
                                            <div class="row">
                                                <div class="col-md-6 mx-auto">
                                                    <form>
                                                        <div class="form-group">
                                                            <label for="announcement" class="text-warning text-center"><i class="fas fa-bullhorn fa-2x"></i> Create an Annoucement</label>
                                                            <input type="text"   id="inputdesign" class="form-control">
                                                        </div>
                                                        <div class="form-group">
                                                            <select class="form-control" id="exampleFormControlSelect1">
                                                                <option value="">Select Landlord</option>
                                                                <option>2</option>
                                                                <option>3</option>
                                                                <option>4</option>
                                                                <option>5</option>
                                                            </select>
                                                        </div>
                                                        <button class="btn btn-warning text-white d-flex justify-content-center">Make Announcement</button>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card mt-3">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-3">
                                                    <div id="talkbubble" >
                                                        <span class="text-muted">10:00 Am</span>
                                                        <p class="text-danger">Under Progress.</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div id="talkbubble" >
                                                        <span class="text-muted">10:00 Am</span>
                                                        <p class="text-danger">Under Progress.</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div id="talkbubble" >
                                                        <span class="text-muted">10:00 Am</span>
                                                        <p class="text-danger">Under Progress..</p>
                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div id="talkbubble" >
                                                        <span class="text-muted">10:00 Am</span>
                                                        <p class="text-danger">Under Progress..</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </b-card-text>
                        </b-tab>
                    </b-tabs>
                </b-card>
        </div>
    </div>
</template>
<script>
import * as tenantService from '../../services/tenant_service';
import * as reservedService from '../../services/reserved_service';
import * as authService from '../../services/auth_service';

export default {
    name:'Tenant-Dashboard' ,
    data(){
        return{
            query:"",
            favourits: [],
            invoices: [],
            rents:[],
            engaged:[],
            moreExists: false,
            nextPage: 0,
            errors: {},
            reserved:[],
            likes:[],
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
    mounted(){
        this.getFavourit();
        this.getReservedProperty();
        this.getTotalRentCount();
        this.getLiked();
        this.getEngaged();
    },
    methods:{
        getEngaged:async function(){
            try {
                const response = await tenantService.getEngaged();
                this.engaged = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'some error occurred!',
                    time: 5000,
                });
            }
        },
        smartinvoice: function () {
                  var printContents = document.getElementById('smartinvoice').innerHTML;
                    var originalContents = document.body.innerHTML;

                    document.body.innerHTML = printContents;

                    window.print();

                    document.body.innerHTML = originalContents;

        },
        getTotalRentCount:async function(){
            try {
                const response = await tenantService.getTotalRentCount();
                console.log(response);
                this.rents = response.data;
            } catch (error) {
                this.flashMessage.error({
                message: 'Some error occurred!',
                time:5000
                });
            }
        },
        getFavourit:async function (){
            try {
                const response = await tenantService.getFavourit();
                this.favourits = response.data.data;
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
        getLiked:async function(){
            try {
                const response = await tenantService.getLiked();
                this.likes = response.data.data;
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
                    message: 'some error occurred!',
                    time: 5000,
                });
            }
        },
        loadFavouritedProperty:async function() {
                try {
                        const response =  await adminService.loadFavouritedProperty(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.favourits.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred during load more employees",
                        time:5000
                    });
                }
        },
        loadLikedProperty:async function() {
                try {
                        const response =  await tenantService.loadLikedProperty(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.likes.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred during load more employees",
                        time:5000
                    });
                }
        },
        searchProperty:async function () {
            try {
                const query = {
                query: this.query
                };
                const response = await adminService.searchProperty(query);
                this.favourits = response.data;
            } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occurred",
                    time: 5000
                    });
                }
        },
        getReservedProperty:async function(){
            try {
                const response = await reservedService.getReservedProperty();
                console.log(response);
                this.reserved = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
            }
        },
        deleteReservedProperty: async function (reserve){
                if(!window.confirm("Are you sure you want to delete this Reserved Property")){
                    return;
                }
                try {
                    const response = await reservedService.deleteReservedProperty(reserve.id);
                    console.log(response);
                    this.reserved = this.reserved.filter(obj => {
                                return obj.id !=reserve.id;
                        });
                        this.flashMessage.success({
                            message: 'Reserved Property deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                    console.log(error +'');
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
        },
        loadFavouritedProperty:async function() {
                try {
                        const response =  await adminService.loadFavouritedProperty(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.favourits.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred during load more employees",
                        time:5000
                    });
                }
        },
        searchProperty:async function () {
                try {
                    const query = {
                    query: this.query
                    };
                    const response = await adminService.searchProperty(query);
                    this.favourits = response.data;
                } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred",
                        time: 5000
                        });
                    }
        },
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


<style>
.details p{
    margin: 0px;
}
@media only screen and (max-width:660px ){
         .mobiledash{
             display: flex;
             justify-content: center;
         }
         .mobiledash{
             margin-left: 0px !important;
         }
      }
      @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        .invoice{

        }
        .invoiceform{
            background:white;
            border: 1px solid gray;
        }
        .invoiceform h5{
            font-weight:bolder;
            color: white;
        }
        .invoiceform .part1{
            background-color: #38b16e;
            background-image: linear-gradient(to right,#42b45d,#20ab94);
            color:white;
            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);
            width:90%;
            height:151px;
            z-index:2;
            position:absolute;
            padding: 20px;
        }
        .invoiceform .bgpart1{
            background-color: black;
            background-image: linear-gradient(to right,black,#20ab94);
            color:white;
            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);
            width:100%;
            height:151px;
        }
        .invoiceform .part1 h1{
            font-family: 'Roboto', sans-serif;
            letter-spacing:0.5rem;
        }
        .logoimg{
            background-color: #2E86C1;
            background-image: linear-gradient(to left,#85C1E9 ,#2874A6);
            color: #fff;
            height: 200px;
            font-weight: bolder;
            border-top-left-radius: 12px;
        }
        .part2{
            margin-top: 10px;
        }
        .thead{
            background-color: #38b16e;
            background-image: linear-gradient(to right,#42b45d,#20ab94);
            color:white;
        }
        .part1sbtotal{
            background-color: #38b16e;
            background-image: linear-gradient(to right,#42b45d,#20ab94);
            color:white;
            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 100% 0%, 100% 100%,6% 3%);
            width:93%;
            height:107px;
            z-index:2;
            position:absolute;
        }
        .part2sbtotal{
            background-color: #0b0b0b;
            background-image: linear-gradient(to right,#164203,#20AB94);
            color: white;
            -webkit-clip-path: polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 100% 0%, 100% 100%);
            width: 100%;
            height: 119px;
        }
        #inputdesign {
        width: 100%;
        height: 85px;
        background: white;
        position: relative;
        -moz-border-radius: 20px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        padding: 5px;
        box-shadow: 3px 5px 5px 5px #888888;
        border-bottom-left-radius: 30px;
        border-top-right-radius: 39px;
        }
    #talkbubble {
      width: 200px;
      height:auto;
      background: white;
      position: relative;
      -moz-border-radius: 20px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
      padding: 5px;
      box-shadow: 3px 5px 5px 5px #888888;
      margin-bottom: 20px;
      border-bottom-left-radius: 30px;
      border-top-right-radius: 39px;
    }
    #talkbubble:after {
      content: "";
      position: absolute;
      left: 100%;
      top: 35px;
      width: 0;
      height: 0;
      border-top: 13px solid transparent;
      border-left: 26px solid white;
      border-right-width: 20px solid transparent;
      border-bottom: 13px solid transparent;
    }
</style>
