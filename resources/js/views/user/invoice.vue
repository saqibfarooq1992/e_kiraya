<template>
    <main>
        <Header />
        <section id="maincss"></section>
        <section class="invoiceheader">
            <div class="container">
                <div class="breadcrumb-section">
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                         <li><a href="index.html">Ads Details</a></li>
                        <li>Invoice</li>
                    </ol>
                </div>
            </div>
             <section class="invoice" style="margin-top:50px;margin-bottom:50px">
                <div class="container">
                    <h3 class="text-center text-white">Property Reservation Form & Invoice</h3>
                    <p class="text-center text-white">If this Property Suits You Kindly Fill Out the reservation form in order to reserve this property.</p>
                    <div class="row mt-4">
                        <div class="col-md-4 mt-4 mx-auto" id="invoiceform">
                            <div class=" border shadow">
                                <h5 class="text-center bg-success py-3 text-white">Property Reservation Form</h5>
                                    <form  v-on:submit.prevent="updateReservedProperty()" class="p-3">
                                        <fieldset>
                                        <div class="form-group">
                                            <div class=" inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon">
                                                        <i class="glyphicon glyphicon-user">
                                                        </i>
                                                    </span>
                                                        <input v-model="reservation.full_name"  name="fullName"  placeholder="Full Name" class="form-control" required="true"  type="text">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class=" inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon">
                                                        <i class="glyphicon glyphicon-user">
                                                        </i>
                                                    </span>
                                                    <input-mask
                                                        mask="99999-9999999-9" v-model="reservation.cnic" maskChar="" name="Cnic" placeholder="Cnic" class="form-control" required="true"  type="text">
                                                    </input-mask>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class=" inputGroupContainer">
                                                <div class="input-group">
                                                    <span class="input-group-addon">
                                                        <i class="glyphicon glyphicon-home">
                                                        </i>
                                                    </span>
                                                            <input v-model="reservation.current_address"  name="addressLine1" placeholder="Current Address" class="form-control" required="true"  type="text">
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <div class="inputGroupContainer">
                                            <div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-envelope"></i></span><input v-model="reservation.permenant_address" name="addressLine2" placeholder="Permenant Address" class="form-control" required="true"  type="text"></div>
                                            </div>
                                        </div>
                                        <div class="form-group wrapper">
                                                <select required class="form-control" v-model="reservation.status" >
                                                    <option value="" disabled selected hidden class="w-100"> Status</option>
                                                    <option value="bachelor">Bachelor</option>
                                                    <option value="family">Family</option>
                                                </select>
                                        </div>
                                        <div class="form-group">
                                            <div class=" inputGroupContainer">
                                            <div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span><input v-model="reservation.domicile" name="Domicile" placeholder="Domicile " class="form-control" required="true"  type="text"></div>
                                            </div>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend ">
                                                <span class="input-group-text" id="basic-addon1"><img src="images/bg/pakflag.png"></span>
                                            </div>
                                            <input-mask v-model="reservation.current_owner_phone" type="text" class="form-control" placeholder="Current Owner Phone No"  mask="9999-9999999" maskChar="" aria-label="Phone" aria-describedby="basic-addon1"></input-mask>
                                        </div>
                                        <div class="input-group mb-3">
                                            <div class="input-group-prepend ">
                                                <span class="input-group-text" id="basic-addon1"><img src="images/bg/pakflag.png"></span>
                                            </div>
                                            <input-mask v-model="reservation.phone" type="text" class="form-control"
                                             mask="9999-9999999" maskChar="" placeholder="Phone No" aria-label="Phone"   aria-describedby="basic-addon1"></input-mask>
                                        </div>
                                    </fieldset>
                                        <button type="submit"  class="btn btn-info" >Reserved Property</button>
                                    </form>
                            </div>
                        </div>
                        <div class="col-md-8 mt-4" id="invoice">
                            <div class="border bg-white p-4">
                                <div class="row  justify-content-between">
                                    <div class="col-md-4">
                                        <div class="invoicelogo">
                                            <img src="images/logo2.png" width="100px" alt="">
                                            <h4>E Karaya Online</h4>
                                            <p>Walayat Plaza Rehmanabad<br>Rawalpindi,Punjab</p>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="invoicedetail">
                                            <h4>Invoice No#</h4>
                                            <p>INV-54642</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4 justify-content-between">
                                    <div class="col-md-4">
                                        <h6 class="font-weight-bold">Bill To</h6>
                                        <p>{{$store.state.profile.name}}</p>
                                        <p>{{$store.state.profile.email}}</p>
                                        <p>{{$store.state.profile.phone}}</p>
                                    </div>
                                    <div class="col-md-4">
                                        <p>Invoice Date:03-12-2020</p>
                                        <p>Terms: Due On Reciept</p>
                                        <p>Due Date : 10/05/2019</p>
                                    </div>
                                </div>
                                <div class="table table-responsive mt-3">
                                    <table class="table table-striped ">
                                        <thead>
                                            <th>Description</th>
                                            <th>Type</th>
                                            <th>Amount</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Property Tittle</td>
                                                <td colspan="2">{{properties.title}}</td>
                                            </tr>
                                            <tr>
                                                <td>Property Size</td>
                                                <td colspan="2">{{properties.size}} {{properties.unit}}</td>
                                            </tr>
                                            <tr>
                                                <td>Total Rent</td>
                                                <td></td>
                                                <td>Rs.{{properties.rent_price}}</td>
                                            </tr>
                                            <!-- <tr>
                                                <td>Paid Rent Price</td>
                                                <td></td>
                                                <td>Rs.8000</td>
                                            </tr> -->
                                            <tr>
                                                <td colspan="2"  class="font-weight-bold">Security</td>
                                                <td class="font-weight-bold">Rs. {{properties.rent_price * 1}}</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="font-weight-bold">Company Charges</td>
                                                <td class="font-weight-bold">Rs. 0</td>
                                            </tr>
                                            <tr>
                                                <td colspan="2" class="font-weight-bolder text-danger">TOTAL AMOUNT</td>
                                                <td class="font-weight-bolder text-danger">Rs.{{properties.rent_price}}</td>
                                            </tr>
                                             <tr>
                                                <td colspan="2" class="font-weight-bolder text-danger">Grand TOTAL</td>
                                                <td class="font-weight-bolder text-danger">Rs.{{properties.rent_price * 2}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
           </section>
        </section>
       <Footer />
    </main>
</template>
<script>
  import Header from '../../components/user/Header.vue';
  import Footer from '../../components/user/Footer.vue';
  import * as MainService from '../../services/main_service';
  export default {
    name: "Welcome",
    components: {
        Header,
        Footer
  },
  data() {
      return {
          properties:[],
         reservation:{
              property_id:'',
              full_name:'' ,
              cnic:'',
              current_address: '',
              permenant_address: '',
              status: '',
              domicile:'',
              current_owner_phone: '',
              phone: '',
          },
      }
  },
    beforeRouteEnter: async function(to, from, next) {
                try {
                const response = await MainService.getPropertyDetail(to.params.slug);
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
    methods: {
        updateReservedProperty: async function()
        {
            if (!this.$store.state.isLoggedIn)
            {
                this.$router.push('/login');
                return;
            }
             try {
                 this.reservation.property_id = this.properties.id;
                    const response = await MainService.updateReservedProperty(this.reservation)
                    this.flashMessage.success({
                        message: response.data.message,
                        time: 5000
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: 'Some error occurred, Please try again!',
                        time: 5000
                    });
                }
        }
        // reservedProperty: async function () {

        //         if (!this.$store.state.isLoggedIn) {
        //             this.$router.push('/login');
        //             return;
        //         }
        //         try {
        //             const response = await MainService.reservedProperty(this.reservation)
        //             // this.properties.map(properties => {
        //             //     if (properties.id === item.id) {
        //             //         properties.favorited = true;
        //             //     }
        //             // });
        //             this.flashMessage.success({
        //                 message: response.data.message,
        //                 time: 5000
        //             });
        //         } catch (error) {
        //             this.flashMessage.error({
        //                 message: 'Some error occurred, Please try again!',
        //                 time: 5000
        //             });
        //         }
        // },
    },
}
</script>
<style>
p{
  margin-bottom:0rem;
  margin-top:0rem;
}
.invoiceheader{
    top: 50px;
    position:relative;
   margin-bottom: 20px;
}
#invoiceform{
    padding: 20px;
}
#invoice{
    padding: 20px;
}
@media only screen and (max-width: 660px){
    #invoiceform{
    padding: 0px;
}
#invoice{
    padding: 0px;
}
.invoiceheader{
    margin-top: 50px;
}
}
</style>
