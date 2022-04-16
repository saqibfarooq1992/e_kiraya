<template>
    <main>
        <Header />
        <section id="main" class="clearfix details-page bg-light pt-2">
            <div class="container">
                <div class="container row" style="background-color:white;" v-if="properties.property_name === 'House'">
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
                    <div class="col-md-5" style="padding-top:5px">
                        <div class="slider-text">
                            <h3 class="title text-success"><small>{{properties.title}}</small></h3>
                            <div class="row price">
                                <h3 class=" text-dark">Property details</h3>
                                 <h3 class="priceposition text-success"> Rs {{properties.rent_price}}</h3>
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
                            <div>
                                  <div class="row">
                                    <div class="col-md-4">
                                      <button class="btn btn-success form-contol btncontact" id="phonenumber" v-on:click="changeNumber(properties)">Call</button>
                                    </div>
                                    <div class="col-md-4">
                                      <button @click="showEmailModal" class="btn btn-warning btncontact">Email</button><br>
                                    </div>
                                    <div class="col-md-4">
                                      <button  class="btn hide-number btn-outline-info d-block ml-auto w-100 btncontact"  @click="showModal">
                                         Reserved
                                      </button>
                                    </div>
                                </div>
                            </div>
                            <div class="social-links">
                                <h4>Share this ad</h4>
                                <ul class="list-inline my-0">
                                    <li><a href="https://www.facebook.com/rentpropertyatEKO"><i class="fa fa-facebook-square fa-2x" style="font"></i></a></li>
                                    <li><a href="https://twitter.com/ekirayaonline"><i class="fa fa-twitter-square fa-2x"></i></a></li>
                                    <li><a href="https://ekirayaonline.business.site"><i class="fa fa-google-plus-square fa-2x"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/ekirayaonline"><i class="fa fa-linkedin-square fa-2x"></i></a></li>
                                    <li><a href="https://www.pinterest.com/ekirayaonline/"><i class="fa fa-pinterest-square fa-2x"></i></a></li>
                                </ul>
                            </div>
                            <strong>Message:</strong>
                            <p>
                              I would like to inquire about your property EKO - ID27395957.
                               Please contact me at your earliest convenience.
                            </p>
                        </div>
                    </div>
                </div>
                <div class="container row" style="background-color:white;" v-else>
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
                    <div class="col-md-5" style="padding-top:10px">
                        <div class="slider-text">
                            <div class="row price">
                                <h3 class=" text-dark">{{properties.title}}</h3>
                                 <h3 class="priceposition text-success"> Rs {{properties.rent_price}}</h3>
                            </div>
                            <p>
                              <span>
                                    Ad ID:<a href="#" class="time">{{properties.property_number}}</a>
                              </span>
                            </p>
                            <div class="short-info">
                                <p>
                                  <strong>Furnished: </strong><a href="#">{{properties.furnished}}</a>
                                  <span class="px-3">
                                    <strong>City: </strong><a href="#">{{properties.city_name}}</a>
                                  </span>
                                </p>
                                <p><strong>City: </strong><a href="#">{{properties.city_name}}</a> </p>
                                 <p><strong>Sector: </strong><a href="#">{{properties.sector}}</a> </p>
                                 <p><strong>Address: </strong><a href="#">{{properties.address}}</a> </p>
                                <p><strong>Property Size: </strong><a href="#">{{properties.size}} {{properties.unit}}</a> </p>
                                <p>
                                    <a class="pr-1"><strong>Furnished:</strong>{{properties.furnished}}</a>
                                </p>
                            </div>
                            <div>
                                <h4>Contact with </h4>
                                     <div class="row">
                                        <div class="col-md-4">
                                            <button class="btn btn-success form-contol btncontact" id="phonenumber" v-on:click="changeNumber(properties)">Call</button>
                                        </div>
                                        <div class="col-md-4">
                                             <button @click="showEmailModal" class="btn btn-warning btncontact">Email</button><br>
                                        </div>
                                        <div class="col-md-4">
                                          <button  class="btn hide-number btn-outline-info d-block ml-auto w-100 btncontact"  @click="showModal">
                                            Reserved
                                          </button>
                                        </div>
                                    </div>
                            </div>
                            <div class="social-links">
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
                <div class="description-info mt-5" >
                    <div class="row">
                        <div class="col-md-8">
                            <div class="description">
                                <h4>Description</h4>
                                <p v-html="properties.description"></p><br>
                            </div>
                        </div>

                        <div class="col-md-4">
                            <div class="short-info">
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
                <div class="recommended-info">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="section recommended-ads">
                                <div class="featured-top">
                                    <h4>Recommended Properties for You</h4>
                                </div>
                                <div class="ad-item row recommendedaddesktop" v-for="(favourite , index) in details" :key="index">
                                    <div class="item-image-box col-lg-4">
                                        <div class="item-image">
                                            <a href="details.html"><img :src="`${$store.state.serverPath}storage/${favourite.pic1}`" alt="Image" height="150" class="img-fluid"></a>
                                        </div>
                                    </div>

                                    <div class="item-info col-lg-8 p-0">
                                        <div class="ad-info">
                                            <h5 class="item-price">Rs: {{favourite.rent_price}}<i class="fa fa-heart-o  pull-right heart" v-on:click="favourite(favourite)" ></i><i class="fa fa-thumbs-o-up pull-right thumbs" v-on:click="myToggle"></i><i class="fa fa-share-square-o pull-right share" v-on:click="myToggle" ></i></h5>
                                            <h6 class="item-title"><a href="#">{{favourite.title}}</a></h6>
                                            <!-- <div class="item-cat">
                                                <span><a href="#">City: {{favourite.city.city_name}}</a></span>
                                            </div>  -->
                                            <div class="item-cat">
                                                <span><a href="#">{{favourite.city_name}} / {{favourite.sector}}</a></span>
                                            </div>
                                        </div>
                                        <div class="adsclick-footer">
                                            <div class="d-inline-block">
                                                <div class="d-inline">
                                                     <span class="dated"><a href="#" class="text-muted">7 Jan, 16  10:10 pm </a></span>
                                                </div>
                                                <div class="d-inline adsclickicon">
                                                     <a href="#" class="tag text-muted"><i class="fa fa-tags"></i> New</a>
                                                </div>
                                                <div class="d-inline-block adsclickicon ml-auto">
                                                      <a href="#" data-toggle="tooltip" data-placement="top" title="Islamabad"><img :src="`${$store.state.serverPath}images/map.png`" height="18px" width="30px"/></a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="ad-item row recommendedadtabs " v-for="(detail , index) in details" :key="index">
                                    <div class="row">
                                         <div class="col-md-4">
                                              <div class="item-image">
                                                <a href="details.html"><img :src="`${$store.state.serverPath}storage/${detail.pic1}`" alt="Image" class="img-fluid"></a>
                                              </div>
                                         </div>
                                         <div class="col-md-8">
                                                <div class="ad-info">
                                                  <h5 class="item-price">Rs: {{detail.rent_price}}<i class="fa fa-heart-o  pull-right heart" v-on:click="favourite(detail)" ></i><i class="fa fa-thumbs-o-up pull-right thumbs" v-on:click="myToggle"></i><i class="fa fa-share-square-o pull-right share" v-on:click="myToggle" ></i></h5>
                                                  <h6 class="item-title"><a href="#">{{detail.title}}</a></h6>
                                                  <div class="item-cat">
                                                      <span><a href="#">{{detail.city_name}} / {{detail.sector}}</a></span>
                                                  </div>
                                           </div>
                                         </div>
                                    </div>
                                    <div class="adsclick-footer">
                                        <div class="d-inline-block">
                                            <div class="d-inline">
                                                    <span class="dated"><a href="#" class="text-muted">7 Jan, 16  10:10 pm </a></span>
                                            </div>
                                            <div class="d-inline adsclickicon">
                                                    <a href="#" class="tag text-muted"><i class="fa fa-tags"></i> New</a>
                                            </div>
                                            <div class="d-inline adsclickicon">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Islamabad"><img :src="`${$store.state.serverPath}images/map.png`" height="18px" width="30px"/></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-show="moreExistsRecommanded">
                                    <button type="button" class="btn btn-info btn-sm" v-on:click="loadrecommendedProp">
                                        <i class="fas fa-arrow-down"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4 text-center">
                            <div class="recommended-cta">
                                <div class="cta">
                                    <div class="single-cta">
                                        <div class="cta-icon icon-secure">
                                        </div>
                                        <h4>Secure Trading</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    </div>
                                    <div class="single-cta">
                                        <div class="cta-icon icon-support">
                                        </div>
                                        <h4>24/7 Support</h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit</p>
                                    </div>
                                    <div class="single-cta">
                                        <div class="cta-icon icon-trading" >
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
            </div>
            <div>
                <b-modal ref="newModal" hide-footer title="Reservation Form">
                    <form  v-on:submit.prevent="updateReservedProperty()" class="p-3" v-if="!$store.state.isLoggedIn" >
                      <fieldset >
                          <div v-if="reservation.avater.name">
                              <img src="images/img_avatar.png" alt="Avatar" ref="newAvaterImageDisplay" style="width:100px; border-radius: 50%; margin-top: -47px;">
                          </div>
                          <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-6" >
                                    <div class="form-group">
                                      <input type="text" class="form-control" v-model="reservation.Name" placeholder="Name" >
                                      <div class="invalid-feedback" v-if="errors.Name">{{errors.Name[0]}}</div>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-6" >
                                  <div class="form-group">
                                      <input type="email" class="form-control" v-model="reservation.email" placeholder="Email Id">
                                      <div class="invalid-feedback" v-if="errors.email">{{errors.email[0]}}</div>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-6" >
                                    <div class="form-group">
                                      <div class="relative">
                                          <input
                                              type="password"
                                              v-model="reservation.password"
                                              v-on:keyup="validatePassword"
                                              ref="passwordField"
                                              class="form-control form-control-user"
                                              placeholder="Password" />
                                          <button class="show-password" type="button" v-on:click="togglePasswordShow">
                                              <span class="fa fa-eye" ref="passwordIcon"></span>
                                          </button>
                                          <div class="invalid-feedback" v-if="errors.password">{{errors.password[0]}}</div>
                                          <i v-if="reservation.password.length" ref="passwordStrength" class="password-strength"></i>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-6" >
                                    <div class="form-group">
                                      <input type="password" class="form-control" v-model="reservation.password_confirmation" placeholder="Confirm Password">
                                      <div class="invalid-feedback" v-if="errors.password_confirmation">{{errors.password_confirmation[0]}}</div>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-lg-6 col-md-6 col-sm-6" >
                                    <div class="input-group mb-3">
                                      <div class="input-group-prepend ">
                                          <span class="input-group-text" id="basic-addon1"><img src="/images/bg/pakflag.png"></span>
                                      </div>
                                      <input-mask type="text" class="form-control" v-model="reservation.phone" mask="9999-9999999" maskChar="" placeholder="Phone No" aria-label="Phone" aria-describedby="basic-addon1"></input-mask>
                                  </div>
                              </div>
                              <div class="col-lg-6 col-md-6 col-sm-6" >
                                  <select class="form-control" v-model="reservation.role">
                                      <option value="">Select Who are you</option>
                                      <option value="landloard">Landlord</option>
                                      <option value="tenant">Tenant</option>
                                  </select>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-lg-6 col-sm-6 col-md-6">
                                  <select class="form-control selectcity" v-model="reservation.city_id">
                                      <option value="">Select City</option>
                                      <option v-for="(city , index) in cities" :key="index" v-bind:value="city.id">{{city.city_name}}</option>
                                  </select>
                              </div>
                              <div class="col-lg-6 col-sm-6 col-md-6">
                                  <div class="form-group">
                                  <label class="float-left text-success ">Image ....(optional)</label>
                                      <input type="file" class="form-control"  name="avatar" id="Avatar" v-on:change="attachImage" ref="avaterImage">
                                        <div class="invalid-feedback" v-if="errors.avatar">{{errors.avatar[0]}}</div>
                                  </div>
                              </div>
                          </div>
                          <div class="checkbox">
                              <label class="pull-left checked" for="signing"><input type="checkbox" name="signing" id="signing"> By signing up for an account you agree to our Terms and Conditions </label>
                          </div>
                      </fieldset>
                      <fieldset>
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <div class=" inputGroupContainer">
                                      <div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span><input v-model="reservation.domicile" name="Domicile" placeholder="Domicile " class="form-control" required="true"  type="text"></div>
                                      </div>
                                  </div>
                              </div>
                              <!-- <div class="col-md-6">

                                  <div class="form-group">
                                      <div class=" inputGroupContainer">
                                          <div class="input-group">
                                              <span class="input-group-addon">
                                                  <i class="glyphicon glyphicon-user">
                                                  </i>
                                              </span>
                                                  <input v-model="reservation.full_name"  name="fullName"   placeholder="Full Name" class="form-control" required="true"  type="text">
                                          </div>
                                      </div>
                                  </div>
                              </div> -->
                              <div class="col-md-6">
                                    <div class="form-group">
                                      <div class=" inputGroupContainer">
                                          <div class="input-group">
                                              <span class="input-group-addon">
                                                  <i class="glyphicon glyphicon-user">
                                                  </i>
                                              </span>
                                              <input-mask
                                                  mask="99999-9999999-9" v-model="reservation.cnic" maskChar="" name="Cnic" placeholder="Cnic" class="form-control" required="true"  type="text">
                                              </input-mask>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <div class=" inputGroupContainer">
                                          <div class="input-group">
                                              <span class="input-group-addon">
                                                  <i class="glyphicon glyphicon-home">
                                                  </i>
                                              </span>
                                              <input v-model="reservation.current_address"  name="addressLine1" placeholder="Current Address" class="form-control" required="true"  type="text">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="form-group wrapper">
                                      <select required class="form-control" v-model="reservation.status" >
                                          <option value="" disabled selected hidden class="w-100"> Status</option>
                                          <option value="bachelor">Bachelor</option>
                                          <option value="family">Family</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                      </fieldset>
                      <button type="submit"  class="btn btn-info" >Reserved Property</button>
                    </form>
                    <form  v-on:submit.prevent="updateReservedProperty()" class="p-3" v-else >
                      <fieldset>
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <div class=" inputGroupContainer">
                                      <div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span><input v-model="reservation.domicile" name="Domicile" placeholder="Domicile " class="form-control" required="true"  type="text"></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                    <div class="form-group">
                                      <div class=" inputGroupContainer">
                                          <div class="input-group">
                                              <span class="input-group-addon">
                                                  <i class="glyphicon glyphicon-user">
                                                  </i>
                                              </span>
                                              <input-mask
                                                  mask="99999-9999999-9" v-model="reservation.cnic" maskChar="" name="Cnic" placeholder="Cnic" class="form-control" required="true"  type="text">
                                              </input-mask>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <div class=" inputGroupContainer">
                                          <div class="input-group">
                                              <span class="input-group-addon">
                                                  <i class="glyphicon glyphicon-home">
                                                  </i>
                                              </span>
                                              <input v-model="reservation.current_address"  name="addressLine1" placeholder="Current Address" class="form-control" required="true"  type="text">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="form-group wrapper">
                                      <select required class="form-control" v-model="reservation.status" >
                                          <option value="" disabled selected hidden class="w-100"> Status</option>
                                          <option value="bachelor">Bachelor</option>
                                          <option value="family">Family</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                      </fieldset>
                      <button type="submit"  class="btn btn-info" >Reserved Property</button>
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
            </div>
	    </section>
        <Footer />
    </main>
</template>
<script>
import Header from '../../components/user/Header.vue';
import Footer from '../../components/user/Footer.vue';
import * as MainService from '../../services/main_service';
import * as userService from "../../services/user_service";
export default {
    components: {
        Header,
        Footer
  },
  metaInfo() {
        return {
            title: "property details",
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                // { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                // { property: 'og:site_name', content: 'Epiloge'},
                // {property: 'og:type', content: 'website'},
                // {name: 'robots', content: 'index,follow'}
            ]
        }
    },
  data(){
      return{
          properties:[],
          details:[],
          moreExistsRecommanded:false,
          city_id:'',
          isHidden: false,
          properties:[],
          favourites:[],
          reservation:{
              property_id:'',
              cnic:'',
              current_address: '',
              status: '',
              domicile:'',
              Name: '',
              avater:'',
              email: '',
              password: '',
              password_confirmation: '',
              phone:'',
              // role: 'student',
              role: '',
              city_id:'',
              // terms: false
          },
          contact:{
              name:'',
              email:'',
              subject:'',
              message:'',
          },
          user: {
                Name: '',
                avater:'',
                email: '',
                password: '',
                password_confirmation: '',
                phone:'',
                role: '',
                city_id:'',
            },
          errors:{},
          errors:[],
      };
  },
    beforeRouteEnter: async function(to, from, next) {
                try {
                const response = await MainService.getPropertyDetail(to.params.slug);
                    if (!response) {
                    next('/404');
                }
                next(vm => {
                    vm.properties = response.data;
                    vm.city_id=response.data.city_id;
                    // vm.getProperty();
                });
                next();
                } catch (error) {
                next('/404');
                }
    },
  mounted(){
      this.recommendedProp();
      this.getCities();

    },
    methods:{
        togglePasswordShow() {
            let passwordField = this.$refs.passwordField;
            let passwordIcon = this.$refs.passwordIcon;
            if (passwordField.getAttribute('type') === 'password') {
                passwordField.setAttribute('type', 'text');
                passwordIcon.classList.remove('fa-eye');
                passwordIcon.classList.add('fa-eye-slash');
            } else {
                passwordField.setAttribute('type', 'password');
                passwordIcon.classList.remove('fa-eye-slash');
                passwordIcon.classList.add('fa-eye');
            }
        },
        validatePassword() {
              if (this.user.password.length === 0) {
                  return;
              }

              this.errors.password = '';
              var matchedCase = new Array();
              matchedCase.push("[$@$!%*#?&]");
              matchedCase.push("[A-Z]");
              matchedCase.push("[0-9]");
              matchedCase.push("[a-z]");

              var ctr = 0;
              for (var i = 0; i < matchedCase.length; i++) {
                  if (new RegExp(matchedCase[i]).test(this.user.password)) {
                      ctr++;
                  }
              }

              var color = "";
              var strength = "";
              switch (ctr) {
                  case 0:
                  case 1:
                  case 2:
                      strength = "Very Weak";
                      color = "red";
                      break;
                  case 3:
                      strength = "Medium";
                      color = "orange";
                      break;
                  case 4:
                      strength = "Strong";
                      color = "green";
                      break;
              }
              this.$refs.passwordStrength.innerHTML = strength;
              this.$refs.passwordStrength.style.color = color;
        },
        changeNumber: async function(item){
          const number=item.manager_phone;
           const phoneNumber=document.querySelector("#phonenumber");
           phoneNumber.innerHTML= "0333-5551717";
        },
        getCities:async function(){
                try {
                    const response = await MainService.getCities();
                    this.cities = response.data;
                } catch (error) {
                        this.flashMessage.error({
                            message: "Some error occurred during geting categories",
                            time:5000
                        });
                    }
        },
        myToggle:async function(){
                    $(".heart").click(function() {
                    $(this).toggleClass('fa-heart');
                    $(this).toggleClass('fa-heart-o');
                });
                $(".thumbs").click(function() {
                    $(this).toggleClass('fa-thumbs-up');
                    $(this).toggleClass('fa-heart-o-up');
                });
                $(".share").click(function() {
                    $(this).toggleClass('fa-share-square');
                    $(this).toggleClass('fa-share-square-o');
                });
        },
        recommendedProp:async function(properties){
            try {
                const response = await MainService.recommendedProp(this.city_id);
                this.details = response.data.data;
                if (response.data.current_page < response.data.last_page) {
                    this.moreExistsRecommanded = true;
                    this.nextPage = response.data.current_page + 1;
                    } else {
                        this.moreExistsRecommanded = false;
                }
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
            }
        },
        loadrecommendedProp:async function (){
            try {
                    const response = await MainService.loadrecommendedProp(this.nextPage);
                    if (response.data.current_page < response.data.last_page) {
                    this.moreExistsRecommanded = true;
                    this.nextPage = response.data.current_page + 1;
                    } else {
                    this.moreExistsRecommanded = false;
                    }
                    response.data.data.forEach((data) => {
                    this.details.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occurred during load more properties",
                    time: 5000,
                    });
                }
        },
        showModal() {
                this.$refs.newModal.show();
        },
        showEmailModal() {
                this.$refs.newEmailModal.show();
        },
        loginModal() {
                this.$refs.loginModal.show();
        },
        hideModal() {
                this.$refs.newModal.hide();
        },
        hideLoginModal() {
                this.$refs.loginModal.hide();
        },
        updateReservedProperty: async function()
        {
            if (!this.$store.state.isLoggedIn)
            {
                this.$router.push('/login');
                return;
            }
             try {
                  this.reservation.property_id = this.properties.id;
                  const response = await MainService.updateReservedProperty(this.reservation)
                    this.flashMessage.success({
                        message: 'Property successfully add your reserved list',
                        time: 5000
                    });
                    if(this.$store.state.profile.role === 'admin'){
                      this.$router.push('/admin-dashboard');
                    }else if(this.$store.state.profile.role === 'tenant'){
                      this.$router.push('/tenant');
                    }else if(this.$store.state.profile.role === 'csr'){
                      this.$router.push('/csr');
                    }else if(this.$store.state.profile.role === 'manager'){
                      this.$router.push('/manager');
                    }
                } catch (error) {
                  switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
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
        attachImage(){
                this.reservation.avater = this.$refs.avaterImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load',function(){
                    this.$refs.newAvaterImageDisplay.src = reader.result;
                }.bind(this),false);
                reader.readAsDataURL(this.reservation.avater);
        },
        favourite: async function (item) {
                if (!this.$store.state.isLoggedIn) {
                    this.$router.push('/login');
                    return;
                }

                try {
                    const response = await MainService.favourite(item)
                    this.details.map(detail => {
                        if (detail.id === item.id) {
                            detail.favorited = true;
                        }
                    });
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred, Please try again!',
                        time: 5000
                    });
                }
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
    },

}
</script>

<style Scoped>
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
@media all and (max-width: 767px) {
  .carousel-container #carousel-thumbs img {
    border-width: 3px;
  }
}
@media all and (min-width: 576px) {
  .carousel-container #carousel-thumbs {
    position: absolute;
  }
}
@media all and (max-width: 576px) {
  .carousel-container #carousel-thumbs {
    background: #CCCCCE;
  }
}



@media all and (max-width: 600px) {

  .btncontact{
width: 100%;
margin-top: 10px;
}
.priceposition{
display: contents;
}
}
@media only screen and (min-width:768px ) and (max-width: 998px){
          .recommendedaddesktop{
            display: none;
          }
          .recommendedadtabs .adsclick-footer{
              width: 100%;
          }
          .ad-item{
            margin-top: 0px;
          }
      }
   @media only screen and (min-width: 999px){
     .recommendedadtabs{
       display: none;
     }
   }
</style>
