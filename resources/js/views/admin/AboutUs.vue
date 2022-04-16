<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-info">Update About us</h6>
                </div>
            </div>
             <div>
                  <form v-on:submit.prevent="updateAbout">

                        <div class="row">
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                <div class="form-group">
                                    <label for="exampleFormControlInput1">Title</label>
                                    <input type="text" class="form-control"
                                        v-model="abouts.title"
                                        id="title"
                                        name="title"/>
                                    <div class="invalid-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                                </div>
                            </div>
                            <div class="col-lg-6 col-md-6 col-sm-6">
                                 <div class="form-group">
                                        <label for="exampleFormControlInput1">Description</label>
                                        <textarea class="form-control" v-model="abouts.description" id="description" rows="3"></textarea>
                                        <div class="invalid-feedback" v-if="errors.description">{{errors.description[0]}}</div>
                                  </div>
                            </div>
                        </div>
                       <div class="row">
                           <div class="col-lg-12 col-md-12 col-sm-12">
                            <div class="form-group">
                                <label for="exampleFormControlInput1">Background</label>
                                <vue-editor v-model="abouts.backgrounds"></vue-editor>
                                <div class="invalid-feedback" v-if="errors.background">{{errors.background[0]}}</div>
                            </div>
                           </div>
                       </div>
                       <div class="row">
                        <div class="col-lg-6 col-md-6 col-sm-6">
                            <div class="form-group">
                                <label for="">About Image</label>
                                <div>
                                    <img :src="`${$store.state.serverPath}storage/${abouts.image}`" ref="editAboutImageDisplay" class="w-150px" alt="">
                                    <input type="file"  name="image" id="image" v-on:change="editAttachImage" ref="editAboutImage">
                                    <div class="invalid-feedback" v-if="errors.image">{{errors.image[0]}}</div>
                                </div>
                            </div>
                        </div>
                       </div>

                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Update About us</button>
                        </div>
                    </form>
            </div>
        </div>
    </main>
</template>
<script>
    import * as aboutService from "../../services/about_service";
    import { VueEditor } from "vue2-editor";
    import { throws } from "assert";
    export default {
        name: "About",
        components: {
                    VueEditor,
                },
        data() {
            return {
              abouts:[],
              editAboutData: {},
              errors: {}
            };
        },
          mounted() {
            this.getAbout();
          },
        methods: {
            getAbout:async function(){
                try {
                    const response = await aboutService.getAbout();
                    this.abouts = response.data;
                    } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:500
                    });
                }
            },
            editAbout: async function(abouts) {
                this.editAboutData = {...abouts};
                this.$refs.editManager.show();
            },
            editAttachImage(){
                this.abouts.image = this.$refs.editAboutImage.files[0];
                let reader = new FileReader();
                reader.addEventListener('load',function(){
                    this.$refs.editAboutImageDisplay.src = reader.result;
                }.bind(this),false);
                reader.readAsDataURL(this.abouts.image)
            },
            updateAbout: async function (){
                const formData = new FormData();
                formData.append('title', this.abouts.title);
                formData.append('description', this.abouts.description);
                formData.append('backgrounds', this.abouts.backgrounds);
                formData.append('approach', this.abouts.approach);
                formData.append('methodology', this.abouts.methodology);
                formData.append('image', this.abouts.image);
                formData.append('_method' , 'put');
                try {
                    const response = await aboutService.updateAbout( this.abouts.id , formData);
                    this.abouts.map(abouts=>{
                            if(abouts.id == response.data.id){
                                for(let key in response.data){
                                    abouts[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'About Header Updated successfully!',
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
                this.$refs.managerModal.show();
            },
            hideModal() {
                this.$refs.managerModal.hide();
            },
            hideEditModal(){
              this.$refs.editManager.hide();
            },
        }
    };

</script>
