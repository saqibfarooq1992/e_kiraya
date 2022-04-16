<template>
    <main>
        <Header />
            <section id="main" class="clearfix myads-page">
                <div class="container">
                    <ProfileHeader />
                    <div class="ads-info">
                        <div class="row">
                            <div class="col-md-8">
                                <div class="my-ads section">
                                    <h2>My ads</h2>

                                    <div class="ad-item row" v-for="(property , index) in properties" :key="index">
                                        <div class="item-image-box col-lg-4">
                                            <div class="item-image">
                                                <a href="details.html"><img :src="`${$store.state.serverPath}storage/${property.pic1}`" alt="Image" class="img-fluid myadsimg"></a>
                                            </div>
                                        </div>
                                        <div class="item-info col-lg-8">
                                            <div class="ad-info">
                                                <h3 class="item-price">{{property.rent_price}}</h3>
                                                <h4 class="item-title"><a href="#">{{property.title}}</a></h4>
                                                <div class="item-cat">
                                                    <span><a href="#">{{property.city_name}}</a></span> /

                                                    <span><a href="#">{{property.sector}}</a></span>
                                                </div>
                                            </div>
                                            <div class="ad-meta">
                                                <div class="meta-content">
                                                    <span class="dated">Posted On: <a href="#">{{property.created_at}}</a></span>
                                                    <span class="visitors">Visitors: 221</span>
                                                </div>
                                                <div class="user-option pull-right">
                                                    <button class="edit-item btn btn-info" v-on:click="editProperty(property)" data-toggle="tooltip" data-placement="top" title="Edit this ad"><i class="fas fa-pencil-alt"></i></button>
                                                    <a class="delete-item" href="#" data-toggle="tooltip" data-placement="top" title="Delete this ad"><i class="fa fa-times"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 text-center">
                                <div class="recommended-cta">
                                    <div class="cta">
                                        <div class="single-cta">
                                            <div class="cta-icon icon-secure">
                                                <img :src="`${$store.state.serverPath}images/icon/13.png`" alt="Icon" class="img-fluid">
                                            </div>

                                            <h4>Secure Trading</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                        </div>
                                        <div class="single-cta">

                                            <div class="cta-icon icon-support">
                                                <img :src="`${$store.state.serverPath}images/icon/14.png`" alt="Icon" class="img-fluid">
                                            </div>

                                            <h4>24/7 Support</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                        </div>
                                        <div class="single-cta">
                                            <div class="cta-icon icon-trading">
                                                <img :src="`${$store.state.serverPath}images/icon/15.png`" alt="Icon" class="img-fluid">
                                            </div>
                                            <h4>Easy Trading</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                        </div>
                                        <div class="single-cta">
                                            <h5>Need Help?</h5>
                                            <p><span>Give a call on</span><a href="tellto:08048100000"> 08048100000</a></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                        <img id="imagePreview1" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editPropertyData.pic1}`"  ref="editImageDisplay" />
                                        </div>
                                        <div class="avatar-edit">
                                            <input type='file' id="imageUpload1" accept=".png, .jpg, .jpeg"
                                            v-on:change="editAttachImage1"
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
            </section>
        <Footer />
    </main>
</template>
<script>
import Header from '../../components/user/Header.vue';
import * as PropertiesService from "../../services/properties_service";
import Footer from '../../components/user/Footer.vue';
import ProfileHeader from '../../components/user/ProfileHeader.vue';
import * as mainService from "../../services/main_service";
import { VueEditor } from "vue2-editor";
export default {
    name: "MyAd",
    components: {
        Header,
        Footer,
        ProfileHeader,
        VueEditor,
  },
  data(){
      return{
          properties: [],
          editPropertyData: {},
          errors: {},
          protypes: [],
          cities: [],
          sectors: [],

        }
    },
   mounted() {
            this.myads();
            this.getCity();
            this.getProTypeData();
            this.getSectorUpdate();
            // this.favouritedProperty();
          },
    methods: {
    myads:async function(){
            try {
                const response = await mainService.myads();
                this.properties = response.data;
                } catch (error) {
                this.flashMessage.error({
                message: 'Some error occurred!',
                time:5000
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
    editProperty: async function (property) {
            this.editPropertyData = { ...property };
            this.$refs.editProperty.show();
        },
    showHide: function (e) {
      this.showName = e.target.value == "1";
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
    getSectorUpdate: async function () {
      try {
        const response = await PropertiesService.getSectorUpdate();
        this.sectors = response.data;
      } catch (error) {
          console.log(error + '');
        this.flashMessage.error({
          message: "Some error occurred!",
          time: 5000,
        });
      }
    },
    hideEditModal() {
        this.$refs.editProperty.hide();
    },
    editAttachImage1() {
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
        // getFavouriteProperty:async function(){
        //     try {
        //         const response = await mainService.getFavouriteProperty()
        //         this.favourits = response.data;
        //     } catch (error) {
        //         this.flashMessage.error({
        //             message: 'Some error occurred',
        //             time:5000
        //         });
        //     }
        // }
    },
    created: function () {
        this.getCity();
    },
}
</script>
<style scoped>
@media only screen and (min-width:768px ) and (max-width: 1200px){
          .myadsimg{
        height: 100px;
    }
      }
</style>
