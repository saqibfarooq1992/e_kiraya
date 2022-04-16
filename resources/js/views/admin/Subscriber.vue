<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">All Subscriber</h6>
                </div>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <!-- <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchProperty">
                        <i class="fas fa-search" aria-hidden="true"></i>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" v-model="query" v-on:keyup="searchProperty">
                    </form> -->
                   <div class="table-responsive">
                        <table class="table table-hover" style="width:100%">
                            <thead>
                            <tr>
                                <th scope="col" style="width: 30%;">#</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr v-for="(subscriber , index) in subscribers" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{subscriber.email_subscriber}}</td>
                                <td>
                                    <!-- <button type="button" class="btn btn-success sm" ><i class="fas fa-pencil-alt"></i></button> -->
                                    <button type="button" class="btn btn-danger sm" v-on:click="deletSubsciber(subscriber)"><i class="fas fa-trash"></i></button>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <!-- <div v-show="moreExists">
                    <button type="button" class="btn btn-info btn-sm" v-on:click="loadProperty">
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div> -->
            </div>
        </div>
    </main>
</template>
<script>
import * as MainService from '../../services/main_service';
export default {
    data(){
        return {
            subscribers:[],
            subscribers:{},
        };

    },
    mounted(){
        this.getSubscriber();
    },
    methods:{
        getSubscriber:async function (){
            try {
            const respons = await MainService.getSubscriber();
            this.subscribers = respons.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                });
            }
        },
        deletSubsciber:async function(subscriber){
            if(!window.confirm("Are you sure you want to delete this Subscriber")){
                    return;
                }
            try {
                await MainService.deletSubsciber(subscriber.id);
                 this.subscribers = this.subscribers.filter(obj => {
                                return obj.id !=subscriber.id;
                        });
                this.flashMessage.success({
                            message: 'subscriber deleted successfuly!',
                            time:5000
                        });
            } catch (error) {
                this.flashMessage.error({
                            message: 'Some thing going wrong! dafdsfa',
                            time:5000
                        });
            }
        }
    }
}
</script>
