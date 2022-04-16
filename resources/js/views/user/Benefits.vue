<template>
    <main>
        <Header />
        <section>
          <div class="main-container">
              <div class="breadcrumb-section container" style="padding-top:70px">
                      <ol class="breadcrumb">
                          <li><a href="index.html">Home</a></li>
                          <li>Benefits</li>
                      </ol>
            </div>
          </div>
       </section>
         <section>
        <div class="container">
            <div class="border benefit">
                <h3 class="text-center benefits font-weight-bold">Benefits</h3>
                <div class="p-2">
                    <p>According to research there were 76.38 millioninternet users in Pakistanin January2020. The number ofinternet users in Pakistanincreased by 11 million (+17%) between 2019 and2020and percentage is expected to increase by three folds
                        in the 2021.</p>
                    <p class="font-weight-bold text-success">Whether you are doing Rental Property business or are on a hunt for Dream House for Rent, if you not travelling withthe speed of Time, then it might take weeks or even Months for your desire to come true.</p>
                    <p>For Landlord/property owners, most of your customers expect to be able to book online these days. Streamlining the process for your customers can create more revenue and let you focus on other things – and it can be one of the best
                        things you do for your business.</p>
                    <p>If you are not using Online Rental Platform “Easy Kiraya online”, then <b class="text-success">You are certainly missing out lot of Potential Tenants who are present on their computer and mobile devices searching for your Property for Rent Ad Online </b></p>
                    <p>The professional (and likely personal) life of a real estate Landlords/ property owners is busy, and if the properties they manage are not located in the premises they live, the issue is compounded.</p>
                    <p>Thanks to the availability of property management software, however, managing multiple properties isn’t an impossible task. Software platforms offer users several benefits, including mobility,tighter security, and faster transactions.</p>
                    <p>Here are some of the benefits of using our OnlineRental Property Management Website. </p>
                    <h4 class="text-success">Advertise Your Property for Rent Online: </h4>
                    <p>Take advantage of our free advertising platform to reach new Tenants. It can help you drum up business, gain exposure, and draw traffic back to your Ad. Listing your property online would enable your future tenants to see the place
                        before they even contact you and to ask questions and set up appointments to see the property as well.</p>
                    <p>You can enjoy the following benefits:</p>
                    <ol>
                        <li>Advertisement of your vacant properties on social media runby EKO.</li>
                        <li>The ability to easily add photos and videos of properties</li>
                        <li>Easily customize outreach efforts</li>
                    </ol>
                    <h4 class="text-success">Grow your Circle with Verified Property Owners and Screened Tenants.</h4>
                    <p>A backgroundcheckis crucial fortenantsas well aslandlords,beforeentering any agreement.</p>
                    <p>Online tenant background checks are ideal because you don’t even have to see your tenant before you decide they’re a good fit. Hence Our rental management System provides ease of Mind to the Landlords/property-owners.</p>
                    <p>Likewise, as a Tenant before you choose a place to rent, our rental management System would allow you to find out what it’s like to rent deal with the landlord or property Owner.</p>
                    <h4 class="text-success">Easy Rent Collection</h4>
                    <p>Your tenants will have the convenience of paying in whatever way they want, be it credit card, bank transfer, or check, which makes things easier for them and will make them more likely to pay the rent on time.</p>
                    <h4 class="text-success">Easy Access to Records and Finances</h4>
                    <p>Instead of having a paper trail to keep track of things for your property management like rent payments, maintenance requests,and applications, you can have easy access to all of these things online</p>
                    <h4 class="text-success">Real-Time Transparency</h4>
                    <p>EKO Rental Property management website enhances the way you communicate with your tenants. It enables you to share information with them quickly and clearly through communicationtools both automated and manual.</p>
                    <h4 class="text-success">Track maintenance requests from tenants</h4>
                    <p>Rental property management Website helps landlords streamline maintenance requests and organize work orders. Landlords wouldbe able to keep track of their Properties and the status of Online Rent collection from one or many properties.</p>
                    <h4 class="text-success">Less Time Consuming</h4>
                    <p>Having our online property management software to manage yourrent collection, reminders, and records makes your property management business less time consuming. Hence we provide you with more time to focus on important things in life
                        and leaving your Real Estate issues to us.</p>
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
export default {
    name: "Benefits",
    components: {
        Header,
        Footer
  },
    metaInfo() {
        return {
            title: "benefits",
            meta: [
                { name: 'description', content:  'Epiloge is about connecting in your field of interest. Our vision is to help people share their knowledge, work, projects, papers and ideas and build their network through what they do rather where they live, study or work.'},
                // { property: 'og:title', content: "Epiloge - Build your network in your field of interest"},
                // { property: 'og:site_name', content: 'Epiloge'},
                // {property: 'og:type', content: 'website'},
                // {name: 'robots', content: 'index,follow'}
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
    height:300px;
}
.benefits {
        background-color:#f8f9fa;
        padding: 10px;
        color: green;
        font-family: 'Lato', sans-serif;
    }
    .benefit{
      margin-top: 30px;
      margin-bottom: 30px;
    }
    .benefit h1,h2,h3,h4{
      font-family: 'Lato', sans-serif;
    }
</style>
