<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Update Header</h6>
                </div>
            </div>
             <div>
                  <form v-on:submit.prevent="update">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Title</label>
                            <input type="text" class="form-control"
                                v-model="headers.title"
                                id="title"
                                name="title"/>
                            <div class="invalid-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                        </div>
                          <div class="form-group">
                            <label for="exampleFormControlInput1">Title</label>

                                <textarea class="form-control" name="title" id="title" cols="10" rows="5" v-model="headers.description"></textarea>
                            <div class="invalid-feedback" v-if="errors.description">{{errors.description[0]}}</div>
                        </div>

                        <div class="form-group">
                            <label for="">Header Benner</label>
                            <div>
                                <img :src="`${$store.state.serverPath}storage/${headers.benner}`" ref="editBennerImageDisplay" class="w-150px" alt="">
                                <input type="file"  name="benner" id="benner" v-on:change="editAttachImage" ref="editHeaderBenner">
                                <div class="invalid-feedback" v-if="errors.benner">{{errors.benner[0]}}</div>
                            </div>

                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Update Header</button>
                        </div>
                    </form>
            </div>
        </div>
    </main>
</template>
<script>
 import * as headerService from "../../services/header_service";
export default {
    name: "Header",
    data() {
        return{
            editHeader: {},
            headers:[],
            errors: {}
        }
    },
    mounted() {
        this.getHeader();
    },
    methods:{
            getHeader:async function(){
                try {
                    const response = await headerService.getHeader();
                    this.headers = response.data;
                    } catch (error) {
                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time:5000
                        });
                }
            },
            update: async function (){
                try {
                    const formData = new FormData();
                    formData.append ('title',this.headers.title);
                    formData.append ('description',this.headers.description);
                    formData.append ('benner',this.headers.benner);
                    formData.append('_method','put');
                    const response = await headerService.updateHeader(this.headers.id, formData);
                    this.flashMessage.success({
                        message: 'Header Updated successfully!',
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

        editAttachImage(){
                this.headers.benner = this.$refs.editHeaderBenner.files[0];
                let reader = new FileReader();
                reader.addEventListener('load',function(){
                    this.$refs.editBennerImageDisplay.src = reader.result;
                }.bind(this),false);
                reader.readAsDataURL(this.headers.benner)
        },
        editHeaderData(header) {
                this.editHeader = {...header};
                 this.$refs.editHeader.show();
            },

    }
}
</script>
