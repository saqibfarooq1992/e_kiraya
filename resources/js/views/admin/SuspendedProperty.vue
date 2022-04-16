<template>
    <div class="w-100">
        <div class="container-fluid">
            <div>
                <b-tabs content-class="mt-3">
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
                     <b-tab title="Assign To Employee">
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
                     <b-tab title="Assign To Manager">
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
                                            <th scope="col">Area</th>
                                            <th scope="col">Property</th>
                                            <th scope="col">status</th>
                                            <th scope="col">rent</th>
                                            <th scope="col">Comments</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(assign , index) in assignEmployee" :key="index">
                                            <th scope="row">{{index+1}}</th>
                                            <td>{{assign.name}}</td>
                                            <td>{{assign.phone}}</td>
                                            <td>{{assign.city_name}}</td>
                                            <td>{{assign.size}} {{assign.unit}}</td>
                                            <td>{{assign.property_name}}</td>
                                            <td>{{assign.status}}</td>
                                            <td>{{assign.rent_price}}</td>
                                            <td>{{assign.reason_cancellation}}</td>
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
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import * as AdminService from "../../services/admin_service.js";
    export default {
        name: "Suspended",
        data() {
            return {
            suspenssions: [],
            AssignManager:[],
            assignEmployee:[],
            loading:true,

            };
        },
          mounted() {
            this.getSuspendedProperty();
            this.getAssignEmployee();
            this.getAssignManager();


          },
        methods: {
            getSuspendedProperty:async function(){
                try {
                     const response = await AdminService.getSuspendedProperty();
                    this.suspenssions = response.data;
                } catch (error) {
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
            getAssignEmployee:async function(params) {
              try {
                  const response = await AdminService.getAssignEmployee();
                  this.assignEmployee = response.data;
              } catch (error) {
                  this.flashMessage.error({
                      message: 'some error occurred Please try again',
                      time:200,
                  });
              }
            },
            getAssignManager:async function (params) {
              try {
                  const response = await AdminService.getAssignManager();
                  this.AssignManager = response.data;
              } catch (error) {
                  this.flashMessage.error({
                      message: 'some error occured Please try again',
                      time: 200,
                  });
              }
            },

            disableSubmission(btnSubmit) {
                btnSubmit.setAttribute("disabled", "disabled");
                this.btnSubmitOldHtml = btnSubmit.innerHTML;
                btnSubmit.innerHTML =
                    '<span class="fa fa-spinner fa-spin"></span> Please wait...';
            },
            enableSubmission(btnSubmit) {
                btnSubmit.removeAttribute("disabled");
                btnSubmit.innerHTML = this.btnSubmitOldHtml;
            },
        }
    };

</script>

<style>
   @media only screen and (max-width: 660px){
       .adonesicon{
           display: flex;
           justify-content: center;
       }
   }
</style>
