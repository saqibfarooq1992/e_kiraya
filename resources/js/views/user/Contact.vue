<template>
    <main>
        <Header />
        <section id="maincss">
            <div class="bannerimg-about">
                <img class="w-100"  :src="`${$store.state.serverPath}images/blog/blogcover.jpg`"  >
            </div>
        </section>
        <section id="main2css" class="clearfix about-us page">
                <div class="container">
                    <h2 class="title mt-3 text-center">contact us</h2>
                    <div class="about mt-3">
                        <div class="contact-form" >
                            <div class="corporate-info">
                                <div class="row">
                                    <div class="col-md-4 border">
                                        <div class="contact-info">
                                            <h2>Corporate Info</h2>
                                            <address>
                                                <p><strong>Head office: </strong>OFFICE NO 18-19 Walayat Plaza Rehmanabad Rawalpindi.</p>
                                                <p><strong>Branch office: </strong>Bahria Town Phase 8,Rawalpindi</p>
                                                <p><strong>Branch office: </strong>PWD Islamabad.</p>
                                                <p><strong>Branch office: </strong>Ghouri Town Phase 5 Islamabad.</p>
                                                <p><strong>Phone:</strong> <a href="#">0321-1717555</a></p>
                                                <p><strong>Email: </strong><a href="#">info@eko.com.pk</a></p>
                                            </address>
                                            <ul class="social">
                                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                                <li><a href="#"><i class="fa fa-instagram"></i></a></li>
                                                <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                                                <li><a href="#"><i class="fa fa-whatsapp whatsapp"></i></a></li>
                                                <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="col-md-8">
                                        <div class="feedback">
                                        <h2>Send Us Your Feedback</h2>
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
                                                <button type="submit" class="btn">Submit Your Message</button>
                                            </div>
                                        </form>
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
import * as userService from "../../services/user_service";
export default {
    name: "Contact-us",
    components: {
        Header,
        Footer
  },
  metaInfo() {
        return {
            title: "contact-us",
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
          contact:{
              name:'',
              email:'',
              subject:'',
              message:'',
          },
          errors:{}
      }
  },
  mounted() {

  },
  methods: {
        contactUs: async function () {
            try {
                const response = await userService.contactUs(this.contact);
                this.errors = {};
                this.contact = {};
                this.flashMessage.success({
                    message: response.data.message,
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

<style lang="css">
    .maincontact{
    background-color:#38b16e ;
    background-image: linear-gradient(to right,#42B45D,#20AB94);
    height: 320px;
    position: absolute;
    width: 100%;
}
.main2contact{
    position: relative;
   margin-top: 50px;
}
</style>
