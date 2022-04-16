<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Adding Rules</h6>
                    <div class="ml-auto">
                        <button id="show-btn" @click="showModal"
                            class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                            <span class="icon text-white-50">
                                <i class="far fa-plus-square"></i>
                            </span>
                            <span class="text-white">Add Rules</span>
                        </button>
                    </div>
                </div>
            </div>

            <div>
                <b-modal ref="newRuleModal" hide-footer size="lg" title="Add Rule">
                    <form v-on:submit.prevent="createRule">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Rules</label>
                            <input type="text" class="form-control"
                                v-model="rulesData.rule"
                                id="rule"
                                name="rule"
                                placeholder="Enter Rule" />
                            <div class="invalid-feedback" v-if="errors.rule">{{errors.rule[0]}}</div>
                        </div>
                        <div class="form-group">
                            <button type="submit"  class="btn btn-success">Save Rule</button>
                        </div>
                    </form>
                </b-modal>
            </div>
             <div>
                <b-modal ref="editRule" hide-footer size="lg" title="Edit Rule">
                    <form v-on:submit.prevent="updateRule">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Rules</label>
                            <input type="text" class="form-control"
                                v-model="editRuleData.rule"
                                id="city_name"
                                name="city_name"/>
                            <div class="invalid-feedback" v-if="errors.rule">{{errors.rule[0]}}</div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Update Rules</button>
                        </div>
                    </form>
                </b-modal>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchCities">
                    <i class="fas fa-search" aria-hidden="true"></i>
                    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" v-model="query" v-on:keyup="searchRule">
                    </form>
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col" style="width:80%">Rules</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(rule , index) in rules" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{rule.rule}}</td>
                                 <td>
                                    <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteRule(rule)">
                                    <i class="fas fa-trash"></i>
                                    </button>
                                    <button type="button"  class="btn btn-success btn-sm"  v-on:click="editRules(rule)">
                                    <i class="fas fa-pencil-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 <div v-show="moreExists">
                    <button type="button" class="btn btn-info btn-sm"  v-on:click="loadRule" >
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    import * as ruleService from "../../services/rule_service";
    export default {
        name: "Rules",
        data() {
            return {
              query:"",
              rules: [],
              editRuleData: {},
            rulesData: {
                rule: '',
                },
              moreExists: false,
              nextPage: 0,
              errors: {}
            };
        },
          mounted() {
            this.getRule();
          },
        methods: {
            getRule:async function(){
                try {
                    const response = await ruleService.getRule();
                    this.rules = response.data.data;
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
            createRule:async function(){
                try {
                    const response = await ruleService.createRule(this.rulesData);
                    this.rules.unshift(response.data);
                        this.flashMessage.success({
                            message: 'Rule Added Successfuly!',
                            time:5000,
                    });
                    this.rulesData.rule= "";
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

            deleteRule:async function (rule){
                if(!window.confirm("Are you sure you want to delete this Rule")){
                    return;
                }
                try {
                    await ruleService.deleteRule(rule.id);
                    this.rules = this.rules.filter(obj => {
                                return obj.id !=rule.id;
                        });
                        this.flashMessage.success({
                            message: 'Rule deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            editRules: async function(rule) {
                this.editRuleData = {...rule};
                this.$refs.editRule.show();
            },
            updateRule: async function (){
                try {
                    const response = await ruleService.updateRule(this.editRuleData.id, this.editRuleData);
                    this.rules.map(rules=>{
                            if(rules.id == response.data.id){
                                for(let key in response.data){
                                    rules[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'Rule Updated successfully!',
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
                this.$refs.newRuleModal.show();
            },
            hideModal() {
                this.$refs.newRuleModal.hide();
            },
            hideEditModal(){
              this.$refs.editRule.hide();
            },
            loadRule:async function() {
                try {
                        const response =  await ruleService.loadRule(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.rules.push(data);
                    });
                } catch (error) {
                    console.log(error + '');
                    this.flashMessage.error({
                        message: "Some error occurred during load more Cities",
                        time:5000
                    });
                }
            },
            searchRule:async function () {
                try {
                const query = {
                query: this.query
                };
                const response = await ruleService.searchRule(query);
                this.rules = response.data;
                } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred",
                        time: 5000
                        });
                    }
            },
            }
    };

</script>
