<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Add Area Employee</h6>
                    <div class="ml-auto">
                        <button id="show-btn" @click="showModal"
                            class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                            <span class="icon text-white-50">
                                <i class="far fa-plus-square"></i>
                            </span>
                            <span class="text-white">Add Area Employee</span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <b-modal ref="newAreaManagerModal" hide-footer size="lg" title="Add Area Employee">
                    <form v-on:submit.prevent="createAreaEmployee">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Employee</label>
                                    <select class="form-control" id="exampleFormControlSelect1" v-model="areaEmployeeData.employee">
                                    <option value="">Select Employee</option>
                                    <option v-for="(employee , index) in employees" :key="index" v-bind:value="employee.id">{{employee.name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                 <div class="form-group">
                                    <label for="exampleFormControlInput1">Phone</label>
                                    <input type="text" class="form-control"
                                        id="password_confirmation"
                                        v-model="areaEmployeeData.phone"
                                        placeholder="Enter Your Phone Number" />
                                    <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select City</label>
                                    <select class="form-control" id="exampleFormControlSelect1" v-model="areaEmployeeData.city">
                                    <option value="">Select City</option>
                                    <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select Sector</label>
                                    <select class="form-control" id="exampleFormControlSelect1" v-model="areaEmployeeData.sector">
                                    <option value="">Select Sector</option>
                                    <option v-for="(sector , index) in sectors" :key="index" v-bind:value="sector.id">{{sector.sector}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-21">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Comment</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="areaEmployeeData.comment"></textarea>
                                </div>
                            </div>
                        </div>
                            <div class="form-group">
                            <button type="submit" ref="btnSubmit" class="btn btn-success">Save Area Employee</button>
                            </div>
                    </form>
                </b-modal>
            </div>
             <div>
                <b-modal ref="editAreaEmployee" hide-footer size="lg" title="Edit City">
                    <form v-on:submit.prevent="updateAreaEmployee">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Employee</label>
                                    <select class="form-control" id="exampleFormControlSelect1" v-model="editAreaEmployeeData.employee_id">
                                    <option value="">Select Employee</option>
                                    <option v-for="(employee , index) in employees" :key="index" v-bind:value="employee.id">{{employee.name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                 <div class="form-group">
                                    <label for="exampleFormControlInput1">Phone</label>
                                    <input type="text" class="form-control"
                                        id="password_confirmation"
                                        v-model="editAreaEmployeeData.phone"
                                        placeholder="Enter Your Phone Number" />
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select City</label>
                                    <select class="form-control" id="exampleFormControlSelect1" v-model="editAreaEmployeeData.city_id">
                                    <option value="">Select City</option>
                                    <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlSelect1">Select Sector</label>
                                    <select class="form-control" id="exampleFormControlSelect1" v-model="editAreaEmployeeData.sector_id">
                                    <option value="">Select Sector</option>
                                    <option v-for="(sector , index) in sectors" :key="index" v-bind:value="sector.id">{{sector.sector}}</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-21">
                                <div class="form-group">
                                    <label for="exampleFormControlTextarea1">Comment</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="editAreaEmployeeData.comment"></textarea>
                                </div>
                            </div>
                        </div>
                            <div class="form-group">
                            <button type="submit" ref="btnSubmit" class="btn btn-success">Save Area Employee</button>
                            </div>
                    </form>
                </b-modal>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <!-- <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchCities">
                    <i class="fas fa-search" aria-hidden="true"></i>
                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" v-model="query" v-on:keyup="searchCities">
                    </form> -->
                      <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Employee</th>
                                    <th scope="col">phone</th>
                                    <th scope="col">City</th>
                                    <th scope="col">Sector</th>
                                    <th scope="col">Comment</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(area , index) in areaEmployees" :key="index">
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{area.name}}</td>
                                    <td>{{area.phone}}</td>
                                    <td>{{area.city_name}}</td>
                                    <td>{{area.sector}}</td>
                                    <td>{{area.comment}}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteAreaEmployee(area)">
                                        <i class="fas fa-trash"></i>
                                        </button>
                                        <button type="button"  class="btn btn-success btn-sm"  v-on:click="editAreaEmployees(area)">
                                        <i class="fas fa-pencil-alt"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                       </div>
                </div>
                 <!-- <div v-show="moreExists">
                    <button type="button" class="btn btn-info btn-sm"  v-on:click="loadCity" >
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div> -->
            </div>
        </div>
    </main>
</template>
<script>
    import * as areaEmployee from "../../services/area_employee_service";
    import * as employeeService from "../../services/employee_service";

    export default {
        name:"AreaManager",
        data(){
            return {
                query:"",
                managers:[],
                employees:[],
                areaEmployees:[],
                editAreaEmployeeData:[],
                areas:[],
                cities:[],
                sectors:[],
                areaEmployeeData:{
                    employee: '',
                    phone: '',
                    city:'',
                    sector: '',
                    comment: '',
                },
                moreExists: false,
                nextPage: 0,
                errors: {}
            }
        },
        mounted() {
            this.getEmployee();
            this.getCity();
            this.getSector();
            this.getAreaEmployee();
        },
        methods:{
            getEmployee:async function (){
                try {
                    const response = await areaEmployee.getEmployee();
                    this.employees= response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getCity:async function (){
                try {
                    const response = await areaEmployee.getCity();
                    this.cities = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getSector:async function (){
                try {
                    const response = await areaEmployee.getSector();
                    this.sectors = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            createAreaEmployee:async function () {
                try {
                    const response = await areaEmployee.createAreaEmployee(this.areaEmployeeData);
                    this.areaEmployees.unshift(response.data);
                        this.flashMessage.success({
                            message: 'Area Employee Data Added Successfuly!',
                            time:5000,
                    });
                    this.areaEmployeeData.employee= "";
                    this.areaEmployeeData.phone= "";
                    this.areaEmployeeData.city= "";
                    this.areaEmployeeData.sector= "";
                    this.areaEmployeeData.comment= "";
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
            getAreaEmployee:async function (){
                try {
                   const response = await employeeService.getAreaEmployee();
                   this.areaEmployees = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            updateAreaEmployee: async function (){
                try {
                    const response = await areaEmployee.updateAreaEmployee(this.editAreaEmployeeData.id, this.editAreaEmployeeData);
                    this.areaEmployees.map(areaEmployees=>{
                            if(areaEmployees.id == response.data.id){
                                for(let key in response.data){
                                    areaEmployees[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'Area Employee Updated successfully!',
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
            deleteAreaEmployee:async function (area){
                if(!window.confirm("Are you sure you want to delete this Area Employee?")){
                    return;
                }
                try {
                    await areaEmployee.deleteAreaEmployee(area.id);
                    this.areaEmployees = this.areaEmployees.filter(obj => {
                                return obj.id !=area.id;
                        });
                        this.flashMessage.success({
                            message: 'Area Employee deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            editAreaEmployees: async function(area) {
                this.editAreaEmployeeData = {...area};
                this.$refs.editAreaEmployee.show();
            },
            hideEditModal(){
              this.$refs.editAreaEmployee.hide();
            },
            showModal(){
                this.$refs.newAreaManagerModal.show();
            },
            hideModal(){
                this.$refs.newAreaManagerModal.hide();
            },

        }
    }
</script>
