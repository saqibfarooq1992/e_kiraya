<template>
  <main>
    <Header />
            <section class="banner" >
				<div class="banner-img">
					<img :src="`${$store.state.serverPath}storage/${headers.benner}`" alt="">
				</div>
				<div class="banner-content">
					<div>
                        <h1>House for rent</h1>
                        <h2>Your Dream Property Awaits You!</h2>
                        <h5>ONLINE PAYMENT SOLUTION FOR LANDLORDS AND TENANTS</h5>
						<div class="searchsection">
                            <form  v-on:submit.prevent="searchProperty">
                                <div class="row">
                                    <div class="col-md-3 px-1">
                                        <div class="form-group">
                                            <select class="browser-default form-control custom-select custom-select-lg"  v-model="propertyData.city" @change='getSector()' id="searchborder">
                                                <option style="font-size: 15px;" value="">Select city</option>
                                                <option  v-for="(city , index) in cities" :key="index" v-bind:value="city.id" style="font-size: 15px;">{{city.city_name}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-3 px-1">
                                        <div class="form-group">
                                            <select class="browser-default form-control custom-select custom-select-lg" @change='searchProperty()' v-model="propertyData.sector" id="searchborder">
                                                <option style="font-size: 15px;" value="" >Select Land Area</option>
                                                <option style="font-size: 15px;" v-for="(sector , index) in sectors" :key="index" v-bind:value="sector.id">{{sector.sector}}</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="col-md-4 px-1">
                                        <div class="form-group">
                                            <input type="text" class="form-control" v-model="query" v-on:keyup="searchProperty" placeholder="Search Property (e.g: House for rent )" id="searchborder">
                                        </div>
                                    </div>
                                    <div class="col-md-2 d-block mx-auto">
                                        <button to="#" class="btn btn-success btn-sm w-100" v-scroll-to="'#searchresult'"><i class="fa fa-search p-2"></i></button>
                                    </div>
                                </div>
                            </form>
                        </div>
						<ul class="banner-socail">
							<li><a href="https://www.facebook.com/rentpropertyatEKO" target="_blank"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="https://www.instagram.com/rentpropertyatEKO/" target="_blank"><i class="fa fa-instagram"></i></a></li>
                            <li><a href="https://twitter.com/ekirayaonline" target="_blank"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="https://wa.me/923329793551" target="_blank"><i class="fa fa-whatsapp"></i></a></li>
						</ul>
					</div>
				</div>
		    </section>

			<div class="container">
				<div class="section featureds">
					<div class="row">
						<div class="col-sm-12">
							<div class="featured-top">
								<h4>Hot Properties</h4>
							</div>
						</div>
					</div>
                    <div class="container">
                        <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">
                            <div class="carousel-inner" role="listbox">
                                <div class="carousel-item active">
                                    <div class="row">
                                        <ring-loader class="mx-auto mt-5" :loading="loading" ></ring-loader>
                                        <div class="col-md-3" v-for="(hot , index) in hotProperties" :key="index">
                                            <div class="card mb-2 border-0">
                                                    <router-link :to="{name: 'property-details', params: {slug: hot.slug}}">
                                                        <img class="card-img-top w-100 featuredimg" :src="`${$store.state.serverPath}storage/${hot.pic1}`" alt="Card image cap">
                                                    </router-link>
                                                <div class="card-body p-0">
                                                    <div class="ad-info p-0">
                                                        <div>
                                                            <p class="item-title"><router-link :to="{name: 'property-details', params: {slug: hot.slug}}">{{hot.title | snippet}}</router-link ></p>
                                                            <strong class="item-price">Rs {{hot.rent_price}}</strong>
                                                            <div class="sharinghoticon">
                                                                <a v-if="hot.favourited === true" data-toggle="tooltip" data-placement="top" title="Favourite">
                                                                    <i class="fa fa-heart item-price pull-right heart" v-on:click="hotUnFavourite(hot)"></i>
                                                                </a>
                                                                <a v-else data-toggle="tooltip" data-placement="top" title="Favourite">
                                                                    <i class="fa fa-heart-o item-price pull-right heart" v-on:click="hotFavourite(hot)"></i>
                                                                </a>
                                                                <a v-if="hot.liked === true"  data-toggle="tooltip" data-placement="top" title="Like">
                                                                    <i class="fa fa-thumbs-up item-price pull-right thumbs" v-on:click="hotUnLike(hot)"></i>
                                                                </a>
                                                                <a v-else data-toggle="tooltip" data-placement="top" title="Like">
                                                                    <i class="fa fa-thumbs-o-up item-price pull-right thumbs" v-on:click="hotlike(hot)"></i>
                                                                </a>
                                                                <a  data-toggle="dropdown"  id="dropdownMenuButton1" aria-haspopup="true" aria-expanded="false" data-placement="top" title="Share">
                                                                    <i class="fa fa-share-square-o item-price pull-right share"></i>
                                                                </a>
                                                                <div class="dropdown-menu" id="sharedropdown">
                                                                    <ShareNetwork network="facebook" :url="`${$store.state.baseURL}property-details/${hot.slug}`" title="title" description="description">
                                                                        <a class="dropdown-item" href="#">Share on facebook</a>
                                                                    </ShareNetwork>
                                                                    <ShareNetwork network="twitter" :url="`${$store.state.baseURL}property-details/${hot.slug}`" title="title" description="description">
                                                                        <a class="dropdown-item" href="#" >Share on Twitter</a>
                                                                    </ShareNetwork>
                                                                    <ShareNetwork network="linkedin" :url="`${$store.state.baseURL}property-details/${hot.slug}`" title="title" description="description">
                                                                        <a class="dropdown-item" href="#" >Share on LinkedIn</a>
                                                                    </ShareNetwork>
                                                                    <ShareNetwork network="whatsapp" :url="`${$store.state.baseURL}property-details/${hot.slug}`" title="title" description="description">
                                                                        <a class="dropdown-item" href="#" >Share on Whatsapp</a>
                                                                    </ShareNetwork>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="item-cat">
                                                                <div class="row">
                                                                <div class="col-md-5">
                                                                    <span>{{hot.city_name}}</span>
                                                                </div>
                                                                <div class="col-md-7">
                                                                    <span>{{hot.sector}}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="ad-meta d-table mx-auto">
                                                        <div class="meta-content">
                                                            <span class="dated pull-left hothidetab"><a href="#">{{hot.created_at}}</a></span>
                                                            <div class=" pull-right">
                                                                <router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img :src="`${$store.state.serverPath}images/map.png`" height="20px !important" /> </router-link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
				    <br>
					<div class="ad-section text-center" id="searchresult">
						<router-link to="/advartisment-detail"><img :src="`${$store.state.serverPath}images/project/project1.jpg`" alt="Image" height="300px" width="100%" ></router-link>
                        <div class="blink">
                            <button class="blinktext btn btn-info p-2">Booking now:0321 1717555</button>
                        </div>
					</div>
					<div class="section trending-ads mt-4 bg-light" >
						<div class="section-title tab-manu">
							<h4>Trending Properties updated</h4>
							<ul class="nav nav-tabs" role="tablist">
								<li role="presentation"><a class="active" href="#recent-ads"  data-toggle="tab">Recent Properties</a></li>
								<li role="presentation"><a href="#popular" data-toggle="tab">Popular Properties</a></li>
								<li role="presentation"><a href="#hot-ads"  data-toggle="tab">Hot Properties</a></li>
								<li role="presentation"><a href="#list"  data-toggle="tab"><i class="fa fa-list" ></i></a></li>
								<li role="presentation"><a href="#list2"  data-toggle="tab"><i class="fa fa-list-alt" ></i></a></li>
								<li role="presentation"><a href="#list3"  data-toggle="tab"><i class="fa fa-sort-desc" aria-hidden="true"></i></a></li>
							</ul>
						</div>
                        <ring-loader class="mx-auto mt-5" :loading="loading" ></ring-loader>
						<div class="tab-content">
                            <div role="tabpanel" class="tab-pane fade in active show" id="recent-ads" >
                                <div class="ad-item row" v-for="(property, index) in properties" :key="index">
                                    <div class="item-image-box col-md-5 col-lg-3">
                                        <div class="item-image">
                                            <router-link :to="{name: 'property-details', params: {slug: property.slug}}"><img :src="`${$store.state.serverPath}storage/${property.pic1}`"  @click="visitedProperty(property)" alt="Image" class="img-fluid recentadimg"></router-link>
                                            <a href="#" class="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i class="fa fa-check-square-o"></i></a>
                                        </div>
                                    </div>
                                    <div class="item-info col-md-7 col-lg-9">
                                        <div class="ad-info">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <h4 class="item-title "><router-link :to="{name: 'property-details', params: {slug: property.slug}}">{{property.title |trendingsnippiet }} </router-link></h4>
                                                </div>
                                                 <div class="col-md-6" >
                                                        <a v-if="property.favourited === true" data-toggle="tooltip" data-placement="top" title="Favourite">
                                                            <i class="fa fa-heart item-price pull-right heart" v-on:click="unFavourite(property)"></i>
                                                        </a>
                                                        <a v-else data-toggle="tooltip" data-placement="top" title="Favourite">
                                                            <i class="fa fa-heart-o item-price pull-right heart" v-on:click="favourite(property)"></i>
                                                        </a>
                                                        <a v-if="property.liked === true"  data-toggle="tooltip" data-placement="top" title="Like">
                                                            <i class="fa fa-thumbs-up item-price pull-right thumbs" v-on:click="unLike(property)"></i>
                                                        </a>
                                                        <a v-else data-toggle="tooltip" data-placement="top" title="Like">
                                                            <i class="fa fa-thumbs-o-up item-price pull-right thumbs" v-on:click="like(property)"></i>
                                                        </a>
                                                        <a  data-toggle="dropdown"  id="dropdownMenuButton1" aria-haspopup="true" aria-expanded="false" data-placement="top" title="Share">
                                                            <i class="fa fa-share-square-o item-price pull-right share"></i>
                                                        </a>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="transform: translate3d(188px, 20px, 0px) !important;">
                                                            <ShareNetwork network="facebook" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description">
                                                                <a class="dropdown-item" href="#">Share on facebook</a>
                                                            </ShareNetwork>
                                                            <ShareNetwork network="twitter" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description">
                                                                <a class="dropdown-item" href="#" >Share on Twitter</a>
                                                            </ShareNetwork>
                                                            <ShareNetwork network="linkedin" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description">
                                                                <a class="dropdown-item" href="#" >Share on LinkedIn</a>
                                                            </ShareNetwork>
                                                            <ShareNetwork network="whatsapp" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description">
                                                                <a class="dropdown-item" href="#" >Share on Whatsapp</a>
                                                            </ShareNetwork>
                                                        </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-md-4">
                                                    <router-link :to="{name: 'property-details', params: {slug: property.slug}}"><h3 class="item-price">RS.{{property.rent_price}}</h3></router-link>
                                                    <div class="item-cat ">
                                                        <span><a href="#">{{property.city_name}}</a></span> /
                                                        <span><a href="#">{{property.sector}}</a></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <router-link :to="{name: 'property-details', params: {slug: property.slug}}">
                                                        <!-- <read-more more-str="read more" :text="property.description" link="#" less-str="read less" :max-chars="180"></read-more> -->

                                                        <p v-html="property.description.length >= 180 ? property.description.substring(0, 100) +'...read more'  : property.description">
                                                        </p>
                                                    </router-link>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="ad-meta" v-if="$store.state.profile.role === 'landloard'">
                                            <div class="meta-content" >
                                                <a type="button" class="tag" v-on:click.prevent="getTop(property)"><i class="fa fa-refresh" data-toggle="tooltip" data-placement="right" title="Refresh Property" ></i>Reload</a>
                                            </div>
                                            <div class="user-option" >
                                                   <router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img :src="`${$store.state.serverPath}images/map.png`" height="20px !important" /></router-link>
                                            </div>
                                        </div>
                                         <div class="ad-meta" v-else>
                                                <div class="meta-content">
                                                     <a >{{property.created_at}}</a>
                                                </div>
                                                <div class="user-option  pull-right" >
                                                  <router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img :src="`${$store.state.serverPath}images/map.png`" height="20px !important"  /></router-link>
                                                </div>
                                        </div>
                                    </div>

                                </div>
                                <span>
                                    <div class="row shadow  pb-0" id="latestpropertyad">
                                        <div class="adbackground p-1 w-100">
                                            <router-link to="/advartisment-detail"><h3 class="text-light">DHA PHASE 1 Al-Hayat Towers</h3></router-link>
                                        </div>
                                        <div class="col-md-6 p-0">
                                            <img :src="`${$store.state.serverPath}images/bg/homead.jpg`" class="latestadimg"  width="100%" alt="">
                                        </div>
                                        <div class="col-md-2 p-0">
                                            <img :src="`${$store.state.serverPath}images/bg/homead1.jpg`" class=" p-1 latestadimg1"  height="80px" width="100%" alt="ads1">
                                            <img :src="`${$store.state.serverPath}images/bg/homead2.jpg`" class="img-fluid p-1 latestadimg2" height="80px" width="100%"  alt="ads2">
                                        </div>
                                        <div class="col-md-4">
                                            <H5 class="text-success text-center mt-2"><router-link to="/advartisment-detail">DHA PHASE 1 Al-HAYAT TOWERS</router-link> </H5>
                                            <p><i class="fa fa-bed pr-3">3</i><i class="fa fa-shower">2</i><strong class="float-right text-danger"><a data-toggle="tooltip" data-placement="top" title="Police Verified"> Verified</a></strong></p>
                                            <p class="border p-1"><strong>Price:</strong>30K to 49k Rupees</p>
                                            <div class="row  foradbtn">
                                                <div class="col-md-4 d-inline foradbtn1">
                                                    <a  data-toggle="collapse" href="#latestproperty2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" class="btn btn-warning latestnewsadcontact">Contact</a>
                                                </div>
                                                <div class="col-md-4 d-inline foradbtn2">
                                                    <button class="btn btn-info latestnewsadreserve" @click="showModal">Reserve</button>
                                                </div>
                                                <div class="col-md-4 d-inline foradbtn2">
                                                    <button class="btn btn-success latestnewsadreserve" @click="showEmailModal">Email</button>
                                                </div>
                                                <div class="collapse multi-collapse" id="latestproperty2">
                                                    <a class="btn btn-outline-warning m-3 latestadscontactno border">Phone No:0322-1717555</a>
                                                </div>
                                            </div>
                                            <div class="postadcontent">
                                                <ul>
                                                    <li><i class="fa fa-check-circle px-1"></i> Electricity</li>
                                                    <li><i class="fa fa-check-circle px-1"></i>Gas</li>
                                                    <li><i class="fa fa-check-circle px-1"></i>Water</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </span>
                                <div v-show="moreExists">
                                <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                    <i class="fas fa-arrow-down"></i> Load More
                                </button>
                                </div>
                            </div>
							 <div role="tabpanel" class="tab-pane fade" id="popular">
								<div class="ad-item row"  v-for="(popular , index) in populars" :key="index">
									<div class="item-image-box col-md-5 col-lg-3">
										<div class="item-image">
											<a href="details.html"><img :src="`${$store.state.serverPath}storage/${popular.pic1}`" alt="Image" class="img-fluid popularadimg"></a>
										</div>
									</div>
									<div class="item-info col-md-7 col-lg-9">
										<div class="ad-info">
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <h4 class="item-title"><router-link :to="{name: 'property-details', params: {slug: popular.slug}}">{{popular.title |trendingsnippiet}}</router-link></h4>
                                                </div>
                                                <div class="col-md-6">
                                                    <a data-toggle="tooltip" data-placement="top" title="Favourite"> <i class="fa fa-heart item-price pull-right heart" v-on:click="unFavourite(property)"></i> </a><a data-toggle="tooltip" data-placement="top" title="Like"> <i class="fa fa-thumbs-o-up item-price pull-right thumbs"></i> </a> <a  data-toggle="dropdown"  id="dropdownMenuButton1" aria-haspopup="true" aria-expanded="false" data-placement="top" title="Share">
                                                            <i class="fa fa-share-square-o item-price pull-right share"></i>
                                                        </a>
                                                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="transform: translate3d(188px, 20px, 0px) !important;">
                                                            <a class="dropdown-item" href="#">facebook</a>
                                                            <a class="dropdown-item" href="#">Twitter</a>
                                                            <a class="dropdown-item" href="#">Instagram</a>
                                                        </div>
                                                </div>
                                           </div>
											<div class="row">
                                                <div class="col-md-4">
                                                    <router-link to=""><h3 class="item-price">RS.{{popular.rent_price}}</h3></router-link>
                                                    <div class="item-cat">
                                                        <span><a href="#">{{popular.city_name}}</a></span> /
                                                        <span><a href="#">{{popular.sector}}</a></span>
                                                    </div>
                                                </div>
                                                <div class="col-md-8">
                                                    <router-link :to="{name: 'property-details', params: {slug: popular.slug}}">
                                                            <p v-html="popular.description.length >= 135 ? popular.description.substring(0, 100) +'...read more' : popular.description">
                                                            </p>
                                                    </router-link>
                                                </div>
                                            </div>
										</div>
										<div class="ad-meta" v-if="$store.state.profile.role === 'landloard'">
                                            <div class="meta-content" >
                                                <a type="button" class="tag" v-on:click.prevent="getTop(popular)"><i class="fa fa-refresh" data-toggle="tooltip" data-placement="right" title="Refresh Property" ></i>Reload</a>
                                                <span class="views mx-2"><i class="fa fa-eye-slash" data-toggle="tooltip" data-placement="right" title="People Seen"> {{popular.view_count}} Views</i></span>
                                                <span class="views mx-2"><i class="fa fa-eye-slash" data-toggle="tooltip" data-placement="right" title="People Views" V> {{popular.seen_count}} Seen</i></span>
                                                <span class="views mx-2"><i class="fa fa-heart-o"  data-toggle="tooltip" data-placement="right" title="People favourite"> {{popular.favorite_count}} fav</i></span>
                                                <span class="views mx-2"><i class="fa fa-thumbs-up"  data-toggle="tooltip" data-placement="right" title="People Likes">{{popular.like_count}} Likes</i></span>
                                                <span class="views mx-2"><i class="fa fa-share"  data-toggle="tooltip" data-placement="right" title="People Share">3 Share</i></span>
                                                <span class="views mx-2"><i class="fa fa-ticket"  data-toggle="tooltip" data-placement="right" title="People Raserved"> {{popular.reserved_count}} Reserved</i></span>
                                            </div>
                                             <div class="user-option" >
                                                   <router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img :src="`${$store.state.serverPath}images/map.png`" height="20px !important" /></router-link>
                                                </div>
                                        </div>
                                         <div class="ad-meta">
                                                <div class="meta-content">
                                                     <a>{{popular.created_at}}</a>
                                                </div>
                                                <div class="user-option  pull-right" >
                                                  <router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img :src="`${$store.state.serverPath}images/map.png`" height="20px !important"  /></router-link>
                                                </div>
                                        </div>
									</div>
								</div>
                                <div class="row shadow " id="latestpropertyad" v-if="property.id='3'">
                                    <div class="adbackground p-1 w-100">
                                        <h3 class="text-light">DHA PHASE 1 Al-Hayat Towers</h3>
                                    </div>
                                    <div class="col-md-6 p-0">
                                        <img src="images/bg/homead.jpg" class="latestadimg"  width="100%" alt="">
                                    </div>
                                    <div class="col-md-2 p-0">
                                        <img src="images/bg/homead1.jpg" class="img-fluid w-100 px-1 latestadimg1" alt="ads1">
                                        <img src="images/bg/homead2.jpg" class="img-fluid w-100 p-1 latestadimg2" alt="ads2">
                                    </div>
                                    <div class="col-md-4">
                                        <H5 class="text-success text-center mt-2">DHA PHASE 1 Al-HAYAT TOWERS</H5>
                                            <p><i class="fa fa-bed pr-3">3</i><i class="fa fa-shower">2</i><strong class="float-right text-danger"><a data-toggle="tooltip" data-placement="top" title="Police Verified"> Verified</a></strong></p>
                                        <p class="border p-1"><strong>Price:</strong>30K to 49k Rupees</p>
                                            <div class="row d-inline-block foradbtn">
                                            <div class="col-md-6 d-inline foradbtn1">
                                                <a  data-toggle="collapse" href="#latestproperty2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" class="btn btn-warning latestnewsadcontact"><i class="fa fa-phone"></i>Contact</a>
                                            </div>
                                            <div class="col-md-6 d-inline foradbtn2">
                                                <a href="" class="btn btn-info latestnewsadreserve"><i class="fa fa-ticket"></i>Reserve</a>
                                            </div>
                                            <div class="collapse multi-collapse" id="latestproperty2">
                                                <a class="btn btn-outline-warning m-3 latestadscontactno border">Phone No:0303-78397647</a>
                                            </div>
                                    </div>
                                        <div class="postadcontent">
                                            <ul>
                                                <li><i class="fa fa-check-circle px-1"></i> Electricity</li>
                                                <li><i class="fa fa-check-circle px-1"></i>Gas</li>
                                                <li><i class="fa fa-check-circle px-1"></i>Water</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
							</div>
							 <div role="tabpanel" class="tab-pane fade" id="hot-ads">
								<div class="ad-item row" v-for="(property , index) in properties" :key="index">
									<div class="item-image-box col-md-5 col-lg-3">
										<div class="item-image">
											<a href="details.html"><img :src="`${$store.state.serverPath}storage/${property.pic1}`" alt="Image" class="img-fluid hotadimg"></a>
											<a href="#" class="verified" data-toggle="tooltip" data-placement="left" title="Verified"><i class="fa fa-check-square-o"></i></a>
										</div>
									</div>
									<div class="item-info col-md-7 col-lg-9">
										<div class="ad-info">
										<div class="row">
                                                <div class="col-md-6">
                                                <router-link to=""><h3 class="item-price">RS.{{property.rent_price}}</h3></router-link>
                                                </div>

                                                <div class="col-md-6">
                                                    <a v-if="property.favourited === true" data-toggle="tooltip" data-placement="top" title="Favourite">
                                                        <i class="fa fa-heart item-price pull-right heart" v-on:click="unFavourite(property)"></i>
                                                    </a>
                                                    <a v-else data-toggle="tooltip" data-placement="top" title="Favourite">
                                                        <i class="fa fa-heart-o item-price pull-right heart" v-on:click="favourite(property)"></i>
                                                    </a>
                                                    <a v-if="property.liked === true"  data-toggle="tooltip" data-placement="top" title="Like">
                                                        <i class="fa fa-thumbs-up item-price pull-right thumbs" v-on:click="unLike(property)"></i>
                                                    </a>
                                                    <a v-else data-toggle="tooltip" data-placement="top" title="Like">
                                                        <i class="fa fa-thumbs-o-up item-price pull-right thumbs" v-on:click="like(property)"></i>
                                                    </a>
                                                    <a  data-toggle="dropdown"  id="dropdownMenuButton1" aria-haspopup="true" aria-expanded="false" data-placement="top" title="Share">
                                                        <i class="fa fa-share-square-o item-price pull-right share"></i>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="transform: translate3d(188px, 20px, 0px) !important;">
                                                        <a class="dropdown-item" href="#">Share on facebook</a>
                                                        <a class="dropdown-item" href="#">Share on Twitter</a>
                                                        <a class="dropdown-item" href="#">Share on Instagram</a>
                                                    </div>
                                                </div>
                                           </div>
											<div class="row">
                                                <div class="col-md-4">
                                                 <h4 class="item-title "><router-link :to="{name: 'property-details', params: {slug: property.slug}}">{{property.title|trendingsnippiet}}</router-link></h4>
                                                </div>
                                                <div class="col-md-8">
                                                    <router-link :to="{name: 'property-details', params: {slug: property.slug}}">
                                                            <p v-html="property.description.length >= 180 ? property.description.substring(0, 100) : property.description">
                                                            </p>
                                                    </router-link>
                                                </div>
                                            </div>
											<div class="item-cat">
												<span><a href="#">{{property.city_name}}</a></span> /
												<span><a href="#">{{property.sector}}</a></span>
											</div>
										</div>
										<div class="ad-meta" v-if="$store.state.profile.role === 'landloard'">
                                            <div class="meta-content" >
                                                <a type="button" class="tag" v-on:click.prevent="getTop(property)"><i class="fa fa-refresh" data-toggle="tooltip" data-placement="right" title="Refresh Property" ></i>Reload</a>
                                                <span class="views mx-2"><i class="fa fa-eye-slash" data-toggle="tooltip" data-placement="right" title="People Seen"> {{property.view_count}} Views</i></span>
                                                <span class="views mx-2"><i class="fa fa-eye-slash" data-toggle="tooltip" data-placement="right" title="People Views" V> {{property.seen_count}} Seen</i></span>
                                                <span class="views mx-2"><i class="fa fa-heart-o"  data-toggle="tooltip" data-placement="right" title="People favourite"> {{property.favorite_count}} fav</i></span>
                                                <span class="views mx-2"><i class="fa fa-thumbs-up"  data-toggle="tooltip" data-placement="right" title="People Likes">{{property.like_count}} Likes</i></span>
                                                <span class="views mx-2"><i class="fa fa-share"  data-toggle="tooltip" data-placement="right" title="People Share">3 Share</i></span>
                                                <span class="views mx-2"><i class="fa fa-ticket"  data-toggle="tooltip" data-placement="right" title="People Raserved"> {{property.reserved_count}} Reserved</i></span>
                                            </div>
                                            <div class="user-option" >
                                                   <router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img :src="`${$store.state.serverPath}images/map.png`" height="20px !important" /></router-link>
                                            </div>
                                        </div>
                                         <div class="ad-meta">
                                                <div class="meta-content">
                                                     <a >{{property.created_at}}</a>
                                                </div>
                                                <div class="user-option  pull-right" >
                                                  <router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img :src="`${$store.state.serverPath}images/map.png`" height="20px !important"  /></router-link>
                                                </div>
                                        </div>
									</div>
								</div>
                                <div class="row shadow pb-2" id="latestpropertyad">
                                    <div class="adbackground p-1 w-100">
                                        <h3 class="text-light">DHA PHASE 1 Al-Hayat Towers</h3>
                                    </div>
                                    <div class="col-md-6 p-0">
                                        <img :src="`${$store.state.serverPath}images/bg/homead.jpg`" class="latestadimg" height="220px" width="100%" alt="">
                                    </div>
                                    <div class="col-md-2 p-0">
                                        <img :src="`${$store.state.serverPath}images/bg/homead1.jpg`" class="img-fluid w-100 p-1 latestadimg1" alt="ads1">
                                        <img :src="`${$store.state.serverPath}images/bg/homead2.jpg`" class="img-fluid w-100 p-1 latestadimg2" alt="ads2">
                                    </div>
                                    <div class="col-md-4">
                                        <H5 class="text-success text-center mt-2">DHA PHASE 1 Al-HAYAT TOWERS</H5>
                                         <p><i class="fa fa-bed pr-3">3</i><i class="fa fa-shower">2</i><strong class="float-right text-danger"><a data-toggle="tooltip" data-placement="top" title="Police Verified"> Verified</a></strong></p>
                                        <p class="border p-1"><strong>Price:</strong>30K to 49k Rupees</p>
                                         <div class="row d-inline-block foradbtn">
                                            <div class="col-md-6 d-inline foradbtn1">
                                                <a  data-toggle="collapse" href="#latestproperty2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" class="btn btn-warning latestnewsadcontact"><i class="fa fa-phone"></i>Contact</a>
                                            </div>
                                            <div class="col-md-6 d-inline foradbtn2">
                                                <a href="" class="btn btn-info latestnewsadreserve"><i class="fa fa-ticket"></i>Reserve</a>
                                            </div>
                                            <div class="collapse multi-collapse" id="latestproperty2">
                                                <a class="btn btn-outline-warning m-3 latestadscontactno border">Phone No:0303-78397647</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div v-show="moreExists">
                                    <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                        <i class="fas fa-arrow-down"></i>
                                    </button>
                                </div>
							</div>
							<div role="tabpanel" class="tab-pane fade" id="list">
								<div class="ad-item row" v-for="(property , index) in properties" :key="index">
									<div class="item-image-box col-md-5 col-lg-3">
										<div class="item-image">
											<a href="details.html"><img :src="`${$store.state.serverPath}storage/${property.pic1}`" alt="Image" class="rounded-circle" style="height:150px;width:150px;border-radius:50%;"></a>
										</div>
									</div>
									<div class="item-info col-md-7 col-lg-9">
										<div class="ad-info">
										<div class="row">
                                                <div class="col-md-6">
                                                <router-link to=""><h3 class="item-price">RS.{{property.rent_price}}</h3></router-link>
                                                </div>
                                                <div class="col-md-6">
                                                     <a v-if="property.favourited === true" data-toggle="tooltip" data-placement="top" title="Favourite">
                                                        <i class="fa fa-heart item-price pull-right heart" v-on:click="unFavourite(property)"></i>
                                                    </a>
                                                    <a v-else data-toggle="tooltip" data-placement="top" title="Favourite">
                                                        <i class="fa fa-heart-o item-price pull-right heart" v-on:click="favourite(property)"></i>
                                                    </a>
                                                    <a v-if="property.liked === true"  data-toggle="tooltip" data-placement="top" title="Like">
                                                        <i class="fa fa-thumbs-up item-price pull-right thumbs" v-on:click="unLike(property)"></i>
                                                    </a>
                                                    <a v-else data-toggle="tooltip" data-placement="top" title="Like">
                                                        <i class="fa fa-thumbs-o-up item-price pull-right thumbs" v-on:click="like(property)"></i>
                                                    </a>
                                                     <a  data-toggle="dropdown"  id="dropdownMenuButton1" aria-haspopup="true" aria-expanded="false" data-placement="top" title="Share">
                                                        <i class="fa fa-share-square-o item-price pull-right share"></i>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="transform: translate3d(188px, 20px, 0px) !important;">
                                                        <ShareNetwork network="facebook" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item">Share on facebook</a>
                                                        </ShareNetwork>
                                                        <ShareNetwork network="twitter" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item" href="#" >Share on Twitter</a>
                                                        </ShareNetwork>
                                                        <ShareNetwork network="linkedin" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item" href="#" >Share on LinkedIn</a>
                                                        </ShareNetwork>
                                                        <ShareNetwork network="whatsapp" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item" href="#" >Share on Whatsapp</a>
                                                        </ShareNetwork>
                                                    </div>
                                                </div>
                                           </div>
											<div class="row">
                                                <div class="col-md-3">
                                                 <h4 class="item-title "><router-link :to="{name: 'property-details', params: {slug: property.slug}}">{{property.title|trendingsnippiet}}</router-link></h4>
                                                </div>
                                                <div class="col-md-9">
                                                <p v-html="property.description.length >= 135 ? property.description.substring(0, 100) : property.description"><router-link :to="{name: 'property-details', params: {slug: property.slug}}">read more</router-link></p>
                                                </div>
                                            </div>
											<div class="item-cat">
												<span><a href="#">{{property.city_name}}</a></span> /
												<span><a href="#">{{property.sector}}</a></span>
											</div>
										</div>
                                         <div class="ad-meta">
                                            <div class="meta-content">
                                                    <a >{{property.created_at}}</a>
                                            </div>
                                            <div class="user-option  pull-right" >
                                                <router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img :src="`${$store.state.serverPath}images/map.png`" height="20px !important"  /></router-link>
                                            </div>
                                        </div>
									</div>
								</div>
                                <div class="row shadow pb-2" id="latestpropertyad">
                                    <div class="adbackground p-1 w-100">
                                        <h3 class="text-light">DHA PHASE 1 Al-Hayat Towers</h3>
                                    </div>
                                    <div class="col-md-6 p-0">
                                        <img :src="`${$store.state.serverPath}images/bg/homead.jpg`" class="latestadimg" height="220px" width="100%" alt="">
                                    </div>
                                    <div class="col-md-2 p-0">
                                        <img :src="`${$store.state.serverPath}images/bg/homead1.jpg`" class="img-fluid w-100 p-1 latestadimg1" alt="ads1">
                                        <img :src="`${$store.state.serverPath}images/bg/homead2.jpg`" class="img-fluid w-100 p-1 latestadimg2" alt="ads2">
                                    </div>
                                    <div class="col-md-4">
                                        <h5 class="text-success text-center mt-2">DHA PHASE 1 Al-HAYAT TOWERS</h5>
                                         <p><i class="fa fa-bed pr-3">3</i><i class="fa fa-shower">2</i><strong class="float-right text-danger"><a data-toggle="tooltip" data-placement="top" title="Police Verified"> Verified</a></strong></p>
                                        <p class="border p-1"><strong>Price:</strong>30K to 49k Rupees</p>
                                         <div class="row d-inline-block foradbtn">
                                            <div class="col-md-6 d-inline foradbtn1">
                                                <a  data-toggle="collapse" href="#latestproperty2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" class="btn btn-warning latestnewsadcontact"><i class="fa fa-phone"></i>Contact</a>
                                            </div>
                                            <div class="col-md-6 d-inline foradbtn2">
                                                <a href="" class="btn btn-info latestnewsadreserve"><i class="fa fa-ticket"></i>Reserve</a>
                                            </div>
                                            <div class="collapse multi-collapse" id="latestproperty2">
                                                <a class="btn btn-outline-warning m-3 latestadscontactno border">Phone No:0303-78397647</a>
                                            </div>
                                        </div>
                                         <div class="postadcontent">
                                                <ul>
                                                    <li><i class="fa fa-check-circle px-1"></i> Electricity</li>
                                                    <li><i class="fa fa-check-circle px-1"></i>Gas</li>
                                                    <li><i class="fa fa-check-circle px-1"></i>Water</li>
                                                </ul>
                                           </div>
                                    </div>
                                </div>
                                <div v-show="moreExists">
                                    <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                        <i class="fas fa-arrow-down"></i>
                                    </button>
                                </div>
							</div>
							 <div role="tabpanel" class="tab-pane fade" id="list2" >
                                <div class="row" >
                                    <div class="col-md-4" v-for="(property , index) in properties" :key="index">
                                        <div class="item-image">
                                            <a href="details.html"><img :src="`${$store.state.serverPath}storage/${property.pic1}`" alt="Image" class="img-thumbnail list2img"></a>
                                        </div>
                                        <div class="ad-info">
                                        <div class="row">
                                                <div class="col-md-6">
                                                <router-link to=""><h3 class="item-price">RS.{{property.rent_price}}</h3></router-link>
                                                </div>
                                                <div class="col-md-6">
                                                     <a v-if="property.favourited === true" data-toggle="tooltip" data-placement="top" title="Favourite">
                                                        <i class="fa fa-heart item-price pull-right heart" v-on:click="unFavourite(property)"></i>
                                                    </a>
                                                    <a v-else data-toggle="tooltip" data-placement="top" title="Favourite">
                                                        <i class="fa fa-heart-o item-price pull-right heart" v-on:click="favourite(property)"></i>
                                                    </a>
                                                    <a v-if="property.liked === true"  data-toggle="tooltip" data-placement="top" title="Like">
                                                        <i class="fa fa-thumbs-up item-price pull-right thumbs" v-on:click="unLike(property)"></i>
                                                    </a>
                                                    <a v-else data-toggle="tooltip" data-placement="top" title="Like">
                                                        <i class="fa fa-thumbs-o-up item-price pull-right thumbs" v-on:click="like(property)"></i>
                                                    </a>
                                                     <a  data-toggle="dropdown"  id="dropdownMenuButton1" aria-haspopup="true" aria-expanded="false" data-placement="top" title="Share">
                                                        <i class="fa fa-share-square-o item-price pull-right share"></i>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="transform: translate3d(188px, 20px, 0px) !important;">
                                                        <ShareNetwork network="facebook" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item">Share on facebook</a>
                                                        </ShareNetwork>
                                                        <ShareNetwork network="twitter" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item" href="#" >Share on Twitter</a>
                                                        </ShareNetwork>
                                                        <ShareNetwork network="linkedin" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item" href="#" >Share on LinkedIn</a>
                                                        </ShareNetwork>
                                                        <ShareNetwork network="whatsapp" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item" href="#" >Share on Whatsapp</a>
                                                        </ShareNetwork>
                                                    </div>
                                                </div>
                                           </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                 <h4 class="item-title "><router-link :to="{name: 'property-details', params: {slug: property.slug}}">{{property.title|trendingsnippiet}}</router-link></h4>
                                                </div>
                                            </div>
                                            <div class="item-cat">
                                                <span><a href="#">{{property.city_name}}</a></span> /
                                                <span><a href="#">{{property.sector}}</a></span>
                                            </div>
                                            <div class="row">
                                                     <div class="col-md-12">
                                                        <router-link :to="{name: 'property-details', params: {slug: property.slug}}">
                                                        <p v-html="property.description.length >= 180 ? property.description.substring(0, 180) +'...read more'  : property.description">
                                                            read more
                                                        </p>
                                                    </router-link>
                                                    </div>
                                            </div>
                                        </div>
                                        <div class="ad-footer row mx-1 list2-icon pl-3 p-2">
                                            <span class="views"><i class="fa fa-heart-o"  data-toggle="tooltip" data-placement="right" title="People favourite">3 fav</i></span>
                                            <div class="pull-right d-block ml-auto">
                                                <router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img src="images/map.png" height="20px !important" /></router-link>
                                            </div>
                                        </div>

                                    </div>
                                    <div v-show="moreExists">
                                        <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                            <i class="fas fa-arrow-right"></i>
                                        </button>
                                    </div>
                                </div>
                                <div class="row shadow pb-2" id="latestpropertyad">
                                    <div class="adbackground p-1 w-100">
                                        <h3 class="text-light">DHA PHASE 1 Al-Hayat Towers</h3>
                                    </div>
                                    <div class="col-md-6 p-0">
                                        <img :src="`${$store.state.serverPath}images/bg/homead.jpg`" class="latestadimg" height="220px" width="100%" alt="">
                                    </div>
                                    <div class="col-md-2 p-0">
                                        <img :src="`${$store.state.serverPath}images/bg/homead1.jpg`" class="img-fluid w-100 p-1 latestadimg1" alt="ads1">
                                        <img :src="`${$store.state.serverPath}images/bg/homead2.jpg`" class="img-fluid w-100 p-1 latestadimg2" alt="ads2">
                                    </div>
                                    <div class="col-md-4">
                                        <H5 class="text-success text-center mt-2">DHA PHASE 1 Al-HAYAT TOWERS</H5>
                                         <p><i class="fa fa-bed pr-3">3</i><i class="fa fa-shower">2</i><strong class="float-right text-danger"><a data-toggle="tooltip" data-placement="top" title="Police Verified"> Verified</a></strong></p>
                                        <p class="border p-1"><strong>Price:</strong>30K to 49k Rupees</p>
                                        <div class="row d-inline-block foradbtn">
                                            <div class="col-md-6 d-inline foradbtn1">
                                                <a  data-toggle="collapse" href="#latestproperty2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" class="btn btn-warning latestnewsadcontact"><i class="fa fa-phone"></i>Contact</a>
                                            </div>
                                            <div class="col-md-6 d-inline foradbtn2">
                                                <a href="" class="btn btn-info latestnewsadreserve"><i class="fa fa-ticket"></i>Reserve</a>
                                            </div>
                                            <div class="collapse multi-collapse" id="latestproperty2">
                                                <a class="btn btn-outline-warning m-3 latestadscontactno border">Phone No:0303-78397647</a>
                                            </div>
                                        </div>
                                         <div class="postadcontent">
                                                <ul>
                                                    <li><i class="fa fa-check-circle px-1"></i> Electricity</li>
                                                    <li><i class="fa fa-check-circle px-1"></i>Gas</li>
                                                    <li><i class="fa fa-check-circle px-1"></i>Water</li>
                                                </ul>
                                           </div>
                                        </div>
                                </div>
							</div>
							<div role="tabpanel" class="tab-pane fade" id="list3">
								<div class="row" >
								<div class="col-md-6"  v-for="(property , index) in properties" :key="index" >
									<div class="ad-item row">
										<div class="item-image-box col-md-5 col-lg-3">
											<div class="item-image">
												<a href="details.html"><img :src="`${$store.state.serverPath}storage/${property.pic1}`" alt="Image" class="img-thumbnail list3img"></a>
											</div>
										</div>
										<div class="item-info col-md-7 col-lg-9">
											<div class="ad-info">
											<router-link :to="{name: 'property-details', params: {slug: property.slug}}"><h3 class="item-price">{{property.rent_price}}</h3></router-link>
                                                    <a v-if="property.favourited === true" data-toggle="tooltip" data-placement="top" title="Favourite">
                                                        <i class="fa fa-heart item-price pull-right heart" v-on:click="unFavourite(property)"></i>
                                                    </a>
                                                    <a v-else data-toggle="tooltip" data-placement="top" title="Favourite">
                                                        <i class="fa fa-heart-o item-price pull-right heart" v-on:click="favourite(property)"></i>
                                                    </a>
                                                    <a v-if="property.liked === true"  data-toggle="tooltip" data-placement="top" title="Like">
                                                        <i class="fa fa-thumbs-up item-price pull-right thumbs" v-on:click="unLike(property)"></i>
                                                    </a>
                                                    <a v-else data-toggle="tooltip" data-placement="top" title="Like">
                                                        <i class="fa fa-thumbs-o-up item-price pull-right thumbs" v-on:click="like(property)"></i>
                                                    </a>
                                                     <a  data-toggle="dropdown"  id="dropdownMenuButton1" aria-haspopup="true" aria-expanded="false" data-placement="top" title="Share">
                                                        <i class="fa fa-share-square-o item-price pull-right share"></i>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1" style="transform: translate3d(188px, 20px, 0px) !important;">
                                                        <ShareNetwork network="facebook" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item">Share on facebook</a>
                                                        </ShareNetwork>
                                                        <ShareNetwork network="twitter" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item" href="#" >Share on Twitter</a>
                                                        </ShareNetwork>
                                                        <ShareNetwork network="linkedin" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item" href="#" >Share on LinkedIn</a>
                                                        </ShareNetwork>
                                                        <ShareNetwork network="whatsapp" :url="`${$store.state.baseURL}property-details/${property.slug}`" title="title" description="description" class="text-center">
                                                            <a class="dropdown-item" href="#" >Share on Whatsapp</a>
                                                        </ShareNetwork>
                                                    </div>
                                                <div class="row">
                                                    <div class="col-md-12">
                                                        <h4 class="item-title "><router-link :to="{name: 'property-details', params: {slug: property.slug}}">{{property.title|trendingsnippiet}}</router-link></h4>
                                                    </div>
                                                </div>
												<div class="item-cat">
													<span><a href="#">{{property.city_name}}</a></span> /
													<span><a href="#">{{property.sector}}</a></span>
												</div>
											</div>
											<div class="ad-meta">
												<div class="meta-content">
													<span class="dated"><a href="#">{{property.created_at}} </a></span>
                                                    <span class="views"><i class="fa fa-heart-o"  data-toggle="tooltip" data-placement="right" title="People favourite">3 fav</i></span>
												</div>
												<div class="user-option pull-right">
													<router-link to="/map" data-toggle="tooltip" data-placement="top" title="Islamabad , Pakistan"><img src="images/map.png" height="20px !important" /></router-link>
												</div>
											</div>
										</div>
									</div>
								</div>

								</div>
								<div class="row shadow " id="latestpropertyad">
                                        <div class="adbackground p-1 w-100">
                                            <h3 class="text-light">DHA PHASE 1 Al-Hayat Towers</h3>
                                        </div>
                                        <div class="col-md-6 p-0">
                                            <img :src="`${$store.state.serverPath}images/bg/homead.jpg`" class="latestadimg"  width="100%" alt="">
                                        </div>
                                        <div class="col-md-2 p-0">
                                            <img :src="`${$store.state.serverPath}images/bg/homead1.jpg`" class="img-fluid w-100 p-1 latestadimg1" alt="ads1">
                                            <img :src="`${$store.state.serverPath}images/bg/homead2.jpg`" class="img-fluid w-100 p-1 latestadimg2" alt="ads2">
                                        </div>
                                        <div class="col-md-4">
                                            <H5 class="text-success text-center mt-2"> <router-link to="/ads-details">DHA PHASE 1 Al-HAYAT TOWERS</router-link></H5>
                                             <p><i class="fa fa-bed pr-3">3</i><i class="fa fa-shower">2</i><strong class="float-right text-danger"><a data-toggle="tooltip" data-placement="top" title="Police Verified"> Verified</a></strong></p>
                                            <p class="border p-1"><strong>Price:</strong>30K to 49k Rupees</p>
                                           <div class="row d-inline-block foradbtn">
                                            <div class="col-md-6 d-inline foradbtn1">
                                                <a  data-toggle="collapse" href="#latestproperty2" role="button" aria-expanded="false" aria-controls="multiCollapseExample1" class="btn btn-warning latestnewsadcontact"><i class="fa fa-phone"></i>Contact</a>
                                            </div>
                                            <div class="col-md-6 d-inline foradbtn2">
                                                <a href="" class="btn btn-info latestnewsadreserve"><i class="fa fa-ticket"></i>Reserve</a>
                                            </div>
                                            <div class="collapse multi-collapse" id="latestproperty2">
                                                <a class="btn btn-outline-warning m-3 latestadscontactno border">Phone No:0303-78397647</a>
                                            </div>
                                        </div>
                                            <div class="postadcontent">
                                                <ul>
                                                    <li><i class="fa fa-check-circle px-1"></i> Electricity</li>
                                                    <li><i class="fa fa-check-circle px-1"></i>Gas</li>
                                                    <li><i class="fa fa-check-circle px-1"></i>Water</li>
                                                </ul>
                                           </div>
                                        </div>
                                </div>
                                 <div v-show="moreExists">
                                    <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                                        <i class="fas fa-arrow-down"></i>
                                    </button>
                                </div>
							</div>
						</div>
					</div>
				</div>
			</div>
            <section id="counter" class="sec-padding my-5">
                <div class="container">
                    <div class="row">
                        <div class="col-md-3 ">
                            <router-link to="/advartisment-detail">
                            <div class="count"> <span class="fa fa-television"></span>
                                <p class="number">777</p>
                                <h4>Total Ads</h4>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-md-3 ">
                            <router-link to="/">
                            <div class="count"> <span class="fa fa-male"></span>
                                <p class="number">896</p>
                                <h4>Landlords</h4>
                            </div>
                            </router-link>
                        </div>
                        <div class="col-md-3 ">
                            <router-link to="/">
                            <div class="count"> <span class="fa fa-users"></span>
                                <p class="number">535</p>
                                <h4>Total Renter</h4>
                            </div>
                             </router-link>
                        </div>
                        <div class="col-md-3 ">
                            <router-link to="/project">
                            <div class="count"> <span class="fa fa-trophy" style="color: white;"></span>
                                <p class="number">126</p>
                                <h4>Projects </h4>
                            </div>
                            </router-link>
                        </div>
                    </div>
                </div>
            </section>
            <section class="popular-places">
                <div class="container">
                    <h3 class="text-center">Popular Areas</h3>
                    <div class="Islamabad text-muted">
                        <h4>Islamabad</h4>
                        <div class="row">
                            <div class="col-md-4">
                                <h6>Most Popular Locations for Houses</h6>
                                <router-link to="/"><p>Houses for Rent in Bahria town (PHASE 1 - 6) (45)</p></router-link>
                                <router-link to="/"><p>Houses for Rent in Bahria enclave(45)</p></router-link>
                                <router-link to="/"><p>Houses for Rent in DHA (PHASE 1 - 2)(45)</p></router-link>
                                <router-link to="/"><p>Houses for Rent in Ghouri town(45)</p></router-link>
                                <router-link to="/"><p>Houses for Rent in Media town (PHASE 1) (45)</p></router-link>
                            </div>
                            <div class="col-md-4">
                                <h6>FLATS AND APARTMENTS</h6>
                                <router-link to="/"><p>Flate for Rent in Bahria town (PHASE 1 - 6) (45)</p></router-link>
                                <router-link to="/"><p>Flate for Rent in Bahria enclave (45)</p></router-link>
                                <router-link to="/"><p>Flate for Rent in DHA (PHASE 1 - 2) (45)</p></router-link>
                                <router-link to="/"><p>Flate for Rent in Ghouri town(45)</p></router-link>
                                <router-link to="/"><p>Flate for Rent in Media town (PHASE 1) (45)</p></router-link>
                            </div>
                            <div class="col-md-4">
                                <h6>Shops and Plaza,shooping center</h6>
                                <router-link to="/"> <p>Shops for Rent in Bahria town (PHASE 1 - 6) (45)</p></router-link>
                                <router-link to="/"> <p>Shops for Rent in Bahria enclave(45)</p></router-link>
                                <router-link to="/"> <p>Shops for Rent in Bahria DHA (PHASE 1 - 6) (45)</p></router-link>
                                <router-link to="/"> <p>Shops for Rent in Ghouri town (45)</p></router-link>
                                <router-link to="/"> <p>Shops for Rent in Media town (45)</p></router-link>
                            </div>
                        </div>
                    </div>
                    <hr>
                    <div class="Rawalpindi text-muted">
                        <h4>Rawalpindi</h4>
                        <div class="row">
                            <div class="col-md-4">
                                <h6>Most Popular Locations for Houses</h6>
                                <router-link to="/"><p>Houses for Rent in Bahria Town(45)</p></router-link>
                                <router-link to="/"><p>Houses for Rent in Sattelite Town (45)</p></router-link>
                                <router-link to="/"><p>Houses for Rent in 6th Road (45)</p></router-link>
                                <router-link to="/"><p>Houses for Rent in 7th Road(45)</p></router-link>
                                <router-link to="/"><p>Houses for Rent in Shamsa Abad(45)</p></router-link>
                            </div>
                            <div class="col-md-4">
                                <h6>FLATS AND APARTMENTS</h6>
                                <router-link to="/"><p>Flate for Rent in 6th Road (Block A)(45)</p></router-link>
                                <router-link to="/"><p>Flate for Rent in Shamsa Abad (Block B)(45)</p></router-link>
                                <router-link to="/"><p>Flate for Rent in Sadiq Abad(45)</p></router-link>
                                <router-link to="/"><p>Flate for Rent in Commercial Market(45)</p></router-link>
                                <router-link to="/"><p>Flate for Rent in Sattelite Town (Block D)(45)</p></router-link>
                            </div>
                            <div class="col-md-4">
                            <router-link to="/"><h6>Shops and Plaza,shooping center</h6></router-link>
                            <router-link to="/"><p>Shop for Rent in 6th Road (Block A)(45)</p></router-link>
                            <router-link to="/"><p>Shop for Rent in Sadiq Abad(45)</p></router-link>
                            <router-link to="/"><p>Shop for Rent in Commercial Market(45)</p></router-link>
                            <router-link to="/"><p>Plaza for Rent in Sattelite Town(45)</p></router-link>
                            <router-link to="/"><p>shooping center for Rent in Shamsa Abad (45)</p></router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <div>
                <b-modal ref="newModal" hide-footer title="Reservation Form">
                    <form  v-on:submit.prevent="updateReservedProperty()" class="p-3">
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
    <Footer />
  </main>
</template>
<script>
import Header from "../components/user/Header.vue";
import Footer from "../components/user/Footer.vue";
import * as MainService from "../services/main_service";
import * as userService from "../services/user_service";
import RingLoader from 'vue-spinner/src/RingLoader.vue'
export default {
  name: "Welcome",

  components: {
    Header,
    Footer,
    RingLoader,
  },
  metaInfo() {
        return {
            title: "welcome",
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                // { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                // { property: 'og:site_name', content: 'Epiloge'},
                // {property: 'og:type', content: 'website'},
                // {name: 'robots', content: 'index,follow'}
            ]
        }
    },
  data() {
            return {

              query:"",
              city:"",
              land_area:"",
              cities: [],
              sectors:[],
              headers:[],
              count:[],
              favourites:[],
              city: 0,
              sector: 0,
              properties: [],
              populars:[],
              loading:true,
              color:true,
              size:true,
              reservation:{
              property_id:'',
              full_name:'' ,
              cnic:'',
              current_address: '',
              status: '',
              domicile:'',
              phone: '',
          },
          contact:{
              name:'',
              email:'',
              subject:'',
              message:'',
          },
              property:{
                renter:'',
              },
              propertyData:{
                  city:'',
                  sector:'',
                  property:'',
              },
              protypes:[],
              moreExists: false,
              moreExistsSector:false,
              nextPage: 0,
              errors: {},
              hotProperties:{}
            };
        },
        mounted() {
            this.getHeader();
            // this.getPropertyType();
            this.getProperty();
            this.getCity();
            this.getPopularProperties();
            this.getHotProperty();
          },
        methods:{
            myToggle:function(){
                $(".heart").click(function() {
                $(this).toggleClass('fa-heart-o');
                $(this).toggleClass('fa-heart');
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
            getHeader:async function () {
                try {
                const response = await MainService.getHeader();
                this.headers = response.data;
                } catch (error) {
                this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                }

            },
            // getPropertyType:async function() {
            //     try {
            //     const response = await MainService.getPropertyType();
            //     this.protypes = response.data;
            //     } catch (error) {
            //     this.flashMessage.error({
            //             message: 'Some error occurred!',
            //             time:5000
            //             });
            //     }
            // },
            getCity:async function() {
                try {
                const response = await MainService.getCity();
                this.cities = response.data;
                } catch (error) {
                this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                }
            },
            getSector: async function () {
                    try {
                        const response = await MainService.getSector({
                            params: {
                                city_id: this.propertyData.city
                                }
                        }).then(function(response){
                                this.sectors = response.data;
                                // if (response.data.current_page < response.data.last_page) {
                                // this.moreExistsSector = true;
                                // this.nextPage = response.data.current_page + 1;
                                // } else {
                                // this.moreExistsSector = false;
                                // }
                            }.bind(this));
                        } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred!",
                        time: 5000,
                        });
                    }
            },
            searchProperty:async function () {
                    try {
                    const query = {
                    query: this.query,
                    city: this.propertyData.city,
                    sector: this.propertyData.sector
                    };
                    const response = await MainService.searchProperty(query);
                    this.properties = response.data;
                    } catch (error) {
                            this.flashMessage.info({
                            message: "Sorry we have not this property yet but you can check other proprety by clicking search icon",
                            time: 10000
                            });
                        }
            },
            getProperty:async function(){
                try {
                const response = await MainService.getProperty();
                this.properties = response.data.data;
                if (response.data.current_page < response.data.last_page) {
                    this.moreExists = true;
                    this.nextPage = response.data.current_page + 1;
                    } else {
                        this.moreExists = false;
                    }
                    this.loading=false;
                } catch (error) {
                this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                }
            },
            loadProperty: async function () {
                try {
                    const response = await MainService.loadProperty(this.nextPage);
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
            getHotProperty:async function(){
                try {

                    const response = await MainService.getHotProperty()
                    this.hotProperties = response.data;
                    this.loading=false;
                } catch (error) {
                    this.flashMessage.error({
                        message: 'some error occured!',
                        time:5000
                    });
                }
            },
            getPopularProperties:async function(){
                try {
                const response = await MainService.getPopularProperties();
                this.populars = response.data;
                } catch (error) {
                this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                }
            },
            favourite: async function (item) {
                if (!this.$store.state.isLoggedIn) {
                    this.$router.push('/login');
                    return;
                }
                try {
                    const response = await MainService.favourite(item)
                    this.properties.map(properties => {
                        if (properties.id === item.id) {
                            properties.favorited = true;
                        }
                    });
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                    this.getProperty();
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred, Please try again!',
                        time: 5000
                    });
                }
            },
            hotFavourite: async function (item) {
                if (!this.$store.state.isLoggedIn) {
                    this.$router.push('/login');
                    return;
                }
                try {
                    const response = await MainService.hotFavourite(item)
                    this.hotProperties.map(hotProperties => {
                        if (hotProperties.id === item.id) {
                            hotProperties.favorited = true;
                        }
                    });
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                    this.getHotProperty();
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred, Please try again!',
                        time: 5000
                    });
                }
            },
            unFavourite: async function (item) {
                if (!this.$store.state.isLoggedIn) {
                    this.$router.push('/login');
                    return;
                }

                try {
                    const response = await MainService.unFavourite(item)
                    this.properties.map(properties => {
                        if (properties.id === item.id) {
                            properties.favorited = false;
                        }
                    });
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                    this.getProperty();
                } catch (error) {

                    this.flashMessage.error({
                        message: 'Some error occurred, Please try again!',
                        time: 5000
                    });
                }
            },
            hotUnFavourite: async function (item) {
                if (!this.$store.state.isLoggedIn) {
                    this.$router.push('/login');
                    return;
                }

                try {
                    const response = await MainService.hotUnFavourite(item)
                    this.hotProperties.map(hotProperties => {
                        if (hotProperties.id === item.id) {
                            hotProperties.favorited = false;
                        }
                    });
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                    this.getHotProperty();
                } catch (error) {

                    this.flashMessage.error({
                        message: 'Some error occurred, Please try again!',
                        time: 5000
                    });
                }
            },
            like: async function (item) {
                    if (!this.$store.state.isLoggedIn) {
                        this.$router.push('/login');
                        return;
                    }

                    try {
                        const response = await MainService.like(item)
                        this.properties.map(properties => {
                            if (properties.id === item.id) {
                                properties.liked = true;
                            }
                        });
                        this.flashMessage.success({
                            message: response.data.message,
                            time: 5000
                        });
                        this.getProperty();
                        this.getHotProperty();
                    } catch (error) {
                        this.flashMessage.error({
                            message: 'Some error occurred, Please try again!',
                            time: 5000
                        });
                    }
            },
            hotlike: async function (item) {
                    if (!this.$store.state.isLoggedIn) {
                        this.$router.push('/login');
                        return;
                    }

                    try {
                        const response = await MainService.like(item)
                        this.hotProperties.map(hotProperties => {
                            if (hotProperties.id === item.id) {
                                hotProperties.liked = true;
                            }
                        });
                        this.flashMessage.success({
                            message: response.data.message,
                            time: 5000
                        });
                        this.getHotProperty();
                    } catch (error) {
                        this.flashMessage.error({
                            message: 'Some error occurred, Please try again!',
                            time: 5000
                        });
                    }
            },
            unLike: async function (item) {
                if (!this.$store.state.isLoggedIn) {
                    this.$router.push('/login');
                    return;
                }
                try {
                    const response = await MainService.unLike(item)
                    this.properties.map(properties => {
                        if (properties.id === item.id) {
                            properties.liked = false;
                        }
                    });
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                    this.getProperty();
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred, Please try again!',
                        time: 5000
                    });
                }
            },
            hotUnLike: async function (item) {
                if (!this.$store.state.isLoggedIn) {
                    this.$router.push('/login');
                    return;
                }
                try {
                    const response = await MainService.hotUnLike(item)
                    this.hotProperties.map(hotProperties => {
                        if (hotProperties.id === item.id) {
                            hotProperties.liked = false;
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
            visitedProperty: async function (item) {
                try {
                    const response = await MainService.visitProperty(item);
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred!",
                        time: 5000,
                    });
                }
            },
            getTop: async function (item) {
            if (!this.$store.state.isLoggedIn) {
                this.$router.push("/login");
                return;
            }
            try {
                const response = await MainService.getTop(item);
                this.properties.map((property) => {
                    if (property.id === item.id) {
                        property.liked = false;
                    }
                });
                this.getProperty();

            } catch (error) {
                this.flashMessage.error({
                    message: "Some error occurred, Please try again!",
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
            created: function(){
                this.getCity()
            }

        }
};


</script>
<style scoped>
#latestpropertyad{
    margin-top: 15px;
}
.postadcontent li{
            float: left;
            padding-left:10px;
            margin-top: 10px;
            }
.postadcontent li i
            {
            color:#2E86C1;
            }
.adbackground{
            background-color: #2E86C1;
            background-image: linear-gradient(to left,#85C1E9 ,#2874A6);
 }
.popular-places p{
     font-size: 12px;
     margin: 5px;
  }
 .popular-places p:hover{
 color: green;
 }
.featuredimg{
    height: 150px;
    width: 100%;
}
.recentadimg{
    height: 160px;
    width: 100%;
}
.popularadimg{
    height: 160px;
    width: 100%;
}
.hotadimg{
    height: 160px;
}
.list2img{
    height: 200px;
    width: 100%;
}
.list3img{
    height: 100px;
    width: 100%;
}
.latestadimg{
    height: 218px;
    width: 100%;
}
  .latestadimg1{
           height: 111px;
           widows: 100%;
    }
 .latestadimg2{
            height: 111px;
            widows: 100%;
        }
        .banner{
            height: 400px;
        }
  @media (min-width: 1200px)
{
  .container, .container-sm, .container-md, .container-lg, .container-xl {
      max-width: 1187px;
  }
}
.carousel .carousel-item a{
    color: black;
}
@media only screen and (max-width: 600px) {
        .map{
            padding: 0px;
        }
        .latestadimg{
            height: 150px !important;
        }
        .banner{
            height: 600px;
        }
        .latestadimg1{
            width: 85px !important;
        }
        .latestadimg2{
            width: 85px !important;
        }
        .latestnewsadcontact{
            font-size: 8px;
        }
        .latestnewsadreserve{
            font-size: 8px;
        }
        .latestadscontactno{
            font-size: 9px;
        }
      }
      @media only screen and (max-width: 767px) {
        .map{
            padding: 0px;
        }
        .latestadimg{
            height: 150px !important;
        }
        .latestadimg1{
            width: 90px !important;
            height:90px;
        }
        .latestadimg2{
            width: 90px !important;
            height:90px;
        }

      }
     @media only screen and (min-width: 768px) and (max-width:992px){
          .latestadimg{
              height:334px;
          }
          .latestadimg1{
              height:170px
          }
          .latestadimg2{
              height:170px;
          }
                #latestpropertyad{
        margin-top: 130px;
}
      }

      #counter {
   background-color: #2E86C1;
   background-image: linear-gradient(to left,#85C1E9 ,#2874A6);
    color: #fff;
    display: block;
    overflow: hidden;
    text-align: center;
    padding: 30px 0;
}
#counter .count {
    padding: 50px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
    text-align: center;
}
.count h4 {
    color: #fff;
    font-size: 16px;
    margin-top: 0;
}
#counter .count .fa {
    font-size: 40px;
    display: block;
    color: #fff;
}
#counter .number {
    font-size: 30px;
    font-weight: 700;
    margin: 0;
}

.dropdown-menu{
        position: absolute;
    transform: translate3d(170px, 27px, 0px) !important;
    top: 0px;
    left: 0px;
    will-change: transform;
}
#dropdown-menu1{
    position: absolute;
    transform: translate3d(10px, 20px, 0px) !important;
    top: 0px;
    left: 0px;
    will-change: transform;
}
#dropdown-menu2{
     position: absolute;
    transform: translate3d(160px, 55px, 0px) !important;
    top: 0px;
    left: 0px;
    will-change: transform;
}
.sharinghoticon{
    position: absolute;
    top: 0px;
    right: 0px;
}
.sharinghoticon i{
    color:#ffffff;
    font-weight: bold;
}
</style>
