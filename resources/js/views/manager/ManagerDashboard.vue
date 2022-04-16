<template>
    <div class="w-100">
        <div class="container-fluid">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="C - Properties" active>
                        <b-card-text>
                            <div class="container-fluid">
                                <div class="card shadow mb-4">
                                    <div class="card-header d-flex bd-highlight">
                                        <h6 class="bd-highlight font-weight-bold text-success">Commented Properties :{{componentsCount}}</h6>
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
                                                    <th scope="col">City</th>
                                                    <th scope="col">Property</th>
                                                    <th scope="col">Property Size</th>
                                                    <th scope="col">Rent Price</th>
                                                    <th scope="col">Comments</th>
                                                    <th scope="col">Rent</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                                </thead>
                                                <tbody>
                                                    <tr v-for="(property , index) in properties" :key="index">
                                                        <th scope="row">{{index+1}}</th>
                                                        <td>{{property.name}}</td>
                                                        <td>{{property.phone}}</td>
                                                        <td>{{property.city_name}}</td>
                                                        <td>{{property.property_name}}</td>
                                                        <td>{{property.size}} {{property.unit}}</td>
                                                        <td>{{property.rent_price}}</td>
                                                        <td>{{property.comments}}
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
                                                        <router-link :to="{name:'show-manager', params: {id: property.id}}">
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
                                    <div v-show="moreExists">
                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                            <i class="fas fa-arrow-down"></i>
                                        </button>
                                    </div>
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
                                                        <select class="form-control" id="city" v-model="editPropertyData.city_id">
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
                                                <div class="col-lg-6 col-md-6">
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
                                                <div class="col-lg-6 col-md-6">
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
                                                        <img id="imagePreview4" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic4}`" ref="editImage4Display" />
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
                                                            <img id="imagePreview5" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic5}`" ref="editImage5Display" />
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
                                                            <img id="imagePreview6" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic6}`" ref="editImage6Display" />
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
                                                            <img id="imagePreview7" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic7}`" ref="editImage7Display" />
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
                                                            <img id="imagePreview8" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic8}`" ref="editImage8Display" />
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
                                                                <img id="imagePreview9" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic9}`" ref="editImage9Display" />
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
                                                            <img id="imagePreview10" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic10}`" ref="editImage10Display" />
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
                                                            <img id="imagePreview11" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic11}`" ref="editImage11Display" />
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
                                                            <img id="imagePreview12" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic12}`" ref="editImage12Display" />
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
                            </div>
                        </b-card-text>
                    </b-tab>
                    <b-tab title="E - Property">
                        <b-card-text>
                            <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex bd-highlight">
                                    <h6 class="bd-highlight font-weight-bold text-success">Engaged Property :{{runningProperty}}</h6>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                         <th scope="col">Tenant</th>
                                        <th scope="col">City</th>
                                        <th scope="col">Property</th>
                                        <th scope="col">Area Size</th>
                                        <th scope="col">Rent Price</th>
                                        <th scope="col">Furnished</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(engaged , index) in engageds" :key="index">
                                        <th scope="row">{{index+1}}</th>
                                        <td>{{engaged.name}}</td>
                                        <td>{{engaged.city_name}}</td>
                                        <td>{{engaged.property_name}}</td>
                                        <td>{{engaged.size}} {{engaged.unit}}</td>
                                        <td>{{engaged.rent_price}}</td>
                                        <td>{{engaged.furnished}}</td>
                                        <td>
                                             <router-link :to="{name:'show-manager', params: {id: engaged.id}}">
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
                    <b-tab title="F - Property">
                        <b-card-text>
                            <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex bd-highlight">
                                    <h6 class="bd-highlight font-weight-bold text-success">Favourited Property :{{totalfavourits}}</h6>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover">
                                        <thead>
                                            <tr>
                                                <th scope="col">#</th>
                                                <th scope="col">City</th>
                                                <th scope="col">Property</th>
                                                <th scope="col">Area Size</th>
                                                <th scope="col">Rent Price</th>
                                                <th scope="col">Furnished</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(favourit , index) in favourits" :key="index">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{favourit.city_name}}</td>
                                                <td>{{favourit.property_name}}</td>
                                                <td>{{favourit.size}} {{favourit.unit}}</td>
                                                <td>{{favourit.rent_price}}</td>
                                                <td>{{favourit.furnished}}</td>
                                                <td>
                                                    <router-link :to="{name:'show-manager', params: {id: favourit.id}}">
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
                    <b-tab title="Paid Rent">
                        <b-card-text>
                            <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex bd-highlight">
                                    <h6 class="bd-highlight font-weight-bold text-success">Paid Rent :{{paidRent}}</h6>
                                </div>
                            </div>
                            <div class="card mt-3">
                                <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-hover" style="width:100%">
                                        <thead>
                                            <tr>
                                                <th scope="col" style="width: 5%;">#</th>
                                                <th scope="col">City</th>
                                                <th scope="col">Property</th>
                                                <th scope="col">Unit</th>
                                                <th scope="col">Rent Price</th>
                                                <th scope="col">Rent</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(paid , index) in paids" :key="index">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{paid.city_name}}</td>
                                                <td>{{paid.property_name}}</td>
                                                <td>{{paid.size}}{{paid.unit}}</td>
                                                <td>{{paid.rent_price}}</td>
                                                <td>{{paid.rent}}</td>
                                                 <td>
                                                    <router-link :to="{name:'show-manager', params: {id: paid.id}}">
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
                    <b-tab title="Pending Rent">
                        <b-card-text>
                            <div class="container-fluid">
                            <div class="card shadow mb-4">
                                <div class="card-header d-flex bd-highlight">
                                    <h6 class="bd-highlight font-weight-bold text-success">Pending Rent :{{pendingsCount}}</h6>
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
                                                <th scope="col">City</th>
                                                <th scope="col">Property</th>
                                                <th scope="col">Property Size</th>
                                                <th scope="col">Property Status</th>
                                                <th scope="col">Rent Price</th>
                                                <th scope="col">Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-for="(pending , index) in pendings" :key="index">
                                                <th scope="row">{{index+1}}</th>
                                                <td>{{pending.name}}</td>
                                                <td>{{pending.phone}}</td>
                                                <td>{{pending.city_name}}</td>
                                                <td>{{pending.property_name}}</td>
                                                <td>{{pending.rent}}</td>
                                                <td>{{pending.size}} {{pending.unit}}</td>
                                                <td>{{pending.rent_price}}</td>
                                                <td>
                                                    <router-link :to="{name:'show-manager', params: {id: pending.id}}">
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
                    <b-tab title="Area Employee">
                        <b-card-text>
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
                                                        <tr v-for="(area , index) in employees" :key="index">
                                                            <th scope="row">{{index+1}}</th>
                                                            <td>{{area.name}}</td>
                                                            <td>{{area.phone}}</td>
                                                            <td>{{area.city_name}}</td>
                                                            <td>{{area.sector}}</td>
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
                                <b-modal ref="areaModal" hide-footer  title="Add Area Employee">
                                    <form v-on:submit.prevent="createAreaEmployee">
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <select class="form-control" id="exampleFormControlSelect1" v-model="employeeData.name">
                                                        <option value="">Select employee</option>
                                                        <option v-for="(employee , index) in emps" :key="index" v-bind:value="employee.id" >{{employee.name}}</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                <select class="form-control" id="exampleFormControlSelect1" v-model="employeeData.city" @change='getSectors()'>
                                                    <option value="">Select city</option>
                                                    <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                                </select>
                                            </div>
                                            </div>
                                        </div>
                                            <div class="row" >
                                                <div class="col-md-12">
                                                    <div class="form-group">
                                                        <select class="form-control" id="exampleFormControlSelect1" v-model="employeeData.sector">
                                                            <option value="">Select Sector</option>
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
                                                        id="name"
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
                        </b-card-text>
                    </b-tab>
                    <b-tab title="Annoucement">
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
                </b-tabs>
            </b-card>
        </div>
    </div>
</template>

<script>
import * as adminService from "../../services/admin_service";
import * as ManagerService from "../../services/manager_service";
// Show All Property Service
import * as PropertiesService from "../../services/properties_service";
import * as AdminService from "../../services/admin_service";
import * as CsrService from "../../services/csr_service";
import * as EmployeeService from "../../services/employee_service";
import { VueEditor } from "vue2-editor";
import { throws } from "assert";
    export default {
        name: "Manager-Dashboard",
        components: {
                    VueEditor,
                },
        data () {
            return{
                pendings:[],
                approveds:[],
                totals:[],
                totalrenters:[],
                totalrent:[],
                totallandloards:[],
                totalreserveds:[],
                totalfavourits:[],
                totalEmployees:[],
                totalManagers:[],
                totalCsr:[],
                paidRent:[],
                penddingRent:[],
                runningProperty:[],
                paids:[],
                // Show All Property
                query: "",
                cities: [],
                sectors: [],
                rules: [],
                city: 0,
                protypes: [],
                editPropertyData: {},
                showName: false,
                showImage: true,
                moreExists: false,
                readMore: false,
                nextPage: 0,
                errors: {},
                managers:[],
                manag: {
                    user_id: '',
                    property_id:'',
                    comment:'',
                    },
                     employeeData:{
                     name:'',
                     city:'',
                     sector:'',
                },
                properties:[],
                favourits:{},
                areaEmployees:[],
                employees:[],
                emps:[],
                engageds:[],
                componentsCount:[],
                pendingsCount:[],
                allproperties:[],
                // areaManagers:[],
                editManagerData: {},
            }
        },
        mounted() {
            this.getPendingCount();
            this.getApprovedPropertyCount();
            this.getPropertyCount();
            this.getTotalRenterCount();
            this.getTotalLandloardCount();
            this.getTotalReservedCount();
            this.getFavouritedCount();
            this.getTotalEmployeeCount();
            this.getTotalManagerCount();
            this.getTotalCSRCount();
            this.getTotalRentCount();
            this.getPaidRent();
            this.getPenddingRent();
            this.getRunningProperty();
            this.getCity();
            this.getProTypeData();
            this.getSectorUpdate();
            this.getPropertyManager();
            this.getEmployee();
            this.getEngagedProperty();
            this.getFavouritedProperty();
            this.getCommentsCount();
            this.getPenddingRentProperty();
            this.getPaidRentProperty();
            this.getProperties();
            // this.getAreaManaer();
            this.getAreaEmployee();

        },
        methods: {
            getSectors: async function () {
                    try {
                        const response = await PropertiesService.getSectors({
                            params: {
                                city_id: this.employeeData.city
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
            createAreaEmployee:async function (){
                try {
                    const response = await ManagerService.createAreaEmployee(this.employeeData);
                    this.flashMessage.success({
                        message: 'Property Successfully Assign to Employee!',
                        time: 5000,
                    });
                    // this.employees = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message:'Some error occurred!',
                        time: 5000,
                    });
                }
            },
            getAreaEmployee:async function (){
                try {
                    const response = await ManagerService.getAreaEmployee();
                    this.employees = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message:'some error occurred!',
                        time: 5000,
                    });
                }
            },
            getPaidRentProperty:async function(){
                try {
                    const response = await ManagerService.getPaidRentProperty();
                    this.paids = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured!',
                        time: 5000
                    });
                }
            },
            getProperties:async function(){
                try {
                    const response = await ManagerService.getProperties();
                    this.allproperties = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occurred!',
                        time: 5000,
                    });
                }
            },
            getFavouritedProperty:async function(){
                try {
                    const response = await ManagerService.getFavouritedProperty();
                    this.favourits = response.data;
                } catch (error) {
                    console.log(error + '');
                    this.flashMessage.error({
                        message: 'Some error occured!',
                        time:5000
                    });
                }
            },
            getCommentsCount:async function(){
                try {
                    const response = await ManagerService.getCommentsCount();
                    this.componentsCount = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error Occurrd!',
                        time: 5000
                    });
                }
            },
            getPenddingRentProperty:async function(){
                try {
                    const response = await ManagerService.getPenddingRentProperty();
                    this.pendings = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred!',
                        time: 5000,
                    });
                }
            },
            getPendingCount:async function(){
                try {
                    const response = await ManagerService.getPendingCount();
                    this.pendingsCount = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getEngagedProperty:async function(){
                try {
                    const responce = await ManagerService.getEngagedProperty();
                    this.engageds = responce.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occured!',
                        time:5000
                    });
                }
            },
            getApprovedPropertyCount:async function(){
                try {
                    const response = await adminService.getApprovedPropertyCount();
                    this.approveds = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getPropertyCount:async function(){
                try {
                    const response = await ManagerService.getPropertyCount();
                    this.totals = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getTotalRenterCount:async function(){
                try {
                    const response = await adminService.getTotalRenterCount();
                    this.totalrenters = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getTotalRentCount:async function(){
                try {
                    const response = await ManagerService.getTotalRentCount();
                    this.totalrent = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getPaidRent:async function(){
                try {
                    const response = await ManagerService.getPaidRent();
                    this.paidRent = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getPenddingRent:async function(){
                try {
                    const response = await ManagerService.getPenddingRent();
                    this.penddingRent = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getTotalLandloardCount:async function(){
                try {
                    const response = await adminService.getTotalLandloardCount();
                    this.totallandloards = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getTotalReservedCount:async function(){
                try {
                    const response = await ManagerService.getTotalReservedCount();
                    this.totalreserveds = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            showAreaModal() {
                this.$refs.areaModal.show();
            },
            hideAreaModal() {
                this.$refs.areaModal.hide();
            },
            getAreaManaer:async function(){
                try {
                    const response = await PropertiesService.getAreaManaer();
                    this.areaManagers  = response.data;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred!',
                        time: 5000,
                    });
                }
            },
            editUsers: async function(users) {
                this.editManagerData = {...users};
                this.$refs.editManager.show();
            },
            getFavouritedCount:async function(){
                try {
                    const response = await ManagerService.getFavouritedCount();
                    this.totalfavourits= response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getTotalEmployeeCount:async function(){
                try {
                    const response = await adminService.getTotalEmployeeCount();
                    this.totalEmployees= response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getTotalManagerCount:async function(){
                try {
                    const response = await adminService.getTotalManagerCount();
                    this.totalManagers= response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getTotalCSRCount:async function(){
                try {
                    const response = await adminService.getTotalCSRCount();
                    this.totalCsr= response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            getRunningProperty:async function(){
                try {
                    const response = await ManagerService.getRunningProperty();
                    this.runningProperty = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
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
            updateAssignProperty: async function (){
                try {
                    const response = await AdminService.updateAssignProperty( this.editPropertyData.id, this.editPropertyData);
                        this.properties.map(properties=>{
                            if(properties.id == response.data.id){
                                for(let key in response.data){
                                    properties[key]    = response.data[key];
                                }
                            }
                        });
                    this.flashMessage.success({
                    message: "Property forwarded to Manager successfully!",
                    time: 5000,
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
            getPropertyManager: async function () {
            try {
                const response = await ManagerService.getPropertyManager();
                this.properties = response.data;
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
            sendProp: async function(item)
            {
                this.manag.property_id = item.id
            },
            sendManager : async function(item)
            {
            try{
                const response = await ManagerService.sendManager(this.manag);
                this.flashMessage.success({
                message: "Property Assign successfuly!",
                time: 5000,
                });
            }
            catch(error){
                switch (error.response.status) {
                case 500:
                    this.flashMessage.error({
                    message: error.response.data.errors,
                    time: 5000,
                    });
                    break;
                case 403:
                    this.flashMessage.info({
                    message: error.response.data.errors,
                    time: 5000,
                    });
                    break;
                default:
                    this.flashMessage.error({
                    message: 'Some Error Occured!',
                    time: 5000,
                    });
                }
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
            getEmployee:async function() {
                    try {
                        const response = await EmployeeService.getEmployee();
                        this.emps = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                    message: "Some error occurred!",
                    time: 5000,
                    });
                    }
            },
            hideModal() {
            this.$refs.newPropertyModal.hide();
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
            ForwardToManager: async function (property) {
                if (!window.confirm("Are you sure you want to Forward  this Property to Manager")) {
                    return;
                }
            try {

                const response = await CsrService.ForwardToManager(property.id);
                    this.properties.map((properties) => {
                        if (properties.id == response.data.id) {
                            for (let key in response.data) {
                            properties[key] = response.data[key];
                            }
                        }
                    });
                // this.properties = this.properties.filter(obj => {
                //             return obj.id !=property.id;
                //     });
                this.flashMessage.success({
                message: "Property Forward to Manager Successfuly!",
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
                if (!window.confirm("Are you sure you want to Attached this Property")) {
                    return;
                }
            try {
                const response = await PropertiesService.PropertyOk(property.id);
                // this.properties = this.properties.filter(obj => {
                //             return obj.id !=property.id;
                //     });
                this.flashMessage.success({
                message: "Property Attached Successfuly!",
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
                this.properties = this.properties.filter((obj) => {
                return obj.id != property.id;
                });
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
            showHide: function (e) {
            this.showName = e.target.value == "1";
            },
            loadPropertyManager: async function () {
            try {
                const response = await ManagerService.loadPropertyManager(this.nextPage);
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
        },
        created: function () {
                this.getCity();
            },
    }

</script>

<style scoped>
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
    #show-btn{
    z-index: 2;
    border-radius: 50px;
    height: 80px;
    width: 80px;
}

</style>
