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
                        <!-- <p>
                            <span>
                            Offered by:
                            <a href="#">EKiraya Online</a>
                            </span>
                            <span>
                            Ad ID:
                            <a href="#" class="time">{{properties.property_number}}</a>
                            </span>
                        </p>
                        <span class="icon">
                            <i class="fa fa-clock-o"></i>
                            <a href="#">7 Jan, 16 10:10 pm</a>
                        </span>
                        <span class="icon">
                            <i class="fa fa-map-marker"></i>
                            <a href="#">Islamabad</a>
                        </span>
                        <strong>Rent Price:</strong>
                        <a href="#">{{properties.rent_price}}</a> -->
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
                                <div  class="col-md-2">
                                    <button v-if="properties.status !=='approved || occupied'"
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
                                </div>
                                <div  class="col-md-2">
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
                                </div>
                                <div  class="col-md-2" >
                                    <button v-if="properties.status !=='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="PropertyOk(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                    >
                                    <i class="fab fa-odnoklassniki-square"></i>
                                    <p>Occupied</p>
                                    </button>
                                    <button v-else-if="properties.rent ==='unpaid' && properties.status==='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="paidPropertyRent(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                    >
                                    <i class="fab fa-odnoklassniki-square"></i>
                                    <p>Paid</p>
                                    </button>
                                    <button v-else-if="properties.rent==='paid' && properties.status==='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="unPaidPropertyRent(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                    >
                                    <i class="fab fa-odnoklassniki-square"></i>
                                    <p>Un-Paid</p>
                                    </button>
                                </div>
                                <div  class="col-md-2">
                                    <button
                                    type="button"
                                    class="btn btn-warning btn-sm form-control"
                                    v-on:click="reloadProperty(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Refresh Property"
                                    >
                                    <i class="fas fa-sync-alt"></i>
                                    <p>Refresh</p>
                                    </button>
                                </div>
                                <div class="col-md-2" >
                                    <button
                                    type="button"
                                    class="btn btn-info btn-sm form-control"
                                    v-on:click="suspendedProperty(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="paid rent"
                                    >
                                    <i class="fas fa-thumbs-up"></i>
                                    <p>Sespend</p>
                                    </button>

                                </div>
                                <div v-if="properties.status !=='approved || occupied || hot'" class="col-md-2">
                                    <button
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
                                <div  class="col-md-2">
                                    <button v-if="properties.status !=='approved || occupied'"
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
                                </div>
                                <div  class="col-md-2">
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
                                </div>
                                <div  class="col-md-2" >
                                    <button v-if="properties.status !=='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="PropertyOk(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                    >
                                    <i class="fab fa-odnoklassniki-square"></i>
                                    <p>Occupied</p>
                                    </button>
                                    <button v-else-if="properties.rent ==='unpaid' && properties.status==='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="paidPropertyRent(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                    >
                                    <i class="fab fa-odnoklassniki-square"></i>
                                    <p>Paid</p>
                                    </button>
                                    <button v-else-if="properties.rent==='paid' && properties.status==='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="unPaidPropertyRent(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                    >
                                    <i class="fab fa-odnoklassniki-square"></i>
                                    <p>Un-Paid</p>
                                    </button>
                                </div>
                                <div  class="col-md-2">
                                    <button
                                    type="button"
                                    class="btn btn-warning btn-sm form-control"
                                    v-on:click="reloadProperty(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Refresh Property"
                                    >
                                    <i class="fas fa-sync-alt"></i>
                                    <p>Refresh</p>
                                    </button>
                                </div>
                                <div class="col-md-2" >
                                    <button
                                    type="button"
                                    class="btn btn-info btn-sm form-control"
                                    v-on:click="suspendedProperty(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="paid rent"
                                    >
                                    <i class="fas fa-thumbs-up"></i>
                                    <p>Sespend</p>
                                    </button>

                                </div>
                                <div v-if="properties.status !=='approved || occupied || hot'" class="col-md-2">
                                    <button
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
                <!-- <div class="col-lg-5  p-3" v-else>
                    <div class="slider-text">
                        <h3 class="title text-success">{{properties.title}}</h3>
                        <p>
                            <span>
                            Offered by:
                            <a href="#">EKiraya Online</a>
                            </span>
                            <span>
                            Ad ID:
                            <a href="#" class="time">{{properties.property_number}}</a>
                            </span>
                        </p>
                        <span class="icon">
                            <i class="fa fa-clock-o"></i>
                            <a href="#">7 Jan, 16 10:10 pm</a>
                        </span>
                        <span class="icon">
                            <i class="fa fa-map-marker"></i>
                            <a href="#">Islamabad</a>
                        </span>
                        <strong>Rent Price:</strong>
                            <a href="#">{{properties.rent_price}}</a>
                        <div class="short-info">
                            <p>
                                <span><strong>City:</strong></span>
                                <a href="#">{{properties.city_name}}</a>
                                <span class="px-3">
                                    <strong>Sector:</strong>
                                    <a href="#">{{properties.sector}}</a>
                                </span>
                            </p>
                            <p>
                                <strong>Address:</strong>
                                <a href="#">{{properties.address}}</a>
                            </p>
                            <p>
                                <strong>Property Size:</strong>
                                <a href="#">{{properties.size}}</a>
                                <a href="#">{{properties.unit}}</a>
                                <strong class="px-3">Property-Type:</strong>
                                <a href="#">{{properties.property_name}}</a>
                            </p>
                            <p>
                                 <a class="pr-1">
                                    <strong>Status:</strong>{{properties.status}}
                                </a>
                                <a class="pr-3">
                                    <strong class="px-4">Furnished:</strong>{{properties.furnished}}
                                </a>
                            </p>
                            <p>

                            </p>
                        </div>
                        <div class="authorization-btn">
                            <div class="row mr-auto">
                                <div  class="col-md-2">
                                    <button v-if="properties.status !=='approved || occupied'"
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
                                </div>
                                <div  class="col-md-2">
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
                                </div>
                                <div  class="col-md-2" >
                                    <button v-if="properties.status !=='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="PropertyOk(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                    >
                                    <i class="fab fa-odnoklassniki-square"></i>
                                    <p>Occupied</p>
                                    </button>
                                    <button v-else-if="properties.rent ==='unpaid' && properties.status==='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="paidPropertyRent(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                    >
                                    <i class="fab fa-odnoklassniki-square"></i>
                                    <p>Paid</p>
                                    </button>
                                    <button v-else-if="properties.rent==='paid' && properties.status==='occupied'"
                                        type="button"
                                        class="btn btn-warning btn-sm form-control"
                                        v-on:click="unPaidPropertyRent(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property"
                                    >
                                    <i class="fab fa-odnoklassniki-square"></i>
                                    <p>Un-Paid</p>
                                    </button>
                                </div>
                                <div  class="col-md-2">
                                    <button
                                    type="button"
                                    class="btn btn-warning btn-sm form-control"
                                    v-on:click="reloadProperty(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="Refresh Property"
                                    >
                                    <i class="fas fa-sync-alt"></i>
                                    <p>Refresh</p>
                                    </button>
                                </div>
                                <div class="col-md-2" >
                                    <button
                                    type="button"
                                    class="btn btn-info btn-sm form-control"
                                    v-on:click="suspendedProperty(properties)"
                                    data-toggle="tooltip"
                                    data-placement="top"
                                    title="paid rent"
                                    >
                                    <i class="fas fa-thumbs-up"></i>
                                    <p>Sespend</p>
                                    </button>

                                </div>
                                <div v-if="properties.status !=='approved || occupied || hot'" class="col-md-2">
                                    <button
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
                                </div>
                            </div>
                        </div>
                    </div>
                </div> -->
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
        <b-modal id="modal-lg" hide-footer ref="editProperty" title="Assign Property Manager">
                <form v-on:submit.prevent="assignPropertyData">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1" v-model="assignProperty.name">
                                    <option value="">Select Manager</option>
                                    <option v-for="(user , index) in managers" :key="index" v-bind:value="user.user_id" >{{user.name}}</option>
                                </select>
                            </div>
                        </div>
                       <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control"  v-model="assignProperty.comment"  placeholder="Enter your Comment">
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success btn-sm">Submit</button>
                </form>
        </b-modal>
    </main>
</template>
<script>
import * as PropertiesService from "../../services/properties_service";
import * as ManagerService from "../../services/manager_service";
import * as CsrService from "../../services/csr_service";
import * as EmployeeService from "../../services/employee_service";

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
      properties: [],
      protypes: [],
      employees:[],
      areaEmployees:[],
      editPropertyData: {},
      showName: false,
      showImage: true,
      moreExists: false,
      readMore: false,
      nextPage: 0,
      errors: {},
      assignProperty:{
          name:'',
          sector:'',
          city:'',
          comment:'',
          property_id:'',
      }
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
                });
                next();
                } catch (error) {
                next('/404');
                }
    },
  mounted() {
    // this.getProTypeData();
    // this.getManagerData();
    this.getEmployee();
    this.getProTypeData();
  },
  methods: {
    PropertyHot: async function (properties) {
      if (!window.confirm("Are you sure you want to Hot this Property")) {
        return;
      }
      try {
        const response = await ManagerService.PropertyHot(properties.id);
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
    approvedProperty: async function (properties) {
      if (!window.confirm("Are you sure you want to Approve this Property")) {
        return;
      }
      try {
        const response = await ManagerService.approvedProperty(properties.id);
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
    PropertyOk: async function (properties) {
      if (!window.confirm("Are you sure you want to Attached this Property")) {
        return;
      }
      try {
        const response = await PropertiesService.PropertyOk(properties.id);
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
    reloadProperty: async function (properties) {
      if (!window.confirm("Are you sure you want to Reload this Property")) {
        return;
      }
      try {
        const response = await PropertiesService.reloadProperty(properties.id);
        // this.properties = this.properties.filter((obj) => {
        //   return obj.id != property.id;
        // });
        this.flashMessage.success({
          message: "Property Reloaded Successfuly!",
          time: 5000,
        });
      } catch (error) {
          console.log(error + '');
        this.flashMessage.error({
          message: "Some error occurred!",
          time: 5000,
        });
      }
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
    editProperty: async function (properties) {
        this.editPropertyData = { ...properties };
        this.$refs.editProperty.show();
    },
    showProperty: async function (property) {
      this.editPropertyData = { ...property };
      this.$refs.showProperty.show();
    },
    editProperty: async function (property) {
      this.editPropertyData = { ...property };
      this.$refs.editProperty.show();
    },
    getEmployee:async function (){
        try {
            const response = await EmployeeService.getEmployee();
            this.employees = response.data;
        } catch (error) {
          console.log(error + '');
            this.flashMessage.error({
                message: 'some error occurred Please try again',
                time: 2000
            });
        }
    },
    getAreaEmployeeData:async function(){
        try {
                const response = await ManagerService.getAreaEmployeeData({
                    params: {
                        user_id: this.assignProperty.name
                        }
                }).then(function(response){
                        this.areaEmployees = response.data;
                    }.bind(this));
                console.log(response);
                } catch (error) {
                  console.log(error + '');
                this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000,
                });
            }
    },
    sendProp: async function(properties)
        {
            this.assignProperty.property_id = properties.id
    },
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
