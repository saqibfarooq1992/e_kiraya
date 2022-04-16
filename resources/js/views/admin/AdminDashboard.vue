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

                                                <form  v-on:submit.prevent="searchInvoiceQuery" class="form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto">
                                                    <div class="form-group">
                                                        <select class="form-control" v-model="invoiceQuery" @change='searchInvoiceQuery()'>
                                                            <option value="">Select Property to check</option>
                                                            <option value="paid">Paid Property</option>
                                                            <option value="unpaid">Un Paid Property</option>
                                                            <option value="reserv">Reserved Property</option>
                                                        </select>
                                                    </div>
                                                </form>
                                                <div class="table-responsive">
                                                    <table class="table table-hover" style="width:100%">
                                                        <thead>
                                                            <tr>
                                                                <th scope="col" style="width: 5%;">#</th>
                                                                <th scope="col">Property</th>
                                                                <th scope="col">City</th>
                                                                <th scope="col">Sector</th>
                                                                <th scope="col">Due Date</th>
                                                                <th scope="col">Paid Date</th>
                                                                <th scope="col">Size</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Rent</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody v-for="(engage , index) in engaged" :key="index">
                                                            <tr v-if="engage.rent==='paid'" class="text-success">
                                                                <th scope="row">{{index+1}}</th>
                                                                <td v-if="engage.cnic">
                                                                    <router-link :to="{name:'show-reserved', params: {id: engage.id}}">
                                                                        {{engage.property_name}}
                                                                    </router-link>
                                                                </td>
                                                                <td v-else>
                                                                    <router-link :to="{name:'show-admin', params: {id: engage.id}}">
                                                                        {{engage.property_name}}
                                                                    </router-link>
                                                                </td>
                                                                <td>{{engage.city_name}}</td>
                                                                <td>{{engage.sector}}</td>
                                                                <td>{{engage.created_at}}</td>
                                                                <td>{{engage.updated_at}}</td>
                                                                <td>{{engage.size}} {{engage.unit}}</td>
                                                                <router-link :to="{name:'year-invoice', params: {id: engage.id}}">
                                                                    <td>{{engage.rent_price}}</td>
                                                                </router-link>
                                                                <td>{{engage.rent}}</td>
                                                                <td >
                                                                    <button
                                                                        v-if="engage.cnic"
                                                                        type="button"
                                                                        class="btn btn-info btn-sm"
                                                                        v-on:click="unPaidPropertyRent(engage)"
                                                                        data-toggle="tooltip"
                                                                        data-placement="top"
                                                                        title="un-paid rent"
                                                                        >
                                                                        <i class="fas fa-money-check-alt" style="color:white"></i>
                                                                    </button>
                                                                    <router-link :to="{name:'invoice-admin', params: {id: engage.id}}">
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
                                                                    <button v-if="engage.cnic"
                                                                        @click="showRentModal(engage)"
                                                                        type="button"
                                                                        class="btn btn-info btn-sm"
                                                                        data-toggle="tooltip"
                                                                        data-placement="top"
                                                                        title="edit rent"
                                                                        >
                                                                        <i class="fas fa-pencil-alt" style="color:white"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                            <tr v-else class="text-danger">
                                                                <th scope="row">{{index+1}}</th>
                                                                    <!-- <router-link :to="{name:'show-admin', params: {id: engage.id}}">
                                                                        <td>{{engage.property_name}}</td>
                                                                    </router-link> -->
                                                                <td v-if="engage.cnic">
                                                                    <router-link :to="{name:'show-reserved', params: {id: engage.id}}">
                                                                        {{engage.property_name}}
                                                                    </router-link>
                                                                </td>
                                                                <td v-else>
                                                                    <router-link :to="{name:'show-admin', params: {id: engage.id}}">
                                                                        {{engage.property_name}}
                                                                    </router-link>
                                                                </td>
                                                                <td>{{engage.city_name}}</td>
                                                                <td>{{engage.sector}}</td>
                                                                <td>{{engage.created_at}}</td>
                                                                <td>{{engage.updated_at}}</td>
                                                                <td>{{engage.size}} {{engage.unit}}</td>
                                                                <router-link v-if="engage.rent==='paid'" :to="{name:'year-invoice', params: {id: engage.id}}">
                                                                    <td>{{engage.rent_price}}</td>
                                                                </router-link>
                                                                <router-link v-else :to="{name:'invoice-admin', params: {id: engage.id}}">
                                                                    <td>{{engage.rent_price}}</td>
                                                                </router-link>
                                                                <td>{{engage.rent}}</td>
                                                                <td >
                                                                    <button
                                                                        type="button"
                                                                        class="btn btn-info btn-sm"
                                                                        v-if="engage.cnic"
                                                                        v-on:click="paidPropertyRent(engage)"
                                                                        data-toggle="tooltip"
                                                                        data-placement="top"
                                                                        title="paid rent"
                                                                        >
                                                                        <i class="fas fa-money-check-alt" style="color:white"></i>
                                                                    </button>
                                                                    <router-link :to="{name:'invoice-admin', params: {id: engage.id}}">
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
                                                                    <button v-if="engage.cnic"
                                                                        type="button"
                                                                        class="btn btn-info btn-sm"
                                                                        @click="showRentModal(engage)"
                                                                        data-toggle="tooltip"
                                                                        data-placement="top"
                                                                        title="edit rent"
                                                                        >
                                                                        <i class="fas fa-pencil-alt" style="color:white"></i>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                     <div v-show="moreExistsEngaged">
                                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperties">
                                                            <i class="fas fa-arrow-down"></i>
                                                        </button>
                                                    </div>
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
                                                        <p class="text-danger mt-4">Pending rent:<span class="float-right">{{pendingRent}} pkr</span></p>
                                                        <p class="text-success">Paid rent:<span class="float-right">{{paidRent}} pkr</span></p>
                                                        <hr>
                                                        <p class=" text-info font-weight-bold">Total Rent:<span class="float-right">{{rents}} pkr</span></p>
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
                    <b-tab title="Properties">
                        <b-card-text>
                            <div class="container-fluid">
                                <div class="card shadow mb-4">
                                    <div class="card-header d-flex bd-highlight">
                                        <h6 class="bd-highlight font-weight-bold text-success">Total Properties :{{totals}}</h6>
                                        <form v-on:submit.prevent="searchProperty" class="form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto" >
                                            <div class="form-group">
                                                <select class="form-control" v-model="q" @change='searchProperty()'>
                                                    <option value="">Select Property</option>
                                                    <option value="comment">Commented Property</option>
                                                    <option value="engaged">Engaged Property</option>
                                                    <option value="un-paid">Un-paid Property</option>
                                                    <option value="paid">Paid Property</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="card mt-3">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover"  style="width:100%">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Landlord</th>
                                                        <th scope="col">Phone</th>
                                                        <th scope="col">City</th>
                                                        <th scope="col">Sector</th>
                                                        <th scope="col">Property</th>
                                                        <th scope="col">Area Size</th>
                                                        <th scope="col">Rent Price</th>
                                                        <th scope="col">Status</th>
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
                                                        <td>{{property.sector}}</td>
                                                        <td>{{property.property_name}}</td>
                                                        <td>{{property.size}} {{property.unit}}</td>
                                                        <td>{{property.rent_price}}</td>
                                                        <td>{{property.status}}</td>
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
                                    <div v-show="moreExistsProperties">
                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                            <i class="fas fa-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Users">
                        <b-card-text>
                            <button id="show-btn" @click="showModal"
                                class=" btn btn-sm btn-info position-fixed">
                                <span class="icon text-white-50">
                                    <i class="far fa-user"></i>
                                </span><br>
                                <span class="text-white">Add</span>
                            </button>
                            <div class="container-fluid">
                                <div class="card shadow mb-4">
                                    <div class="card-header d-flex bd-highlight">
                                        <h6 class="bd-highlight font-weight-bold text-success">All Users</h6>
                                        <form  v-on:submit.prevent="searchUser" class="form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto">
                                                <div class="form-group">
                                                    <select class="form-control"  v-model="userQuery" @change='searchUser()'>
                                                        <option value="">Select user to check</option>
                                                        <option value="manager">Manager</option>
                                                        <option value="employee">Employee</option>
                                                        <option value="csr">CSR</option>
                                                        <option value="tenant">Tenant</option>
                                                        <option value="landlord">Landlord</option>
                                                    </select>
                                                </div>
                                        </form>
                                    </div>
                                </div>
                                <div class="card mt-3">
                                    <div class="card-body">
                                    <div class="table-responsive">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">Email</th>
                                                        <th scope="col">Phone</th>
                                                        <th scope="col">City</th>
                                                        <th scope="col">Image</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(visitor , index) in users" :key="index">
                                                        <th scope="row">{{index+1}}</th>
                                                        <router-link :to="{name:'profile-admin', params: {id: visitor.id}}">
                                                            <td class="text-success">{{visitor.name}}</td>
                                                        </router-link>
                                                        <td>{{visitor.email}}</td>
                                                        <td>{{visitor.phone}}</td>
                                                        <td>{{visitor.city_name}}</td>
                                                        <td>
                                                            <img :src="`${$store.state.serverPath}storage/${visitor.avatar}`"
                                                                style="width:50px; border-radius: 50%; margin-top: -10px; height:50px">
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <div v-show="moreExistsStaff">
                                                <button type="button" class="btn btn-info btn-sm" v-on:click="loadUser">
                                                    <i class="fas fa-arrow-down"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="React Properties">
                        <b-card-text>
                            <div class="container-fluid">
                                <div class="card shadow mb-4">
                                    <div class="card-header d-flex bd-highlight">
                                        <h6 class="bd-highlight font-weight-bold text-success">Favourited Properties</h6>
                                        <form v-on:submit.prevent="searchReact" class="form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto" >
                                            <div class="form-group">
                                                <select class="form-control" v-model="reactQuery" @change='searchReact()'>
                                                    <option value="">Select React</option>
                                                    <option value="favourited">Favourited</option>
                                                    <option value="liked">Liked</option>
                                                    <option value="visited">Visited</option>
                                                    <option value="seen">Seen</option>
                                                    <option value="share">Share</option>
                                                </select>
                                            </div>
                                        </form>
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
                                                        <router-link :to="{name:'show-admin', params: {id: favourit.id}}">
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
                                        <div v-show="moreExistsFavourits">
                                            <button type="button" class="btn btn-info btn-sm" v-on:click="loadFavouritedProperty">
                                                <i class="fas fa-arrow-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Area Manager">
                        <button id="show-btn" @click="showAreaModal"
                            class=" btn btn-sm btn-info position-fixed">
                            <span class="icon text-white-50">
                                <i class="far fa-user"></i>
                            </span><br>
                            <span class="text-white">Add Area</span>
                        </button>
                        <b-card-text>
                            <div class="container-fluid">
                                <div class="card mt-3">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">phone</th>
                                                        <th scope="col">City</th>
                                                        <th scope="col">Sector</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(area , index) in areaManagers" :key="index">
                                                        <th scope="row">{{index+1}}</th>
                                                        <router-link :to="{name:'profile-admin', params: {id: area.user_id}}">
                                                            <td>{{area.user}}</td>
                                                        </router-link>
                                                        <td>{{area.phone}}</td>
                                                        <td>{{area.city}}</td>
                                                        <!-- <td>{{area.sectors}}</td> -->
                                                        <span >
                                                            <td v-for="(sector , index) in area.sectors" :key="index">
                                                                {{sector.sector}}<br>
                                                            </td>
                                                        </span>
                                                        <td>
                                                            <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteUser(area)">
                                                                <i class="fas fa-trash"></i>Delete
                                                            </button>
                                                            <button type="button"  class="btn btn-success btn-sm" v-on:click="editUsers(area)">
                                                                <i class="fas fa-pencil-alt"></i>Edit
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!-- <div v-show="moreExistsStaff">
                                                <button type="button" class="btn btn-info btn-sm" v-on:click="loadUser">
                                                    <i class="fas fa-arrow-down"></i>
                                                </button>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                        <div>
                            <b-modal ref="areaModal" hide-footer  title="Add Area Manager">
                                <form v-on:submit.prevent="createAreaManager">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <select class="form-control" id="exampleFormControlSelect1" v-model="managerData.name">
                                                    <option value="">Select Manager</option>
                                                    <option v-for="(user , index) in managers" :key="index" v-bind:value="user.id" >{{user.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1" v-model="managerData.city" @change='getSector()'>
                                                <option value="">Select city</option>
                                                <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                        <div class="row" >
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <select class="form-control" id="exampleFormControlSelect1" v-model="managerData.sector"  multiple="multiple">
                                                        <option value="">Select Manager</option>
                                                        <option v-for="(sector , index) in sectors" :key="index" v-bind:value="sector.id" >{{sector.sector}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="form-group mt-3">
                                        <button type="submit" class="btn btn-success" style="width: 300px; margin-left: 69px;">Save Area Manager</button>
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


                                                        placeholder="Enter Phone Number" />
                                                    <div class="invalid-feedback" v-if="errors.phone">{{errors.phone[0]}}</div>
                                                </div>
                                            </div>
                                            <div class="col-lg-6 col-md-6 col-sm-6">
                                                <div class="form-group">
                                                    <label for="exampleFormControlInput1">Rule</label>
                                                    <input type="text" class="form-control"
                                                        v-model="editManagerData.role"

                                                        />
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
                    </b-tab>
                    <b-tab title="Area Employee">
                        <button id="show-btn" @click="showAreaEmployeeModal"
                            class=" btn btn-sm btn-info position-fixed">
                            <span class="icon text-white-50">
                                <i class="far fa-user"></i>
                            </span><br>
                            <span class="text-white">Add Area</span>
                        </button>
                        <b-card-text>
                            <div class="container-fluid">
                                <div class="card mt-3">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover">
                                                <thead>
                                                    <tr>
                                                        <th scope="col">#</th>
                                                        <th scope="col">Name</th>
                                                        <th scope="col">phone</th>
                                                        <th scope="col">City</th>
                                                        <th scope="col">Sector</th>
                                                        <th scope="col">Action</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(employee , index) in employees" :key="index">
                                                        <th scope="row">{{index+1}}</th>
                                                        <router-link :to="{name:'profile-admin', params: {id: employee.user_id}}">
                                                            <td>{{employee.name}}</td>
                                                        </router-link>
                                                        <td>{{employee.phone}}</td>
                                                        <td>{{employee.city_name}}</td>
                                                        <td>{{employee.sector}}</td>
                                                        <td>
                                                            <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteEmployee(employee)">
                                                                <i class="fas fa-trash"></i>
                                                            </button>
                                                            <button type="button"  class="btn btn-success btn-sm" v-on:click="editAreaEmployee(employee)">
                                                                <i class="fas fa-pencil-alt"></i>
                                                            </button>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            <!-- <div v-show="moreExistsStaff">
                                                <button type="button" class="btn btn-info btn-sm" v-on:click="loadUser">
                                                    <i class="fas fa-arrow-down"></i>
                                                </button>
                                            </div> -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                        <div>
                            <b-modal ref="areaEmployeeModal" hide-footer  title="Add Area Employee">
                                <form v-on:submit.prevent="createAreaEmployee">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <select class="form-control" id="exampleFormControlSelect1" v-model="EmployeeData.name">
                                                    <option value="">Select Employee</option>
                                                    <option v-for="(emp , index) in emps" :key="index" v-bind:value="emp.id" >{{emp.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                            <select class="form-control" id="exampleFormControlSelect1" v-model="EmployeeData.city" @change='getSectorEmployee()'>
                                                <option value="">Select city</option>
                                                <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                        <div class="row" >
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <select class="form-control" id="exampleFormControlSelect1" v-model="EmployeeData.sector">
                                                        <option value="">Select Sector</option>
                                                        <option v-for="(sector , index) in sectors" :key="index" v-bind:value="sector.id" >{{sector.sector}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="form-group mt-3">
                                        <button type="submit" class="btn btn-success" style="width: 300px; margin-left: 69px;">Save Area Employee</button>
                                    </div>
                                </form>
                            </b-modal>
                             <b-modal ref="editAreaEmployee" hide-footer  title="Update Area Employee">
                                <form v-on:submit.prevent="updateAreaEmployee">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <select class="form-control" v-model="editAreaEmployeeData.name">
                                                    <option value="">Select Employee</option>
                                                    <option v-for="(emp , index) in emps" :key="index" v-bind:value="emp.id" >{{emp.name}}</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                            <select class="form-control"  v-model="editAreaEmployeeData.city" @change='getSectorEmployee()'>
                                                <option value="">Select city</option>
                                                <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                            </select>
                                        </div>
                                        </div>
                                    </div>
                                        <div class="row" >
                                            <div class="col-md-12">
                                                <div class="form-group">
                                                    <select class="form-control"  v-model="editAreaEmployeeData.sector">
                                                        <option value="">Select Sector</option>
                                                        <option v-for="(sector , index) in sectors" :key="index" v-bind:value="sector.id" >{{sector.sector}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    <div class="form-group mt-3">
                                        <button type="submit" class="btn btn-success" style="width: 300px; margin-left: 69px;">Save Area Employee</button>
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
                                                    placeholder="Enter Full name" />
                                                <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                                            </div>
                                        </div>
                                        <div class="col-lg-6 col-md-6 col-sm-6">
                                            <div class="form-group">
                                                    <label for="exampleFormControlInput1">Email</label>
                                                    <input type="text" class="form-control"
                                                        v-model="editManagerData.email"

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
                    </b-tab>
                    <b-tab title="Annoucement">
                        <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header">
                                    <p class="text-center text-danger">This Module is under progress soon will be available</p>
                                    <div class="row">
                                        <div class="col-md-6 mx-auto">
                                            <form>
                                                <div class="form-group">
                                                    <label for="announcement" class="text-warning text-center"><i class="fas fa-bullhorn fa-2x"></i> Create an Annoucement</label>
                                                    <input type="text" id="inputdesign" class="form-control">
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
                                                <p>Under Progress.</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div id="talkbubble" >
                                                <span class="text-muted">10:00 Am</span>
                                                <p>Under Progress.</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div id="talkbubble" >
                                                <span class="text-muted">10:00 Am</span>
                                                <p>Under Progress.</p>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div id="talkbubble" >
                                                <span class="text-muted">10:00 Am</span>
                                                <p>Under Progress.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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
                                                        <p class="text-muted font-size-sm">City: {{profile.cities}}</p>
                                                        <form v-on:submit.prevent="searchInvoiceQuery">
                                                            <label class="btn btn-outline-primary m-1">
                                                                <input type="radio" value="engaged"  style="visibility:hidden"   v-model="q" @change='searchProperty()' id="value1">Total Property:10
                                                            </label>
                                                            <label class="btn btn-outline-success  m-1">
                                                                <input type="radio" value="un-paid" style="visibility:hidden" v-model="q" @change='searchProperty()' id="value2">Un Paid Property:5
                                                            </label>
                                                            <label class="btn btn-outline-info m-1">
                                                                <input type="radio" value="paid" style="visibility:hidden" v-model="q" @change='searchProperty()' id="value3">Paid Property:5
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
                                                <form v-on:submit.prevent="updateProfile">
                                                    <h3 class="text-success font-weight-bold"><u> Account Setting</u></h3>
                                                    <div class="row">
                                                        <div class="col-md-4">
                                                            <div class="avatar-upload" >
                                                                <div class="avatar-preview" style="width:100%;height:170px;">
                                                                    <img :src="`${$store.state.serverPath}storage/${profile.avatar}`"  id="imagePreview1"  ref="editAvatarDisplay" style="width:100%;height:170px;border: none;" />
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
                                                                <input type="text" v-model="profile.name"  class="form-control" placeholder="Your full name" />
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="name" class="p-0 m-0">Phone</label>
                                                                <input type="text" v-model="profile.phone"  class="form-control" />
                                                            </div>
                                                        </div>
                                                        <div class="col-md-4">
                                                            <div class="form-group">
                                                                <label for="Email" class="p-0 m-0">Email</label>
                                                                <input type="text" v-model="profile.email" class="form-control" readonly>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="City" class="p-0 m-0">City</label>
                                                                 <input type="text" v-model="profile.cities"  class="form-control" />
                                                                <!-- <select class="form-control mt-1" v-model="profile.city_id">
                                                                    <option value="">Select City</option>
                                                                    <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                                                </select> -->
                                                            </div>
                                                        </div>
                                                    </div>

                                                </form>
                                                <form v-on:submit.prevent="updateProfile">
                                                     <div class="row">
                                                        <div class="col-md-2">
                                                            <button type="btn" class="btn btn-success p-1 d-block mx-auto mt-3">Save Changes</button>
                                                        </div>
                                                        <div class="col-md-2">
                                                            <button type="btn" class="btn btn-success  p-1 d-block mx-auto mt-3">Change Pass</button>
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
                                                <!-- <th scope="col">React</th> -->
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
                                     <div v-show="moreExistsProperties">
                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                            <i class="fas fa-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>
                                </div>
                           </div>
                        </b-card-text>
                    </b-tab>
                </b-tabs>
            </b-card>
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
                                <option value="landloard">landlord</option>
                                <option value="renter">Tenant</option>
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
         <b-modal id="modal-lg" hide-footer ref="editProperty" size="lg" title="Update Details">
                <form v-on:submit.prevent="updateProperty">
                    <div class="section postdetails">
                        <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                            <label class="label-title">
                                Title for your Ad
                                <span class="required">*</span>
                            </label>
                            <input
                                type="text"
                                class="form-control"
                                v-model="editPropertyData.title"
                                id="text"
                                placeholder="Title of your Add"
                            />
                            <div class="invalid-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-group">
                            <label class="label-title">
                                Property Type
                                <span class="required">*</span>
                            </label>
                            <select
                                class="form-control"
                                id="propertytype"
                                v-model="editPropertyData.propertytype_id"
                                @change="showHide"
                            >
                                <option value>Select Your Property Type</option>
                                <option
                                v-for="(protype , index) in protypes"
                                :key="index"
                                v-bind:value="protype.id"
                                >{{protype.property_name}}</option>
                            </select>
                            <div
                                class="invalid-feedback"
                                v-if="errors.property_type"
                            >{{errors.property_type[0]}}</div>
                            </div>
                        </div>
                        </div>
                        <div class="row form-group add-title">
                            <label class="label-title">
                                Description
                                <span class="required">*</span>
                            </label>
                            <div class="col-sm-12">
                                <vue-editor v-model="editPropertyData.description"></vue-editor>
                                <div class="invalid-feedback" v-if="errors.description">{{errors.description[0]}}</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-sm-6">
                                <div class="row form-group add-title">
                                    <label class="label-title">
                                        City
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-sm-12">
                                        <select class="form-control" id="city" v-model="editPropertyData.city_id" @change='getSector()'>
                                        <option value>Select City</option>
                                        <option
                                                v-for="(city , index) in cities"
                                                :key="index"
                                                v-bind:value="city.id"
                                            >{{city.city_name}}
                                        </option>
                                        </select>
                                        <div class="invalid-feedback" v-if="errors.city">{{errors.city[0]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-sm-6">
                                <div class="row form-group add-title">
                                    <label class=" label-title">
                                        Sector
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-sm-12">
                                        <select
                                        class="form-control"
                                        id="propertytype"
                                        v-model="editPropertyData.sector_id"
                                        >
                                        <option value>Select Your Property Type</option>
                                        <option
                                            v-for="(sector , index) in sectors"
                                            :key="index"
                                            v-bind:value="sector.id"
                                        >{{sector.sector}}</option>
                                        </select>
                                        <div
                                        class="invalid-feedback"
                                        v-if="errors.property_type"
                                        >{{errors.property_type[0]}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="row form-group add-title">
                                    <label class="label-title">
                                        Badrooms
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-sm-12">
                                        <select class="form-control" id="badrooms" v-model="editPropertyData.badrooms">
                                        <option value>Select Badrooms</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                        <option value="6">6+</option>
                                        <option value="studio">studio</option>
                                        </select>
                                        <div class="invalid-feedback" v-if="errors.badrooms">{{errors.badrooms[0]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="row form-group add-title">
                                    <label class="label-title">
                                        Bathrooms
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-sm-12">
                                        <select class="form-control" id="bathroom" v-model="editPropertyData.bathrooms">
                                        <option value>Select Bathrooms</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>7+</option>
                                        </select>
                                        <div class="invalid-feedback" v-if="errors.bathrooms">{{errors.bathrooms[0]}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4 col-md-4">
                                <div class="row form-group add-title">
                                    <label class="label-title">
                                        Marital Status
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-sm-12">
                                        <select class="form-control" id="unit" v-model="editPropertyData.marital_status">
                                        <option value="">Select  Marital Status</option>
                                        <option value="family">Family</option>
                                        <option value="bachelor">Bachelor</option>
                                        <option value="both">Both</option>
                                        </select>
                                        <div class="invalid-feedback" v-if="errors.marital_status">{{errors.marital_status[0]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="row form-group add-title">
                                    <label class="label-title">
                                        Unit
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-sm-12">
                                        <select class="form-control" id="unit" v-model="editPropertyData.unit">
                                        <option value>Enter Unit</option>
                                        <option value="kanal">Kanal</option>
                                        <option value="marla">Marla</option>
                                        <option value="squre feet">Squre Feet</option>
                                        <option value="squre meter">Squre Meter</option>
                                        <option value="squre yards">Squre Yards</option>
                                        </select>
                                        <div class="invalid-feedback" v-if="errors.unit">{{errors.unit[0]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-4">
                                <div class="row form-group add-title">
                                    <label class="label-title">
                                        Size
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-sm-12">
                                        <input
                                        type="text"
                                        class="form-control"
                                        v-model="editPropertyData.size"
                                        id="text"
                                        />
                                        <div class="invalid-feedback" v-if="errors.size">{{errors.size[0]}}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-6 col-md-6">
                                <div class="row form-group add-title">
                                <label class="label-title">
                                    Address
                                    <span class="required">*</span>
                                </label>
                                <div class="col-sm-12">
                                    <input
                                    type="text"
                                    class="form-control"
                                    v-model="editPropertyData.address"
                                    id="text"
                                    placeholder="ex, Sony Xperia dual sim 100% brand new "
                                    />
                                    <div class="invalid-feedback" v-if="errors.address">{{errors.address[0]}}</div>
                                </div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6">
                                <div class="row form-group add-title">
                                    <label class="label-title">
                                        Price
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-sm-12">
                                        <input
                                    type="text"
                                    placeholder="Enter Property Rent"
                                    v-model="editPropertyData.rent_price"
                                    class="form-control"
                                    id="text1"
                                    />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class=" col-md-4">
                                <div class="row form-group select-condition">
                                <label class="col-md-4">
                                    Tv Lounge
                                    <span class="required">*</span>
                                </label>
                                <div class="col-md-8">
                                    <div class="custom-control custom-radio custom-control-inline">
                                    <input
                                        type="radio"
                                        v-model="editPropertyData.tv_lounged"
                                        id="customRadioInline1"
                                        value="Yes"
                                        name="tvlounge"
                                        class="custom-control-input"
                                    />
                                    <div class="invalid-feedback" v-if="errors.tvlounge">{{errors.tvlounge[0]}}</div>
                                    <label class="custom-control-label" for="customRadioInline1">Yes</label>
                                    </div>
                                    <div class="custom-control custom-radio custom-control-inline">
                                    <input
                                        type="radio"
                                        v-model="editPropertyData.tv_lounged"
                                        id="customRadioInline2"
                                        value="No"
                                        name="tvlounge"
                                        class="custom-control-input"
                                    />
                                    <label class="custom-control-label" for="customRadioInline2">No</label>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row form-group select-condition">
                                    <label class="col-md-4">
                                        Furnished
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-md-8 d-inline-flex">
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                v-model="editPropertyData.furnished"
                                                id="customRadioInline3"
                                                value="Yes"
                                                name="furnished"
                                                class="custom-control-input"
                                            />
                                            <div
                                                class="invalid-feedback"
                                                v-if="errors.furnished"
                                            >{{errors.furnished[0]}}</div>
                                            <label class="custom-control-label" for="customRadioInline3">Yes</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                v-model="editPropertyData.furnished"
                                                id="customRadioInline4"
                                                value="No"
                                                name="furnished"
                                                class="custom-control-input"
                                            />
                                            <label class="custom-control-label" for="customRadioInline4">NO</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="row form-group select-condition">
                                    <label class="col-md-4">
                                        Garage
                                        <span class="required">*</span>
                                    </label>
                                    <div class="col-md-8 d-inline-flex">
                                        <div class="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            v-model="editPropertyData.garage"
                                            id="customRadioInline5"
                                            value="Yes"
                                            name="garege"
                                            class="custom-control-input"
                                        />
                                        <div
                                            class="invalid-feedback"
                                            v-if="errors.garage"
                                        >{{errors.garage[0]}}</div>
                                        <label class="custom-control-label" for="customRadioInline5">Yes</label>
                                        </div>
                                        <div class="custom-control custom-radio custom-control-inline">
                                        <input
                                            type="radio"
                                            v-model="editPropertyData.garage"
                                            id="customRadioInline6"
                                            value="No"
                                            name="garage"
                                            class="custom-control-input"
                                        />
                                        <label class="custom-control-label" for="customRadioInline6">NO</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-md-3 label-title">
                                Piture
                                <span class="required">*</span>
                            </label>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview1" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic1}`" ref="editImageDisplay" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload1" accept=".png, .jpg, .jpeg"
                                        v-on:change="editAttachImage"
                                        ref="editPropertyImage" />
                                        <label for="imageUpload1"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview2" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic2}`" ref="editImage2Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload2" accept=".png, .jpg, .jpeg"
                                        v-on:change="editAttachImage2"
                                        ref="editPropertyImage2" />
                                        <label for="imageUpload2"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                        <div class="avatar-preview">
                                        <img id="imagePreview3" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic3}`" ref="editImage3Display" />
                                        </div>
                                        <div class="avatar-edit">
                                            <input type='file' id="imageUpload3" accept=".png, .jpg, .jpeg"
                                            v-on:change="editAttachImage3"
                                            ref="editPropertyImage3" />
                                            <label for="imageUpload3"></label>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                        <img id="imagePreview4" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic3}`" ref="editImage4Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload4" accept=".png, .jpg, .jpeg"
                                        v-on:change="editAttachImage4"
                                        ref="editPropertyImage4" />
                                        <label for="imageUpload4"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-md-3 label-title">
                            </label>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                        <img id="imagePreview5" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic4}`" ref="editImage5Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload5" accept=".png, .jpg, .jpeg"
                                        v-on:change="editAttachImage5"
                                        ref="editPropertyImage5" />
                                        <label for="imageUpload5"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                        <img id="imagePreview6" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic5}`" ref="editImage6Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload6" accept=".png, .jpg, .jpeg"
                                        v-on:change="editAttachImage6"
                                        ref="editPropertyImage6" />
                                        <label for="imageUpload6"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview7" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic6}`" ref="editImage7Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload7" accept=".png, .jpg, .jpeg"
                                        v-on:change="editAttachImage7"
                                        ref="editPropertyImage7" />
                                        <label for="imageUpload7"></label>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                            <img id="imagePreview8" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic7}`" ref="editImage8Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload8" accept=".png, .jpg, .jpeg"
                                        v-on:change="editAttachImage8"
                                        ref="editPropertyImage8" />
                                        <label for="imageUpload8"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <label class="col-md-3 label-title">
                            </label>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                        <div class="avatar-preview">
                                        <img id="imagePreview9" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic8}`" ref="editImage9Display" />
                                        </div>
                                        <div class="avatar-edit">
                                            <input type='file' id="imageUpload9" accept=".png, .jpg, .jpeg"
                                            v-on:change="editAttachImage9"
                                            ref="editPropertyImage9"/>
                                            <label for="imageUpload9"></label>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                        <div class="avatar-preview">
                                        <img id="imagePreview10" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic9}`" ref="editImage10Display" />
                                        </div>
                                        <div class="avatar-edit">
                                            <input type='file' id="imageUpload10" accept=".png, .jpg, .jpeg"
                                            v-on:change="editAttachImage10"
                                            ref="editPropertyImage10" />
                                            <label for="imageUpload10"></label>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                        <div class="avatar-preview">
                                        <img id="imagePreview11" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic10}`" ref="editImage11Display" />
                                        </div>
                                        <div class="avatar-edit">
                                            <input type='file' id="imageUpload11" accept=".png, .jpg, .jpeg"
                                            v-on:change="editAttachImage11"
                                            ref="editPropertyImage11" />
                                            <label for="imageUpload11"></label>
                                        </div>
                                </div>
                            </div>
                            <div class="col-md-2">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                        <img id="imagePreview12" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic11}`" ref="editImage12Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload12" accept=".png, .jpg, .jpeg"
                                        v-on:change="editAttachImage12"
                                        ref="editPropertyImage12" />
                                        <label for="imageUpload12"></label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Update Property</button>
                        </div>
                    </div>
                </form>
        </b-modal>
        <b-modal ref="updateRentModal" hide-footer title="Update Rent">
            <form v-on:submit.prevent="updateProperty">
                <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Rent Price</label>
                            <input type="text" class="form-control"
                                v-model="editPropertyData.rent_price"
                                id="rent_price"
                                name="rent_price"
                                placeholder="Enter Property Rent" />
                            <div class="invalid-feedback" v-if="errors.rent_price">{{errors.rent_price[0]}}</div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12">
                        <label for="exampleFormControlInput1">Select Operator</label>
                        <select class="form-control" v-model="editPropertyData.operator" id="exampleFormControlSelect1">
                             <option value="">Select Operator</option>
                            <option value="+"> + </option>
                            <option value="-"> - </option>
                        </select>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Security Price <span class="text-danger"></span> </label>
                            <input type="text" class="form-control"
                                v-model="editPropertyData.security_price"
                                id="rent_price"
                                name="rent_price"
                                placeholder="0" />
                            <div class="invalid-feedback" v-if="errors.rent_price">{{errors.rent_price[0]}}</div>
                        </div>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Company Comession</label>
                            <input type="text" class="form-control"
                                v-model="editPropertyData.company_commession"
                                id="rent_price"
                                name="rent_price"
                                placeholder="0" />
                            <div class="invalid-feedback" v-if="errors.company_commession">{{errors.company_commession[0]}}</div>
                        </div>
                    </div>
                </div>
                 <div class="row">
                    <div class="col-lg-12 col-md-12 col-sm-12">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Paid Date</label>
                            <input type="date" class="form-control"
                                v-model="editPropertyData.paid_date"
                                id="rent_price"
                                name="rent_price"
                                />
                            <div class="invalid-feedback" v-if="errors.paid_date">{{errors.paid_date[0]}}</div>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-success" style="width: 300px; margin-left: 69px;">Update Rent</button>
                </div>
            </form>
        </b-modal>
    </div>
</template>

<script>
import * as adminService from "../../services/admin_service";
import * as PropertiesService from "../../services/properties_service";
import * as userService from "../../services/user_service";
import * as adminNewService from "../../services/admin_new_service"
import * as authService from '../../services/auth_service';
import * as LandloardService from "../../services/landloard_service";
import * as reservedService from '../../services/reserved_service';
import { VueEditor } from "vue2-editor";

    export default {
        name: "Admin-Dashboard",
        components: {
            VueEditor,
        },
        data () {
            return{
                searchQuery: null,
                //  admin property
                loading:true,
                properties:[],
                moreExistsEngaged: false,
                profile: this.$store.state.profile,
                visitors:[],
                password: {
                    current_password: '',
                    new_password: '',
                    new_password_confirmation: ''
                },
                users:[],
                invoices:[],
                invoiceQuery:'',
                loadMoreInvoice: false,
                pendings:[],
                approveds:[],
                sectors:[],
                totals:[],
                totalPenddingRent:[],
                favourits:[],
                reacted:[],
                managers:[],
                editPropertyData: {},
                // add Staff
                userQuery:"",
                reactQuery:"",
                q:"",
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
                moreExistsLandlord: false,
                moreExistsReserved: false,
                nextPage: 0,
                errors: {},
            //   Show All Landlord
                employees: [],
                emps:[],
                reacts:[],
                cities:[],
                editAreaEmployeeData: {},
                moreExistsProperties: false,
                moreExistsFavourits: false,
                nextPage: 0,
                errors: {},
                cities:[],
                employee: {
                    name: "",
                    email: "",
                    password: "",
                    password_confirmation: "",
                    phone:"",
                    city_id: "" ,
                    avatar:''
                },
                moreExistsStaff: false,
                nextPage: 0,
                errors: {},
                //   Show Tenant
                cities:[],
                EmployeeData: {
                    name:'',
                    city:'',
                    sector:'',
                },
                moreExists: false,
                nextPage: 0,
                city: 0,
                sector:0,
                errors: {},
                reserveds:[],
                engaged:[],
                landlords:[],
                engageCount:[],
                query:"",
                moreExists: false,
                nextPage: 0,
                errors: {},
                favourits: [],
                cities:[],
                editEmployeeData: {},
                protypes: [],
                nextPage: 0,
                errors: {},
                manag: {
                    user_id: '',
                    property_id:'',
                    comment:'',
                },
                paidRent:"",
                rents:"",
                managers:[],
                pendingRent:"",
                areaManagers:{},
                managerData:{
                    name:'',
                    city:'',
                    sector:'',
                }

            }
        },
        computed: {
                resultQuery(){
                    if(this.searchQuery){
                        alert(this.searchQuery);
                    return this.properties.filter((property)=>{
                        return this.searchQuery.toLowerCase().split(' ').every(v => property.user.name.toLowerCase().includes(v))
                    })
                    }else{
                        return this.properties;
                    }
                }
            },
        mounted() {
            this.getProperty();
            this.getProperties();
            this.getTotalPropertyCount();
            this.getProTypeData();
            this.getTotalRentCount();
            this.getUser();
            this.getCity();
            this.getManager();
            this.getAreaManaer();
            this.getAreaEmployee();
            this.getEmployee();
            this.getPendingRent();
            this.getPaidRent();
            this.getTotalRentProperty();
            this.getReservedProperty();
            this.getFavourit();
        },
        methods: {
                getFavourit:async function (){
                    try {
                        const response = await adminService.getFavourit();
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
                updateProfile: async function() {
                    try {
                        const formData = new FormData();
                        formData.append('name', this.profile.name);
                        formData.append('phone', this.profile.phone);
                        formData.append('avater', this.profile.avatar);
                        formData.append('cities', this.profile.cities);

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
                editAttachImageProfile(){
                    this.profile.avatar = this.$refs.editAvatar.files[0];
                    let reader = new FileReader();
                    reader.addEventListener('load',function(){
                        this.$refs.editAvatarDisplay.src = reader.result;
                    }.bind(this),false);
                    reader.readAsDataURL(this.profile.avatar)
                },
                smartinvoice: function () {
                  var printContents = document.getElementById('smartinvoice').innerHTML;
                    var originalContents = document.body.innerHTML;
                    document.body.innerHTML = printContents;
                    window.print();
                    document.body.innerHTML = originalContents;

                },
                getProperty: async function () {
                    try {
                        const response = await adminService.getProperty();
                        this.properties = response.data.data;
                        if (response.data.current_page < response.data.last_page) {
                        this.moreExistsProperties = true;
                        this.nextPage = response.data.current_page + 1;
                        } else {
                        this.moreExistsProperties = false;
                        }
                    } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred!",
                        time: 5000,
                        });
                    }
                },
                getProperties: async function () {
                    try {
                        const response = await adminService.getProperties();
                        this.engaged = response.data.data;
                        if (response.data.current_page < response.data.last_page) {
                        this.moreExistsEngaged = true;
                        this.nextPage = response.data.current_page + 1;
                        } else {
                        this.moreExistsEngaged = false;
                        }
                    } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred!",
                        time: 5000,
                        });
                    }
                },
                loadProperties: async function () {
                        try {
                            const response = await adminService.loadProperties(this.nextPage);
                            if (response.data.current_page < response.data.last_page) {
                            this.moreExistsEngaged = true;
                            this.nextPage = response.data.current_page + 1;
                            } else {
                            this.moreExistsEngaged = false;
                            }
                            response.data.data.forEach((data) => {
                            this.engaged.push(data);
                            });
                        } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred during load more properties",
                            time: 5000,
                            });
                        }
                },
                getReservedProperty: async function () {
                    try {
                        const response = await adminService.getReservedProperty();
                        this.reserveds = response.data.data;
                        // if (response.data.current_page < response.data.last_page) {
                        // this.moreExists = true;
                        // this.nextPage = response.data.current_page + 1;
                        // } else {
                        // this.moreExists = false;
                        // }
                    } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred!",
                        time: 5000,
                        });
                    }
                },
                searchProperty:async function () {
                    try {
                        const q = {
                        q: this.q
                        };
                        const response = await adminService.searchProperty(q);
                        console.log(response);
                        this.properties = response.data;
                    } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred",
                            time: 5000
                            });
                        }
                },
                updateProperty: async function () {
                    try {
                        const formData = new FormData();
                        formData.append("title", this.editPropertyData.title);
                        formData.append("description", this.editPropertyData.description);
                        formData.append("property_type", this.editPropertyData.propertytype_id);
                        formData.append("city", this.editPropertyData.city_id);
                        formData.append("sector", this.editPropertyData.sector_id);
                        formData.append("badrooms", this.editPropertyData.badrooms);
                        formData.append("bathrooms", this.editPropertyData.bathrooms);
                        formData.append("address", this.editPropertyData.address);
                        formData.append("unit", this.editPropertyData.unit);
                        formData.append("marital_status", this.editPropertyData.marital_status);
                        formData.append("size", this.editPropertyData.size);
                        formData.append("rent_price", this.editPropertyData.rent_price);
                        formData.append("operator", this.editPropertyData.operator);
                        formData.append("security_price", this.editPropertyData.security_price);
                        formData.append("company_commession", this.editPropertyData.company_commession);
                        formData.append("paid_date", this.editPropertyData.paid_date);
                        formData.append("tvlounge", this.editPropertyData.tv_lounged);
                        formData.append("furnished", this.editPropertyData.furnished);
                        formData.append("garage", this.editPropertyData.garage);
                        formData.append("pic1", this.editPropertyData.pic1);
                        formData.append("pic2", this.editPropertyData.pic2);
                        formData.append("pic3", this.editPropertyData.pic3);
                        formData.append("pic4", this.editPropertyData.pic4);
                        formData.append("pic5", this.editPropertyData.pic5);
                        formData.append("pic6", this.editPropertyData.pic6);
                        formData.append("pic7", this.editPropertyData.pic7);
                        formData.append("pic8", this.editPropertyData.pic8);
                        formData.append("pic9", this.editPropertyData.pic9);
                        formData.append("pic10", this.editPropertyData.pic10);
                        formData.append("pic11", this.editPropertyData.pic11);
                        formData.append("pic12", this.editPropertyData.pic12);
                        formData.append("_method", "put");
                        const response = await PropertiesService.updateProperty(
                        this.editPropertyData.id,
                        formData
                        );
                        this.properties.map((properties) => {
                        if (properties.id == response.data.id) {
                            for (let key in response.data) {
                            properties[key] = response.data[key];
                            }
                        }
                        });
                        this.hideEditModal();
                        this.flashMessage.success({
                        message: "Property Updated successfully!",
                        time: 5000,
                        });
                    } catch (error) {
                        switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        default:
                            this.flashMessage.error({
                            message: "Some error occured !",
                            time: 500,
                            });
                            break;
                        }
                    }
                },
                editProperty: async function (property) {
                    this.editPropertyData = { ...property };
                    this.$refs.editProperty.show();
                },
                getProTypeData: async function () {
                    try {
                        const response = await PropertiesService.getProTypeData();
                        this.protypes = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred!",
                        time: 5000,
                        });
                    }
                },
                getCity:async function(){
                    try {
                        const response = await adminService.getCity();
                        this.cities = response.data;
                    } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                    }
                },
                getSectors: async function () {
                        try {
                            const response = await PropertiesService.getSectors({
                                params: {
                                    city_id: this.editPropertyData.city_id
                                    }
                            }).then(function(response){
                                    this.sectors = response.data;
                                }.bind(this));
                            } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred!",
                            time: 5000,
                            });
                        }
                },
                deleteProperty: async function (property) {
                    if (!window.confirm("Are you sure you want to delete this Property")) {
                        return;
                    }
                    try {
                        const responce = await PropertiesService.deleteProperty(property.id);
                        this.properties = this.properties.filter((obj) => {
                        return obj.id != property.id;
                        });
                        this.flashMessage.success({
                        message: "Property deleted successfuly!",
                        time: 5000,
                        });
                    } catch (error) {
                        this.flashMessage.error({
                        message: "Some thing going wrong!",
                        time: 5000,
                        });
                    }
                },
                searchUser:async function () {
                    try {
                        const userQuery = {
                        userQuery: this.userQuery
                        };
                        const response = await userService.searchUser(userQuery);
                        this.users = response.data;
                    } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred",
                            time: 5000
                            });
                        }
                },
                searchReact:async function () {
                    try {
                        const reactQuery = {
                        reactQuery: this.reactQuery
                        };
                        const response = await adminService.searchReact(reactQuery);
                        this.favourits = response.data.data;
                    } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred",
                            time: 5000
                            });
                        }
                },
                getUser:async function(){
                    try {
                        const response = await userService.getUser();
                        this.users = response.data.data;
                         if (response.data.current_page < response.data.last_page) {
                        this.moreExistsStaff = true;
                        this.nextPage = response.data.current_page + 1;
                        } else {
                        this.moreExistsStaff = false;
                        }
                        } catch (error) {
                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                    }
                },
                loadUser:async function() {
                    try {
                            const response =  await userService.loadUser(this.nextPage)
                            if(response.data.current_page < response.data.last_page){
                                this.moreExistsStaff = true;
                                this.nextPage = response.data.current_page + 1;
                            }else{
                                this.moreExistsStaff = false;
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
                invoiceprint:function(){
                     var printContents = document.getElementById('invoiceprint').innerHTML;
                    var originalContents = document.body.innerHTML;

                    document.body.innerHTML = printContents;

                    window.print();

                    document.body.innerHTML = originalContents;
                },
                paidPropertyRent: async function (engaged) {
                    if (
                        !window.confirm("Are you sure you want to paid rent of this Property")
                    ) {
                        return;
                    }
                    try {
                        const response = await PropertiesService.paidPropertyRent(engaged.id);
                        this.flashMessage.success({
                        message: "Rent Paid Successfuly!",
                        time: 5000,
                        });
                    } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred!",
                        time: 5000,
                        });
                    }
                },
                unPaidPropertyRent:async function (engaged) {
                    if (
                        !window.confirm("Are you sure you know that this Property Rent is not Paid yet")
                        ) {
                        return;
                        }
                    try {
                        const response = await adminService.unPaidPropertyRent(engaged.id);
                        this.flashMessage.success({
                            message: 'Your Successfully Change this property Rent type',
                            time : 5000
                        });
                    } catch (error) {
                        this.flashMessage.errors({
                            message:'Some error occured!',
                            time: 5000,
                        });
                    }
                },
                loadProperty: async function () {
                        try {
                            const response = await adminNewService.loadProperty(this.nextPage);
                            if (response.data.current_page < response.data.last_page) {
                            this.moreExistsProperties = true;
                            this.nextPage = response.data.current_page + 1;
                            } else {
                            this.moreExistsProperties = false;
                            }
                            response.data.data.forEach((data) => {
                            this.properties.push(data);
                            });
                        } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred during load more properties",
                            time: 5000,
                            });
                        }
                },
                searchInvoiceQuery:async function(){
                    try {
                        const invoiceQuery = {
                        invoiceQuery: this.invoiceQuery
                        };
                        const response = await adminService.searchInvoiceQuery(invoiceQuery);
                        this.engaged = response.data;
                        } catch (error) {
                                this.flashMessage.error({
                                message: "Some error occurred",
                                time: 5000
                                });
                            }
                },
                loadInvoiceProperty:async function(){
                    try {
                            const response =  await LandloardService.loadInvoiceProperty(this.nextPage)
                            if(response.data.current_page < response.data.last_page){
                                this.loadMoreInvoice = true;
                                this.nextPage = response.data.current_page + 1;
                            }else{
                                this.loadMoreInvoice = false;
                            }
                            response.data.data.forEach(data => {
                            this.engaged.push(data);
                        });
                    } catch (error) {
                        this.flashMessage.error({
                            message: "Some error occurred during load more properties",
                            time:5000
                        });
                    }
                },
                getPaidRent:async function(){
                    try {
                        const response = await adminService.getPaidRent();
                        this.paidRent = response.data;
                    } catch (error) {

                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                    }
                },
                getTotalRentProperty:async function(){
                    try {
                        const response = await adminService.getTotalRentProperty();
                        this.rents = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                    }
                },
                getPendingRent:async function(){
                    try {
                        const response = await LandloardService.getPendingRent();
                        this.pendingRent = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                    }
                },
                getAreaManaer:async function(){
                    try {
                        const response = await adminNewService.getAreaManaer();
                        console.log(response , "get Area manager");
                        this.areaManagers  = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                            message: 'Some error occurred!',
                            time: 5000,
                        });
                    }
                },
                createAreaManager:async function(){
                    try {
                        const response = await adminNewService.createAreaManager(this.managerData);
                        this.managers.unshift(response.data);
                        this.flashMessage.success({
                            message: 'Area Manager Successfully created',
                            time:5000,
                        });
                    } catch (error) {
                        this.flashMessage.error({
                            message: 'some error occurred!',
                            time: 5000,
                        });
                    }
                },
                createAreaEmployee:async function(){
                    try {
                        const response = await adminNewService.createAreaEmployee(this.EmployeeData);
                        this.employees.unshift(response.data);
                        this.flashMessage.success({
                            message: 'Area Employee Successfully created',
                            time:5000,
                        });
                        this.getAreaEmployee();
                    } catch (error) {
                        this.flashMessage.error({
                            message: 'some error occurred!',
                            time: 5000,
                        });
                    }
                },
                getAreaEmployee:async function (){
                    try {
                            const response = await adminNewService.getAreaEmployee();
                            this.employees = response.data;
                        } catch (error) {
                            this.flashMessage.error({
                                message:'some error occurred!',
                                time: 5000,
                            });
                    }
                },
                editAreaEmployee: async function(employee) {
                    this.editAreaEmployeeData = {...employee};
                    this.$refs.editAreaEmployee.show();
                },
                getEmployee:async function() {
                    try {
                        const response = await adminNewService.getEmployee();
                        this.emps = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                    message: "Some error occurred!",
                    time: 5000,
                    });
                    }
                },
                deleteEmployee: async function (employee) {
                    if (!window.confirm("Are you sure you want to delete this Area Employee")) {
                        return;
                    }
                    try {
                        const response = await adminNewService.deleteEmployee(employee.id);
                        this.employees = this.employees.filter((obj) => {
                        return obj.id != employee.id;
                        });
                        this.flashMessage.success({
                        message: "Area Employee deleted successfuly!",
                        time: 5000,
                        });
                    } catch (error) {
                        this.flashMessage.error({
                        message: "Some thing going wrong!",
                        time: 5000,
                        });
                    }
                },
                getManager:async function(){
                    try {
                        const response  = await adminNewService.getManager();
                        this.managers = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                            message: 'some error occurred!',
                            time: 5000,
                        });
                    }
                },
                getTotalPropertyCount:async function(){
                    try {
                        const response = await adminService.getTotalPropertyCount();
                        this.totals = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                    }
                },
                ReservationCancell: async function (reserve) {
                        if (!window.confirm("Are you sure you want to Cancel this Reservation")) {
                            return;
                        }
                        try {
                            const response = await PropertiesService.ReservationCancell(reserve.id);
                            // this.properties = this.properties.filter(obj => {
                            //             return obj.id !=property.id;
                            //     });
                            this.flashMessage.success({
                            message: "Property Reservation Cancell Successfuly!",
                            time: 5000,
                            });
                        } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred!",
                            time: 5000,
                            });
                        }
                },
                getTotalRentCount:async function(){
                    try {
                        const response = await adminService.getTotalRentCount();
                        this.totalrent = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                    }
                },
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
                getSector: async function () {
                        try {
                            const response = await PropertiesService.getSector({
                                params: {
                                    city_id: this.managerData.city,
                                    }
                            }).then(function(response){
                                    this.sectors = response.data;
                                }.bind(this));
                            } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred!",
                            time: 5000,
                            });
                        }
                },
                getSectorEmployee: async function () {
                        try {
                            const response = await PropertiesService.getSectorEmployee({
                                params: {
                                    city_id: this.EmployeeData.city
                                    }
                            }).then(function(response){
                                    this.sectors = response.data;
                                }.bind(this));
                            } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred!",
                            time: 5000,
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
                showRentModal(engage) {
                    this.editPropertyData = { ...engage };
                    this.$refs.updateRentModal.show();
                },
                hideRentModal() {
                    this.$refs.updateRentModal.hide();
                },
                hideModal() {
                    this.$refs.managerModal.hide();
                },
                hideEditModal(){
                    this.$refs.editManager.hide();
                },
                showAreaModal() {
                    this.$refs.areaModal.show();
                },
                hideAreaModal() {
                    this.$refs.areaModal.hide();
                },
                showAreaEmployeeModal() {
                    this.$refs.areaEmployeeModal.show();
                },
                hideAreaEmployeeModal() {
                    this.$refs.areaEmployeeModal.hide();
                },
                showAnnoucemnetModal() {
                    this.$refs.announceModal.show();
                },
                hideAnnoucemnetModal() {
                    this.$refs.announceModal.hide();
                },
                hideEditModal(){
                    this.$refs.editManager.hide();
                },
                showHide: function (e) {
                    this.showName = e.target.value == "1";
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
                editProfileImage(){
                    this.profile.avatar = this.$refs.editProfileAvatar.files[0];
                    let reader = new FileReader();
                    reader.addEventListener('load',function(){
                        this.$refs.editProfileAvatarDisplay.src = reader.result;
                    }.bind(this),false);
                    reader.readAsDataURL(this.profile.avatar)
                },
                editAttachImage(){
                    this.editManagerData.avatar = this.$refs.editAvatarImage.files[0];
                    let reader = new FileReader();
                    reader.addEventListener('load',function(){
                        this.$refs.editAvatarImageDisplay.src = reader.result;
                    }.bind(this),false);
                    reader.readAsDataURL(this.editManagerData.avatar);
                },
                getAllRenter:async function(){
                    try {

                        const response = await adminService.getAllRenter();
                        this.employees = response.data;
                        // if(response.data.current_page < response.data.last_page)
                        //     {
                        //         this.moreExists = true;
                        //         this.nextPage = response.data.current_page + 1;
                        //     }
                        //     else{
                        //         this.moreExists = false;
                        //     }
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
                            this.reserved = this.reserved.filter(obj => {
                                        return obj.id !=reserve.id;
                                });
                                this.flashMessage.success({
                                    message: 'Reserved Property deleted successfuly!',
                                    time:5000
                                });
                        } catch (error) {
                            console.log(error + '');
                                this.flashMessage.error({
                                    message: 'Some thing going wrong!',
                                    time:5000
                                });
                        }
                },
                searchEngagedProperty:async function () {
                    try {
                    const query = {
                    query: this.query
                    };
                    const response = await reservedService.searchEngagedProperty(query);
                    this.reserved = response.data;
                    } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred",
                            time: 5000
                            });
                        }
                },
                editAttachImage() {
                    this.editPropertyData.pic1 = this.$refs.editPropertyImage.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImageDisplay.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic1);
                },
                editAttachImage2() {
                    this.editPropertyData.pic2 = this.$refs.editPropertyImage2.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage2Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic2);
                },
                editAttachImage3() {
                    this.editPropertyData.pic3 = this.$refs.editPropertyImage3.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage3Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic3);
                },
                editAttachImage4() {
                    this.editPropertyData.pic4 = this.$refs.editPropertyImage4.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage4Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic4);
                },
                editAttachImage5() {
                    this.editPropertyData.pic5 = this.$refs.editPropertyImage5.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage5Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic5);
                },
                editAttachImage6() {
                    this.editPropertyData.pic6 = this.$refs.editPropertyImage6.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage6Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic6);
                },
                editAttachImage7() {
                    this.editPropertyData.pic7 = this.$refs.editPropertyImage7.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage7Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic7);
                },
                editAttachImage8() {
                    this.editPropertyData.pic8 = this.$refs.editPropertyImage8.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage8Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic8);
                },
                editAttachImage9() {
                    this.editPropertyData.pic9 = this.$refs.editPropertyImage9.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage9Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic9);
                },
                editAttachImage10() {
                    this.editPropertyData.pic10 = this.$refs.editPropertyImage10.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage10Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic10);
                },
                editAttachImage11() {
                    this.editPropertyData.pic11 = this.$refs.editPropertyImage11.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage11Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic11);
                },
                editAttachImage12() {
                    this.editPropertyData.pic12 = this.$refs.editPropertyImage12.files[0];
                    let reader = new FileReader();
                    reader.addEventListener(
                        "load",
                        function () {
                        this.$refs.editImage12Display.src = reader.result;
                        }.bind(this),
                        false
                    );
                    reader.readAsDataURL(this.editPropertyData.pic12);
                },
                loadFavouritedProperty:async function() {
                    try {
                            const response =  await adminService.loadFavouritedProperty(this.nextPage)
                            if(response.data.current_page < response.data.last_page){
                                this.moreExistsFavourits = true;
                                this.nextPage = response.data.current_page + 1;
                            }else{
                                this.moreExistsFavourits = false;
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
            },
                created: function(){
                    this.getCity()
                }
    }

</script>

<style>
@media only screen and (max-width:660px ){
         .mobiledash{
             display: flex;
             justify-content: center;
         }
         .mobiledash{
             margin-left: 0px !important;
         }
      }

      .form-popup {
  display: none;
  position: absolute;
  width: 300px;
  right: 50px;
  border: 3px solid #F1F1F1;
  z-index: 9;
}
.form-container {
  max-width: 300px;
  padding: 10px;
  background-color: white;
}
.form-container input[type=text], .form-container input[type=password] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #F1F1F1;
}
.form-container input[type=text]:focus, .form-container input[type=password]:focus {
  background-color: #ddd;
  outline: none;
}

.form-container .btnsubmit {
  color: white;
}
.form-container .btn:hover, .open-button:hover {
  opacity: 1;
}
#show-btn{
    z-index: 2;
    border-radius: 50px;
    height: 80px;
    width: 80px;
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
        height: 120px;
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
