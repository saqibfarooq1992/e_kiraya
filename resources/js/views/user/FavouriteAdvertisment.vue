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
                                    <h2>Favourite ads</h2>
                                    <div class="ad-item row" v-for="(ad , index) in ads" :key="index">
                                        <div class="item-image-box col-lg-4">
                                            <div class="item-image">
                                                <a href="details.html"><img :src="`${$store.state.serverPath}storage/${ad.pic1}`" alt="Image" class="img-fluid"></a>
                                            </div>
                                        </div>

                                        <div class="item-info col-lg-8">
                                            <div class="ad-info">
                                                <h3 class="item-price">{{ad.rent_price}}</h3>
                                                <h4 class="item-title"><a href="#">{{ad.title}} </a></h4>
                                                <div class="item-cat">
                                                    <span><a href="#">{{ad.city_name}}</a></span> /
                                                    <span><a href="#">{{ad.sector}}</a></span>
                                                </div>
                                            </div>

                                            <div class="ad-meta">
                                                <div class="meta-content">
                                                    <span class="dated"><a href="#">{{ad.created_at}} </a></span>
                                                    <a href="#" class="tag"><i class="fa fa-tags"></i> New</a>
                                                </div>
                                                <div class="user-option pull-right">
                                                    <a href="#" data-toggle="tooltip" data-placement="top" title="Los Angeles, USA"><i class="fa fa-map-marker"></i> </a>
                                                    <a class="online" href="#" data-toggle="tooltip" data-placement="top" title="Individual"><i class="fa fa-user"></i> </a>
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
                </div>
            </section>
        <Footer />
    </main>
</template>
<script>
import Header from '../../components/user/Header.vue';
import Footer from '../../components/user/Footer.vue';
import ProfileHeader from '../../components/user/ProfileHeader.vue';
import * as MainService from "../../services/main_service";
export default {
    name: "Favourite-Advertisment",
    components: {
        Header,
        Footer,
        ProfileHeader
  },
  data() {
            return {
              query:"",
              ads: [],

              moreExists: false,
              nextPage: 0,
              errors: {}
            };
        },
        mounted() {
            this.getFavouriteProperty();
          },
          methods: {
              getFavouriteProperty: async function(){
                  try {
                      const response = await MainService.getFavouriteProperty();
                      this.ads = response.data;
                  } catch (error) {
                     this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                  }
              }
          }

}
</script>
