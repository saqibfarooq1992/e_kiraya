<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Adding Property Type</h6>
                    <div class="ml-auto">
                        <button id="show-btn" @click="showModal"
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
                                    <i class="fas fa-trash">Delete</i>

                                    </button>
                                    <button type="button"  class="btn btn-success btn-sm" v-on:click="editProperty(property)">
                                    <i class="fas fa-pencil-alt">Edit</i>
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
        </div>
    </main>
</template>
<script>
    import * as propertyType from "../../services/property_service";
    export default {
        name: "PropertyType",
        data() {
            return {
                query:"",
                properties: [],
                editPropertyType: {},
                propertyType: {
                    property_name: "",
                },
                moreExists: false,
                nextPage: 0,
                errors: {}
            };
        },
          mounted() {
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
            showModal() {
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
        // disableSubmission(btnSubmit) {
        //       btnSubmit.setAttribute("disabled", "disabled");
        //       this.btnSubmitOldHtml = btnSubmit.innerHTML;
        //       btnSubmit.innerHTML =
        //         '<span class="fa fa-spinner fa-spin"></span> Please wait...';
        //     },
        // enableSubmission(btnSubmit) {
        //       btnSubmit.removeAttribute("disabled");
        //       btnSubmit.innerHTML = this.btnSubmitOldHtml;
        //     },
        }
    };

</script>
