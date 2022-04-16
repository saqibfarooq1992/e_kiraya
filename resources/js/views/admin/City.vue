<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Adding City</h6>
                    <div class="ml-auto">
                        <button @click="showModal"
                            class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                            <!-- <span class="icon text-white-50">
                                <i class="far fa-plus-square"></i>
                            </span> -->
                            <span class="text-white">Add City</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <b-modal ref="newCityModal" hide-footer size="lg" title="Add City">
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
        </div>
    </main>
</template>
<script>
    import * as cityService from "../../services/city_service";
    export default {
        name: "City",
        data() {
            return {
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
          },
        methods: {
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
            showModal() {
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
