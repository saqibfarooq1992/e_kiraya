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
                        <h4 class="title text-success" v-if="!readMoreActivated" >{{properties.title.slice(0, 40 )}}<small href="#" v-if="!readMoreActivated" @click="activateReadMore" class="text-info"> Read more...</small></h4>
                        <span v-if="readMoreActivated" class="text-success">{{properties.title}}</span>
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
                                        @click="sendPropTenant(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property">
                                        <i class="fab fa-odnoklassniki-square"></i>
                                        <p>Occupied</p>
                                        </button>
                                    </div>
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
                                <!-- <div  class="col-md-2" >
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
                                </div> -->
                                <div  class="col-md-2">
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
                                    <p>Sespend</p>
                                    </button>

                                </div>
                                <div class="col-md-2">
                                    <button v-if="properties.rent==='paid'"
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
                                    <button v-else
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

                                </div>
                                <div >
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
                                        v-on:click="PropertyOk(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property">
                                        <i class="fab fa-odnoklassniki-square"></i>
                                        <p>Occupied</p>
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
                                <div  class="col-md-2" >
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
                                        @click="sendPropTenant(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property">
                                        <i class="fab fa-odnoklassniki-square"></i>
                                        <p>Occupied</p>
                                        </button>
                                    </div>
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
                                <!-- <div  class="col-md-2" >
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
                                </div> -->
                                <div  class="col-md-2">
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
                                    <p>Sespend</p>
                                    </button>

                                </div>
                                <div class="col-md-2">
                                    <button v-if="properties.rent==='paid'"
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
                                    <button v-else
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

                                </div>
                                <div >
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
                                        v-on:click="PropertyOk(properties)"
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        title="follow property">
                                        <i class="fab fa-odnoklassniki-square"></i>
                                        <p>Occupied</p>
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
        <b-modal id="modal-lg" hide-footer ref="editPropertyToEmployee" title="Assign Property Employee">
                <form v-on:submit.prevent="assignPropertyEmployee">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1" v-model="assignPropertyEmp.name">
                                    <option value="">Select Manager</option>
                                    <option v-for="(user , index) in employees" :key="index" v-bind:value="user.user_id" >{{user.name}}</option>
                                </select>
                            </div>
                        </div>
                       <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control"  v-model="assignPropertyEmp.comment"  placeholder="Enter your Comment">
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success btn-sm">Submit</button>
                </form>
        </b-modal>
        <b-modal id="modal-lg" hide-footer ref="assignToTenant" title="Assign Property To Tenant">
                <form v-on:submit.prevent="assignPropertyToTenant">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-group">
                                <select class="form-control" id="exampleFormControlSelect1" v-model="assignTenant.name">
                                    <option value="">Select Tenant</option>
                                    <option v-for="(user , index) in tenants" :key="index" v-bind:value="user.user_id" >{{user.name}}</option>
                                </select>
                            </div>
                        </div>
                       <div class="col-md-6">
                            <div class="form-group">
                                <input type="text" class="form-control"  v-model="assignTenant.comment"  placeholder="Enter your Comment">
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-success btn-sm">Submit</button>
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
    </main>
</template>
<script>
import * as PropertiesService from "../../services/properties_service";
import * as AdminService from "../../services/admin_service.js";
import { VueEditor } from "vue2-editor";
import { throws } from "assert";
export default {
  name: "Properties",
  components: {
    VueEditor,
  },
  data() {
    return {
      readMoreActivated: false,
      query: "",
      cities: [],
      sectors: [],
      areaManagers:[],
      rules: [],
      tenants:[],
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
        assignTenant:{
          name:'',
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
        suspension:{
            comment:'',
            property_id:'',
        },
        employees:[],
        suspenseData:{},
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
    this.getManagerData();
    this.getTenantData();
    this.getEmployeeData();
  },
  methods: {
    activateReadMore(){
        this.readMoreActivated = true;
    },
    suspendProperty:async function(properties) {
        try {
            const response = await AdminService.suspendProperty(this.suspension , properties.id);
            // this.comments.unshift(response.data);
                this.flashMessage.success({
                    message: error.response.data.message,
                    time:5000,
            });
            this.suspension.comment= "";
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
    getManagerData:async function (properties){
        try {
            const response = await AdminService.getManagerData(this.sector_id);
            this.managers = response.data;
        } catch (error) {
            this.flashMessage.error({
                message: 'some error occurred Please try again',
                time: 2000
            });
        }
    },
    getEmployeeData:async function (properties){
        try {
            const response = await AdminService.getEmployeeData(this.sector_id);
            console.log(response);
            this.employees = response.data;
        } catch (error) {
            this.flashMessage.error({
                message: 'some error occurred Please try again',
                time: 2000
            });
        }
    },
    getTenantData:async function(properties) {
        try {
            const response = await AdminService.getTenantData(this.properties.id);
            console.log(response);
            this.tenants = response.data;
        } catch (error) {
            this.flashMessage.error({
                message: 'some error occurred please try again',
                time: 2000
            });
        }
    },
    sendProp: async function(properties)
    {
        this.assignProperty.property_id = properties.id
        this.assignProperty.city_id = properties.city_id
        this.assignProperty.sector_id = properties.sector_id
        this.assignProperty.user_id = properties.user_id
    },
    sendPropTenant: async function(properties)
    {
        this.assignTenant.property_id = properties.id
        this.assignTenant.user_id = properties.user_id
    },
    sendPropEmployee: async function(properties)
    {
        this.assignPropertyEmp.property_id = properties.id
        this.assignPropertyEmp.city_id = properties.city_id
        this.assignPropertyEmp.sector_id = properties.sector_id
        this.assignPropertyEmp.user_id = properties.user_id
    },
    assignPropertyEmployee:async function(properties){
        try {
            const response = await PropertiesService.assignPropertyEmployee(this.assignPropertyEmp);
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
    reservation:async function (properties) {
          this.suspension.property_id = properties.id
    },
    getAreaManager:async function(){
        try {
                const response = await AdminService.getAreaManager({
                    params: {
                        user_id: this.assignProperty.name
                        }
                }).then(function(response){
                        this.areaManagers = response.data;
                    }.bind(this));
                console.log(response);
                } catch (error) {
                this.flashMessage.error({
                message: "Some error occurred!",
                time: 5000,
                });
            }
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
    assignPropertyToTenant:async function(){
        try {
            const response = await PropertiesService.assignPropertyToTenant(this.assignTenant);
            this.flashMessage.success({
                message:'Property Assign to Tenant Successfully !',
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
    editPropertyToEmployee: async function (properties) {
                this.editPropertyData = { ...properties };
                this.$refs.editPropertyToEmployee.show();
    },
    showProperty: async function (property) {
      this.editPropertyData = { ...property };
      this.$refs.showProperty.show();
    },
    cancellReservation: async function (property) {
      this.suspenseData = { ...property };
      this.$refs.suspendedReservation.show();
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
        const response = await PropertiesService.approvedProperty(properties.id);
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
      if (!window.assignToTenant()) {
        return;
      }
      try {
        const response = await PropertiesService.PropertyOk(properties.id);
        // this.properties = this.properties.filter(obj => {
        //             return obj.id !=property.id;
        //     });
        this.flashMessage.success({
          message: "Property Occupied Successfuly!",
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
    suspendedProperty:async function(properties){
                if (!window.cancellReservation()) {
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
    assignToTenant: async function (property) {
      this.editPropertyData = { ...property };
      this.$refs.assignToTenant.show();
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
