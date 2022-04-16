<template>
    <main>
    <Header/>
    <section class="mapbanner">
        <div class="mapbanner-img">
            <img src="images/backgroundmap.jpg" class="w-100" alt="">
        </div>
        <div class="mapbanner-content">
            <div>
                <h3 class="my-3">Find approved maps of societies and projects in Twin Cities.</h3>
                <div class="mapsearchsection">
                    <form>
                        <div class="row mx-auto">
                            <div class="col-md-3">
                                <label for="city" class="float-left">Select City</label>
                                <select name="" class="mapinput">
                                    <option value="">Islamabad</option>
                                    <option value="">Rawalpindi</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="location" class="float-left">Location</label>
                                    <input type="text" class="mapinput" v-model="query" placeholder="Search Property (e.g: House for rent )" id="searchborder">
                                </div>
                            </div>
                            <div class="col-md-2 mt-2">
                                <label for=""></label>
                                <button to="#" class="btn btn-success w-100" v-scroll-to="'#searchresult'">Find</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <section class="mapcontent">
        <div class="container">
            <h3 class="text-center my-3">View Socities map of Twin Cities</h3>
            <div class="container my-4">
                <h4 class="text-success">Islamabad Areas</h4>
                 <div class="row">
                    <div class="col-md-3">
                      <div class="card mb-2">
                          <img class="card-img-top" src="images/map-area/map.jpg" alt="Card image cap">
                          <div class="card-body">
                             <p class="text-center text-muted">Islamabad</p>
                          </div>
                      </div>
                   </div>
​
                    <div class="col-md-3 clearfix d-none d-md-block">
                      <div class="card mb-2">
                          <img class="card-img-top" src="images/map-area/map.jpg" alt="Card image cap">
                          <div class="card-body">
                             <p class="text-center text-muted">Islamabad</p>
                          </div>
                       </div>
                   </div>
​
                     <div class="col-md-3 clearfix d-none d-md-block">
                         <div class="card mb-2">
                            <img class="card-img-top" src="images/map-area/map.jpg" alt="Card image cap">
                            <div class="card-body">
                               <p class="text-center text-muted">Islamabad</p>
                            </div>
                        </div>
                    </div>
                     <div class="col-md-3 clearfix d-none d-md-block">
                         <div class="card mb-2">
                           <img class="card-img-top" src="images/map-area/map.jpg" alt="Card image cap">
                           <div class="card-body">
                              <p class="text-center text-muted">Islamabad</p>
                           </div>
                         </div>
                     </div>
                  </div>
                <h4 class="text-success">Rawalpindi Areas</h4>
                <div class="row">
                    <div class="col-md-3">
                      <div class="card mb-2">
                          <img class="card-img-top" src="images/map-area/map.jpg" alt="Card image cap">
                          <div class="card-body">
                             <p class="text-center text-muted">Sattelite Town</p>
                          </div>
                      </div>
                   </div>
​
                    <div class="col-md-3 clearfix d-none d-md-block">
                      <div class="card mb-2">
                          <img class="card-img-top" src="images/map-area/map.jpg" alt="Card image cap">
                          <div class="card-body">
                             <p class="text-center text-muted">Bahria Town</p>
                          </div>
                       </div>
                   </div>
​
                     <div class="col-md-3 clearfix d-none d-md-block">
                         <div class="card mb-2">
                            <img class="card-img-top" src="images/map-area/map.jpg" alt="Card image cap">
                            <div class="card-body">
                               <p class="text-center text-muted">Rawalpindi</p>
                            </div>
                        </div>
                    </div>
                     <div class="col-md-3 clearfix d-none d-md-block">
                         <div class="card mb-2">
                           <img class="card-img-top" src="images/map-area/map.jpg" alt="Card image cap">
                           <div class="card-body">
                              <p class="text-center text-muted">Rawalpindi</p>
                           </div>
                         </div>
                     </div>
                </div>
​           </div>
        </div>
         <section class="guide">
        <div class="container">
            <div class="border">
                <nav class="border">
                    <div class="nav nav-menu nav-fill bg-light" id="nav-tab" role="tablist">
                        <h4 class="nav-item nav-link active menu text-success" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Easy Kiraya Online</h4>
                    </div>
                </nav>
                <div class="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <div class="p-1">
                            <h3 class="text-center">About EKo</h3>
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
                </div>
            </div>
        </div>
        </section>
    </section>
    <Footer/>    
    </main>
</template>
<script>
import Header from '../../components/user/Header.vue';
import Footer from '../../components/user/Footer.vue';
export default {
    name:"areamap",
      components: {
        Header,
        Footer
  }
}
</script>
<style  scoped>
.mapbanner {
            position: relative;
            text-align: center;
            color: white;
        }
        
        .mapbanner-img img {
            height: 500px;
            width: 100%;
        }
        
        .mapbanner-content {
            position: absolute;
            top: 25%;
            width: 60%;
            left: 20%;
        }
        
        .mapsearchsection {
            background-color: #4A4A4A;
            padding: 3px;
        }
        
        .mapinput {
            width: 100%;
            padding: 8px;
        }
         .mapinput:focus {
            border: 3px solid #555;
        }
@media only screen and (max-width: 600px){
      .mapbanner-content {
            position: absolute;
            top: 15%;
            width: 60%;
            left: 20%;
        }
}
@media only screen and (min-width: 601px) and (max-width:990px){
      .mapbanner-content {
            position: absolute;
            top: 15%;
            width: 80%;
            left: 10%;
        }
}
</style>