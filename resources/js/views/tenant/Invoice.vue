<template>
    <main>
        <section class="invoice">
            <div class="container">
                <div class="invoiceform">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="part1">
                                <h1>INVOICE</h1>
                                <h5>Invoice No# 64564</h5>
                                <h5>Date:12-12-2020</h5>
                            </div>
                            <div class="bgpart1">
                            </div>
                        </div>
                         <div class="col-md-4">
                            <img src="/../images/main.png" class="d-block mx-auto mt-5" height="80px" >
                         </div>
                    </div>
                    <div class="details">
                        <div class="col-md-4 part2">
                            <h3 class="my-0">Invoice To: {{$store.state.profile.name}}</h3>
                            <p>Office No 19 Walayat plaza rwalpindi</p>
                        </div>
                    </div>
                    <div class="invoicetable col-md-12 mx-auto">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead class="thead">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>House For rent</td>
                                        <td>{{properties.title}}</td>
                                    </tr>
                                    <tr>
                                      <th scope="row">2</th>
                                        <!-- <td>Property Size</td> -->
                                        <td>Property Size</td>
                                        <td>{{properties.size}}  {{properties.unit}}</td>
                                     </tr>
                                     <tr>
                                        <th scope="row">3</th>
                                        <td>Total Rent</td>
                                        <!-- <td>Rs 50000</td> -->
                                        <td>Rs {{properties.rent_price}}</td>
                                     </tr>
                                     <tr>
                                        <th scope="row">4</th>
                                        <td>Security</td>
                                        <!-- <td>Rs 50000</td> -->
                                        <td>Rs {{properties.rent_price * 2}}</td>
                                     </tr>
                                     <tr>
                                        <th scope="row">5</th>
                                        <td>Company Commission</td>
                                        <!-- <td>Rs 0</td> -->
                                        <td>Rs 0</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                     <div class="subtotal">
                        <div class="row">
                             <div class="col-md-5">
                                <div class="conditions m-2">
                                    <h3 class="text-success font-weight-bold">Terms & Conditions</h3>
                                    <p>This invoice is computerized generated so this will be not considered actual invoice. 
                                        Actual invoice will be issued after confirmation Thanks!</p>
                                </div>
                            </div>
                            <div class="col-md-5 ml-auto">
                                <div class="part1sbtotal">
                                    <h3 class="float-right font-weight-bold">Total :{{properties.rent_price * 2 + + +properties.rent_price}} pkr</h3>
                                </div>
                                <div class="part2sbtotal">
                                </div>
                            </div>
                        </div>
                     </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import * as invoiceService from "../../services/invoice_service";
export default {
  name: "invoice",
  data() {
            return {
              query:"",
              cities: [],
              sectors:[],
              headers:[],
              city: 0,
              sector: 0,
            //   invoice: [],
            //   properties: {},
              populars:[],
              property:{
                profile: this.$store.state.profile,
                renter:'',
              },
              inovice:{},
              properties:{},
              total:{},
              security:{},
              invoice:[],
              protypes:[],
              moreExists: false,
              nextPage: 0,
              errors: {}
            };
        },
        beforeRouteEnter: async function(to, from, next) {
                try {
                const response = await invoiceService.getPropertyInvoice(to.params.id);
                if (!response) {
                    next('/404');
                }
                next(vm => {
                    vm.properties = response.data;
                });
                next();
                } catch (error) {
                next('/404');
                }
        },
        mounted() {
            // this.getProperty();
            // this.getPopular();
          },
        methods:{
            // getProperty:async function(){
            //     try {
            //     const response = await invoiceService.getProperty();
            //     this.invoice = response.data;
            //     } catch (error) {
            //     this.flashMessage.error({
            //             message: 'Some error occurred!',
            //             time:5000
            //             });
            //     }
            // },
            // favourite: async function (item) {

            //     if (!this.$store.state.isLoggedIn) {
            //         this.$router.push('/login');
            //         return;
            //     }

            //     try {
            //         const response = await MainService.favourite(item)
            //         this.properties.map(property => {
            //             if (property.id === item.id) {
            //                 property.favorited = true;
            //             }
            //         });
            //         this.flashMessage.success({
            //             message: response.data.message,
            //             time: 5000
            //         });
            //     } catch (error) {
            //         this.flashMessage.error({
            //             message: 'Some error occurred, Please try again!',
            //             time: 5000
            //         });
            //     }
            // },
            // unFavourite: async function (item) {
            //     if (!this.$store.state.isLoggedIn) {
            //         this.$router.push('/login');
            //         return;
            //     }

            //     try {
            //         const response = await MainService.unFavourite(item)
            //         this.properties.map(property => {
            //             if (property.id === item.id) {
            //                 property.favorited = false;
            //             }
            //         });
            //         this.flashMessage.success({
            //             message: response.data.message,
            //             time: 5000
            //         });
            //     } catch (error) {

            //         this.flashMessage.error({
            //             message: 'Some error occurred, Please try again!',
            //             time: 5000
            //         });
            //     }
            // },



        }
};

</script>
<style  scoped>

.body-main {
     background: #ffffff;
     border-bottom: 15px solid #1E1F23;
     border-top: 15px solid #1E1F23;
     margin-top: 30px;
     margin-bottom: 30px;
     padding: 40px 30px !important;
     position: relative;
     box-shadow: 0 1px 21px #808080;
     font-size: 10px
 }

 .main thead {
     background: #1E1F23;
     color: #fff
 }

 .img {
     height: 100px
 }

 h1 {
     text-align: center
 }
 @import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        .invoice{

        }
        .invoiceform{
            background:white;
            border: 1px solid gray;
        }
        .invoiceform h5{
            font-weight:bolder;
        }
        .invoiceform .part1{
            background-color: #38b16e;
            background-image: linear-gradient(to right,#42b45d,#20ab94);
            color:white;
            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);
            width:90%;
            height:151px;
            z-index:2;
            position:absolute;
            padding: 20px;
        }
        .invoiceform .bgpart1{
            background-color: black;
            background-image: linear-gradient(to right,black,#20ab94);
            color:white;
            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);
            width:100%;
            height:151px;
        }
        .invoiceform .part1 h1{
            font-family: 'Roboto', sans-serif;
            letter-spacing:0.5rem;
        }
        .logoimg{
            background-color: #2E86C1;
            background-image: linear-gradient(to left,#85C1E9 ,#2874A6);
            color: #fff;
            height: 200px;
            font-weight: bolder;
            border-top-left-radius: 12px;
        }
        .part2{
            margin-top: 10px;
        }
        .thead{
            background-color: #38b16e;
            background-image: linear-gradient(to right,#42b45d,#20ab94);
            color:white;
        }
        .part1sbtotal{
            background-color: #38b16e;
            background-image: linear-gradient(to right,#42b45d,#20ab94);
            color:white;
            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 100% 0%, 100% 100%,6% 3%);
            width:93%;
            height:107px;
            z-index:2;
            position:absolute;
        }
        .part2sbtotal{
            background-color: #0b0b0b;
            background-image: linear-gradient(to right,#164203,#20AB94);
            color: white;
            -webkit-clip-path: polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 100% 0%, 100% 100%);
            width: 100%;
            height: 119px;
        }
</style>
