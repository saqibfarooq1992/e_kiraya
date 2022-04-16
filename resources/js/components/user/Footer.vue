<template>
    <main>
       <footer id="footer" class="clearfix">
        <!-- footer-top -->
        <section class="footer-top clearfix">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="footer-widget">
                            <router-link class="navbar-brand" to="/"><img  :src="`${$store.state.serverPath}images/eko.png`" style="width: 100px;" alt="Logo"></router-link>
                            <ul>
                                <h5 class="text-success">About Us</h5>
                                <p>Pakistan’s First Rental Property/Real Estate Management website, Easy Kiraya Online (ایکو) allows landlords & tenants to search, screen, manage verified properties for rent, pay & collect rent online, upload property Ads, store rental info and much more.</p>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <div class="footer-widget">
                            <h3>Quick Links</h3>
                            <ul>
                                <li><router-link to="/about-us"> About US</router-link></li>
                                <li><router-link to="/Faqs">FAQ'S</router-link></li>
                                <li><router-link to="/Privacy-policy">Privacy Policy</router-link></li>
                                <li><router-link to="/faq">Terms & Conditions</router-link></li>
                                <li><router-link to="/contact-us">Contact US</router-link></li>
                                <li><router-link to="/How-Eko-Works">How EKO Works</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <div class="footer-widget ">
                            <h3>PLatform</h3>
                            <ul>
                                <h5 class="text-success">LANDLORD</h5>
                                <li><router-link to="/faqs">EKOboard For Landlord</router-link></li>
                                <li><router-link to="/guide-for-landlord">Guides For Landlord</router-link></li>
                                <h5 class="text-success">TENANTS</h5>
                                <li><router-link to="/faqs">EKOboard For Tenants</router-link></li>
                                <li><router-link to="/guides-for-tenants">Guides For Tenants</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2 col-sm-6">
                        <div class="footer-widget ">
                            <h3>Resources</h3>
                            <ul>
                                <li><router-link to="/Faqs">Area Cities</router-link></li>
                                <li><router-link to="/benefits">Benefits</router-link></li>
                                <li><router-link to="/Area-map">Map</router-link></li>
                                <li><router-link to="/Faqs">Advertise With Us</router-link></li>
                                <li><router-link to="/blogs">Blogs</router-link></li>
                                <li><router-link to="/blogs">News</router-link></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="footer-widget news-letter">
                            <h3>Newsletter</h3>
                            <p>We Will Never Share Your Email With Anyone else.</p>
                            <form v-on:submit.prevent="subscriber">
                            <div class="form-group">
                                <input type="text" class="form-control"
                                    v-model="subscriberData.email"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your Email" />
                                <div class="invalid-feedback" v-if="errors.email"><strong class="text-danger">{{errors.email[0]}}</strong></div>
                            </div>
                            <button type="submit" class="btn btn-primary">Sign Up</button>
                            </form>
                             <h5 class="mt-2">Social Media</h5>
                              <div class="row">
                                   <a href="https://www.facebook.com/rentpropertyatEKO" target="_blank" class="fab footersocialiconfb fa-facebook-square ml-3"></a>
                                   <a href="https://www.instagram.com/rentpropertyatEKO/" target="_blank" class="fab footersocialiconinsta fa-instagram  mx-1"></a>
                                   <a href="https://twitter.com/ekirayaonline" target="_blank" class="fab footersocialicontweet fa-twitter-square  mx-1"></a>
                                   <a href="#" target="_blank" class="fab footersocialiconwhats fa-whatsapp-square mx-1"></a>
                                   <a href="https://www.youtube.com/channel/UCPpOfp6kMh3G2TZmjIpQqQg" target="_blank" class="fab footersocialiconyoutube fa-youtube mx-1"></a>
                                   <a href="" class="fab footersocialicongoogle fa-google-plus-square  mx-1"></a>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div class="footer-bottom clearfix text-center">
            <div class="container">
                <p><a href="http://fazaltechnologies.com/" target="_blank"><span>Developed by &copy; fazal technologies {{new Date().getFullYear()}}</span></a></p>
            </div>
        </div>
     </footer>
    </main>
</template>
<script>
    import * as mainService from '../../services/main_service';

    export default {
        data(){
            return{
                subscriberData:{
                    email:'',
                },
                errors: {},

            }
        },
        methods:{
            subscriber:async function (){
                try {
                    const response = await mainService.subscriber(this.subscriberData);
                        this.flashMessage.success({
                            message: 'Subscriber Data Added Successfuly!',
                            time:5000,
                    });
                    this.subscriberData.email= "";
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
            }
        }
    }
</script>
<style scoped>
 .footersocialiconfb{
     font-size:36px;
     color:#3b5998;
 }
 .footersocialicontweet{
     font-size:36px;
     color:#00acee;
 }
 .footersocialicongoogle{
     font-size:36px;
     color:#D44638;
 }
 .footersocialiconwhats{
     font-size:36px;
     color:green;
 }
 .footersocialiconyoutube{
     font-size:36px;
     color:#FF0000;
 }
 .footersocialiconinsta{
     font-size:36px;
    color: #D6249F;
 }
 footer a{
     text-decoration:none;
 }
</style>
