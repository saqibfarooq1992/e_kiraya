<template>
    <main>
         <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Adding Sector</h6>
                    <div class="ml-auto">
                        <button id="show-btn" @click="showModal"
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
                <b-modal ref="newCityModal" hide-footer size="lg" title="Add Sector">
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
                 <div v-show="moreExists">
                    <button type="button" class="btn btn-info btn-sm"  v-on:click="loadSector" >
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    import * as sectorService from "../../services/sector_service";
    import * as PropertiesService from "../../services/properties_service";

    export default {
        name: "Sector",
        data() {
            return {
              query:"",
              sectors: [],
              cities:[],
              editSectorData: {},
            sector: {
                name: '',
                city:'',
                },
              moreExists: false,
              nextPage: 0,
              errors: {}
            };
        },
          mounted() {
            this.getSector();
            this.getCity();
          },
        methods: {
            getCity:async function(){
                try {
                    const response = await PropertiesService.getCity();
                    this.cities = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getSector:async function(){
                try {
                    const response = await sectorService.getSector();
                    this.sectors = response.data.data;
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
                        this.moreExists = true;
                        this.nextPage = response.data.current_page + 1;
                    }else{
                        this.moreExists = false;
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
            showModal() {
                this.$refs.newCityModal.show();
            },
            hideModal() {
                this.$refs.newCityModal.hide();
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
        }
    };

</script>
