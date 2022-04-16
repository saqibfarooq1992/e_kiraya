<template>
    <div class="w-100">
        <div class="container-fluid">
            <div>
                <b-tabs content-class="mt-3">
                    <b-tab title="Add City" active><p>
                        <div class="card shadow mb-4">
                            <div class="card-header d-flex bd-highlight">
                                <h6 class="bd-highlight font-weight-bold text-success">Adding City</h6>
                                <div class="ml-auto">
                                    <button id="show-btn2" @click="showCityModal"
                                        class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                                        <span class="icon text-white">
                                            <i class="far fa-plus-square"></i> Add City
                                        </span>
                                        <span class="text-white"></span>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div>
                            <b-modal ref="newCityModal" hide-footer title="Add City">
                                <form v-on:submit.prevent="createCity">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">City Name</label>
                                        <input type="text" class="form-control"
                                            v-model="citiesData.city_name"
                                            id="city_name"
                                            name="city_name"
                                            placeholder="Enter city name" />
                                        <div class="invalid-feedback" v-if="errors.city_name">{{errors.city_name[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" ref="btnSubmit" class="btn btn-success">Save city</button>
                                    </div>
                                </form>
                            </b-modal>
                        </div>
                        <div>
                            <b-modal ref="editCity" hide-footer size="lg" title="Edit City">
                                <form v-on:submit.prevent="updateCites">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">City Name</label>
                                        <input type="text" class="form-control"
                                            v-model="editCitiesData.city_name"
                                            id="city_name"
                                            name="city_name"/>
                                        <div class="invalid-feedback" v-if="errors.city_name">{{errors.city_name[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">Update city</button>
                                    </div>
                                </form>
                            </b-modal>
                        </div>
                        <div class="card mt-3">
                            <div class="card-body">
                                <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchCities">
                                    <i class="fas fa-search" aria-hidden="true"></i>
                                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                                    aria-label="Search" v-model="query" v-on:keyup="searchCities">
                                </form>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" style="width: 40%;">#</th>
                                            <th scope="col">City Name</th>
                                            <th scope="col" style="width: 10%;">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(city , index) in cities" :key="index">
                                            <th scope="row">{{index+1}}</th>
                                            <td>{{city.city_name}}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteCities(city)">
                                                <i class="fas fa-trash"></i>
                                                </button>
                                                <button type="button"  class="btn btn-success btn-sm"  v-on:click="editCities(city)">
                                                <i class="fas fa-pencil-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-show="moreExists">
                                <button type="button" class="btn btn-info btn-sm"  v-on:click="loadCity" >
                                    <i class="fas fa-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Add Sector">
                        <div class="card shadow mb-4">
                            <div class="card-header d-flex bd-highlight">
                                <h6 class="bd-highlight font-weight-bold text-success">Adding Sector</h6>
                                <div class="ml-auto">
                                    <button id="show-btn2" @click="showSectorModal"
                                        class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                                        <span class="icon text-white-50">
                                            <i class="far fa-plus-square"></i>
                                        </span>
                                        <span class="text-white">Add Sector</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <b-modal ref="newSectorModal" hide-footer size="lg" title="Add Sector">
                                <form v-on:submit.prevent="createSector">
                                    <div class="form-group add-title">
                                        <label class="col-sm-3 label-title">City</label>
                                        <div>
                                            <select class="form-control" id="badrooms" v-model="sector.city">
                                                <option value="">Select City</option>
                                                <option  v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                            </select>
                                            <div class="invalid-feedback" v-if="errors.city">{{errors.city[0]}}</div>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Sector/Town Name</label>
                                        <input type="text" class="form-control"
                                            v-model="sector.name"
                                            id="name"
                                            name="name"
                                            placeholder="Enter Sector name" />
                                        <div class="invalid-feedback" v-if="errors.name">{{errors.name[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" ref="btnSubmit" class="btn btn-success">Save Sector Name</button>
                                    </div>
                                </form>
                            </b-modal>
                        </div>
                        <div>
                            <b-modal ref="editSector" hide-footer size="lg" title="Edit Sector">
                                <form v-on:submit.prevent="updateSector">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">City</label>
                                            <select class="form-control" id="city" v-model="editSectorData.city_id">
                                                <option value="">Select City</option>
                                                <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                            </select>
                                    </div>
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Sector/Town Name</label>
                                        <input type="text" class="form-control"
                                            v-model="editSectorData.sector"
                                            id="sector"
                                            name="sector"/>
                                        <div class="invalid-feedback" v-if="errors.sector">{{errors.sector[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">Update Sector</button>
                                    </div>
                                </form>
                            </b-modal>
                        </div>
                        <div class="card mt-3">
                            <div class="card-body">
                                <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchSectors">
                                    <i class="fas fa-search" aria-hidden="true"></i>
                                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                                        aria-label="Search" v-model="query" v-on:keyup="searchSectors">
                                </form>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" style="width: 40%;">#</th>
                                            <th scope="col">Sector Name</th>
                                            <th scope="col">City Name</th>
                                            <th scope="col" style="width: 10%;">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(sector , index) in sectors" :key="index">
                                            <th scope="row">{{index+1}}</th>
                                            <td>{{sector.sector}}</td>
                                            <td>{{sector.city_name}}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteSector(sector)">
                                                <i class="fas fa-trash"></i>
                                                </button>
                                                <button type="button"  class="btn btn-success btn-sm"  v-on:click="editSector(sector)">
                                                <i class="fas fa-pencil-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-show="moreExistsSector">
                                <button type="button" class="btn btn-info btn-sm"  v-on:click="loadSector" >
                                    <i class="fas fa-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Add Rules">
                        <div class="card shadow mb-4">
                            <div class="card-header d-flex bd-highlight">
                                <h6 class="bd-highlight font-weight-bold text-success">Adding Rules</h6>
                                <div class="ml-auto">
                                    <button id="show-btn2" @click="showRoleModal"
                                        class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                                        <span class="icon text-white-50">
                                            <i class="far fa-plus-square"></i>
                                        </span>
                                        <span class="text-white">Add Rules</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <b-modal ref="newRuleModal" hide-footer size="lg" title="Add Rule">
                                <form v-on:submit.prevent="createRule">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Rules</label>
                                        <input type="text" class="form-control"
                                            v-model="rulesData.rule"
                                            id="rule"
                                            name="rule"
                                            placeholder="Enter Rule" />
                                        <div class="invalid-feedback" v-if="errors.rule">{{errors.rule[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit"  class="btn btn-success">Save Rule</button>
                                    </div>
                                </form>
                            </b-modal>
                        </div>
                        <div>
                            <b-modal ref="editRule" hide-footer size="lg" title="Edit Rule">
                                <form v-on:submit.prevent="updateRule">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Rules</label>
                                        <input type="text" class="form-control"
                                            v-model="editRuleData.rule"
                                            id="city_name"
                                            name="city_name"/>
                                        <div class="invalid-feedback" v-if="errors.rule">{{errors.rule[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">Update Rules</button>
                                    </div>
                                </form>
                            </b-modal>
                        </div>
                        <div class="card mt-3">
                            <div class="card-body">
                                <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchCities">
                                <i class="fas fa-search" aria-hidden="true"></i>
                                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                                    aria-label="Search" v-model="query" v-on:keyup="searchRule">
                                </form>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col" style="width:80%">Rules</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(rule , index) in rules" :key="index">
                                            <th scope="row">{{index+1}}</th>
                                            <td>{{rule.rule}}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteRule(rule)">
                                                <i class="fas fa-trash"></i>
                                                </button>
                                                <button type="button"  class="btn btn-success btn-sm"  v-on:click="editRules(rule)">
                                                <i class="fas fa-pencil-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-show="moreExists">
                                <button type="button" class="btn btn-info btn-sm"  v-on:click="loadRule" >
                                    <i class="fas fa-arrow-down"></i>
                                </button>
                            </div>
                        </div>
                    </b-tab>
                    <b-tab title="Add Property type">
                        <div class="card shadow mb-4">
                            <div class="card-header d-flex bd-highlight">
                                <h6 class="bd-highlight font-weight-bold text-success">Adding Property Type</h6>
                                <div class="ml-auto">
                                    <button id="show-btn2" @click="showPropertyTypeModal"
                                        class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                                        <span class="icon text-white-50">
                                            <i class="far fa-plus-square"></i>
                                        </span>
                                        <span class="text-white">Add Property Type</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <b-modal ref="newPropertyType" hide-footer size="lg" title="Add Property Type">
                                <form v-on:submit.prevent="createPropertyType">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Property Type</label>
                                        <input type="text" class="form-control"
                                            v-model="propertyType.property_name"
                                            id="name"
                                            name="name"
                                            placeholder="Enter Property Type" />
                                        <div class="invalid-feedback" v-if="errors.property_name">{{errors.property_name[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">Save Property Type</button>
                                    </div>
                                </form>
                            </b-modal>
                        </div>
                        <div>
                            <b-modal ref="editPropertyType" hide-footer size="lg" title="Edit Property Type">
                                <form v-on:submit.prevent="updatePropertyType">
                                    <div class="form-group">
                                        <label for="exampleFormControlInput1">Property Type</label>
                                        <input type="text" class="form-control"
                                            id="name"
                                            v-model="editPropertyType.property_name"
                                            name="name"/>
                                        <div class="invalid-feedback" v-if="errors.name">{{errors.property_name[0]}}</div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-success">Update Property Type</button>
                                    </div>
                                </form>
                            </b-modal>
                        </div>
                        <div class="card mt-3">
                            <div class="card-body">
                                <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchCities">
                                <i class="fas fa-search" aria-hidden="true"></i>
                                <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                                    aria-label="Search" v-model="query" v-on:keyup="searchProperties">
                                </form>
                                <table class="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col" style="width: 30%;">#</th>
                                            <th scope="col"  style="width: 40%;">Property Type</th>
                                            <th scope="col">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(property , index) in properties" :key="index">
                                            <th scope="row">{{index+1}}</th>
                                            <td>{{property.property_name}}</td>
                                            <td>
                                                <button type="button" class="btn btn-danger btn-sm" v-on:click="deletePropertyType(property)">
                                                <i class="fas fa-trash"></i>

                                                </button>
                                                <button type="button"  class="btn btn-success btn-sm" v-on:click="editProperty(property)">
                                                <i class="fas fa-pencil-alt"></i>
                                                </button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div v-show="moreExists">
                                <button type="button" class="btn btn-info btn-sm"  v-on:click="loadProperty" >
                                    <i class="fas fa-arrow-down">Load More</i>
                                </button>
                            </div>
                        </div>
                    </b-tab>
                </b-tabs>
            </div>
        </div>
    </div>
</template>

<script>
    import * as cityService from "../../services/city_service";
    import * as sectorService from "../../services/sector_service";
    import * as ruleService from "../../services/rule_service";
    import * as propertyType from "../../services/property_service";
    export default {
        name: "Add On's",
        data() {
            return {
            properties: [],
                editPropertyType: {},
                propertyType: {
                    property_name: "",
                },
                moreExistsSector: false,
                nextPage: 0,
                errors: {},

            rules: [],
              editRuleData: {},
            rulesData: {
                rule: '',
                },
              moreExists: false,
              nextPage: 0,
              errors: {},

              sectors: [],
              editSectorData: {},
            sector: {
                name: '',
                city:'',
                },
              moreSectorExists: false,
              nextPage: 0,
              errors: {},


              query:"",
              cities: [],
              editCitiesData: {},
            citiesData: {
                city_name: '',
                },
              moreExists: false,
              nextPage: 0,
              errors: {}
            };
        },
          mounted() {
            this.getCity();
            this.getSector();
            this.getRule();
            this.getPropertyType();

          },
        methods: {
            createPropertyType:async function(){
                try {
                    const response = await propertyType.createPropertyType(this.propertyType);
                    this.properties.unshift(response.data);
                    this.hideModel;
                    this.flashMessage.success({
                                message: 'Property Type Added Successfuly!',
                                time:5000,
                        });
                    this.propertyType.name= "";
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
            getPropertyType:async function() {
                try {
                    const response = await propertyType.getPropertyType();
                    this.properties = response.data.data;
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
            deletePropertyType:async function (property){
                if(!window.confirm("Are you sure you want to delete this Property Type")){
                    return;
                }
                try {
                   const response = await propertyType.deletePropertyType(property.id);
                    this.properties = this.properties.filter(obj => {
                                return obj.id !=property.id;
                        });
                        this.flashMessage.success({
                            message: 'Property Type deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            updatePropertyType: async function (){
                try {
                    const response = await propertyType.updatePropertyType(this.editPropertyType.id, this.editPropertyType);
                    this.properties.map(properties=>{
                            if(properties.id == response.data.id){
                                for(let key in response.data){
                                    properties[key] = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'Property Type Updated successfully!',
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
            showPropertyTypeModal() {
                this.$refs.newPropertyType.show();
            },
            hideModal() {
                this.$refs.newPropertyType.hide();
            },
            hideEditModal(){
              this.$refs.editPropertyType.hide();
            },
            editProperty: async function(property) {
                this.editPropertyType = {...property};
                this.$refs.editPropertyType.show();
            },
            loadProperty:async function() {
                try {
                        const response =  await propertyType.loadProperty(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.properties.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred during load more Cities",
                        time:5000
                    });
                }
            },
            searchProperties:async function () {
                try {
                const query = {
                query: this.query
                };
                const response = await propertyType.searchProperties(query);
                this.properties = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occurred",
                    time: 5000
                    });
                }
            },


            getRule:async function(){
                try {
                    const response = await ruleService.getRule();
                    this.rules = response.data.data;
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
            createRule:async function(){
                try {
                    const response = await ruleService.createRule(this.rulesData);
                    this.rules.unshift(response.data);
                        this.flashMessage.success({
                            message: 'Rule Added Successfuly!',
                            time:5000,
                    });
                    this.rulesData.rule= "";
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
            deleteRule:async function (rule){
                if(!window.confirm("Are you sure you want to delete this Rule")){
                    return;
                }
                try {
                    await ruleService.deleteRule(rule.id);
                    this.rules = this.rules.filter(obj => {
                                return obj.id !=rule.id;
                        });
                        this.flashMessage.success({
                            message: 'Rule deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            editRules: async function(rule) {
                this.editRuleData = {...rule};
                this.$refs.editRule.show();
            },
            updateRule: async function (){
                try {
                    const response = await ruleService.updateRule(this.editRuleData.id, this.editRuleData);
                    this.rules.map(rules=>{
                            if(rules.id == response.data.id){
                                for(let key in response.data){
                                    rules[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'Rule Updated successfully!',
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
            showRoleModal() {
                this.$refs.newRuleModal.show();
            },
            hideModal() {
                this.$refs.newRuleModal.hide();
            },
            hideEditModal(){
              this.$refs.editRule.hide();
            },
            loadRule:async function() {
                try {
                        const response =  await ruleService.loadRule(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.rules.push(data);
                    });
                } catch (error) {
                    console.log(error + '');
                    this.flashMessage.error({
                        message: "Some error occurred during load more Cities",
                        time:5000
                    });
                }
            },
            searchRule:async function () {
                try {
                const query = {
                query: this.query
                };
                const response = await ruleService.searchRule(query);
                this.rules = response.data;
                } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred",
                        time: 5000
                        });
                    }
            },
            // getCity:async function(){
            //     try {
            //         const response = await PropertiesService.getCity();
            //         this.cities = response.data;
            //     } catch (error) {
            //         this.flashMessage.error({
            //         message: 'Some error occurred!',
            //         time:5000
            //         });
            //     }
            // },
            getSector:async function(){
                try {
                    const response = await sectorService.getSector();
                    this.sectors = response.data.data;
                    if(response.data.current_page < response.data.last_page)
                        {
                            this.moreExistsSector = true;
                            this.nextPage = response.data.current_page + 1;
                        }
                        else{
                            this.moreExistsSector = false;
                        }
                    } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            createSector:async function(){
                try {
                    const response = await sectorService.createSector(this.sector);
                    this.sectors.map(sectors=>{
                            if(sectors.id == response.data.id){
                                for(let key in response.data){
                                    sectors[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                        this.flashMessage.success({
                            message: 'Sector Data Added Successfuly!',
                            time:5000,
                    });

                    this.sector.name= "";
                    this.sector.city_name= "";
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
            deleteCities:async function (city){
                if(!window.confirm("Are you sure you want to delete this City")){
                    return;
                }
                try {
                    await cityService.deleteCities(city.id);
                    this.cities = this.cities.filter(obj => {
                                return obj.id !=city.id;
                        });
                        this.flashMessage.success({
                            message: 'City deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            editSector: async function(sector) {
                this.editSectorData = {...sector};
                this.$refs.editSector.show();
            },
            updateSector: async function (){
                try {
                    const response = await sectorService.updateSector(this.editSectorData.id, this.editSectorData);
                    this.sectors.map(sectors=>{
                            if(sectors.id == response.data.id){
                                for(let key in response.data){
                                    sectors[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'Sector Name Updated successfully!',
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
            deleteSector:async function (sector){
                if(!window.confirm("Are you sure you want to delete this Sector")){
                    return;
                }
                try {
                    await sectorService.deleteSector(sector.id);
                    this.sectors = this.sectors.filter(obj => {
                                return obj.id !=sector.id;
                        });
                        this.flashMessage.success({
                            message: 'Sector deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            loadSector:async function() {
                try {
                    const response =  await sectorService.loadSector(this.nextPage)
                    if(response.data.current_page < response.data.last_page){
                        this.moreExistsSector = true;
                        this.nextPage = response.data.current_page + 1;
                    }else{
                        this.moreExistsSector = false;
                    }
                    response.data.data.forEach(data => {
                    this.sectors.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred during load more Sectors",
                        time:5000
                    });
                }
            },
            showSectorModal() {
                this.$refs.newSectorModal.show();
            },
            hideModal() {
                this.$refs.newSectorModal.hide();
            },
            hideEditModal(){
              this.$refs.editSector.hide();
            },
            searchSectors:async function () {
                try {
                const query = {
                query: this.query
                };
                const response = await sectorService.searchSectors(query);
                this.sectors = response.data;
                } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred",
                        time: 5000
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
            createCity:async function(){
                try {
                    const response = await cityService.createCity(this.citiesData);
                    this.cities.unshift(response.data);
                        this.flashMessage.success({
                            message: 'City Data Added Successfuly!',
                            time:5000,
                    });
                    this.citiesData.city_name= "";
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
            getCity:async function(){
                try {
                    const response = await cityService.getCity();
                    this.cities = response.data;
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
            deleteCities:async function (city){
                if(!window.confirm("Are you sure you want to delete this City")){
                    return;
                }
                try {
                    await cityService.deleteCities(city.id);
                    this.cities = this.cities.filter(obj => {
                                return obj.id !=city.id;
                        });
                        this.flashMessage.success({
                            message: 'City deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            editCities: async function(city) {
                this.editCitiesData = {...city};
                this.$refs.editCity.show();
            },
            updateCites: async function (){
                try {
                    const response = await cityService.updateCites(this.editCitiesData.id, this.editCitiesData);
                    this.cities.map(cities=>{
                            if(cities.id == response.data.id){
                                for(let key in response.data){
                                    cities[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'City Updated successfully!',
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
            showCityModal() {
                this.$refs.newCityModal.show();
            },
            hideModal() {
                this.$refs.newCityModal.hide();
            },
            hideEditModal(){
              this.$refs.editCity.hide();
            },
            loadCity:async function() {
                try {
                        const response =  await cityService.loadCity(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.cities.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred during load more Cities",
                        time:5000
                    });
                }
            },
            searchCities:async function () {
                try {
                const query = {
                query: this.query
                };
                const response = await cityService.searchCities(query);
                this.cities = response.data;
                } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred",
                        time: 5000
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
