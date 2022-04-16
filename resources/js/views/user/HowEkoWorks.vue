<template>
  <main>
   <Header />
    <section id="maincss">
            <div class="bannerimg-about">
                <img class="w-100"  :src="`${$store.state.serverPath}images/blog/blogcover.jpg`"   >
            </div>
   </section>
    <section id="main2css" class="clearfix about-us page">
                <div class="container">
                    <h2 class="title mt-3 text-center">How Eko Works</h2>
                    <div class="section about shadow mt-3">
                        <h4 class="text-success">Online Rental Property Management Portal</h4>
                        <i class="font-weight-italic">Start simplifying every aspect of your ‘Dream Property for Rent’ or ‘Rental Property Management’ experience today.</i>
                        <br>
                        <p>In Pakistan, being a tenant is hard, where there is a constant fear of losing roof overhead on one command of Landlord. The truth is that being a landlord is not easy either. In the minds of disgruntled tenants, the landlord is the guy who collects money every month, takes two weeks to fix a leaky faucet(tap) and hasn't painted the front of the building since the New Government.</p>
                        <br>
                        <h4 class="text-success">GET INTRODUCED TO EASY KIRAYA ONLINE</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <br>
                        <h4 class="text-success">EKO Team</h4>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <br>
                        <h4 class="text-success">Rules for Advertise on EKO</h4>
                        <h4>Direct Connection between Landlord and Tenant. No third party or Real Estate Agent Involved</h4>
                        <br><br>
                        <p>EKO admiration would make sure that tenants find their dream space for rent, both verified (rental property and Landlord) and treat their landlord with respect as well as landlords and property owners treat tenants justly, charge fair price, keep their properties up to code and quickly complete repairs.</p>
                        <h3 class="text-success">How EKO works</h3>
                        <p>Going EKO Means:</p>
                        <p><b> You can Market your Rentals: </b> Avoid failures by cleaning the space for Rent and setting the perfect Rent price.</p>
                          <p><b> Choose the right tenant: </b> You don’t have to second guess yourself.  We will Review applicant and choose the right tenant for you</p>
                          <p><b>Never Worry about Rent:</b> Collect payments directly online. </p>
                          <p><b>Stay Organized: </b>Track your properties on rent, communicate about maintenance requests and store important documents and images online.</p>
                        <h3>Steps to Follow: </h3>
                        <p>Tenants find the Ideal Property for rent</p>
                        <p>Landlords start earning from your rental Property</p>
                        <p>You are a Landlord or planning to become one in the Future.</p>
                        <p>You have rental properties, but it’s hard for you to manage them all and most of them are still vacant. </p>
                        <p>It’s hard to remember all the Property related laws especially concern with Landlord/tenant laws of Pakistan.</p>
                        <p>Its Time to upgrade your Old strategy and Be Digital.</p>
                        <p>Register yourself at <b> Easy Kiraya Online Website </b> *****( add pictures if possible)*****</p>
                        <p>Clean your property for Rent, check for any repairs, maintenance and wall painting requirements. </p>
                        <p>Take quality photos, update appliances, prepare detailed listings, include ‘ a move-in special offer’ and gather strengths.</p>
                        <h3 class="text-center">How Eko Work </h3>
                        <figure>
                        <a href="images/bg/ekowork1.jpg">
                          <img src="images/bg/ekowork1.jpg"   class="img-thumbnail" alt="workflow">
                          </a>
                          <figcaption class="text-center">Diagram of Eko WorkFlow.</figcaption>
                        </figure>
                        <p>With power of Digital media marketing and via strong social platform marketing campaign, the right tenants would get attracted to your rental property Ad.</p>
                        <p>Tenants are Looking online exactly what you have posted.</p>
                        <p>Prepare your New Property to rent out</p>
                        <p>Tenant interested in your Property would be required to Register and Login First</p>
                        <p>* First Come First serve Basis:  The first person to apply for the posted Property would be screened by EKO supervisors (We would make sure that tenant has the income and financial stability to pay the rent on time and that he has a solid rental history with no evictions, legal problems with landlords or history of missed payments)</p>
                        <p>Will make sure that property is property is presentable and clean.</p>
                        <p>The successful candidate would be invited to visit the place (property they have the desire to rent) of their interest and if landlord is available, would arrange possible one-to-one meeting.</p>
                        <p>If Landlord is a EkO Golden Member, We would provide the tenant with everything they need such as keys, emergency contacts and if applicable good manuals</p>
                        <p><b>Get ready to receive a continuous supply of Money ( online payment of rent available at EKO)</b></p>
                        <p><b>Sign landlord-tenant rental agreement.</b></p>
                        <p>We would be a as Good as a good landlord ( EKO Golden Member)</p>
                        <p>We’ll provide a safe, functional living space to tenants.</p>
                        <p>We’ll make sure that the property is up to local and federal housing code.</p>
                        <p>We'll make sure for the landlord to respond to a repair request within 24 hours and fix it within a reasonable time frame.</p>
                        <p><b>Easy Kiraya Online ensures</b></p>
                        <p><b>Happy Landlord and Satisfied Tenants</b></p>
                        <p><b>We Make Rent Easy For You</b></p>
                    </div>
                </div>
      </section>
   <Footer/>
  </main>
</template>
<script>
import Header from '../../components/user/Header.vue';
import Footer from '../../components/user/Footer.vue';
export default {
    name: "How eko works",
    components: {
        Header,
        Footer
  },
  metaInfo() {
        return {
            title: "How eko works",
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                { property: 'og:site_name', content: 'Epiloge'},
                {property: 'og:type', content: 'website'},
                {name: 'robots', content: 'index,follow'}
            ]
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
.howekoworkscontent{
  background: #F7F7F7;
}
</style>
