<template>
    <div class="w-100">
        <div class="container-fluid">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Invoice">
                        <b-card-text>
                            <div class="container-fluid">
                                <div class="card shadow mb-4">
                                    <div class="card-header d-flex bd-highlight">
                                        <h6 class="bd-highlight font-weight-bold text-success">Total Properties :{{totalProperties}} </h6>
                                        <h6 class="bd-highlight font-weight-bold text-success d-block ml-auto">Total Rent :{{allRent}} </h6>
                                    </div>
                                </div>
                                <div class="card mt-3">
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table table-hover" style="width:100%">
                                                <thead>
                                                <tr>
                                                    <th scope="col" style="width: 5%;">#</th>
                                                    <th scope="col">Landlord</th>
                                                    <th scope="col">Phone</th>
                                                    <th scope="col">Property</th>
                                                    <th scope="col">City</th>
                                                    <th scope="col">Area</th>
                                                    <th scope="col">Rent Price</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Rent</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody v-for="(property , index) in properties" :key="index">
                                                    <tr v-if="property.rent==='paid'" class="text-success">
                                                        <th scope="row">{{index+1}}</th>
                                                       <router-link :to="{name:'user-profile-csr', params: {id: property.user_id}}">
                                                            <td class="text-success">{{property.user.name}}</td>
                                                        </router-link>
                                                        <!-- <td>{{property.user.name}}</td> -->
                                                        <td>{{property.user.phone}}</td>
                                                        <td>{{property.propertytype.property_name}}</td>
                                                        <td>{{property.city.city_name}}</td>
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
                                                        <router-link :to="{name:'show-csr', params: {id: property.id}}">
                                                            <button
                                                                type="button"
                                                                class="btn btn-warning btn-sm"
                                                                >
                                                                <i class="fas fa-eye"></i>
                                                            </button>
                                                        </router-link>
                                                        </td>
                                                    </tr>
                                                    <tr v-else>
                                                        <th scope="row">{{index+1}}</th>
                                                        <router-link :to="{name:'user-profile-csr', params: {id: property.user_id}}">
                                                            <td class="text-success">{{property.user.name}}</td>
                                                        </router-link>
                                                        <!-- <td>{{property.user.name}}</td> -->
                                                        <td>{{property.user.phone}}</td>
                                                        <td>{{property.propertytype.property_name}}</td>
                                                        <td>{{property.city.city_name}}</td>
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
                                                        <router-link :to="{name:'show-csr', params: {id: property.id}}">
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
                                        <div v-show="moreExists">
                                            <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                                <i class="fas fa-arrow-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Total Property">
                        <b-card-text>
                            <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex bd-highlight">
                                    <h6 class="bd-highlight font-weight-bold text-success">Total Properties :{{totalProperties}} </h6>
                                    <h6 class="bd-highlight font-weight-bold text-success d-block ml-auto">Total Rent :{{allRent}} </h6>
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
                                                <th scope="col">Property</th>
                                                <th scope="col">City</th>
                                                <th scope="col">Area</th>
                                                <th scope="col">Rent Price</th>
                                                <th scope="col">Status</th>
                                                <th scope="col">Rent</th>
                                                <th scope="col">Marital Status</th>
                                                <th scope="col">React</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                            </thead>
                                            <tbody v-for="(property , index) in properties" :key="index">
                                               <tr v-if="property.rent==='paid'" class="text-success">
                                                        <th scope="row">{{index+1}}</th>
                                                        <router-link :to="{name:'user-profile-csr', params: {id: property.user_id}}">
                                                            <td class="text-success">{{property.user.name}}</td>
                                                        </router-link>
                                                        <td>{{property.user.phone}}</td>
                                                        <td>{{property.propertytype.property_name}}</td>
                                                        <td>{{property.city.city_name}}</td>
                                                        <td>{{property.size}} {{property.unit}}</td>
                                                        <td>{{property.rent_price}}</td>
                                                        <td>{{property.status}}</td>
                                                        <td>{{property.rent}}</td>
                                                        <td>{{property.marital_status}}</td>
                                                        <td>
                                                            <i class="fa fa-heart text-danger" > {{property.favorite_count}}</i>
                                                            <i class="fa fa-thumbs-up text-success" > {{property.like_count}}</i>
                                                            <i class="fa fa-eye text-info" >{{property.seen_count}}</i>
                                                        </td>
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
                                                        <router-link :to="{name:'show-csr', params: {id: property.id}}">
                                                            <button
                                                                type="button"
                                                                class="btn btn-warning btn-sm"
                                                                >
                                                                <i class="fas fa-eye"></i>
                                                            </button>
                                                        </router-link>
                                                        </td>
                                                </tr>
                                                <tr v-else>
                                                    <th scope="row">{{index+1}}</th>
                                                    <router-link :to="{name:'user-profile-csr', params: {id: property.user_id}}">
                                                        <td class="text-success">{{property.user.name}}</td>
                                                    </router-link>
                                                    <td>{{property.user.phone}}</td>
                                                    <td>{{property.propertytype.property_name}}</td>
                                                    <td>{{property.city.city_name}}</td>
                                                    <td>{{property.size}} {{property.unit}}</td>
                                                    <td>{{property.rent_price}}</td>
                                                    <td>{{property.status}}</td>
                                                    <td>{{property.rent}}</td>
                                                    <td>{{property.marital_status}}</td>
                                                    <td>
                                                        <i class="fa fa-heart text-danger" > {{property.favorite_count}}</i>
                                                        <i class="fa fa-thumbs-up text-success" > {{property.like_count}}</i>
                                                        <i class="fa fa-eye text-info" >{{property.seen_count}}</i>
                                                    </td>
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
                                                    <router-link :to="{name:'show-csr', params: {id: property.id}}">
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
                                    <div v-show="moreExists">
                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                            <i class="fas fa-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Rerserved Properties">
                        <b-card-text>
                            <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex bd-highlight">
                                    <h6 class="bd-highlight font-weight-bold text-success">Rerserved Properties :{{totalReservedProperty}}</h6>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th scope="col" style="width: 5%;">#</th>
                                                 <th scope="col">Renter</th>
                                                <th scope="col">Property</th>
                                                <th scope="col">City</th>
                                                <th scope="col">property size</th>
                                                <th scope="col">Rent Price</th>
                                                <th scope="col">Marital Status</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody v-for="(reserve , index) in reserved" :key="index">
                                            <tr v-if="reserve.rent ==='paid'" class="text-success">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{reserve.name}}</td>
                                                <td>{{reserve.property_name}}</td>
                                                <td>{{reserve.city_name}}</td>
                                                <td>{{reserve.size}} {{reserve.unit}}</td>
                                                <td>{{reserve.rent_price}}</td>
                                                <td>{{reserve.m_status}}</td>
                                                <td>{{reserve.phone}}</td>
                                                <td>
                                                    <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg" class="btn btn-danger btn-sm" v-on:click="deleteReservedProperty(reserve)">
                                                        <i class="fa fa-ban" aria-hidden="true"></i>
                                                    </button>
                                                    <router-link :to="{name:'show-csr', params: {id: reserve.id}}">
                                                        <button
                                                            type="button"
                                                            class="btn btn-warning btn-sm"
                                                            >
                                                            <i class="fas fa-eye"></i>
                                                        </button>
                                                    </router-link>
                                                </td>
                                            </tr>
                                            <tr v-else class="text-danger">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{reserve.property_name}}</td>
                                                <td>{{reserve.city_name}}</td>
                                                <td>{{reserve.size}} {{reserve.unit}}</td>
                                                <td>{{reserve.rent_price}}</td>
                                                <td>{{reserve.name}}</td>
                                                <td>{{reserve.m_status}}</td>
                                                <td>{{reserve.phone}}</td>
                                                <td>
                                                    <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg" class="btn btn-danger btn-sm" v-on:click="deleteReservedProperty(reserve)">
                                                       <i class="fa fa-ban" aria-hidden="true"></i>
                                                    </button>
                                                    <router-link :to="{name:'show-csr', params: {id: reserve.id}}">
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
                                    <div v-show="moreExistsReserved">
                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadReservedProperty">
                                            <i class="fas fa-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Engages Property">
                        <b-card-text>
                            <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex bd-highlight">
                                    <h6 class="bd-highlight font-weight-bold text-success">Engaged Property :{{runningProperty}} </h6>
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
                                                    <th scope="col">Renter</th>
                                                    <th scope="col">Phone</th>
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
                                                    <td>{{engage.name}}</td>
                                                    <td>{{engage.phone}}</td>
                                                    <td>
                                                        <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg" class="btn btn-danger btn-sm" v-on:click="deleteReservedProperty(engage)">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                        <router-link :to="{name:'show-csr', params: {id: engage.id}}">
                                                            <button
                                                                type="button"
                                                                class="btn btn-warning btn-sm"
                                                                >
                                                                <i class="fas fa-eye"></i>
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
                                                    <td>{{engage.name}}</td>
                                                    <td>{{engage.phone}}</td>
                                                    <td>
                                                        <button type="button" data-toggle="modal" data-target=".bd-example-modal-lg" class="btn btn-danger btn-sm" v-on:click="deleteReservedProperty(engage)">
                                                            <i class="fas fa-trash"></i>
                                                        </button>
                                                        <router-link :to="{name:'show-csr', params: {id: engage.id}}">
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
                                        <div v-show="moreExistsEngaged">
                                            <button type="button" class="btn btn-info btn-sm" v-on:click="loadEngagedProperty">
                                                <i class="fas fa-arrow-down"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Paid Rent">
                        <b-card-text>
                            <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex bd-highlight">
                                    <h6 class="bd-highlight font-weight-bold text-success">Piad Rent Property :{{paidRent}}</h6>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th scope="col" style="width: 5%;">#</th>
                                                <th scope="col">Landloard</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Property</th>
                                                <th scope="col">City</th>
                                                <th scope="col">Sector</th>
                                                <th scope="col">Property Size</th>
                                                <th scope="col">Rent Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(paid , index) in paids" :key="index">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{paid.name}}</td>
                                                <td>{{paid.phone}}</td>
                                                <td>{{paid.property_name}}</td>
                                                <td>{{paid.city_name}}</td>
                                                <td>{{paid.sector}}</td>
                                                <td>{{paid.size}} {{paid.unit}}</td>
                                                <td>{{paid.rent_price}}</td>
                                                <td>
                                                <router-link :to="{name:'show-csr', params: {id: paid.id}}">
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
                                    <div v-show="moreExistsPaid">
                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadPaidProperty">
                                            <i class="fas fa-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Un - Paid Rent">
                        <b-card-text>
                            <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex bd-highlight">
                                    <h6 class="bd-highlight font-weight-bold text-success">Un-Paid Property :{{penddingRent}}</h6>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th scope="col" style="width: 5%;">#</th>
                                                <th scope="col">Landloard</th>
                                                <th scope="col">Phone</th>
                                                <th scope="col">Property</th>
                                                <th scope="col">City</th>
                                                <th scope="col">Sector</th>
                                                <th scope="col">Property Size</th>
                                                <th scope="col">Rent Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(Unpaid , index) in Unpaids" :key="index">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{Unpaid.name}}</td>
                                                <td>{{Unpaid.phone}}</td>
                                                <td>{{Unpaid.property_name}}</td>
                                                <td>{{Unpaid.city_name}}</td>
                                                <td>{{Unpaid.sector}}</td>
                                                <td>{{Unpaid.size}} {{Unpaid.unit}}</td>
                                                <td>{{Unpaid.rent_price}}</td>
                                                <td>
                                                    <router-link :to="{name:'show-csr', params: {id: Unpaid.id}}">
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
                                     <div v-show="moreExistsUnPaid">
                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadUnPaidProperty">
                                            <i class="fas fa-arrow-down"></i>
                                        </button>
                                    </div>
                                </div>
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
                     <!-- <b-tab title="Profile">
                        <b-card-text>
                            <div class="container-fluid">
                                <div class="card shadow">
                                    <div class="card-header d-flex bd-highlight">
                                        <h6 class="bd-highlight font-weight-bold text-primary">Profile/Setting</h6>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="card">
                                        <h3 class="bg-success p-5 text-center text-white">Change Profile Picture</h3>
                                            <div class="card-body">
                                                <form v-on:submit.prevent ="updateImage">
                                                    <div class="row">
                                                        <div class="col-md-6 mx-auto ">
                                                            <div class="avatar-upload" >
                                                                <div class="avatar-preview" style="width:100%;height:180px;">
                                                                        <img :src="`${$store.state.serverPath}storage/${profile.avatar}`"  id="imagePreview1"  ref="editAvatarDisplay" style="width:100%;height:170px;border: none;" />
                                                                </div>
                                                                <div class="avatar-edit">
                                                                    <input type='file' v-on:change="editAttachImage" ref="editAvatar" id="imageUpload" accept=".png, .jpg, .jpeg" />
                                                                    <label for="imageUpload"></label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <button type="btn" class="btn btn-primary d-block mx-auto mt-5"><span class="ti-check"></span>Change</button>
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
                                                                    <input type="text" v-model="profile.email" id="name" class="form-control" readonly />
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
                        </b-card-text>
                    </b-tab> -->
                </b-tabs>
            </b-card>
        </div>
        <b-modal id="modal-lg" hide-footer ref="editProperty" size="lg">
                <form v-on:submit.prevent="updateProperty">
                    <div class="section postdetails">
                        <h4>Update Details</h4>
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
                                        >{{errors.property_type[0]}}
                                    </div>
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
                                        <select class="form-control" id="city" v-model="editPropertyData.city_id" @change='getSectors()'>
                                        <option value>Select City</option>
                                        <option
                                            v-for="(city , index) in cities"
                                            :key="index"
                                            v-bind:value="city.id"
                                        >{{city.city_name}}</option>
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
        <b-modal id="modal-lg" hide-footer ref="editAssignProperty" size="lg">
                <form v-on:submit.prevent="updateProperty">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1" v-model="editPropertyData.name">
                                    <option value="Select Manager">Select Manager</option>
                                    <option v-for="(user , index) in managers" :key="index" v-bind:value="user.id" >{{user.name}}</option>
                                </select>
                            </div>
                        </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <select class="form-control" id="exampleFormControlSelect1">
                                        <option>Select City</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                    </select>
                                </div>
                            </div>
                    </div>


                    <div class="form-group">
                        <label for="exampleFormControlSelect1">Sector</label>
                        <select class="form-control" id="exampleFormControlSelect1">
                            <option>Select Sectors</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </form>
        </b-modal>
    </div>
</template>

<script>
import * as csr_service from '../../services/csr_service';
import * as PropertiesService from "../../services/properties_service";
import * as AdminService from "../../services/admin_service";
import * as CsrService from "../../services/csr_service";
import * as ManagerService from "../../services/manager_service";
import * as reservedService from '../../services/reserved_service';
import * as adminService from '../../services/admin_service';
import * as landlordService from '../../services/landloard_service';

import { VueEditor } from "vue2-editor";
import { throws } from "assert";
    export default {
        name: "Dashboard",
        components: {
                    VueEditor,
                },
        data() {
            return{
                totalProperties:[],
                totalReservedProperty:[],
                totalPenddingProperty:[],
                runningProperty:[],
                favouritProperty:[],
                propertyRent:[],
                paidRent:[],
                penddingRent:[],
                properties:[],
                query: "",
                cities: [],
                sectors: [],
                rules: [],
                allRent: [],
                engaged:[],
                city: 0,
                properties: [],
                protypes: [],
                reserved:[],
                favourits:[],
                editPropertyData: {},
                showName: false,
                showImage: true,
                moreExists: false,
                moreExistsReserved: false,
                moreExistsEngaged: false,
                moreExistsPaid:false,
                moreExistsUnPaid:false,
                readMore: false,
                nextPage: 0,
                errors: {},
                managers:[],
                paids:[],
                Unpaids:[],
                manag: {
                user_id: '',
                property_id:'',
                comment:'',
                },
            }
        },
        mounted() {
            this.totalProperty();
            this.totalReserved();
            this.totalPendding();
            this.totalRunningProperty();
            this.totalfavouritedProperty();
            this.totalPropertyRent();
            this.totalPaidRent();
            this.totalPenddingRent();
            this.getCity();
            this.getProTypeData();
            this.getSectorUpdate();
            this.getProperty();
            this.ReservedProperty();
            this.allPropertyRent();
            this.getEngagedProperty();
            this.getpaidPropteryRent();
            this.getUnpaidPropteryRent();
        },
        methods: {
            totalProperty:async function(){
                try {
                    const response = await csr_service.totalProperty();
                    this.totalProperties= response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getpaidPropteryRent:async function(){
                try {
                    const response = await PropertiesService.getpaidPropteryRent();
                    this.paids = response.data.data;
                    if (response.data.current_page < response.data.last_page) {
                            this.moreExistsPaid = true;
                            this.nextPage = response.data.current_page + 1;
                        } else {
                            this.moreExistsPaid = false;
                        }
                } catch (error) {
                    this.flashMessage.error({
                        message:'Some error occurred!',
                        time: 5000,
                    });
                }
            },
            loadPaidProperty: async function () {
                try {
                    const response = await PropertiesService.loadPaidProperty(this.nextPage);
                    if (response.data.current_page < response.data.last_page) {
                    this.moreExistsPaid = true;
                    this.nextPage = response.data.current_page + 1;
                    } else {
                    this.moreExistsPaid = false;
                    }
                    response.data.data.forEach((data) => {
                    this.paids.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occurred during load more properties",
                    time: 5000,
                    });
                }
            },
            getUnpaidPropteryRent:async function(){
                try {
                    const response = await PropertiesService.getUnpaidPropteryRent();
                    this.Unpaids = response.data.data;
                    if (response.data.current_page < response.data.last_page) {
                            this.moreExistsUnPaid = true;
                            this.nextPage = response.data.current_page + 1;
                        } else {
                            this.moreExistsUnPaid = false;
                        }
                } catch (error) {
                    this.flashMessage.error({
                        message:'Some error occurred!',
                        time: 5000,
                    });
                }
            },
            loadUnPaidProperty: async function () {
                try {
                    const response = await PropertiesService.loadUnPaidProperty(this.nextPage);
                    if (response.data.current_page < response.data.last_page) {
                    this.moreExistsUnPaid = true;
                    this.nextPage = response.data.current_page + 1;
                    } else {
                    this.moreExistsUnPaid = false;
                    }
                    response.data.data.forEach((data) => {
                    this.Unpaids.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occurred during load more properties",
                    time: 5000,
                    });
                }
            },
            showAssignProperty: async function (property) {
                this.editPropertyData = { ...property };
                this.$refs.showProperty.show();
            },
            editAssignProperty: async function (property) {
                this.editAssignPropertyData = { ...property };
                this.$refs.editAssignProperty.show();
            },
            allPropertyRent:async function (){
                try {
                    const responce = await PropertiesService.allPropertyRent();
                    this.allRent = responce.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error Occurred!',
                        time: 2000,
                    });
                }
            },
            totalReserved:async function(){
                try {
                    const response = await csr_service.totalReserved();
                    this.totalReservedProperty = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occurred',
                        time:5000
                    });
                }
            },
            totalPendding:async function(){
                try {
                    const response = await csr_service.totalPendding();
                    this.totalPenddingProperty = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occurred',
                        time:5000
                    });
                }
            },
            totalRunningProperty:async function(){
                try {
                    const response = await csr_service.totalRunningProperty();
                    this.runningProperty = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occurred',
                        time:5000
                    });
                }
            },
            getEngagedProperty:async function(){
                try {
                    const response = await PropertiesService.getEngagedProperty();
                    this.engaged = response.data.data;
                    if (response.data.current_page < response.data.last_page) {
                            this.moreExistsEngaged = true;
                            this.nextPage = response.data.current_page + 1;
                        } else {
                            this.moreExistsEngaged = false;
                        }
                } catch (error) {
                    console.log(error + '');
                    this.flashMessage.error({
                        message: 'Some error occurred!',
                        time: 5000,
                    });
                }
            },
            loadEngagedProperty: async function () {
                try {
                    const response = await PropertiesService.loadEngagedProperty(this.nextPage);
                    if (response.data.current_page < response.data.last_page) {
                    this.moreExistsReserved = true;
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
            totalfavouritedProperty:async function(){
                try {
                    const response = await csr_service.totalfavouritedProperty();
                    this.favouritProperty = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occurred',
                        time:5000
                    });
                }
            },
            totalPropertyRent:async function(){
                try {
                    const response = await csr_service.totalPropertyRent();
                    this.propertyRent = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occurred',
                        time:5000
                    });
                }
            },
            totalPaidRent:async function(){
                try {
                    const response = await csr_service.totalPaidRent();
                    this.paidRent = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occurred',
                        time:5000
                    });
                }
            },
            totalPenddingRent:async function(){
                try {
                    const response = await csr_service.totalPenddingRent();
                    this.penddingRent = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occurred',
                        time:5000
                    });
                }
            },
            getManager:async function() {
                try {
                    const responce = await ManagerService.getManager();
                    this.managers = responce.data;
                } catch (error) {
                    this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000,
                });
                }
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
            openform:function(){
                var x= document.getElementById("myForm");
                if (x.style.display === "none") {
                x.style.display = "block";
            } else {
                x.style.display = "none";
            }
            },
            editProperty: async function (property) {
                this.editPropertyData = { ...property };
                this.$refs.editProperty.show();
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
            getCity: async function () {
                try {
                    const response = await PropertiesService.getCity().then(
                    function (response) {
                        this.cities = response.data;
                    }.bind(this)
                    );
                } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occurred!",
                    time: 5000,
                    });
                }
            },
            getSector: async function () {
                    try {
                        const response = await PropertiesService.getSector({
                            params: {
                                city_id: this.editPropertyData.city
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
            getSectorUpdate: async function () {
            try {
                const response = await PropertiesService.getSectorUpdate();
                this.sectors = response.data;
            } catch (error) {
                this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000,
                });
            }
            },
            getProperty: async function () {
            try {
                const response = await PropertiesService.getProperty();
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
            showProperty: async function (property) {
            this.editPropertyData = { ...property };
            this.$refs.showProperty.show();
            },
            editProperty: async function (property) {
            this.editPropertyData = { ...property };
            this.$refs.editProperty.show();
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
            showModal() {
            this.$refs.newPropertyModal.show();
            },
            hideModal() {
            this.$refs.newPropertyModal.hide();
            },
            searchProperty:async function () {
                        try {
                                const query = {
                                query: this.query
                                };
                                const response = await PropertiesService.searchProperty(query);
                                this.properties = response.data;
                        } catch (error) {
                                this.flashMessage.error({
                                message: "Some error occurred",
                                time: 5000
                                });
                            }
            },
            editAssignProperty: async function (property) {
            this.editPropertyData = { ...property };
            this.$refs.assignProperty.show();
            },
            hideEditModal() {
            this.$refs.editProperty.hide();
            },
            approvedProperty: async function (property) {
            if (!window.confirm("Are you sure you want to Approve this Property")) {
                return;
            }
            try {
                const response = await PropertiesService.approvedProperty(property.id);
                // this.properties = this.properties.filter(obj => {
                //             return obj.id !=property.id;
                //     });
                this.flashMessage.success({
                message: "Property Approved Successfuly!",
                time: 5000,
                });
            } catch (error) {
                this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000,
                });
            }
            },
            PropertyOk: async function (property) {
            if (!window.confirm("Are you sure you want to Occupied this Property")) {
                return;
            }
            try {
                const response = await PropertiesService.PropertyOk(property.id);
                // this.properties = this.properties.filter(obj => {
                //             return obj.id !=property.id;
                //     });
                this.flashMessage.success({
                message: "Property Occupied Successfuly!",
                time: 5000,
                });
            } catch (error) {
                this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000,
                });
            }
            },
            reloadProperty: async function (property) {
            if (!window.confirm("Are you sure you want to Reload this Property")) {
                return;
            }
            try {
                const response = await PropertiesService.reloadProperty(property.id);
                this.properties = this.properties.filter((obj) => {
                return obj.id != property.id;
                });
                this.flashMessage.success({
                message: "Property Reloaded Successfuly!",
                time: 5000,
                });
            } catch (error) {
                this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000,
                });
            }
            },
            paidPropertyRent: async function (property) {
            if (
                !window.confirm("Are you sure you want to paid rent of this Property")
            ) {
                return;
            }
            try {
                const response = await PropertiesService.paidPropertyRent(property.id);
                // this.properties = this.properties.filter((obj) => {
                // return obj.id != property.id;
                // });
                this.flashMessage.success({
                message: "Rent Paid Successfuly!",
                time: 5000,
                });
               this.getProperty();
            } catch (error) {
                this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000,
                });
            }
            },
            showHide: function (e) {
            this.showName = e.target.value == "1";
            },
            loadProperty: async function () {
            try {
                const response = await PropertiesService.loadProperty(this.nextPage);
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
            loadRule: async function () {
            try {
                const response = await PropertiesService.loadRule(this.nextPage);
                if (response.data.current_page < response.data.last_page) {
                this.readMore = true;
                this.nextPage = response.data.current_page + 1;
                } else {
                this.readMore = false;
                }
                response.data.data.forEach((data) => {
                this.rules.push(data);
                });
            } catch (error) {
                this.flashMessage.error({
                message: "Some error occurred during load more Cities",
                time: 5000,
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
            deleteReservedProperty: async function (reserve){
                    if(!window.confirm("Are you sure you want to delete this Reserved Property")){
                        return;
                    }
                    try {
                        const responce = await reservedService.deleteReservedProperty(reserve.id);
                        this.reserved = this.reserved.filter(obj => {
                                    return obj.id !=reserve.id;
                            });
                            this.flashMessage.success({
                                message: 'Reserved Property deleted successfuly!',
                                time:5000
                            });
                    } catch (error) {
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
            ReservedProperty:async function(){
                try {
                    const response = await PropertiesService.ReservedProperty();
                    this.reserved = response.data.data;
                    if (response.data.current_page < response.data.last_page) {
                            this.moreExistsReserved = true;
                            this.nextPage = response.data.current_page + 1;
                        } else {
                            this.moreExistsReserved = false;
                        }
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                }
            },
            loadReservedProperty: async function () {
                try {
                    const response = await PropertiesService.loadReservedProperty(this.nextPage);
                    if (response.data.current_page < response.data.last_page) {
                    this.moreExistsReserved = true;
                    this.nextPage = response.data.current_page + 1;
                    } else {
                    this.moreExistsReserved = false;
                    }
                    response.data.data.forEach((data) => {
                    this.reserved.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occurred during load more properties",
                    time: 5000,
                    });
                }
            },
            deleteReservedProperty: async function (reserve){
                    if(!window.confirm("Are you sure you want to delete this Reserved Property")){
                        return;
                    }
                    try {
                        const responce = await reservedService.deleteReservedProperty(reserve.id);
                        this.reserved = this.reserved.filter(obj => {
                                    return obj.id !=reserve.id;
                            });
                            this.flashMessage.success({
                                message: 'Reserved Property deleted successfuly!',
                                time:5000
                            });
                    } catch (error) {
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
            unPaidPropertyRent:async function (properties) {
                if (
                    !window.confirm("Are you sure you know that this Property Rent is not Paid yet")
                    ) {
                    return;
                    }
                try {
                    const response = await CsrService.unPaidPropertyRent(properties.id);
                    this.flashMessage.success({
                        message: 'Your Successfully Change this property Rent type',
                        time : 5000
                    });
                    this.getEngagedProperty();
                } catch (error) {
                    this.flashMessage.errors({
                        message:'Some error occured!',
                        time: 5000,
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
