<template>
    <div>
         <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Lease Termination Notice</h6>
                </div>
            </div>
        <div class="card mt-3">
                <div class="card-body">
                    <!-- <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchCities">
                        <i class="fas fa-search" aria-hidden="true"></i>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                            aria-label="Search" v-model="query" v-on:keyup="searchCities">
                    </form> -->
                    <div class="table-responsive">
                        <table class="table table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Property</th>
                                    <th scope="col">CNIC</th>
                                    <th scope="col">Phone</th>
                                    <th scope="col">Start Date</th>
                                    <th scope="col">End Date</th>
                                    <th scope="col">Reason</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(leasetermination , index) in leaseterminations" :key="index">
                                    <th scope="row">{{index+1}}</th>
                                    <td>{{leasetermination.user.name}}</td>
                                    <td></td>
                                    <td>{{leasetermination.cnic}}</td>
                                    <td>{{leasetermination.phone}}</td>
                                    <td>{{leasetermination.s_date}}</td>
                                    <td>{{leasetermination.e_date}}</td>
                                    <td>{{leasetermination.reason}}</td>
                                    <td>
                                        <button type="button" class="btn btn-danger btn-sm" data-toggle="tooltip" data-placement="top" title="Delete Property" v-on:click="deleteLeasetTermination(leasetermination)">
                                            <i class="fas fa-trash"></i>
                                        </button>
                                        <button type="button"  class="btn btn-success btn-sm" data-toggle="tooltip" data-placement="top" title="Edit Property"  v-on:click="editLeastTermination(leasetermination)">
                                            <i class="fas fa-pencil-alt"></i>
                                        </button>
                                        <button type="button"  class="btn btn-info btn-sm" data-toggle="tooltip" data-placement="top" title="Re-Post Property"  v-on:click="rePostLeasetTermination(leasetermination)">
                                            <i class="fas fa-retweet"></i>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                 <!-- <div v-show="moreExists">
                    <button type="button" class="btn btn-info btn-sm" >
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div> -->
            </div>
    </div>
</template>
<script>
    import * as leaseterminationService from "../../services/lease_termination_service.js";
export default {
    data() {
        return {
            leaseterminations:[],
        }
    },
    mounted() {
        this.getLeaseTermination();
    },
    methods: {
        getLeaseTermination:async function() {
            try {
                const response = await leaseterminationService.getLeaseTermination();
                this.leaseterminations = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
            }
        },
        deleteLeasetTermination:async function (leasetermination){
                if(!window.confirm("Are you sure you want to delete this Lease Termination Notice")){
                    return;
                }
                try {
                    await leaseterminationService.deleteLeasetTermination(leasetermination.id);
                    this.leaseterminations = this.leaseterminations.filter(obj => {
                                return obj.id !=leasetermination.id;
                        });
                        this.flashMessage.success({
                            message: 'Lease Termination Data deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
        },
        rePostLeasetTermination:async function (leasetermination){
                if(!window.confirm("Are you sure you want to Re-Post this Property")){
                    return;
                }
                try {
                    await leaseterminationService.rePostLeasetTermination(leasetermination.id);
                    this.leaseterminations = this.leaseterminations.filter(obj => {
                                return obj.id !=leasetermination.id;
                        });
                        this.flashMessage.success({
                            message: 'Lease Termination Data deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
        },
    },
}
</script>
