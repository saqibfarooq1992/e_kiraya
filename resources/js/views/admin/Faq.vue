<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Adding Trade Faq</h6>
                    <div class="ml-auto">
                        <button id="show-btn" @click="showModal"
                            class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                            <span class="icon text-white-50">
                                <i class="far fa-plus-square"></i>
                            </span>
                            <span class="text-white">Add Faq</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <b-modal ref="newFaqModal" hide-footer size="lg" title="Add Trade Faqs">
                    <form v-on:submit.prevent="createFaq" >
                         <div class="form-group">
                            <label for="exampleInputEmail1">Question</label>
                            <input type="test" class="form-control" v-model="faqsData.question"  aria-describedby="emailHelp" placeholder="Enter Question">
                            <div class="invalid-feedback" v-if="errors.question">{{errors.question[0]}}</div>
                        </div>
                         <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" v-model="faqsData.description" id="description" rows="3"></textarea>
                            <div class="invalid-feedback" v-if="errors.description">{{errors.description[0]}}</div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Save faq</button>
                        </div>
                    </form>
                </b-modal>
            </div>
             <div>
                <b-modal ref="editFaq" hide-footer size="lg" title="Edit Trade Faqs">
                    <form v-on:submit.prevent="updateFaq">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Question</label>
                            <input type="test" class="form-control" v-model="editfaqsData.question"  aria-describedby="emailHelp" placeholder="Enter Question">
                            <div class="invalid-feedback" v-if="errors.description">{{errors.question[0]}}</div>
                        </div>
                        <div class="form-group">
                            <label for="description">Description</label>
                            <textarea class="form-control" v-model="editfaqsData.description" id="description" rows="3"></textarea>
                            <div class="invalid-feedback" v-if="errors.description">{{errors.description[0]}}</div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Update Trade Faq</button>
                        </div>
                    </form>
                </b-modal>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchCities">
                    <i class="fas fa-search" aria-hidden="true"></i>
                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" v-model="query" v-on:keyup="searchFaq">
                    </form>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col" style="width: 5%;">#</th>
                                <th scope="col" style="width: 20%;">Question</th>
                                <th scope="col">Description</th>
                                <th scope="col" style="width: 10%;">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(faq , index) in faqs" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{faq.question}}</td>
                                <td>{{faq.description}}</td>
                                 <td>
                                    <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteFaq(faq)">
                                    <i class="fas fa-trash"></i>
                                    </button>
                                    <button type="button"  class="btn btn-success btn-sm" v-on:click="editFaq(faq)">
                                    <i class="fas fa-pencil-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 <div v-show="moreExists">
                    <button type="button" class="btn btn-info btn-sm"  v-on:click="loadFaqData" >
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
            </div>
        </div>

     </main>
</template>
<script>
    import * as FaqService from "../../services/faq_service";
    export default {
        name: "Faq",
        data() {
            return {
              user:[],
              query:"",
              faqs: [],
              editfaqsData: {},
            faqsData: {
                question:"",
                description:"",
                },
                moreExists: false,
                nextPage: 0,
                errors: {}
                };
        },
          mounted() {
            this.getFaq();
          },
        methods: {
            createFaq:async function(){
                try {
                    const response = await FaqService.createFaq(this.faqsData);
                    this.faqs.unshift(response.data);
                    this.hideModel;
                        this.flashMessage.success({
                            message: 'Faq Added Successfuly!',
                            time:5000,
                    });
                    this.faqsData.user_id= "";
                    this.faqsData.question = "";
                    this.faqsData.description = "";
                } catch (error) {
                     switch(error.response.status){
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                            default:

                        this.flashMessage.error({
                            message: 'Some error occured !',
                            time:500
                        });
                            break;
                    }
                }
            },
            getFaq:async function(){
                try {
                    const response = await FaqService.getFaq();
                    this.faqs = response.data;
                    if(response.data.current_page < response.data.last_page)
                        {
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }
                        else{
                            this.moreExists = false;
                        }
                    } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
                },
             deleteFaq:async function (faq){
                if(!window.confirm("Are you sure you want to delete this Faq")){
                    return;
                }
                try {
                    await FaqService.deleteFaq(faq.id);
                    this.faqs = this.faqs.filter(obj => {
                                return obj.id !=faq.id;
                        });
                        this.flashMessage.success({
                            message: 'Faq deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            editFaq: async function(faq) {
                this.editfaqsData = {...faq};
                this.$refs.editFaq.show();
            },
            updateFaq: async function (){
                try {
                    const response = await FaqService.updateFaq(this.editfaqsData.id, this.editfaqsData);
                    this.faqs.map(faqs=>{
                            if(faqs.id == response.data.id){
                                for(let key in response.data){
                                    faqs[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'Faq Updated successfully!',
                        time: 5000
                    });
                } catch (error) {
                    switch(error.response.status){
                                case 422:
                                    this.errors = error.response.data.errors;
                                    break;
                                    default:

                                this.flashMessage.error({
                                    message: 'Some error occured !',
                                    time:500
                                });
                                    break;
                            }
                }
            },
            showModal() {
                this.$refs.newFaqModal.show();
            },
            hideModal() {
                this.$refs.newFaqModal.hide();
            },
            hideEditModal(){
               this.$refs.editFaq.hide();
            },
            loadFaqData:async function() {
                try {
                        const response =  await FaqService.loadFaqData(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.faqs.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred during load more Faqs",
                        time:5000
                    });
                }
            },
            searchFaq:async function () {
                try {
                const query = {
                query: this.query
                };
                const response = await FaqService.searchFaq(query);
                this.faqs = response.data;
                } catch (error) {
                    this.flashMessage.error({
                    message: "Some error occurred",
                    time: 5000
                    });
                }
            },
            },


    };

</script>
