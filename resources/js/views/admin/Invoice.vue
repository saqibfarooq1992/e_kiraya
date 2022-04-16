<template>
    <main>
         <section class="completeinvoice" >
            <div class="container">
                <div class="invoiceform shadow" :style="image">
                    <div class="row">
                        <div class="col-md-9">
                            <div class="blockpart">
                                <div class="part1">
                                    <h1>INVOICE</h1>
                                    <h5>Invoice No# 64564</h5>
                                    <h5>Date:24-may-2020</h5>
                                </div>
                                <div class="bgpart1">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3">
                            <div class="clientdetails">
                                <img src="/../images/main.png" class="d-block mx-auto mt-5" height="80px" >
                                <h4 class="my-0">Invoice To: Adil Ghani</h4>
                                <p>Office No 19 Walayat plaza rwalpindi</p>
                            </div>
                        </div>
                    </div>
                    <div class="details">
                        <div class="col-md-4 part2">
                        </div>
                    </div>
                    <div class="invoicetable col-md-10 mx-auto">
                        <div class="table-responsive">
                            <table class="table table-bordered">
                                <thead class="thead">
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Description</th>
                                        <th scope="col">Total Amount</th>
                                    </tr>
                                </thead>
                                <tbody class="bg-white">
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Property Tittle</td>
                                        <td>{{properties.title}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Due Date</td>
                                        <td>{{properties.updated_at}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Paid Date</td>
                                        <td>{{properties.updated_at}}</td>
                                    </tr>
                                    <tr>
                                    <th scope="row">2</th>
                                        <td>Property Size</td>
                                        <td>{{properties.size}} {{properties.unit}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Total Rent</td>
                                        <td>Rs {{properties.rent_price}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">4</th>
                                        <td>Security</td>
                                        <td>Rs {{properties.rent_price*2}}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">5</th>
                                        <td>Company Commission</td>
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
                                    <h3>Thankyou for your bussiness</h3>
                                    <div class="accountinfo">
                                        <h5>Payment Info:</h5>
                                        <p class="p-0">Account #: 084058085</p>
                                        <p class="pt-0">A/C Name #: Adil Ghani</p>
                                        <p>Bank Details : Add your bank details</p>
                                    </div>
                                    <h5 class="termsconditions font-weight-bold">Terms & Conditions</h5>
                                    <p class="termscontent">This invoice is computerized generated so this will be not considered actual invoice.
                                        Actual invoice will be issued after confirmation Thanks!</p>
                                </div>
                            </div>
                            <div class="col-md-5 ml-auto">
                                <div class="d-flex flex-row justify-content-center">
                                    <h5 class="d-block mx-auto">Sub Total :</h5>
                                    <h5 class="d-block mx-auto">12000 pkr</h5>
                                </div>
                                <div class="d-flex flex-row justify-content-center">
                                    <h5 class="d-block mx-auto">Tax :</h5>
                                    <h5 class="d-block mx-auto">0.0 %</h5>
                                </div>
                                <div class="partsbtotal">
                                    <h3 class="font-weight-bold">Total :10,000 pkr</h3>
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
                image: {backgroundImage: "url(../images/page1.png)"},
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
                console.log(response);
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

          },
        methods:{

        }
};

</script>
<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
        .table td{
            padding: 8px !important;
        }
       .completeinvoice .invoiceform h5{
            font-weight:bolder;
        }
      .completeinvoice  .invoice .invoiceform .blockpart .part1 h1{
          font-size: 50px;
          letter-spacing: 0.90rem;
          font-weight: 400;
        }
      .completeinvoice  .invoiceform .part1{
          background-color: #319C4B;
          background-image: linear-gradient(to right,#319C4B,#319C4B);
            color:white;
            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);
            width:75%;
            height:200px;
            z-index:2;
            position:absolute;
            padding: 20px;
        }
       .completeinvoice .invoiceform .blockpart{
          background-color: #197EA5;
          background-image: linear-gradient(to right,#20BFFB,#1D869E);
          margin-top: 50px;
          -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 78% 0%, 100% 100%, 0% 100%);
            width: 100%;
        }
       .completeinvoice .invoiceform .bgpart1{
          background-color: #218CB5;
          background-image: linear-gradient(to right,#28A0CE,#0B596B);
            color:white;
            -webkit-clip-path:polygon(0 0, 100% 35%, 100% 65%, 0% 100%);
            clip-path: polygon(0 0, 73% 0%, 100% 100%, 0% 100%);
            width:85%;
            height: 200px;
        }
      .completeinvoice  .invoiceform .part1 h1{
            font-family: 'Roboto', sans-serif;
            letter-spacing:0.5rem;
        }
      .completeinvoice  .invoiceform .clientdetails{
          margin-top: 58px;
        }
         .completeinvoice  .invoiceform .clientdetails h4{
          font-size: 18px;
        }
      .completeinvoice  .part2{
            margin-top: 10px;
        }
      .completeinvoice  .thead{
            background-color: #319C4B;
            background-image: linear-gradient(to right,#319C4B,#319C4B);
            color:white;
        }
         .partsbtotal{
          border-bottom-left-radius: 100px;
          padding:40px;
          border-top-left-radius: 100px;
           background-color: #319C4B;
            background-image: linear-gradient(to right,#319C4B,#319C4B);
            color:white;
        }
    .completeinvoice #inputdesign {
        width: 100%;
        height: 120px;
        background: white;
        position: relative;
        -moz-border-radius: 20px;
        -webkit-border-radius: 10px;
        border-radius: 10px;
        padding: 5px;
        box-shadow: 3px 5px 5px 5px #888888;
        border-bottom-left-radius: 30px;
        border-top-right-radius: 39px;
        }
   .completeinvoice #talkbubble {
      width: 200px;
      height:auto;
      background: white;
      position: relative;
      -moz-border-radius: 20px;
      -webkit-border-radius: 10px;
      border-radius: 10px;
      padding: 5px;
      box-shadow: 3px 5px 5px 5px #888888;
      margin-bottom: 20px;
      border-bottom-left-radius: 30px;
      border-top-right-radius: 39px;
    }
   .completeinvoice #talkbubble:after {
      content: "";
      position: absolute;
      left: 100%;
      top: 35px;
      width: 0;
      height: 0;
      border-top: 13px solid transparent;
      border-left: 26px solid white;
      border-right-width: 20px solid transparent;
      border-bottom: 13px solid transparent;
    }
   .completeinvoice .subtotal .accountinfo p{
      color: white;
     margin-bottom: 0px;
     font-size: 12px;
    }
   .completeinvoice .conditions h3{
      color:white;
    }
   .completeinvoice .subtotal .conditions .accountinfo h5{
      color: #319C4B;
    }
   .completeinvoice .subtotal .conditions .termsconditions{
      color: #319C4B;
    }
   .completeinvoice .subtotal .conditions  .termscontent{
      color: white;
      font-size: 12px;
    }
</style>
