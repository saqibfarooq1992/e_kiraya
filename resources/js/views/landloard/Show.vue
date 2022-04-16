<template>
    <main>
        <div class="container bg-white p-2 shadow" style="border-radius:15px;">
            <div class="row">
                <div class="col-md-7 m-0">
                    <div class="desktop-view" >
                        <div class="container mt-2">
                        <div class="carousel-container position-relative row">
                            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active"  data-slide-number="0">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic1}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/Pn6iimgM-wo/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                <div class="carousel-item" data-slide-number="1">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic2}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/tXqVe7oO-go/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                <div class="carousel-item" data-slide-number="2">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic3}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/qlYQb7B9vog/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                <div class="carousel-item" data-slide-number="3">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic4}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/QfEfkWk1Uhk/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                <div class="carousel-item" data-slide-number="4">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic5}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/CSIcgaLiFO0/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                <div class="carousel-item" data-slide-number="5">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic6}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/a_xa7RUKzdc/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                <div class="carousel-item" data-slide-number="6">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic7}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/uanoYn1AmPs/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                <div class="carousel-item" data-slide-number="7">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic8}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/_snqARKTgoc/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                <div class="carousel-item" data-slide-number="8">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic9}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/M9F8VR0jEPM/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                <div class="carousel-item" data-slide-number="9">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic10}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/Q1p7bh3SHj8/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                    <div class="carousel-item" data-slide-number="10">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic11}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/Q1p7bh3SHj8/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                    <div class="carousel-item" data-slide-number="11">
                                    <img :src="`${$store.state.serverPath}storage/${properties.pic12}`" class="d-block w-100" alt="..." data-remote="https://source.unsplash.com/Q1p7bh3SHj8/" data-type="image" data-toggle="lightbox"  data-gallery="example-gallery">
                                </div>
                                </div>
                            </div>
                            <div id="carousel-thumbs2" class="carousel slide" data-ride="carousel">
                                <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="row mx-0">
                                    <div id="carousel-selector-0" class="thumb col-4 col-sm-2 px-1 py-2 selected" data-target="#myCarousel" data-slide-to="0">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic1}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    <div id="carousel-selector-1" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="1">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic2}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    <div id="carousel-selector-2" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="2">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic3}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    <div id="carousel-selector-3" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="3">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic4}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    <div id="carousel-selector-4" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="4">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic5}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    <div id="carousel-selector-5" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="5">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic6}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <div class="row mx-0">
                                    <div id="carousel-selector-6" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="6">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic7}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    <div id="carousel-selector-7" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="7">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic8}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    <div id="carousel-selector-8" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="8">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic9}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    <div id="carousel-selector-9" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="9">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic10}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                        <div id="carousel-selector-8" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="10">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic11}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    <div id="carousel-selector-9" class="thumb col-4 col-sm-2 px-1 py-2" data-target="#myCarousel" data-slide-to="11">
                                        <img :src="`${$store.state.serverPath}storage/${properties.pic12}`" class="img-fluid mobilecarousal" alt="...">
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <a class="carousel-control-prev" href="#carousel-thumbs2" role="button" data-slide="prev">
                                <span class="carousel-control-prev-icon" style="margin-top:40px" aria-hidden="true"></span>
                                <span class="sr-only">Previous</span>
                                </a>
                                <a class="carousel-control-next" href="#carousel-thumbs2" role="button" data-slide="next">
                                <span class="carousel-control-next-icon" style="margin-top:40px" aria-hidden="true"></span>
                                <span class="sr-only">Next</span>
                                </a>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5  p-3" v-if="properties.property_name === 'House'">
                    <div class="slider-text">
                        <h3 class="title text-success"><small>{{properties.title}}</small></h3>
                        <div class="row price">
                            <h3 class=" text-dark">Property details</h3>
                            <h3 class="priceposition px-5 text-success"> Rs {{properties.rent_price}}</h3>
                        </div>

                        <div class="short-info">
                                <p>
                                  <span><strong>City:</strong></span>
                                  <a href="#">{{properties.city_name}}</a>
                                  <span class="px-2">
                                      <strong>Sector:</strong>
                                      <a href="#">{{properties.sector}}</a>
                                  </span>
                                  <span class="px-2">
                                      <strong>Status:</strong>
                                      <a href="#">{{properties.marital_status}}</a>
                                  </span>
                                </p>
                                 <p><strong>Address: </strong>{{properties.address}} </p>
                                <p>
                                  <strong>Property Size:</strong>
                                  <a href="#">{{properties.size}}</a>
                                  <a href="#">{{properties.unit}}</a>
                                  <strong class="px-3">Property:</strong>
                                  <a href="#">{{properties.property_name}}</a>
                                </p>
                                <p>
                                  <strong>Features:</strong>
                                  <a>
                                      <i class="fa fa-bed px-2"></i>{{properties.badrooms}}
                                  </a>
                                  <a>
                                      <i class="fa fa-shower px-2"></i>{{properties.bathrooms}}
                                  </a>
                                  <a class="pr-1">
                                      <strong>Property Status:</strong>{{properties.status}}
                                  </a>
                                </p>
                                <p>
                                    <a class="pr-1"><strong>Furnished:</strong>{{properties.furnished}}</a>
                                    <a class="px-1"><strong>Garage:</strong>{{properties.garage}}</a><a class="px-1"><strong>Tv Lounge:</strong>{{properties.tv_lounged}}</a>
                                </p>
                        </div>
                         <div class="authorization-btn">
                            <div class="row mr-auto">
                                <div  class="col-md-2" >
                                    <button v-if="properties.rent==='unpaid'"
                                    type="button"
                                    class="btn btn-dark btn-sm form-control"
                                    v-on:click="paidPropertyRent(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Assign"
                                    >
                                    <i class="fas fa-share-square" ></i>
                                    <p>Paid</p>
                                    </button>
                                     <button v-else
                                    type="button"
                                    class="btn btn-dark btn-sm form-control"
                                    v-on:click="unpaidPropertyRent(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Assign"
                                    >
                                    <i class="fas fa-share-square" ></i>
                                    <p>unpaid</p>
                                    </button>
                                </div>

                                <div  class="col-md-2">
                                    <button
                                    type="button"
                                    class="btn btn-warning btn-sm form-control"
                                    v-on:click="editShowProperty(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Refresh Property"
                                    >
                                    <i class="fas fa-pencil-alt"></i>
                                    <p>Update</p>
                                    </button>
                                </div>
                                <div class="col-md-2" >
                                    <button
                                    type="button"
                                    class="btn btn-info btn-sm form-control"
                                    v-on:click="cancellReservation()"
                                    @click="reservation(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="paid rent"
                                    >
                                    <i class="fas fa-thumbs-up"></i>
                                    <p>Suspended</p>
                                    </button>

                                </div>
                                <div  class="col-md-2">
                                    <button
                                    v-on:click="changeNumber(properties)"
                                    id="phonenumber"
                                    type="button"
                                    class="btn btn-success btn-sm form-control"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    >
                                    <i class="fas fa-phone"></i>
                                    <p>Contact</p>
                                    </button>
                                </div>
                                <div  class="col-md-2">
                                    <button
                                    @click="showEmailModal"
                                    type="button"
                                    class="btn btn-danger btn-sm form-control"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Refresh Property"
                                    >
                                    <i class="fas fa-envelope"></i>
                                    <p>Email</p>
                                    </button>
                                </div>
                                <div  class="col-md-2">
                                    <button
                                    style="background-color: #9B59B6;"
                                    v-on:click="changeNumber(properties)"
                                    id="phonenumber"
                                    type="button"
                                    class="btn btn-success btn-sm form-control"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    >
                                    <i class="fas fa-phone"></i>
                                    <p>Notice</p>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <strong>Message:</strong>
                        <p>
                            I would like to inquire about your property EKO - ID27395957.
                            Please contact me at your earliest convenience.
                        </p>
                        <div class="social-links my-0">
                            <h4>Share this ad</h4>
                            <ul class="list-inline">
                                <li><a href="https://www.facebook.com/rentpropertyatEKO"><i class="fa fa-facebook-square fa-2x" style="font"></i></a></li>
                                <li><a href="https://twitter.com/ekirayaonline"><i class="fa fa-twitter-square fa-2x"></i></a></li>
                                <li><a href="https://ekirayaonline.business.site"><i class="fa fa-google-plus-square fa-2x"></i></a></li>
                                <li><a href="https://www.linkedin.com/company/ekirayaonline"><i class="fa fa-linkedin-square fa-2x"></i></a></li>
                                <li><a href="https://www.pinterest.com/ekirayaonline/"><i class="fa fa-pinterest-square fa-2x"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="col-lg-5  p-3" v-else>
                    <div class="slider-text">
                        <h3 class="title text-success"><small>{{properties.title}}</small></h3>
                        <div class="row price">
                            <h3 class=" text-dark">Property details</h3>
                            <h3 class="priceposition px-5 text-success"> Rs {{properties.rent_price}}</h3>
                        </div>
                        <div class="short-info">
                                <p>
                                  <span><strong>City:</strong></span>
                                  <a href="#">{{properties.city_name}}</a>
                                  <span class="px-2">
                                      <strong>Sector:</strong>
                                      <a href="#">{{properties.sector}}</a>
                                  </span>
                                </p>
                                 <p><strong>Address: </strong>{{properties.address}} </p>
                                <p>
                                  <strong>Property Size:</strong>
                                  <a href="#">{{properties.size}}</a>
                                  <a href="#">{{properties.unit}}</a>
                                  <strong class="px-3">Property:</strong>
                                  <a href="#">{{properties.property_name}}</a>
                                </p>
                                <p>
                                  <a class="pr-1">
                                      <strong>Furnished:</strong>{{properties.furnished}}
                                  </a>
                                  <a class="pr-1">
                                      <strong>Property Status:</strong>{{properties.status}}
                                  </a>
                                </p>
                        </div>
                         <div class="authorization-btn">
                            <div class="row mr-auto">
                                <!-- <div  class="col-md-2" >
                                    <button
                                    v-if="properties.status != 'approved'"
                                    type="button"
                                    class="btn btn-success btn-sm form-control"
                                    v-on:click="approvedProperty(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Approve"
                                    >
                                    <i class="fas fa-check"></i>
                                    <p>Approved</p>
                                    </button>
                                    <div v-else>
                                        <button v-if="properties.status !=='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="assignToTenant()"
                                        @click="PropertyOk(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property">
                                        <i class="fab fa-odnoklassniki-square"></i>
                                        <p>Occupied</p>
                                        </button>
                                    </div>
                                </div> -->

                                <!-- <div  class="col-md-2">
                                    <button
                                    type="button"
                                    class="btn btn-dark btn-sm form-control"
                                    v-on:click="editProperty()"
                                    @click="sendProp(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Assign"
                                    >
                                    <i class="fas fa-share-square" ></i>
                                    <p>Assign</p>
                                    </button>
                                </div> -->

                                <div  class="col-md-2">
                                    <button
                                    type="button"
                                    class="btn btn-warning btn-sm form-control"
                                    v-on:click="editShowProperty(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Refresh Property"
                                    >
                                    <i class="fas fa-pencil-alt"></i>
                                    <p>Update</p>
                                    </button>
                                </div>
                                <div class="col-md-2" >
                                    <button
                                    type="button"
                                    class="btn btn-info btn-sm form-control"
                                    v-on:click="cancellReservation()"
                                    @click="reservation(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="paid rent"
                                    >
                                    <i class="fas fa-thumbs-up"></i>
                                    <p>Suspended</p>
                                    </button>

                                </div>
                                <!-- <div class="col-md-2">
                                    <button
                                    type="button"
                                    class="btn btn-warning btn-sm form-control"
                                     v-on:click="editPropertyToEmployee()"
                                    @click="sendPropEmployee(properties)"

                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Refresh Property"
                                    >
                                    <i class="fas fa-share-square"></i>
                                    <p>Assign Emp</p>
                                    </button>


                                </div> -->
                                <!-- <div >
                                    <button
                                        v-if="properties.status !='hot'"
                                        type="button"
                                        class="btn btn-danger btn-sm form-control"
                                        v-on:click="PropertyHot(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                        >
                                        <i class="fab fa-hotjar"></i>
                                    <p>Hot</p>
                                    </button>
                                    <button v-else
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="editProperty()"
                                       @click="PropertyOk(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property">
                                        <i class="fab fa-odnoklassniki-square"></i>
                                        <p>Occupied</p>
                                        </button>
                                </div> -->
                            </div>
                        </div>
                        <strong>Message:</strong>
                        <p>
                            I would like to inquire about your property EKO - ID27395957.
                            Please contact me at your earliest convenience.
                        </p>
                        <div class="social-links my-0">
                                <h4>Share this ad</h4>
                                <ul class="list-inline">
                                    <li><a href="https://www.facebook.com/rentpropertyatEKO"><i class="fa fa-facebook-square fa-2x" style="font"></i></a></li>
                                    <li><a href="https://twitter.com/ekirayaonline"><i class="fa fa-twitter-square fa-2x"></i></a></li>
                                    <li><a href="https://ekirayaonline.business.site"><i class="fa fa-google-plus-square fa-2x"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/ekirayaonline"><i class="fa fa-linkedin-square fa-2x"></i></a></li>
                                    <li><a href="https://www.pinterest.com/ekirayaonline/"><i class="fa fa-pinterest-square fa-2x"></i></a></li>
                                </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="description-info" >
                <div class="row">
                    <div class="col-md-8" style="margin-top: -14px;">
                        <div>
                            <h4>Description</h4>
                            <p v-html="properties.description"></p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="short">
                            <h4>Short Info</h4>
                            <ul>
                                <li><i class="fa fa-shopping-cart"></i><a href="#">Office: Meet in person</a></li>
                                <li><i class="fa fa-user-plus"></i><a href="#">More Property by <span>E-Kiraya Online</span></a></li>
                                <li><i class="fa fa-reply"></i><a href="#">Send to a friend</a></li>
                                <li><i class="fa fa-heart-o"></i><a href="#">Save ad as Favorite</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         <b-modal id="modal-lg" hide-footer ref="editShowProperty" size="lg" title="Update Details">
                <form v-on:submit.prevent="updateProperty">
                    <div class="section postdetails">
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
                                        <select class="form-control" id="city" v-model="editPropertyData.city_id" @change='getSector()'>
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
        <b-modal id="modal-lg" hide-footer ref="suspendedReservation" title="Suspended Property To Tenant">
            <form v-on:submit.prevent="suspendProperty">
                <div class="row">
                    <div class="col-md-12">
                        <div class="form-group">
                            <input type="text" class="form-control"  v-model="suspension.comment"  placeholder="Enter your Comment">
                        </div>
                    </div>
                </div>
                <button type="submit" class="btn btn-success btn-sm">Submit</button>
            </form>
        </b-modal>
        <b-modal ref="newEmailModal" hide-footer title="Email Form">
                    <form id="contact-form" v-on:submit.prevent="contactUs" class="contact-form">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" v-model="contact.name" class="form-control" required="required" placeholder="Name">
                                </div>
                                <div class="invalid-feedback" v-if="errors.name">
                                    {{ errors.name[0] }}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="email" v-model="contact.email" class="form-control" required="required" placeholder="Email Id">
                                </div>
                                <div class="invalid-feedback" v-if="errors.email">
                                    {{ errors.email[0] }}
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" v-model="contact.subject" class="form-control" required="required" placeholder="Subject">
                                </div>
                                <div class="invalid-feedback" v-if="errors.subject">
                                    {{ errors.subject[0] }}
                                </div>
                            </div>

                            <div class="col-sm-12">
                                <div class="form-group">
                                    <textarea  v-model="contact.message" id="message" required="required" class="form-control" rows="7" placeholder="Message"></textarea>
                                </div>
                                <div class="invalid-feedback" v-if="errors.subject">
                                    {{ errors.message[0] }}
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-info">Submit Your Message</button>
                        </div>
                    </form>
        </b-modal>
    </main>
</template>
<script>
import * as PropertiesService from "../../services/properties_service";
import * as AdminService from "../../services/admin_service.js";
// import * as CsrService from "../../services/csr_service";
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
      areaManagers:[],
      tenant:[],
      areaTenant:[],
      rules: [],
      managers:[],
      managers:{},
      city: 0,
      properties: [],
       properties: {},
      protypes: [],
      editPropertyData: {},
      showName: false,
      showImage: true,
      moreExists: false,
      readMore: false,
      nextPage: 0,
      errors: {},
        sector_id:'',
        assignProperty:{
          name:'',
          sector_id:'',
          city_id:'',
          comment:'',
          property_id:'',
        },
        assignPropertyEmp:{
            name:'',
            sector_id:'',
            city_id:'',
            comment:'',
            property_id:'',
        },
        assignTenant:{
          name:'',
          comment:'',
          property_id:'',
        },
        employees:[],
        suspension:{
            comment:'',
            property_id:'',
        },
        contact:{
              name:'',
              email:'',
              subject:'',
              message:'',
        },

    };
  },
    beforeRouteEnter: async function(to, from, next) {
                try {
                const response = await PropertiesService.getAllProperties(to.params.id);
                if (!response) {
                    next('/404');
                }
                next(vm => {
                    vm.properties = response.data;
                    vm.sector_id=response.data.sector_id;
                });
                next();
                } catch (error) {
                next('/404');
                }
    },
    mounted() {
        this.getProTypeData();
        this.getCity();

    },
  methods: {
    PropertyHot: async function (properties) {
      if (!window.confirm("Are you sure you want to Hot this Property")) {
        return;
      }
      try {
        const response = await AdminService.PropertyHot(properties.id);
        this.flashMessage.success({
          message: "Property Hoted Successfuly!",
          time: 5000,
        });
      } catch (error) {
        switch (error.response.status) {
                case 422:
                    this.errors = error.response.data.errors;
                    break;
                case 401:
                    this.errors = {};
                    this.flashMessage.info({
                        message: error.response.data.message,
                        time: 5000,
                    });
                    break;
                default:
                    this.errors = {};
                    this.flashMessage.error({
                        message: "Some error occurred please try again",
                        time: 5000,
                    });
                    break;
            }
      }
    },

    sendProp: async function(properties)
            {
                this.assignProperty.property_id = properties.id
                this.assignProperty.city_id = properties.city_id
                this.assignProperty.sector_id = properties.sector_id
                this.assignProperty.user_id = properties.user_id
    },
    contactUs: async function () {
            try {
                const response = await userService.contactUs(this.contact);
                this.errors = {};
                this.contact = {};
                this.flashMessage.success({
                    message: "your email send successfully!",
                    time: 5000,
                });
            } catch (error) {
                this.errors = error.response.data.errors;
                this.flashMessage.error({
                    message: "Some error occurred!",
                    time: 5000,
                });
            }
    },
    showEmailModal() {
        this.$refs.newEmailModal.show();
    },
    changeNumber: async function(item){
        const number=item.manager_phone;
        const phoneNumber=document.querySelector("#phonenumber");
        phoneNumber.innerHTML= "0333-5551717";
    },
    showHide: function (e) {
        this.showName = e.target.value == "1";
    },
    assignPropertyData:async function(properties){
        try {
            const response = await PropertiesService.assignPropertyData(this.assignProperty);
            this.flashMessage.success({
                message:'Property Assign to Manager Successfully !',
                time:5000
            });
        } catch (error) {
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
    cancellReservation: async function (property) {
      this.suspenseData = { ...property };
      this.$refs.suspendedReservation.show();
    },
    sendPropEmployee: async function(properties)
    {
        this.assignPropertyEmp.property_id = properties.id
        this.assignPropertyEmp.city_id = properties.city_id
        this.assignPropertyEmp.sector_id = properties.sector_id
        this.assignPropertyEmp.user_id = properties.user_id
    },
    reservation:async function (properties) {
          this.suspension.property_id = properties.id
    },
    editPropertyToEmployee: async function (properties) {
        this.editPropertyData = { ...properties };
        this.$refs.editPropertyToEmployee.show();
    },
    paidPropertyRent: async function (properties) {
            if (
                !window.confirm("Are you sure you want to paid rent of this Property")
            ) {
                return;
            }
            try {
                const response = await PropertiesService.paidPropertyRent(properties.id);
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
    unPaidPropertyRent:async function (properties) {
                if (
                    !window.confirm("Are you sure you know that this Property Rent is not Paid yet")
                    ) {
                    return;
                    }
                try {
                    const response = await AdminService.unPaidPropertyRent(properties.id);
                    this.flashMessage.success({
                        message: 'Your Successfully Change this property Rent type',
                        time : 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message:'Some error occured!',
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
    editProperty: async function (properties) {
                this.editPropertyData = { ...properties };
                this.$refs.editProperty.show();
    },
    editShowProperty: async function (properties) {
                this.editPropertyData = { ...properties };
                this.$refs.editShowProperty.show();
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
            formData.append("operator", this.editPropertyData.operator);
            formData.append("security_price", this.editPropertyData.security_price);
            formData.append("company_commession", this.editPropertyData.company_commession);
            formData.append("paid_date", this.editPropertyData.paid_date);
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
            // this.properties.map((properties) => {
            // if (properties.id == response.data.id) {
            //     for (let key in response.data) {
            //     properties[key] = response.data[key];
            //     }
            // }
            // });
            this.hideEditModal();
            this.flashMessage.success({
            message: "Property Updated successfully!",
            time: 5000,
            });
        } catch (error) {
            console.log(error + '');
            this.flashMessage.error({
            message: "Some error occured !",
            time: 500,
            });
            // switch (error.response.status) {
            // case 422:
            //     this.errors = error.response.data.errors;
            //     break;
            // default:
            //     this.flashMessage.error({
            //     message: "Some error occured !",
            //     time: 500,
            //     });
            //     break;
            // }
        }
    },
    getCity:async function(){
        try {
            const response = await AdminService.getCity();
            this.cities = response.data;
        } catch (error) {
        this.flashMessage.error({
            message: 'Some error occurred!',
            time:5000
            });
        }
    },
    getSectors: async function () {
        try {
            const response = await PropertiesService.getSectors({
                params: {
                    city_id: this.editPropertyData.city_id
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
    hideEditModal(){
        this.$refs.editShowProperty.hide();
    },
    editProperty: async function (properties) {
                this.editPropertyData = { ...properties };
                this.$refs.editProperty.show();
    },
    showProperty: async function (property) {
      this.editPropertyData = { ...property };
      this.$refs.showProperty.show();
    },


    paidPropertyRent: async function (properties) {
      if (
        !window.confirm("Are you sure you want to paid rent of this Property")
      ) {
        return;
      }
      try {
        const response = await PropertiesService.paidPropertyRent(properties.id);
        // this.properties = this.properties.filter((obj) => {
        //   return obj.id != property.id;
        // });
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
    suspendedProperty:async function(properties){
                if (!window.confirm('Are you sure you want to reject this Property for some issues')) {
                    return;
                }
                try {
                    const response = await PropertiesService.suspendedProperty(properties.id);
                    this.flashMessage.success({
                        message: 'You are successfully Rejected This for some issues',
                        time: 5000,
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occured! try again please'
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
};
</script>
<style scoped>
.authorization-btn button {
  border-radius: 50%;
    height: 60px;
    width: 60px;
    font-size: 12px;
    text-align: center;
}
.priceposition{
    display: block;
    margin-left: auto;
}
.btncontact{
width: 100%;
}
.carousel {
  position: relative;
}
#myCarousel img{
    height: 400px;
}
#carousel-thumbs2 img{
    height: 70px;
    width: 100%;
}
#carousel-thumbs {
  background: rgba(255,255,255,.3);
  bottom: 0;
  left: 0;
  padding: 0 50px;
  right: 0;
}
#carousel-thumbs img {
  border: 5px solid transparent;
  cursor: pointer;
}
#carousel-thumbs img:hover {
  border-color: rgba(255,255,255,.3);
}
#carousel-thumbs .selected img {
  border-color: #fff;
}
.carousel-control-prev,
.carousel-control-next {
  width: 50px;
}
</style>
