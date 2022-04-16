<template>
    <main>
        <Header />
            <section class="banner" style="height: 200px;">
                <div class="banner-img container">
                    <img src="images/bg/2.jpg " style="height: 100px;" alt="">
                </div>

            </section>
            <section class="map bg-white">
                <div class="container">
                    <h3 class="font-weight-bold my-4 bg-light p-3 border">Venue & alongside</h3>
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active px-5" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Map</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link px-5" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Commute</a>
                        </li>
                        </ul>
                        <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d212801.7186188292!2d72.903384671058!3d33.55267862038551!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df9519d9ace01d%3A0xfbae4ec31ef47d35!2sRawalpindi%2C%20Islamabad%20Capital%20Territory%2046000!5e0!3m2!1sen!2s!4v1595677398756!5m2!1sen!2s" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>

                        </div>
                        <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="schools">
                                        <div class="school-img d-flex justify-content-center">
                                            <img src="images/bg/school.png" class="img-fluid w-100"/>
                                        </div>
                                        <div class="schoolcontent">
                                            <h5 class="text-center">Schools <i class="fa fa-chevron-right ml-2" style="font-size: 14px;"></i></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="hospital">
                                        <div class="hospital-img d-flex justify-content-center">
                                            <img src="images/bg/hospital.png" class="img-fluid w-100"/>
                                        </div>
                                        <div class="hospitalcontent">
                                            <h5 class="text-center">Hospitals<i class="fa fa-chevron-right ml-2" style="font-size: 14px;"></i></h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="restaurant">
                                        <div class="restaurant-img d-flex justify-content-center">
                                            <img src="images/bg/restaurant.png" class="img-fluid w-100x"/>
                                        </div>
                                        <div class="restaurantcontent">
                                            <h5 class="text-center">Restaurants<i class="fa fa-chevron-right ml-2" style="font-size: 14px;"></i></h5>
                                        </div>
                                        </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="park">
                                        <div class="park-img d-flex justify-content-center">
                                            <img src="images/bg/park.png"/>
                                        </div>
                                        <div class="parkcontent">
                                            <h5 class="text-center">Park<i class="fa fa-chevron-right ml-2" style="font-size: 14px;"></i></h5>
                                        </div>
                                        </div>
                                </div>
                                </div>
                        </div>
                        <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">...</div>
                        </div>
                </div>
            </section>
        <Footer />
    </main>
</template>
<script>
import Header from "../../components/user/Header.vue";
import Footer from "../../components/user/Footer.vue";
export default {
  name: "Map",
  components: {
    Header,
    Footer
  },
  data() {
            return {

            };
        },
        mounted() {

          },
        methods:{

        }
};


</script>
