<template>
  <main>
    <div class="container-fluid">
      <div class="adpost-details">
        <div class="row">
           <div class="col-lg-8">
                <form v-on:submit.prevent="createProperty">
                <div class="section postdetails">
                    <h4>
                    Post Your Property
                    <span class="pull-right">* All Fields Are Mandatory</span>
                    </h4>
                    <div class="card shadow my-4">
                    <div class="card-header d-flex bd-highlight">
                        <h6 class="bd-highlight font-weight-bold">Add Your Property Description</h6>
                        <div class="ml-auto">
                        </div>
                    </div>
                    </div>
                    <div  id="propertyDetail">
                    <div class="card card-body">
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
                                    v-model="propertyData.title"
                                    id="text"
                                    placeholder="Title of your Add (e.g House For Rent)"
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
                                v-model="propertyData.property_type"
                                @change="showHide">
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
                        <label class="label-title">
                          Description
                          <span class="required">*</span>
                        </label>
                        <div class="row form-group add-title">
                          <div class="col-sm-12">
                            <vue-editor v-model="propertyData.description"></vue-editor>
                            <div
                              class="invalid-feedback"
                              v-if="errors.description"
                              placeholder="Write few lines about your property"
                              >{{errors.description[0]}}
                            </div>
                          </div>
                        </div>
                    </div>
                    </div>
                    <div class="card shadow my-4">
                    <div class="card-header d-flex bd-highlight">
                        <h6 class="bd-highlight font-weight-bold">Add Your Property Detail</h6>
                    </div>
                    </div>
                    <div id="houseDetail">
                    <div class="card card-body">
                        <div class="row">
                        <div class="col-md-4">
                            <div class="form-group add-title">
                            <label class="label-title">
                                City
                                <span class="required">*</span>
                            </label>
                            <div class>
                                <select
                                  class="form-control"
                                  id="propertytype"
                                  v-model="propertyData.city" @change='getSector()'>
                                  <option value>Select City</option>
                                  <option
                                      v-for="(city , index) in cities"
                                      :key="index"
                                      v-bind:value="city.id"
                                  >{{city.city_name}}
                                  </option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.city">{{errors.city[0]}}</div>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group add-title">
                            <label class="label-title">
                                Sector
                                <span class="required">*</span>
                            </label>
                            <div class>
                                <select
                                class="form-control"
                                id="propertytype"
                                v-model="propertyData.sector">
                                <option value>Select your Sector / Town</option>
                                <option
                                    v-for="(sector , index) in sectors"
                                    :key="index"
                                    v-bind:value="sector.id">{{sector.sector}}</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.sector">{{errors.sector[0]}}</div>
                                <div
                                class="invalid-feedback"
                                v-if="errors.sectors"
                                >{{errors.sectors[0]}}</div>
                            </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group add-title">
                            <label class="label-title">
                                Full Address
                                <span class="required">*</span>
                            </label>
                            <div>
                                <input
                                type="text"
                                class="form-control"
                                v-model="propertyData.address"
                                id="text"
                                placeholder="Enter Your Full Address"
                                />
                                <div
                                class="invalid-feedback"
                                v-if="errors.address"
                                >{{errors.address[0]}}</div>
                            </div>
                            </div>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group add-title" v-if="showName">
                                <label class="label-title">
                                    Badrooms
                                    <span class="required">*</span>
                                </label>
                                <div>
                                    <select
                                    class="form-control"
                                    id="badrooms"
                                    v-model="propertyData.badrooms"
                                    >
                                    <option value>Select Badrooms</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6+</option>
                                    <option>studio</option>
                                    </select>
                                    <div
                                    class="invalid-feedback"
                                    v-if="errors.badrooms"
                                    >{{errors.badrooms[0]}}</div>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group add-title" v-if="showName">
                                <label class="label-title">
                                    Bathrooms
                                    <span class="required">*</span>
                                </label>
                                <div>
                                    <select
                                    class="form-control"
                                    id="bathroom"
                                    v-model="propertyData.bathrooms">
                                    <option value>Select Bathrooms</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    <option>6</option>
                                    <option>7+</option>
                                    </select>
                                    <div
                                    class="invalid-feedback"
                                    v-if="errors.bathrooms"
                                    >{{errors.bathrooms[0]}}</div>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                              <div class="form-group add-title">
                              <label class="label-title">
                                  Unit
                                  <span class="required">*</span>
                              </label>
                                <div>
                                  <select class="form-control" id="unit" v-model="propertyData.unit">
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
                          <div class="col-md-6">
                              <div class="form-group add-title">
                              <label class="label-title">
                                  Area size
                                  <span class="required">*</span>
                              </label>
                              <div>
                                  <input
                                  type="text"
                                  class="form-control"
                                  v-model="propertyData.size"
                                  id="text"
                                  placeholder="0"
                                  />
                                  <div
                                  class="invalid-feedback"
                                  v-if="errors.size"
                                  >{{errors.rent_price[0]}}</div>
                              </div>
                              </div>
                          </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div>
                                    <div class="row  form-group select-condition" v-if="showName">
                                        <label >
                                            Tv Lounge
                                            <span class="required">*</span>
                                        </label>
                                        <div class="col-md-8 d-inline-flex">
                                            <div class="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                v-model="propertyData.tvlounge"
                                                id="customRadioInline1"
                                                value="Yes"
                                                name="tvlounge"
                                                class="custom-control-input"
                                            />
                                            <div
                                                class="invalid-feedback"
                                                v-if="errors.tvlounge"
                                            >{{errors.tvlounge[0]}}</div>
                                            <label class="custom-control-label" for="customRadioInline1">Yes</label>
                                            </div>
                                            <div class="custom-control custom-radio custom-control-inline">
                                            <input
                                                type="radio"
                                                v-model="propertyData.tvlounge"
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
                            </div>
                            <div class="col-md-6">
                                <div >
                              <div class="row form-group select-condition" v-if="showName">
                              <label >
                                  Garage
                                  <span class="required">*</span>
                              </label>
                              <div class="col-md-8 d-inline-flex">
                                  <div class="custom-control custom-radio custom-control-inline">
                                  <input
                                      type="radio"
                                      v-model="propertyData.garage"
                                      id="customRadioInline5"
                                      name="garage"
                                      value="Yes"
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
                                      v-model="propertyData.garage"
                                      id="customRadioInline6"
                                      name="garage"
                                      value="No"
                                      class="custom-control-input"
                                  />
                                  <label class="custom-control-label" for="customRadioInline6">NO</label>
                                  </div>
                              </div>
                              </div>
                          </div>
                            </div>
                        </div>
                        <div class="row">
                          <div class="col-md-6">
                            <div class="form-group add-title">
                              <label class="label-title">
                                Marital Status
                                <span class="required">*</span>
                              </label>
                              <div>
                                <select class="form-control" id="unit" v-model="propertyData.marital_status">
                                  <option value>Select Marital Status</option>
                                  <option value="family">Family</option>
                                  <option value="bachelor">Bachelor</option>
                                  <option value="both">Both</option>
                                </select>
                                <div class="invalid-feedback" v-if="errors.marital_status">{{errors.marital_status[0]}}</div>
                              </div>
                            </div>
                          </div>
                            <div class="col-md-6 mt-5">
                                <div class="row form-group select-condition">
                                <label class="col-md-4">
                                    Furnished
                                    <span class="required">*</span>
                                </label>
                                <div class="col-md-8 d-inline-flex">
                                    <div class="custom-control custom-radio custom-control-inline">
                                    <input
                                        type="radio"
                                        v-model="propertyData.furnished"
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
                                        v-model="propertyData.furnished"
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
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <div class="form-group add-title">
                                    <label class="label-title">
                                        Payment Type
                                        <span class="required">*</span>
                                    </label>
                                    <div>
                                        <select class="form-control" id="unit" v-model="propertyData.payment">
                                            <option value>Enter Payment Types</option>
                                            <option value="jazzCashe">Jazz Cash</option>
                                            <option value="easypaisa">Easy paisa </option>
                                            <option value="upaisa">Upaisa</option>
                                            <option value="cash">Cash</option>
                                            <option value="bank">Bank</option>
                                        </select>
                                        <div class="invalid-feedback" v-if="errors.payment">{{errors.payment[0]}}</div>
                                    </div>
                                </div>
                            </div>
                             <div class="col-md-4">
                                <div class="form-group add-title">
                                    <label class="label-title">
                                        Account#
                                        <span class="required">*</span>
                                    </label>
                                    <div>
                                        <input
                                        type="text"
                                        class="form-control"
                                        v-model="propertyData.account"
                                        id="text"
                                        placeholder="0"
                                        />
                                        <div
                                        class="invalid-feedback"
                                        v-if="errors.account"
                                        >{{errors.account[0]}}</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="form-group add-title">
                                <label class="label-title">
                                    Rent Price
                                    <span class="required">*</span>
                                </label>
                                <div>
                                    <input
                                    type="number"
                                    class="form-control"
                                    v-model="propertyData.rent_price"
                                    id="text"
                                    placeholder="0"
                                    />
                                    <div
                                    class="invalid-feedback"
                                    v-if="errors.rent_price"
                                    >{{errors.rent_price[0]}}</div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="card shadow my-4">
                    <div class="card-header d-flex bd-highlight">
                        <h6 class="bd-highlight font-weight-bold">Upload Your House Picture</h6>
                    </div>
                    </div>
                    <div id="housePictures" v-if="showName">
                    <div class="row form-group add-image">
                        <label class="col-sm-3 label-title">
                        Photos for your ad
                        <span>(1st Picture will be your cover photo )</span>
                        </label>
                        <div class="col-sm-9">
                        <div class="upload-section">
                          <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage1Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage"
                                        ref="image1" />
                                        <label for="imageUpload"></label>
                                    </div>
                            </div>
                          </div>
                        <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview2" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage2Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload2" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage2"
                                        ref="image2" />
                                        <label for="imageUpload2"></label>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview3" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage3Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload3" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage3"
                                        ref="image3" />
                                        <label for="imageUpload3"></label>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview4" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage4Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload4" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage4"
                                        ref="image4" />
                                        <label for="imageUpload4"></label>
                                    </div>
                            </div>
                        </div>
                            <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview5" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage5Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload5" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage5"
                                        ref="image5" />
                                        <label for="imageUpload5"></label>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview6" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage6Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload6" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage6"
                                        ref="image6" />
                                        <label for="imageUpload6"></label>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview7" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage7Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload7" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage7"
                                        ref="image7" />
                                        <label for="imageUpload7"></label>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview8" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage8Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload8" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage8"
                                        ref="image8" />
                                        <label for="imageUpload8"></label>
                                    </div>
                            </div>
                        </div>
                            <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview9" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage9Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload9" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage9"
                                        ref="image9" />
                                        <label for="imageUpload9"></label>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview10" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage10Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload10" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage10"
                                        ref="image10" />
                                        <label for="imageUpload10"></label>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview11" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage11Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload11" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage11"
                                        ref="image11" />
                                        <label for="imageUpload11"></label>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview12" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage12Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload12" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage12"
                                        ref="image12" />
                                        <label for="imageUpload12"></label>
                                    </div>
                            </div>
                        </div>

                        </div>
                        </div>
                    </div>
                    </div>
                    <div id="housePictures" v-else  >
                    <div class="row form-group add-image">
                        <label class="col-sm-3 label-title">
                        Photos for your ad
                        <span>(1st Picture will be your cover photo )</span>
                        </label>
                        <div class="col-sm-9">
                        <div class="upload-section">
                            <div class="col-md-3">
                                <div class="avatar-upload">
                                    <div class="avatar-preview">
                                    <img id="imagePreview" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage1Display" />
                                    </div>
                                    <div class="avatar-edit">
                                        <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"
                                        v-on:change="attachImage"
                                        ref="image1" />
                                        <label for="imageUpload"></label>
                                    </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="avatar-upload">
                                <div class="avatar-preview">
                                <img id="imagePreview2" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage2Display" />
                                </div>
                                <div class="avatar-edit">
                                    <input type='file' id="imageUpload2" accept=".png, .jpg, .jpeg"
                                    v-on:change="attachImage2"
                                    ref="image2" />
                                    <label for="imageUpload2"></label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="avatar-upload">
                                <div class="avatar-preview">
                                <img id="imagePreview3" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage3Display" />
                                </div>
                                <div class="avatar-edit">
                                    <input type='file' id="imageUpload3" accept=".png, .jpg, .jpeg"
                                    v-on:change="attachImage3"
                                    ref="image3" />
                                    <label for="imageUpload3"></label>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                          <div class="avatar-upload">
                              <div class="avatar-preview">
                              <img id="imagePreview4" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage4Display" />
                              </div>
                              <div class="avatar-edit">
                                  <input type='file' id="imageUpload4" accept=".png, .jpg, .jpeg"
                                  v-on:change="attachImage4"
                                  ref="image4" />
                                  <label for="imageUpload4"></label>
                              </div>
                          </div>
                        </div>
                          <div class="col-md-3">
                            <div class="avatar-upload">
                                <div class="avatar-preview">
                                <img id="imagePreview5" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage5Display" />
                                </div>
                                <div class="avatar-edit">
                                    <input type='file' id="imageUpload5" accept=".png, .jpg, .jpeg"
                                    v-on:change="attachImage5"
                                    ref="image5" />
                                    <label for="imageUpload5"></label>
                                </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                            <div class="avatar-upload">
                                <div class="avatar-preview">
                                  <img id="imagePreview6" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage6Display" />
                                </div>
                                <div class="avatar-edit">
                                    <input type='file' id="imageUpload6" accept=".png, .jpg, .jpeg"
                                    v-on:change="attachImage6"
                                    ref="image6" />
                                    <label for="imageUpload6"></label>
                                </div>
                            </div>
                          </div>
                          <div class="col-md-3">
                                  <div class="avatar-upload">
                                      <div class="avatar-preview">
                                      <img id="imagePreview7" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage7Display" />
                                      </div>
                                      <div class="avatar-edit">
                                          <input type='file' id="imageUpload7" accept=".png, .jpg, .jpeg"
                                          v-on:change="attachImage7"
                                          ref="image7" />
                                          <label for="imageUpload7"></label>
                                      </div>
                              </div>
                          </div>
                          <div class="col-md-3">
                                  <div class="avatar-upload">
                                    <div class="avatar-preview">
                                      <img id="imagePreview8" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage8Display" />
                                    </div>
                                    <div class="avatar-edit">
                                      <input type='file' id="imageUpload8" accept=".png, .jpg, .jpeg"
                                      v-on:change="attachImage8"
                                      ref="image8" />
                                      <label for="imageUpload8"></label>
                                    </div>
                              </div>
                          </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="form-group">
                    <button type="submit" class="btn btn-success" ref="btnSubmit">Upload Property</button>
                    </div>
                </div>
                </form>
           </div>
          <div class="col-lg-4">
            <div class="section quick-rules">
              <h4>Quick rules</h4>
              <p class="lead">
                Posting an ad on
                <a href="#">Eko.com</a> is free! However, all ads must follow our rules:
              </p>
              <ul v-for="(rule , index) in rules" :key="index">
                <li>{{rule.rule}}</li>
              </ul>
              <ul v-show="readMore">
                <li v-on:click="loadRule">Read More</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script>
import * as PropertiesService from "../../services/properties_service";
import * as sectorService from "../../services/sector_service";

import { VueEditor } from "vue2-editor";
import { throws } from "assert";
export default {
  name: "Properties",
  components: {
    VueEditor,
  },
  data() {
    return {
      query: "",
      cities: [],
      sectors: [],
      rules: [],
      city: 0,
      sector:0,
      properties: [],
      protypes: [],
      editPropertyData: {},
      showName: false,
      showImage: true,
      propertyData: {
        propertyNumber:"",
        title: "",
        description: "",
        property_type: "",
        city: "",
        sector: "",
        badrooms: "",
        bathrooms: "",
        address: "",
        unit: "",
        rent_price: "",
        tvlounge: "",
        furnished: "",
        size: "",
        garage: "",
        payment:"",
        account:"",
        pic1: "",
        pic2: "",
        pic3: "",
        pic4: "",
        pic5: "",
        pic6: "",
        pic7: "",
        pic8: "",
        pic9: "",
        pic10: "",
        pic11: "",
        pic12: "",
      },
      moreExists: false,
       btnSubmitOldHtml: '',
      readMore: false,
      nextPage: 0,
      errors: {},
      max: 36,
    };
  },
  mounted() {
    this.getCity();
    this.getProTypeData();
    this.getRules();
  },
  methods: {
    getRules: async function () {
      try {
        const response = await PropertiesService.getRules();
        this.rules = response.data.data;
        if (response.data.current_page < response.data.last_page) {
          this.readMore = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.readMore = false;
        }
      } catch (error) {
        this.flashMessage.error({
          message: "Some error occurred!",
          time: 10000,
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
    createProperty: async function () {
        this.disableSubmission(this.$refs.btnSubmit);
      try {
        const formData = new FormData();
        formData.append("propertyNumber", this.propertyData.propertyNumber);
        formData.append("title", this.propertyData.title);
        formData.append("description", this.propertyData.description);
        formData.append("property_type", this.propertyData.property_type);
        formData.append("city", this.propertyData.city);
        formData.append("sector", this.propertyData.sector);
        formData.append("badrooms", this.propertyData.badrooms);
        formData.append("bathrooms", this.propertyData.bathrooms);
        formData.append("address", this.propertyData.address);
        formData.append("unit", this.propertyData.unit);
        formData.append("marital_status", this.propertyData.marital_status);
        formData.append("size", this.propertyData.size);
        formData.append("rent_price", this.propertyData.rent_price);
        formData.append("tvlounge", this.propertyData.tvlounge);
        formData.append("furnished", this.propertyData.furnished);
        formData.append("sector_id", this.propertyData.sector);
        formData.append("garage", this.propertyData.garage);
        formData.append("payment", this.propertyData.payment);
        formData.append("account", this.propertyData.account);
        formData.append("pic1", this.propertyData.pic1);
        formData.append("pic2", this.propertyData.pic2);
        formData.append("pic3", this.propertyData.pic3);
        formData.append("pic4", this.propertyData.pic4);
        formData.append("pic5", this.propertyData.pic5);
        formData.append("pic6", this.propertyData.pic6);
        formData.append("pic7", this.propertyData.pic7);
        formData.append("pic8", this.propertyData.pic8);
        formData.append("pic9", this.propertyData.pic9);
        formData.append("pic10", this.propertyData.pic10);
        formData.append("pic11", this.propertyData.pic11);
        formData.append("pic12", this.propertyData.pic12);
        const response = await PropertiesService.createProperty(formData);
        this.$router.push({ name: "landloard-dashboard" });
        this.flashMessage.success({
          message: "Property Added Successfuly!",
          time: 5000,
        });
        this.propertyData.propertyNumber = "";
        this.propertyData.title = "";
        this.propertyData.description = "";
        this.propertyData.property_type = "";
        this.propertyData.city = "";
        this.propertyData.sector = "";
        this.propertyData.badrooms = "";
        this.propertyData.bathrooms = "";
        this.propertyData.address = "";
        this.propertyData.unit = "";
        this.propertyData.marital_status = "";
        this.propertyData.size = "";
        this.propertyData.contract = "";
        this.propertyData.rent_price = "";
        this.propertyData.tvlounge = "";
        this.propertyData.furnished = "";
        this.propertyData.garage = "";
         this.propertyData.payment = "";
        this.propertyData.account = "";
        this.propertyData.pic1 = "";
        this.propertyData.pic2 = "";
        this.propertyData.pic3 = "";
        this.propertyData.pic4 = "";
        this.propertyData.pic5 = "";
        this.propertyData.pic6 = "";
        this.propertyData.pic7 = "";
        this.propertyData.pic8 = "";
        this.propertyData.pic9 = "";
        this.propertyData.pic10 = "";
        this.propertyData.pic11 = "";
        this.propertyData.pic12 = "";
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
        this.enableSubmission(this.$refs.btnSubmit);
      }
    },
    disableSubmission(btnSubmit) {
                btnSubmit.setAttribute('disabled', 'disabled');
                this.btnSubmitOldHtml = btnSubmit.innerHTML;
                btnSubmit.innerHTML = '<span class="fa fa-spinner fa-spin"></span> Please wait...';
    },
    enableSubmission(btnSubmit) {
        btnSubmit.removeAttribute('disabled');
        btnSubmit.innerHTML = this.btnSubmitOldHtml;
    },
    getCity: async function () {
      try {
        const response = await PropertiesService.getCity();
            this.cities = response.data;
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
                   city_id: this.propertyData.city
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
    editProperty: async function (property) {
      this.editPropertyData = { ...property };
      this.$refs.editProperty.show();
    },
    showModal() {
      this.$refs.newPropertyModal.show();
    },
    hideModal() {
      this.$refs.newPropertyModal.hide();
    },
    hideEditModal() {
      this.$refs.editProperty.hide();
    },
    showHide: function (e) {
      this.showName = e.target.value == "1";
    },
    attachImage() {
      this.propertyData.pic1 = this.$refs.image1.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage1Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic1);
    },
    attachImage2() {
      this.propertyData.pic2 = this.$refs.image2.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage2Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic2);
    },
    attachImage3() {
      this.propertyData.pic3 = this.$refs.image3.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage3Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic3);
    },
    attachImage4() {
      this.propertyData.pic4 = this.$refs.image4.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage4Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic4);
    },
    attachImage5() {
      this.propertyData.pic5 = this.$refs.image5.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage5Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic5);
    },
    attachImage6() {
      this.propertyData.pic6 = this.$refs.image6.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage6Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic6);
    },
    attachImage7() {
      this.propertyData.pic7 = this.$refs.image7.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage7Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic7);
    },
    attachImage8() {
      this.propertyData.pic8 = this.$refs.image8.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage8Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic8);
    },
    attachImage9() {
      this.propertyData.pic9 = this.$refs.image9.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage9Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic9);
    },
    attachImage10() {
      this.propertyData.pic10 = this.$refs.image10.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage10Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic10);
    },
    attachImage11() {
      this.propertyData.pic11 = this.$refs.image11.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage11Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic11);
    },
    attachImage12() {
      this.propertyData.pic12 = this.$refs.image12.files[0];
      let reader = new FileReader();
      reader.addEventListener(
        "load",
        function () {
          this.$refs.newImage12Display.src = reader.result;
        }.bind(this),
        false
      );
      reader.readAsDataURL(this.propertyData.pic12);
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
    created: function(){
        this.getCity()
    }
  },

};
</script>
<style scoped>
.authorization-btn button {
  border-radius: 50%;
  height: 70px;
  width: 70px;
}
</style>
