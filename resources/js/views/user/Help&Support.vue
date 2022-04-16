<template>
   <main>
   <Header />
      <section id="maincss">
            <div class="bannerimg-about">
                <img class="w-100"  :src="`${$store.state.serverPath}images/blog/blogcover.jpg`" >
            </div>
     </section>
     <section id="main2css" class="clearfix about-us page">
                <div class="container">
                    <h2 class="text-center title text-white mt-3"><img :src="`images/icon/Faq.png`">  Frequently Asked Question(FAQ's)</h2>
                    <div class="section about shadow mt-3">
                         <h3 class="text-center">What Is E-kiraya Online?</h3>
                         <p class="text-center">EKO (eko in urdu)Short for E-Kiraya Online is a Rental Property Mangagement website, built as a solution to problems faced by Landlords/owners and Tenants.</p>
                        <div class="row">
                            <div class="container">
                                    <div class="questions">
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION1" aria-expanded="true" aria-controls="collapseOne"><img src="images/icon/Que.png">How long was your company been in bussiness<i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;" id="QUESTION1" >
                                                <p><img :src="`images/icon/Ans.png`">We are in Property and Real esate Business since 1998, we were officaly founded as a company in 2018 and we are owned and operated with an exceptional reputation for fair dealings and great service.</p>
                                            </div>
                                        </div>
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION2" aria-expanded="true" aria-controls="collapseOne"><img src="images/icon/Que.png"> What Serivces Do you offer<i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;" id="QUESTION2" >
                                                <p><img :src="`${$store.state.serverPath}images/icon/Ans.png`"> In our first Phase, we Deal with only Rental related to Properties and Realestate.
                                                Our Services include:
                                                <ol>
                                                <li>Online Rent Collection</li>
                                                <li>Property Mangement Dashboard</li>
                                                <li>Maintenance 24/7</li>
                                                <li>Tenant Screening</li>
                                                <li>Digital Marketing(Internet Marketing for Your Properties)</li>
                                                </ol>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION3" aria-expanded="true" aria-controls="collapseOne"><img src="images/icon/Que.png">Why should I choose your company<i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;"  id="QUESTION3" >
                                                <p><img :src="`${$store.state.serverPath}images/icon/Ans.png`"> We have Verified Properties for Rent for Tenants to choose from
                                                    We Communicate Timely and Accurate Information:
                                                    Leasing Services For Your Rental Property:
                                                    Aggressive Marketing of Your Rental Property
                                                    Prospective Tenant Screening
                                                    Preparation of Lease Contracts for Your Rental Property
                                                    Management Services For Your Rental Property:
                                                    Collection of Security Deposits and Monthly Rents
                                                    Move-In/Move-Out Inspection of Your Rental Property
                                                    Maintenance Services For Your Rental Property:
                                                    Response to all Tenant Requests
                                                    Recommendation of Improvements of Your Rental Property
                                                    </p>
                                            </div>
                                        </div>
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION4" aria-expanded="true" aria-controls="collapseOne"><img src="images/icon/Que.png">How much do your management services cost<i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;"  id="QUESTION4" >
                                                <p><img :src="`${$store.state.serverPath}images/icon/Ans.png`">  Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </div>
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION5" aria-expanded="true" aria-controls="collapseOne"><img src="images/icon/Que.png"> What type of properties do you manage <i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;"  id="QUESTION5" >
                                                <p><img :src="`${$store.state.serverPath}images/icon/Ans.png`">In our First Phase, making Account & Lising properties for rent are free. No hidden Charges included.</p>
                                            </div>
                                        </div>
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION6" aria-expanded="true" aria-controls="collapseOne"> <img src="images/icon/Que.png">How do you decide what questions to put in your FAQ <i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;" id="QUESTION6" >
                                                <p><img :src="`${$store.state.serverPath}images/icon/Ans.png`"> Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                                            </div>
                                        </div>
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION7" aria-expanded="true" aria-controls="collapseOne"> <img src="images/icon/Que.png">Have More Questions<i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;" id="QUESTION7" >
                                                <p><img :src="`${$store.state.serverPath}images/icon/Ans.png`">We'd be happy to answer any other questions you may have regarding working with EKO Property Management. To learn more, simply call our offices during business hours: +92--------</p>
                                            </div>
                                        </div>
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION8" aria-expanded="true" aria-controls="collapseOne"> <img src="images/icon/Que.png">How much can I rent my home for<i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;" id="QUESTION8" >
                                                <p><img :src="`${$store.state.serverPath}images/icon/Ans.png`"> We advise the Property Owners to Establish a Fair Market Value for Rent.</p>
                                            </div>
                                        </div>
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION9" aria-expanded="true" aria-controls="collapseOne"> <img src="images/icon/Que.png">What needs to be done to my rental property before it is ready to rent<i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;" id="QUESTION9" >
                                                <p><img :src="`${$store.state.serverPath}images/icon/Ans.png`">Add every Minor details of your Property. Make sure to include.
                                                <ol>
                                                <li>Quality Photos</li>
                                                <li>Detailed Listings</li>
                                                <li>Updated Appliances</li>
                                                <li> A Move-In Special Offer</li>
                                                <li>Strengths</li>
                                                </ol>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row border my-2">
                                            <div class="col-md-12 mx-auto py-3 bg-light" style="border-left:5px solid green">
                                                <h6 class="my-auto" data-toggle="collapse" data-target="#QUESTION10" aria-expanded="true" aria-controls="collapseOne"> <img src="images/icon/Que.png">Once I sign up with you, how soon can you start managing my property<i class="fa fa-question-circle"></i> </h6>
                                            </div>
                                            <div class="question-answer collapse  p-2" style="border-left:5px solid gray;" id="QUESTION10" >
                                                <p><img :src="`${$store.state.serverPath}images/icon/Ans.png`">Just as soon as the property analysis and management documents are completed. In most instances we will need to visit the home in person prior to beginning management services.</p>
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
 import Header from "../../components/user/Header.vue";
 import Footer from "../../components/user/Footer.vue";
import * as mainService from "../../services/main_service";

export default {
     name: "Help & Support",
     components: {
         Header,
         Footer
     },
     metaInfo() {
        return {
            title: "Help & Support",
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
     methods: {
        getFaq: async function(){
                 try {
                     const response = await mainService.getFaq();
                     this.faqs = response.data;
                 } catch (error) {
                     this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:500
                    });
                 }
             }
     },
 }
</script>
<style lang="css">
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;0,700;0,900;1,400;1,700&display=swap');
    .main-container{
    background-color:#38b16e ;
    background-image: linear-gradient(to right,#42B45D,#20AB94);
    width: 100%;
    height:200px;
}
.HowEkoWorks{
  margin-top:50px;
  font-family: 'Lato', sans-serif;
  margin-bottom:50px;
}
.howekoworkscontent h4{
  font-family: 'Lato', sans-serif;
}
.howekoworkscontent li {
  list-style-type: none;
  position: relative;
  padding-left: 10px;
}
.howekoworkscontent li:before {
  content: "\25BA \0020";
  font-size: 10px;
  position: absolute;
  top: 5px;
  left: -10px;
}
</style>
