<template>
   <div>
       <section class="form-estamp">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12  mx-auto">
                        <h6 class="text-info mx-0 p-2 shadow">LEASE TERMINATION NOTICE</h6>
                         <form class="p-2" v-on:submit.prevent="createNotification">
                             <div class="row">
                                 <div class="col-md-6">
                                    <div class="form-group">
                                         <select class="form-control" v-model="notifyData.name">
                                            <option value="">Select your name</option>
                                            <option v-for="(user , index) in users" :key="index"  v-bind:value="user.id">{{user.name}}</option>
                                        </select>
                                    </div>
                                 </div>
                                 <div class="col-md-6">
                                    <div class="form-group">
                                          <select class="form-control" v-model="notifyData.property">
                                            <option value="">Property type</option>
                                            <option v-for="(protype , index) in protypes" :key="index"  v-bind:value="protype.id">{{protype.name}}</option>
                                        </select>
                                    </div>
                                 </div>
                             </div>
                             <div class="row">
                                <div class="col-md-6">
                                   <div class="form-group">
                                       <input type="text" class="form-control" placeholder="CNIC" required=""  v-model="notifyData.cnic">
                                   </div>
                                </div>
                                <div class="col-md-6">
                                   <div class="form-group">
                                       <div class="input-group mb-3">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text" id="basic-addon1"><img src="images/bg/pakflag.png"></span>
                                        </div>
                                        <input type="text" class="form-control"  placeholder="MOBILE NUMBER"  maxlength = "12" v-model="notifyData.phone">
                                      </div>
                                   </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                   <div class="form-group">
                                        <input type="datetime-local" class="form-control" v-model="notifyData.s_date">
                                   </div>
                                </div>
                                <div class="col-md-6">
                                   <div class="form-group">
                                        <input type="datetime-local" class="form-control" v-model="notifyData.e_date">
                                   </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="resaonoftermination">REASON OF TERMINATION</label>
                                <textarea class="form-control" placeholder="WRITE THE REASON HERE...." cols="20" rows="5" v-model="notifyData.reason"></textarea>
                            </div>
                            <div class="d-flex justify-content-center">
                            <button type="submit" class="btn btn-outline-success">Notify</button>
                            </div>
                         </form>
                    </div>
                </div>
            </div>
        </section>
   </div>
</template>
<script>
import * as LeaseTerminationService from "../../services/lease_termination_service";

export default {
  data() {
    return {
        users:[],
        protypes:[],
            notifyData:{
                name:"",
                property:"",
                cnic:"",
                phone:"",
                s_date:"",
                e_date:"",
                reason:"",
            }
    };
  },
  mounted() {
    this.getUserName();
    this.getPropertiesType();
  },
  methods: {
    getUserName:async function(){
            try {
                const response = await LeaseTerminationService.getUserName()
                this.users = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: "Some error occured !",
                    time: 500,
                    });
            }
    },
    getPropertiesType:async function(){
            try {
                const response = await LeaseTerminationService.getPropertiesType()
                this.protypes = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: "Some error occured !",
                    time: 500,
                    });
            }
    },
    createNotification: async function () {
            try {
                const response = await LeaseTerminationService.createNotification(this.notifyData);
                // this.properties.unshift(response.data);
                this.flashMessage.success({
                message: "Property Added Successfuly!",
                time: 5000,
                });
                this.notifyData.name = "";
                this.notifyData.property = "";
                this.notifyData.cinc = "";
                this.notifyData.phone = "";
                this.notifyData.city = "";
                this.notifyData.s_date = "";
                this.notifyData.e_date = "";
                this.notifyData.reason = "";

            } catch (error) {
                console.log(error + '');
                switch (error.response.status) {
                case 422:
                    this.errors = error.response.data.errors;
                    break;
                default:
                    this.flashMessage.error({
                    message: "Some error occured !",
                    time: 500,
                    });
                    break;
                }
            }
    },
  },
};
</script>
