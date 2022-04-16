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
                                                        <select class="form-control" id="exampleFormControlSelect2" v-model="invoiceQuery" @change='searchInvoiceQuery()'>
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
                                                                <th scope="col">Size</th>
                                                                <th scope="col">Price</th>
                                                                <th scope="col">Rent</th>
                                                                <th scope="col">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody v-for="(invoice , index) in invoices" :key="index">
                                                            <tr v-if="invoice.rent==='paid'" class="text-success">
                                                                <th scope="row">{{index+1}}</th>
                                                                <td>
                                                                    <router-link :to="{name:'show-landlord', params: {id: invoice.id}}">
                                                                        {{invoice.property_name}}
                                                                    </router-link>
                                                                </td>
                                                                <td>{{invoice.city_name}}</td>
                                                                <td>{{invoice.size}} {{invoice.unit}}</td>
                                                                <td v-if="invoice.cnic">
                                                                    <router-link :to="{name:'tenant-invoice', params: {id: invoice.id}}">
                                                                        {{invoice.rent_price}}
                                                                    </router-link>
                                                                </td>
                                                                <td v-else>
                                                                    <router-link :to="{name:'invoice-landlord', params: {id: invoice.id}}">
                                                                        {{invoice.rent_price}}
                                                                    </router-link>
                                                                </td>
                                                                <td>{{invoice.rent}}</td>
                                                                <td>
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
                                                            <tr v-else class="text-danger">
                                                                <th scope="row">{{index+1}}</th>
                                                                 <td>
                                                                    <router-link :to="{name:'show-landlord', params: {id: invoice.id}}">
                                                                        {{invoice.property_name}}
                                                                    </router-link>
                                                                </td>
                                                                <td>{{invoice.city_name}}</td>
                                                                <td>{{invoice.size}} {{invoice.unit}}</td>
                                                                 <td v-if="invoice.cnic">
                                                                    <router-link :to="{name:'tenant-invoice', params: {id: invoice.id}}">
                                                                        {{invoice.rent_price}}
                                                                    </router-link>
                                                                </td>
                                                                <td v-else>
                                                                    <router-link :to="{name:'invoice-landlord', params: {id: invoice.id}}">
                                                                        {{invoice.rent_price}}
                                                                    </router-link>
                                                                </td>
                                                                <td>{{invoice.rent}}</td>
                                                                <td>
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
                                                    <div v-show="moreExistsInvoice">
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
                    <b-tab title="Properties">
                        <b-card-text>
                            <div class="container-fluid">
                                <div class="card shadow mb-4">
                                    <div class="card-header d-flex bd-highlight">
                                        <!-- <h6 class="bd-highlight font-weight-bold text-success">Total Properties :{{totals}}</h6> -->
                                        <form v-on:submit.prevent="searchProperty" class="form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto" >
                                            <div class="form-group">
                                                <select class="form-control" id="exampleFormControlSelect2" v-model="q" @change='searchProperty()'>
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
                                                        <td>{{property.user.name}}</td>
                                                        <td>{{property.user.phone}}</td>
                                                        <td>{{property.city.city_name}}</td>
                                                        <td>{{property.propertytype.property_name}}</td>
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
                                                            <router-link :to="{name:'show-landlord', params: {id: property.id}}">
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
                                    <div v-show="moreExists">
                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                            <i class="fas fa-arrow-down"></i>
                                        </button>
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
                                        <!-- <h6 class="bd-highlight font-weight-bold text-success">Favourited Properties:{{totalfavourits}}</h6> -->
                                        <form v-on:submit.prevent="searchReact" class="form-inline  justify-content-center md-form form-sm active-cyan-2 bd-highlight font-weight-bold  d-block ml-auto" >
                                            <div class="form-group">
                                                <select class="form-control" id="exampleFormControlSelect2" v-model="reactQuery" @change='searchReact()'>
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
                                        <!-- <div v-show="moreExists">
                                            <button type="button" class="btn btn-info btn-sm" v-on:click="loadFavouritedProperty">
                                                <i class="fas fa-arrow-down"></i>
                                            </button>
                                        </div> -->
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Suspended Properties">
                        <div class="card mt-3">
                            <div class="card-body">
                                <!-- <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchCities">
                                <i class="fas fa-search" aria-hidden="true"></i>
                                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                                    aria-label="Search" v-model="query" v-on:keyup="searchProperties">
                                </form> -->
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">User</th>
                                            <th scope="col">Phone</th>
                                            <th scope="col">City</th>
                                            <th scope="col">Property Type</th>
                                            <th scope="col">Area</th>
                                            <th scope="col">rent</th>
                                            <th scope="col">Status</th>
                                            <th scope="col">Reasons of Suspenssion</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(suspenssion , index) in suspenssions" :key="index">
                                            <th scope="row">{{index+1}}</th>
                                            <td>{{suspenssion.name}}</td>
                                            <td>{{suspenssion.phone}}</td>
                                            <td>{{suspenssion.city_name}}</td>
                                            <td>{{suspenssion.property_name}}</td>
                                            <td>{{suspenssion.size}} {{suspenssion.unit}}</td>
                                            <td>{{suspenssion.rent_price}}</td>
                                            <td>{{suspenssion.status}}</td>
                                            <td>{{suspenssion.reason_cancellation}}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteSuspendedProperty(suspenssion)">
                                                <i class="fas fa-trash"></i>
                                                </button>
                                                <button type="button"  class="btn btn-success btn-sm" v-on:click="editProperty(suspenssion)">
                                                <i class="fas fa-pencil-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- <div v-show="moreExists">
                                <button type="button" class="btn btn-info btn-sm"  v-on:click="loadProperty" >
                                    <i class="fas fa-arrow-down">Load More</i>
                                </button>
                            </div> -->
                        </div>
                    </b-tab>
                    <b-tab title="Annoucment">
                        <b-card-text>
                            <div class="container-fluid">
                                <div class="card shadow mb-4">
                                    <div class="card-header">
                                        <div class="row">
                                            <div class="col-md-6 mx-auto">
                                                <form>
                                                    <div class="form-group">
                                                        <label for="announcement" class="text-warning text-center"><i class="fas fa-bullhorn fa-2x"></i> Create an Annoucement</label>
                                                        <input type="text" id="inputdesign" class="form-control">
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
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, vitae.</p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div id="talkbubble" >
                                                    <span class="text-muted">10:00 Am</span>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, vitae.</p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div id="talkbubble" >
                                                    <span class="text-muted">10:00 Am</span>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, vitae.</p>
                                                </div>
                                            </div>
                                            <div class="col-md-3">
                                                <div id="talkbubble" >
                                                    <span class="text-muted">10:00 Am</span>
                                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, vitae.</p>
                                                </div>
                                            </div>
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
                                                <form v-on:submit.prevent="updateLandlordProfile">
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
                                                                <input type="text" v-model="profile.email" class="form-control" readonly>
                                                            </div>
                                                            <div class="form-group">
                                                                <label for="City" class="p-0 m-0">City</label>
                                                                <select class="form-control mt-1" v-model="profile.city">
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
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import * as LandloardService from "../../services/landloard_service";
import * as AdminService from "../../services/admin_service.js";
import * as authService from '../../services/auth_service';

    export default {
        name: "Dashboard",
        data() {
            return {
                loading:true,
                suspenssions: [],
                profile: this.$store.state.profile,
                password: {
                    current_password: '',
                    new_password: '',
                    new_password_confirmation: ''
                },
                invoiceQuery:'',
                invoices:[],
                totals:[],
                totalfavourits:[],
                favourits:[],
                reactQuery:'',
                properties:[],
                q:'',
                moreExists:false,
                rents:[],
                moreExistsInvoice: false,
                nextPage: 0,
                verify_password: '',
                errors:{},
            }
        },
        mounted() {
           this.getProperties();
           this.getProperty();
           this.getTotalRentCount();
           this.getSuspendedProperty();
        },
        methods: {
                getProperties: async function () {
                    try {
                        const response = await LandloardService.getProperties();
                        this.invoices = response.data.data;
                        if (response.data.current_page < response.data.last_page) {
                        this.moreExistsInvoice = true;
                        this.nextPage = response.data.current_page + 1;
                        } else {
                        this.moreExistsInvoice = false;
                        }
                    } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred!",
                        time: 5000,
                        });
                    }
                },
                loadProperties:async function() {
                    try {
                            const response =  await LandloardService.loadProperties(this.nextPage)
                            if(response.data.current_page < response.data.last_page){
                                this.moreExistsInvoice = true;
                                this.nextPage = response.data.current_page + 1;
                            }else{
                                this.moreExistsInvoice = false;
                            }
                            response.data.data.forEach(data => {
                            this.invoices.push(data);
                        });
                    } catch (error) {
                        console.log(error + '');
                        this.flashMessage.error({
                            message: "Some error occurred during load more users",
                            time:5000
                        });
                    }
                },
                searchInvoiceQuery:async function(){
                    try {
                        const invoiceQuery = {
                        invoiceQuery: this.invoiceQuery
                        };
                        const response = await LandloardService.searchInvoiceQuery(invoiceQuery);
                        this.invoices = response.data;
                        } catch (error) {
                                this.flashMessage.error({
                                message: "Some error occurred",
                                time: 5000
                                });
                            }
                },
                getTotalRentCount:async function(){
                    try {
                        const response = await LandloardService.getTotalRentCount();
                        this.rents = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                    }
                },
                searchProperty:async function () {
                    try {
                        const q = {
                        q: this.q
                        };
                        const response = await LandloardService.searchProperty(q);
                        this.properties = response.data;
                    } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred",
                            time: 5000
                            });
                        }
                },
                getProperty: async function () {
                    try {
                        const response = await LandloardService.getProperty();
                        this.properties = response.data.data;
                        if (response.data.current_page < response.data.last_page) {
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1;
                        } else {
                        this.moreExists = false;
                        }
                    } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred!",
                        time: 5000,
                        });
                    }
                },
                loadProperty: async function () {
                        try {
                            const response = await LandloardService.loadProperty(this.nextPage);
                            if (response.data.current_page < response.data.last_page) {
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                            } else {
                            this.moreExists = false;
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
                searchReact:async function () {
                    try {
                        const reactQuery = {
                        reactQuery: this.reactQuery
                        };
                        const response = await LandloardService.searchReact(reactQuery);
                        this.favourits = response.data.data;
                    } catch (error) {
                            this.flashMessage.error({
                            message: "Some error occurred",
                            time: 5000
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
                getSuspendedProperty:async function(){
                    try {
                        const response = await AdminService.getSuspendedProperty();
                        console.log(response);
                        this.suspenssions = response.data;
                    } catch (error) {
                        console.log(error + '');
                        this.flashMessage.error({
                            message: 'some error occurred Please try again',
                            time: 2000
                        });
                    }
                },
                deleteSuspendedProperty:async function (suspenssion){
                    if(!window.confirm("Are you sure you want to delete this Suspended Property")){
                        return;
                    }
                    try {
                        await AdminService.deleteSuspendedProperty(suspenssion.id);
                        this.suspenssions = this.suspenssions.filter(obj => {
                                    return obj.id !=suspenssion.id;
                            });
                            this.flashMessage.success({
                                message: 'Suspended Propery deleted successfuly!',
                                time:5000
                            });
                    } catch (error) {
                            this.flashMessage.error({
                                message: 'Some thing going wrong!',
                                time:5000
                            });
                    }
                },
        },
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
