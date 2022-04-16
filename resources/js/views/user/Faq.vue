<template>
    <main>
        <Header />
        <div class="faq-banner">
             <div class="breadcrumb-section container mt-4">
                        <ol class="breadcrumb">
                            <li><a href="index.html">Home</a></li>
                            <li>FAQ</li>
                        </ol>

                    </div>
        </div>
        <!-- <section class="complaint-box ">
          <div class="container">
            <div class="row">
                <div class="col-md-6 complaintbox1">
                    <img src="http://dinus.org/img/fakultas/FIK/cs/cs.svg">
                        <form>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">DATE OF COMPLAINT</label>
                                <input type="date" class="form-control" id="exampleFormControlInput1" name="date" placeholder="">
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlInput1">E-mail</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" name="email" placeholder="name@example.com">
                            </div>
                            <div class="form-group">
                                <div class="input-group mb-3">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text bg-mute" id="basic-addon1"><img src="images/bg/pakflag.png" alt=""></span>
                                    </div>
                                    <input type="tel" class="form-control" placeholder="+92-336-787837" aria-label="Username" aria-describedby="basic-addon1" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required>
                                  </div>
                            </div>
                            <div class="form-group">
                            <label for="exampleFormControlInput1">Address</label>
                            <input type="email" class="form-control" id="exampleFormControlInput1" name="Address" placeholder="Street No.2 F-8 Islamabad">
                           </div>
                           <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="city">City</label>
                                    <select class="form-control">
                                        <option value="Islamabad">Islamabad</option>
                                        <option value="Rawalpindi">Rawalpindi</option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">ZIP CODE</label>
                                    <input type="text" pattern="[0-9]{5}" placeholder="Zip Code" name="zipcode" class="form-control" />
                                </div>
                            </div>
                            </div>
                            <div class="form-group">
                             <label for="exampleFormControlTextarea1">Message</label>
                             <textarea class="form-control" name="message"  rows="3" ></textarea>
                           </div>
                            <button class="btn btn-outline-danger  d-block mx-auto">SEND COMPLAINT</button>
                       </form>
               </div>
                <div class="col-md-6 mx-auto complaintbox2 text-light shadow">
                    <h3 class="text-center font-weight-bold mt-3">eKARAYA COMPLAINT CELL</h3>
                    <h3 class="text-center" style="margin-top: 100px;">COMPLAINT ASSISTANT</h3>
                    <p class="text-center mt-2">Please send us details about the incident you would like to report. Our Complaint Center will analyze your complaint and take the appropriate measures in order that the reported situation will not occur at any other time in the future.</p>
                <div>
                </div>
               </div>
           </div>
          </div>
        </section> -->
        <section id="main5" class="clearfix page mt-5">
            <div class="container">
                <div class="faq-page">
                    <div class="breadcrumb-section">
                        <h2 class="title" >Trade ads FAQ</h2>
                    </div>

                    <div class="tr-accordion"  id="accordion">
                        <div class="card" v-for="(faq , index) in faqs" :key="index">
                            <div class="card-header" id="heading-1">
                                <button data-toggle="collapse" data-target="#collapse-1" aria-expanded="true" aria-controls="collapse-1">
                                {{faq.user.name}}
                                </button>
                            </div>
                            <div id="collapse-1" class="collapse show" aria-labelledby="heading-1"  data-parent="#accordion">
                                <div class="card-body">
                                    <p>{{faq.description}}</p>
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
import * as mainService from "../../services/main_service";
export default {
    name: "FAQ",
    components: {
        Header,
        Footer
  },
  metaInfo() {
        return {
            title: "faq",
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
              profile: this.$store.state.profile,
              faqs:[],
              users:[]
            };

        },
        mounted() {
            this.getFaq();
          },
         methods:{
             getFaq: async function(){
                 try {
                     const response = await mainService.getFaq();
                     console.log(response);
                     this.faqs = response.data;
                 } catch (error) {
                     this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:500
                    });
                 }
             }
         }
}
</script>
<style scoped>
.faq-banner{
    background-color: #38b16e;
    background-image: linear-gradient(to right,#42b45d,#20ab94);
    height: 500px;
    position: absolute;
    width: 100%;
}
.complaint-box{
 position: relative;
margin-top: 84px;
padding-top: 80px;
}
</style>
