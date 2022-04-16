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
                                <h2>Pending And Approved Properties</h2>
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
                                                <span><a href="#">{{property.city.city_name}}</a></span> /
                                                <span><a href="#">{{property.sector.sector}}</a></span>
                                            </div>
                                        </div>
                                        <div class="ad-meta">
                                            <div class="meta-content">
                                                <span class="dated">Uploaded On: <a href="#">{{property.created_at}} </a></span>
                                                <span class="pending">{{property.status}}</span>
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
    components: {
        Header,
        Footer,
        ProfileHeader
    },
    data() {
            return {
              query:"",
              cities: [],
              sectors:[],
              headers:[],
              city: 0,
              sector: 0,
              properties: [],
              protypes:[],
              moreExists: false,
              nextPage: 0,
              errors: {}
            };
        },
        mounted() {
            this.getProperty();
          },
          methods:{
            getProperty:async function(){
                try {
                    const response = await MainService.getProperty();
                    this.properties = response.data
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
<style scoped>
@media only screen and (min-width:768px ) and (max-width: 1200px){
          .myadsimg{
        height: 100px;
    }
      }
</style>
