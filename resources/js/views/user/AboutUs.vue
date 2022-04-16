<template>
    <main>
        <Header />
        <section id="maincss">
            <div class="bannerimg-about">
                <img class="w-100"    :src="`${$store.state.serverPath}images/blog/blogcover.jpg`"   >
            </div>
        </section>
        <section id="main2css" class="clearfix about-us page">
                <div class="container">
                    <h2 class="title text-center mt-3">About Us</h2>
                    <div class="section about shadow mt-3">
                        <div class="about-info">
                            <div class="row">
                                <div class="col-lg-6">
                                    <div class="about-us-images">
                                        <img :src="`${$store.state.serverPath}storage/${abouts.image}`" class="img-fluid" alt="About us Image">
                                    </div>
                                </div>
                                <div class="col-lg-6" >
                                    <div class="about-text">
                                        <h3>{{abouts.title}}</h3>
                                        <div class="description-paragraph">
                                            <p>{{abouts.description}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="about-content">
                            <div class="background">
                                <h3 class="text-success">Backgrounds</h3>
                                <p>For the tenant, 'finding the right property to rent' and on the other side of the mirror 'to findverified tenant with a good chartered' for the landlord has always been a struggle and that toocomes along with several lies, miscellaneous charges, extra commission and late payment, andlast but not the least, occasionally the dead lock over minor of the Rent Payment problem leadsto hatred and fight that ends up in police stations and appearing before courts.</p>
                                <p>Having experienced such gaps in the field of Real-estate, where there is a continuous discordbetween Landlord and Tenant, EKOPakistan thought of bringing a relief to the landlords as wellas an ease to the tenants.  After a thorough research, team E-Kiraya Online decided to come upwith an online rental platform where everything is under your control and such a system whichboth property owners and tenants looking for Rent can trust.</p>
                            </div>
                            <div class="our-mission">
                                <h3 class="text-success">Our Mission</h3>
                                <p>Our   mission   is   to   revolutionize   and   automate   the   online   Renting   system   of   property   withinPakistan. We desire for every landlord as well as tenant to upgrade themselves by adopting NewOnline Renting trend (posting Ads and finding property for rent),   so they can free up theirvaluable time.  We desire for landlords to improve their business’s functionality, and streamlinetheir rentals —whether they have one rental or one hundred.</p>
                            </div>
                            <div class="our-values">
                                <h3 class="text-success">Our Values</h3>
                               <p>We Enhance lives through Digitizing renting process in Pakistan. Landlords and Tenants desireto avail our services because of the set of core values which  we have that help scale a healthycompany culture. We believe the best outcomes come from close collaboration within our team.Our Values are: </p>
                               <ol>
                                   <li>We empower landlords</li>
                                   <li>We believe in transparency</li>
                                   <li>We innovate and constantly improve</li>
                                   <li>We Provide value to others</li>
                                   <li>We Serve as guides.</li>
                                   <li>We make sure to Be kind.</li>
                                   <li>We are lifelong learners.</li>
                                   <li>We remain enthusiastic and positive.</li>
                                   <li>We Do the right thing.</li>
                               </ol>
                            </div>
                            <div class="beliefs">
                                <h3 class="text-success">Our Mission</h3>
                                <p>Our   mission   is   to   revolutionize   and   automate   the   online   Renting   system   of   property   withinPakistan. We desire for every landlord as well as tenant to upgrade themselves by adopting NewOnline Renting trend (posting Ads and finding property for rent),   so they can free up theirvaluable time.  We desire for landlords to improve their business’s functionality, and streamlinetheir rentals —whether they have one rental or one hundred.</p>
                            </div>
                            <h3 class="text-success">Integrity</h3>
                            <p>We will be honest, impartial, fair, and consistent in our actions and decisions.</p>
                            <h3 class="text-success">Trust</h3>
                            <p>We will trust and maintain confidence in each other and in outside parties.</p>
                            <h3 class="text-success">Customer Service</h3>
                            <p>Customer satisfaction is the critical benchmark of our success.</p>
                            <h3 class="text-success">Communication</h3>
                            <p>We   pride   ourselves   on   the   way   we   communicate   and   work   with   each   other   and   with   ourcustomers, and will always strive to ensure clear understanding of the situations and issues thatcome our way.</p>
                            <h3 class="text-success">Respect</h3>
                            <p>We strive to earn respect by being respectful of others, and operating in an open-minded andnon-discriminatory manner that allows us to learn from each other.</p>
                            <h3 class="text-success">Responsibility</h3>
                            <p>Each individual takes responsibility for practicing and promoting these values and beliefs in allactivities.</p>
                            <h3 class="text-success">Community Service</h3>
                            <p>We encourage and participate in activities that support our local and nation-wide communities.</p>
                            <h3 class="text-success">Friendly Environment</h3>
                            <p>In all of these things, we will maintain a relaxed and positive atmosphere of enjoyment of ourwork, our accomplishments and each other.</p>
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
    name: "About us",
    components: {
        Header,
        Footer
  },
  metaInfo() {
        return {
            title: "about us",
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                { property: 'og:site_name', content: 'Epiloge'},
                {property: 'og:type', content: 'website'},
                {name: 'robots', content: 'index,follow'}
            ]
        }
    },
  data() {
            return {
              abouts:[],
              users:[]
            };

        },
        mounted() {
            this.getAbout();
          },
          methods: {
            getAbout:async function(){
                try {
                    const response = await mainService.getAbout();
                    this.abouts = response.data;
                    } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:500
                    });
                }
            },
          }

}
</script>
<style lang="css">


.our-webcoderskull .cnt-block{
   float:left;
   width:100%;
   background:#fff;
   padding:30px 20px;
   text-align:center;
   border:2px solid #d5d5d5;
   margin: 0 0 28px;
}
.our-webcoderskull .cnt-block figure{
   width:148px;
   height:148px;
   border-radius:100%;
   display:inline-block;
   margin-bottom: 15px;
}
.our-webcoderskull .cnt-block img{
   width:148px;
   height:148px;
   border-radius:100%;
}
.our-webcoderskull .cnt-block h3{
   color:#2a2a2a;
   font-size:20px;
   font-weight:500;
   padding:6px 0;
   text-transform:uppercase;
}
.our-webcoderskull .cnt-block h3 a{
  text-decoration:none;
	color:#2a2a2a;
}
.our-webcoderskull .cnt-block h3 a:hover{
	color:#337ab7;
}
.our-webcoderskull .cnt-block p{
   color:#2a2a2a;
   font-size:13px;
   line-height:20px;
   font-weight:400;
}
.our-webcoderskull .cnt-block .follow-us{
	margin:20px 0 0;
}
.our-webcoderskull .cnt-block .follow-us li{
    display:inline-block;
	width:auto;
	margin:0 5px;
}
.our-webcoderskull .cnt-block .follow-us li .fa{
   font-size:24px;
   color:#767676;
}
.our-webcoderskull .cnt-block .follow-us li .fa:hover{
   color:#025a8e;
}

</style>
