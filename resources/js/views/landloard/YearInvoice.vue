<template>
    <div>
        <section class="singleinvoice">
            <div class="jumbotron bg-white pt-1">
                <div class="row gutters-sm">
                    <div class="col-md-3 mb-3 ">
                        <div class="card">
                            <div class="card-body shadow">
                                <div class="">
                                    <img :src="`${$store.state.serverPath}storage/${properties.avatar}`" alt="Admin" class="profilecircleimage">
                                    <div class="mt-3">
                                        <h4 class="text-center">{{properties.name}}</h4>
                                        <p class="text-secondary mb-1 text-center">Role: Landlord</p>
                                        <p class="text-secondary mb-1 text-center">City: Islamabad</p>
                                        <form action="">
                                            <div class="form-group">
                                                <label for="month" class="smartinvoicedateslabel">Filter by Month</label>
                                                <select name="month" class="form-control btn btn-primary p-1">
                                                    <option value="january">January</option>
                                                    <option value="january">Febraury</option>
                                                    <option value="january">March</option>
                                                    <option value="january">April</option>
                                                    <option value="january">May</option>
                                                    <option value="january">June</option>
                                                    <option value="january">July</option>
                                                    <option value="january">August</option>
                                                    <option value="january">September</option>
                                                    <option value="january">October</option>
                                                    <option value="january">November</option>
                                                    <option value="january">December</option>
                                                </select>
                                            </div>
                                            <div class="form-group">
                                                <label for="year" class="smartinvoicedateslabel">Filter by Year</label>
                                                <select name="year" class="btn btn-primary p-1 form-control" >
                                                    <option value="2021">2021</option>
                                                </select>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-9">
                        <div class="card mb-3">
                           <section class="invoice card" id="invoice">
                                <div class="container">
                                    <div class="invoiceform">
                                        <div class="row">
                                            <div class="col-md-8">
                                                <div class="part1">
                                                    <h3>INVOICE</h3>
                                                    <h5>Invoice No# 64564</h5>
                                                    <h5>Date:12-12-2020</h5>
                                                </div>
                                                <div class="bgpart1">
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <img src="/../images/main.png" class="d-block mx-auto mt-1" height="80px" >
                                                <h3>Name:{{properties.name}}</h3>
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
                                                            <td>Due Date</td>
                                                            <td>{{properties.created_at}}</td>
                                                        </tr>
                                                         <tr>
                                                            <th scope="row">2</th>
                                                            <td>Paid Date</td>
                                                            <td>{{properties.paid_date}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">3</th>
                                                            <td>property title</td>
                                                            <td>{{properties.title}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">4</th>
                                                            <!-- <td>Property Size</td> -->
                                                            <td>Property Size</td>
                                                            <td>{{properties.size}}  {{properties.unit}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">5</th>
                                                            <td>Total Rent</td>
                                                            <!-- <td>Rs 50000</td> -->
                                                            <td>Rs {{properties.rent_price}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">6</th>
                                                            <td>Security</td>
                                                            <!-- <td>Rs 50000</td> -->
                                                            <td>Rs {{properties.security_price}}</td>
                                                        </tr>
                                                        <tr>
                                                            <th scope="row">7</th>
                                                            <td>Company Commission</td>
                                                            <!-- <td>Rs 0</td> -->
                                                            <td>Rs {{properties.company_commession}}</td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                        <div class="subtotal">
                                            <div class="row">
                                                <div class="col-md-5">
                                                    <div class="conditions m-2">
                                                        <h5 class="text-success font-weight-bold">Terms & Conditions</h5>
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
                         </div>
                         <button class="btn btn-danger btn-md d-block mx-auto" v-on:click="smartinvoice">Print</button>
                   </div>
              </div>

            </div>
        </section>
    </div>
</template>
<script>
import * as PropertiesService from "../../services/properties_service";
export default {
    data() {
        return {
            data:[],
            properties:[],

        }

    },
    beforeRouteEnter: async function(to, from, next) {
                try {
                const response = await PropertiesService.getInvoiceData(to.params.id);
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
        smartinvoice: function () {
                  var printContents = document.getElementById('invoice').innerHTML;
                    var originalContents = document.body.innerHTML;

                    document.body.innerHTML = printContents;

                    window.print();

                    document.body.innerHTML = originalContents;

                },
    },
}
</script>
<style  scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

</style>
