<template>
    <main>
        <Header />
            <section class="banner blog">
                <div class="banner-img">
                <img :src="`${$store.state.serverPath}images/blog/blogcover.jpg`" alt="">
                </div>
            </section>
            <section class="blog">
                <div class="container">
                    <p class="my-3">EKO Blog is powered by Pakistan's 1st largest-ever complete rental management website. Get access to quality tips, advice, articles and strategies regarding Real estate and property. Our EKO experts would provide important tips and commentary about how to achieve success in letting tenants find their dream property for rent as well as let landlords rent their property and gain potential tenants. Beside Rental topics, other general topics regarding Real Estate are also covered such as home decoration tips and renovation ideas, travel destinations, property laws, real estate events and info regardingother free resources.</p>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="bloglatest">
                                    <div class="blog-img">
                                        <img src="images/blog/blognews.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <div class="bloglatest">
                                    <div class="blog-img2">
                                      <a href="https://equranforyou.com/" target="_blank"><img src="images/blog/news2.jpg" alt="" class="img-fluid"></a>
                                    </div>
                                </div>
                                    <div class="bloglatest">
                                        <div class="blog-img2">
                                         <a href="https://eko.com.pk/" target="_blank"></a>   <img src="images/blog/postad.jpg" alt="" class="img-fluid">
                                        </div>
                                    </div>
                            </div>
                        </div>
                        <h3>Recent Post <hr></h3>
                        <div class="row">
                            <div class="col-md-8" id="blogsection1" >
                               <div v-for="(blog , index) in blogs" :key="index">
                                <div class="blog-header1">
                                    <router-link :to="{name: 'single-blogs', params: {slug: blog.slug}}"><img :src="`${$store.state.serverPath}storage/${blog.blog_picture}`" alt="" class="img-fluid w-100"></router-link>
                                </div>
                                <div class="blog-title">
                                 <router-link :to="{name: 'single-blogs', params: {slug: blog.slug}}"><h5 style="color:#f8f9fa">{{blog.title}}</h5></router-link>
                                </div>
                                <div class="blog-content">
                                    <p v-html="blog.blog_description"></p>
                                </div>
                                <div class="blog-footer">
                                    <div class="row">
                                        <div class="col-md-6">
                                            <p>JANUARY,12/2020 <strong>BY Admin</strong></p>
                                        </div>
                                        <div class="col-md-6 ">
                                            <div class="pull-right d-flex justify-content-center blog-icon">
                                                <div class="pull-right blog-icon">
                                                    <li class="d-inline"><a href="#"><i class="fa fa-heart"></i></a></li>
                                                    <li class="d-inline"><a href="#"><i class="fa fa-eye">2 viewer</i></a></li>
                                                    <li class="d-inline" onclick="myFunction()"><i class="fa fa-comment"></i></li>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </div>
                            </div>
                            <div class="col-md-4 blog ">
                                <div class="blog-ad">
                                    <div class="blogad-img">
                                    <a href="https://www.smartcitypk.com/" target="_blank"><img src="images/blog/1.jpg" alt="" class="img-fluid"></a>
                                    </div>
                                </div>
                                <div class="social-media mt-5">
                                    <div class="socialmedia-header">
                                        <h3 class="text-center mb-4"> Social Media Follower</h3>
                                    </div>
                                    <div class="socialmedia-content mx-3">
                                        <div class="row">
                                                <div class="col-md-4 p-3 Facebook">
                                                    <a href="https://www.facebook.com/rentpropertyatEKO" target="_blank">
                                                        <p class="text-center text-white">Facebook</p>
                                                        <p class="text-center text-white">565</p>
                                                    </a>
                                                </div>

                                            <div class="col-md-4 p-3 Instagram" >
                                                <a href="https://www.instagram.com/rentpropertyatEKO/" target="_blank">
                                                <p class="text-center text-white">Instagram</p>
                                                <p class="text-center text-white">10.2k</p>
                                                 </a>
                                            </div>


                                            <div class="col-md-4 p-3 Twitter" >
                                                  <a  href="https://twitter.com/ekirayaonline" target="_blank">
                                                <p class="text-center text-white">Twitter</p>
                                                <p class="text-center text-white">7.5k</p>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="subscribe-newsletter bg-info my-5 p-4">
                                    <h3 class="text-center text-light">NEWS LETTER</h3>
                                    <form v-on:submit.prevent="subscriber">
                                        <div class="form-group">
                                            <input type="text" class="form-control"
                                                v-model="subscriberData.email"
                                                id="email"
                                                name="email"
                                                placeholder="Enter your Email" />
                                            <div class="invalid-feedback" v-if="errors.email"><strong>{{errors.email[0]}}</strong></div>
                                            <small id="emailHelp" class="form-text text-light text-center">We'll never share your email with anyone else.</small>
                                        </div>
                                        <button type="btn" class="btn btn-success d-block mx-auto">Submit</button>
                                    </form>
                                </div>
                                <div class="blog-ad">
                                        <div class="blogad-img">
                                          <a href="http://fazal.marketing/" target="_blank"><img src="images/blog/2.jpg" alt="" class="img-fluid"></a>
                                        </div>
                                </div>
                                <div class="blog-ad">
                                    <div class="blogad-img">
                                        <img src="images/blog/postad.jpg" alt="" class="img-fluid">
                                    </div>
                                </div>
                                <div class="blog-ad">
                                    <div class="blogad-img">
                                        <a href="http://fazal.marketing/" target="_blank"><img src="images/blog/6.jpg" alt="" class="img-fluid"></a>
                                    </div>
                                </div>
                                <div class="blog-ad">
                                    <div class="blogad-img">
                                       <a href="http://fazal.marketing/" target="_blank"> <img src="images/blog/3.jpg" alt="" class="img-fluid"></a>
                                    </div>
                                </div>
                                <div class="blog-ad">
                                    <div class="blogad-img">
                                    <a href="https://eko.com.pk/advartisment-detail" target="_blank"><img src="images/blog/4.jpg" alt="" class="img-fluid"></a>
                                    </div>
                                </div>
                                <div class="blog-ad">
                                    <div class="blogad-img">
                                        <a href="http://fazaltechnologies.com/" target="_blank"><img src="images/blog/5.jpg" alt="" class="img-fluid"></a>
                                    </div>
                                </div>
                                <div class="blog-ad">
                                    <div class="blogad-img">
                                        <img src="images/blog/postad.jpg" alt="" class="img-fluid">
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
import Header from "../../components/user/Header.vue";
import Footer from "../../components/user/Footer.vue";
import * as blogService from "../../services/blog_service";
import * as mainService from '../../services/main_service';
export default {
    name: "Blogs",
    components: {
    Header,
    Footer
  },
    metaInfo() {
        return {
            title: "blogs",
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
            blogs: [],
            subscriberData:{
                    email:'',
            },
        errors: {},

        }
    },
    mounted() {
        this.getBlog();
    },
    methods: {
        subscriber:async function (){
                try {
                    const response = await mainService.subscriber(this.subscriberData);
                        this.flashMessage.success({
                            message: 'Subscriber Data Added Successfuly!',
                            time:5000,
                    });
                    this.subscriberData.email= "";
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000,
                    });
                }
        },
        getBlog:async function(){
                try {
                    const response = await blogService.getBlog();
                    this.blogs = response.data;
                    } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
        },
        // loadBlog:async function() {
        //         try {
        //                 const response =  await blogService.loadBlog(this.nextPage)
        //                 if(response.data.current_page < response.data.last_page){
        //                     this.moreExists = true;
        //                     this.nextPage = response.data.current_page + 1;
        //                 }else{
        //                     this.moreExists = false;
        //                 }
        //                 response.data.data.forEach(data => {
        //                 this.blogs.push(data);
        //             });
        //         } catch (error) {
        //             this.flashMessage.error({
        //                 message: "Some error occurred during load more Cities",
        //                 time:5000
        //             });
        //         }
        // },
    },

}
</script>

