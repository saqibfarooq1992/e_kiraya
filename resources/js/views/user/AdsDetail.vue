<template>
    <div>
        <Header />
        <div>
            <div class="container-fluid adsclick">
            <div class="row">
                <div class="col-md-9 px-0">
                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" height="420px" src="images/bg/Ghar.jpg" alt="First slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" height="420px" src="images/bg/homead1.jpg" alt="Second slide">
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" height="420px" src="images/bg/homead2.jpg" alt="Third slide">
                        </div>
                        </div>
                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
                <div class="col-md-3 shadow bg-light">
                    <h5 class="text-center p-2">Request Details</h5>
                    <hr>
                    <form >
                        <div class="form-group m-0" >
                            <Label for="username" class="small">Name:</Label>
                            <input type="text" class="form-control">
                        </div>
                        <div class="form-group m-0">
                            <Label for="username" class="small">Email:</Label>
                            <input type="email" class="form-control">
                        </div>
                        <div class="form-group mt-0">
                            <Label for="username" class="small">Message</Label>
                        <textarea  class="form-control" id="" cols="30" rows="3"></textarea>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-6">
                                    <a href="" class="btn btn-warning form-control w-100"> Call</a>
                                </div>
                                <div class="col-md-6">
                                    <a href="" class="btn btn-info form-control w-100">Email</a>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            </div>
        </div>
        <table class="table mt-4">
            <tr>
            <td colspan="3"><h5 class="font-weight-bold "><i class="fa fa-money"></i> PRICE:24k TO 30k pkr.</h5></td>
            <td><h4><i fa fa-market></i> Marketed By:e Karaya Online</h4></td>
            </tr>
        </table>
        <section class="OVERVIEW">
            <div class="container">
                <div class="overview border bg-light pb-3">
                    <h3 class="p-1"><i class="fa fa-list-alt"></i> Overview</h3>
                    <div class="bg-white">
                        <h6 class="font-weight-bold p-3">Details of Project</h6>
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                <th scope="col">Location <i class="fa fa-map-marker"></i> </th>
                                <th scope="col">Type <i class="fa fa-tasks"></i></th>
                                <th scope="col">Rent <i class="fa fa-money"></i></th>
                                <th scope="col">Landlord <i class="fa fa-user"></i></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th>DHA PHASE 3</th>
                                <td>Residentials Flats</td>
                                <td>20K to 24K</td>
                                <td>M Hussian</td>
                                </tr>
                            </tbody>
                        </table>
                        <p class="pl-1">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat earum sequi veritatis corporis voluptatum itaque cum ullam ipsa commodi, in porro deleniti quos? Nulla accusantium commodi necessitatibus aliquid magni laboriosam!</p>
                        <p class="pl-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae aut laudantium consectetur hic repellendus voluptates cum blanditiis natus dolorem quis optio fugiat ut, labore deleniti odio impedit dolor ad iusto!</p>
                        <h5 class="font-weight-bold mx-2">Area Feature</h5>
                            <li class="ml-2">Near to Metro Station.</li>
                            <li class="ml-2">Electricity Backup with Generator.</li>
                            <li class="ml-2">Near to Park and Grocery Shop.</li>
                            <li class="ml-2">Gated Community. </li>
                            <li class="ml-2">Filter Water Available</li>
                    </div>
                </div>
                <div class="overviewmobile">
                <h3 class="p-1"><i class="fa fa-list-alt"></i> Overview</h3>
                <h6 class="font-weight-bold">Details of Project</h6>
                <div class="row">
                    <div class="col-md-4">
                        <p><i class="fa fa-map-marker pr-2"></i>Location:   Islamabad</p>
                        <p><i class="fa fa-tasks pr-2">Type:   Apartments</i></p>
                        <p><i class="fa fa-money pr-2">Type:   Apartments</i></p>
                        <p><i class="fa fa-user pr-2">Type:   Apartments</i></p>
                    </div>
                    <div class="col-md-4">

                    </div>
                    <div class="col-md-4">

                    </div>
                </div>
                </div>
            <a href=""><img class="d-block mx-auto mt-3" height="100px" width="80%" :src="`${$store.state.serverPath}/images/bg/bannersample.jpg`" alt="banner-img"></a>
                <div class="projectdetails border mt-5">
                    <h5 class="font-weight-bold border p-2"><i class="fa fa-eye"></i>Highlights</h5>
                    <div class="projectdetailscontent bg-white">
                        <table class="table table-striped">
                        <thead>
                            <tr>
                            <th colspan="4"><i class="fa fa-area-chart"></i> Area</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><i class="fa fa-building-o"></i> Area:675 sq.Ft</td>
                            <td><i class="fa fa-money"></i> Price:20k pkr</td>
                            <td></td>
                            <td></td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                            <th colspan="4"><i class="fa fa-industry"></i>Property Features</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><i class="fa fa-bath"></i>Sewerage</td>
                            <td><i class="fa fa-lightbulb-o"></i>Electricity</td>
                            <td><i class="fa fa-fuel-pump"></i>Gas</td>
                            <td><i class="fa fa-tint"></i>Water Supply</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                            <th colspan="4"><i class="fa fa-industry"></i>Intenal Architect</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><i class="fa fa-bed"></i>beds:3</td>
                            <td><i class="fa fa-cutlery"></i>Kitchens:1</td>
                            <td><i class="fa fa-shower"></i>bathrooms:2</td>
                            <td><i class="fa fa-home"></i>Floor:1</td>
                            </tr>
                        </tbody>
                        </table>
                    </div>
                </div>
                <div class="projectdetailsmobile border mt-4">
                <div class="row">
                    <div class="col-md-12">
                    <h5 class="font-weight-bold p-2"><i class="fa fa-eye"></i>Highlights</h5>
                    </div>
                </div>
                <div class="row bg-white">
                    <div class="col-md-12">
                        <p><i class="fa fa-building-o"></i> Area::675 sq.Ft</p>
                        <p><i class="fa fa-money"></i> Price:20k pkr</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                    <h5 class="font-weight-bold  p-2"><i class="fa fa-industry"></i>Property Features</h5>
                    </div>
                </div>
                <div class="row bg-white">
                    <div class="col-md-12">
                    <p><i class="fa fa-bath"></i>Sewerage</p>
                    <p><i class="fa fa-lightbulb-o"></i>Electricity</p>
                    <p><i class="fa fa-fuel-pump"></i>Gas</p>
                    <p><i class="fa fa-tint"></i>Water Supply</p>
                    </div>
                </div>
                <div class="row">
                <div class="col-md-12">
                    <h5 class="font-weight-bold p-2"><i class="fa fa-industry"></i>Intenal Architect</h5>
                </div>
                </div>
                <div class="row bg-white">
                <div class="col-md-12">
                    <p><i class="fa fa-bed"></i>beds:3</p>
                    <p><i class="fa fa-cutlery"></i>Kitchens:1</p>
                    <p><i class="fa fa-shower"></i>bathrooms:2</p>
                    <p><i class="fa fa-home"></i>Floor:1</p>
                </div>
            </div>
                </div>
            </div>
        </section>
        <Footer />
    </div>
</template>
<script>
import Header from "../../components/user/Header.vue";
import Footer from "../../components/user/Footer.vue";
export default {
    name: 'AdsDetail',
    components: {
    Header,
    Footer
  },
  metaInfo() {
        return {
            title: "welcome",
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
<style scoped>
.carousel-control-prev, .carousel-control-next {
    position: absolute;
    top: 50%;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 5%;
    margin: 20px;
    color: #fff;
    text-align: center;
    opacity: 0.5;
    transition: opacity 0.15s ease;
}
.adsclick{
    margin-top: 93px;
}
 @media only screen and (max-width: 600px) {
  .projectdetails{
    display: none;
  }
  .projectdetailsmobile i{
    padding-right: 5px;
  }
  .overview{
    display: none;
  }
   }
  @media only screen and (min-width: 601px) {
  .projectdetailsmobile{
    display: none;
  }
  .overviewmobile{
    display: none;
  }
}
</style>




