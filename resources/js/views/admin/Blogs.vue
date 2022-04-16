<template>
    <main>
        <div class="container-fluid">
            <div class="card shadow mb-4">
                <div class="card-header d-flex bd-highlight">
                    <h6 class="bd-highlight font-weight-bold text-success">Adding Blogs</h6>
                    <div class="ml-auto">
                        <button id="show-btn2" @click="showModal"
                            class="d-none d-sm-inline-block btn btn-sm btn-info shadow-sm">
                            <span class="icon text-white-50">
                                <i class="far fa-plus-square"></i>
                            </span>
                            <span class="text-white">Add Blog</span>
                        </button>
                    </div>
                </div>
            </div>
            <div>
                <b-modal ref="newCityModal" hide-footer size="lg" title="Add Blog">
                    <form v-on:submit.prevent="createBlog">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Blog Title</label>
                            <input type="text" class="form-control"
                                v-model="blogData.title"
                                id="city_name"
                                name="city_name"
                                placeholder="Enter city name" />
                            <div class="invalid-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                        </div>
                        <div>
                            <div class="avatar-upload">
                                <div class="avatar-preview">
                                    <img id="imagePreview" class="w-100 h-100" src="images/icon/addicon1.png" ref="newImage1Display" />
                                </div>
                                <div class="avatar-edit">
                                    <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"
                                    v-on:change="attachImage"
                                    ref="image1" />
                                    <label for="imageUpload"></label>
                                </div>
                            </div>
                        </div>
                        <label class="label-title">
                          Description
                          <span class="required">*</span>
                        </label>
                        <div class="row form-group add-title">
                          <div class="col-sm-12">
                            <vue-editor v-model="blogData.description"></vue-editor>
                            <div
                              class="invalid-feedback"
                              v-if="errors.description"
                              placeholder="Write few lines about your property"
                              >{{errors.description[0]}}
                            </div>
                          </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" ref="btnSubmit" class="btn btn-success">Post Blog</button>
                        </div>
                    </form>
                </b-modal>
            </div>
             <div>
                <b-modal ref="editBlog" hide-footer size="lg" title="Edit Blog">
                    <form v-on:submit.prevent="updateBlog">
                        <div class="form-group">
                            <label for="exampleFormControlInput1">Title</label>
                            <input type="text" class="form-control"
                                v-model="editBlogData.title"
                                id="city_name"
                                name="city_name"/>
                            <div class="invalid-feedback" v-if="errors.title">{{errors.title[0]}}</div>
                        </div>
                        <label class="label-title">
                          Description
                          <span class="required">*</span>
                        </label>
                        <div class="row form-group add-title">
                          <div class="col-sm-12">
                            <vue-editor v-model="editBlogData.blog_description"></vue-editor>
                            <div
                              class="invalid-feedback"
                              v-if="errors.blog_description"
                              placeholder="Write few lines about your property"
                              >{{errors.blog_description[0]}}
                            </div>
                          </div>
                        </div>
                        <div class="avatar-upload">
                            <div class="avatar-preview">
                            <img id="imagePreview1" class="w-100 h-100" :src="`${$store.state.serverPath}storage/${editBlogData.blog_picture}`" ref="editImageDisplay" />
                            </div>
                            <div class="avatar-edit">
                                <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"
                                v-on:change="editAttachImage"
                                ref="editBlogImage" />
                                <label for="imageUpload"></label>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-success">Update Blog</button>
                        </div>
                    </form>
                </b-modal>
            </div>
            <div class="card mt-3">
                <div class="card-body">
                    <!-- <form class="form-inline d-flex justify-content-center md-form form-sm active-cyan active-cyan-2 mt-2" v-on:submit.prevent="searchCities">
                        <i class="fas fa-search" aria-hidden="true"></i>
                        <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search"
                        aria-label="Search" v-model="query" v-on:keyup="searchCities">
                    </form> -->
                    <table class="table table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Title</th>
                                <th scope="col">picture</th>
                                <th scope="col" >Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(blog , index) in blogs" :key="index">
                                <th scope="row">{{index+1}}</th>
                                <td>{{blog.name}}</td>
                                <td>{{blog.title}}</td>
                                <td>
                                    <img :src="`${$store.state.serverPath}storage/${blog.blog_picture}`"
                                            style="width:50px; border-radius: 50%; height: 50px;">
                                </td>
                                 <td>
                                    <button type="button" class="btn btn-danger btn-sm" v-on:click="deleteBlog(blog)">
                                    <i class="fas fa-trash"></i>
                                    </button>
                                    <button type="button"  class="btn btn-success btn-sm"  v-on:click="editBlog(blog)">
                                    <i class="fas fa-pencil-alt"></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                 <div v-show="moreExists">
                    <button type="button" class="btn btn-info btn-sm"  v-on:click="loadBlog" >
                        <i class="fas fa-arrow-down"></i>
                    </button>
                </div>
            </div>
        </div>
    </main>
</template>
<script>
    import { VueEditor } from "vue2-editor";
    import * as cityService from "../../services/city_service";
    import * as blogService from "../../services/blog_service";
    export default {
        name: "Blog",
         components: {
                VueEditor,
            },
        data() {
            return {
              query:"",
              blogs: [],
              editBlogData: {},
            blogData: {
                title: '',
                description:'',
                blogpicture: '',
                },
              moreExists: false,
              nextPage: 0,
              errors: {}
            };
        },
          mounted() {
            this.getBlog();
          },
        methods: {
            createBlog:async function(){
                try {
                 const  formData = new FormData();
                    formData.append("title", this.blogData.title);
                    formData.append("description", this.blogData.description);
                    formData.append("blogpicture", this.blogData.blogpicture);
                    const response = await blogService.createBlog(formData);
                    this.blogs.unshift(response.data);
                        this.flashMessage.success({
                            message: 'City Data Added Successfuly!',
                            time:5000,
                    });
                    this.blogData.title= "";
                    this.blogData.description= "";
                    this.blogData.blogpicture= "";
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
            getBlog:async function(){
                try {
                    const response = await blogService.getBlog();
                    this.blogs = response.data;
                    // if(response.data.current_page < response.data.last_page)
                    //     {
                    //         this.moreExists = true;
                    //         this.nextPage = response.data.current_page + 1;
                    //     }
                    //     else{
                    //         this.moreExists = false;
                    //     }
                    } catch (error) {
                    this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:5000
                    });
                }
            },
            deleteBlog:async function (blog){
                if(!window.confirm("Are you sure you want to delete this Blog")){
                    return;
                }
                try {
                    await blogService.deleteBlog(blog.id);
                    this.blogs = this.blogs.filter(obj => {
                                return obj.id !=blog.id;
                        });
                        this.flashMessage.success({
                            message: 'Blog deleted successfuly!',
                            time:5000
                        });
                } catch (error) {
                        this.flashMessage.error({
                            message: 'Some thing going wrong!',
                            time:5000
                        });
                }
            },
            editBlog: async function(blog) {
                this.editBlogData = {...blog};
                this.$refs.editBlog.show();
            },
            updateBlog: async function (){
                try {
                    const formData = new FormData();
                    formData.append("title", this.editBlogData.title);
                    formData.append("blog_description", this.editBlogData.blog_description);
                    formData.append("blog_picture", this.editBlogData.blog_picture);
                    formData.append("_method", "put");
                    const response = await blogService.updateBlog(this.editBlogData.id, formData);
                    this.blogs.map(blogs=>{
                            if(blogs.id == response.data.id){
                                for(let key in response.data){
                                    blogs[key]    = response.data[key];
                                }
                            }
                        });
                    this.hideEditModal()
                    this.flashMessage.success({
                        message: 'Blog Updated successfully!',
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
                this.$refs.newCityModal.show();
            },
            hideModal() {
                this.$refs.newCityModal.hide();
            },
            hideEditModal(){
              this.$refs.editBlog.hide();
            },
            editAttachImage() {
                this.editBlogData.blog_picture = this.$refs.editBlogImage.files[0];
                let reader = new FileReader();
                reader.addEventListener(
                    "load",
                    function () {
                    this.$refs.editImageDisplay.src = reader.result;
                    }.bind(this),
                    false
                );
                reader.readAsDataURL(this.editBlogData.blog_picture);
            },
            loadBlog:async function() {
                try {
                        const response =  await blogService.loadBlog(this.nextPage)
                        if(response.data.current_page < response.data.last_page){
                            this.moreExists = true;
                            this.nextPage = response.data.current_page + 1;
                        }else{
                            this.moreExists = false;
                        }
                        response.data.data.forEach(data => {
                        this.blogs.push(data);
                    });
                } catch (error) {
                    this.flashMessage.error({
                        message: "Some error occurred during load more Cities",
                        time:5000
                    });
                }
            },
            searchCities:async function () {
                try {
                const query = {
                query: this.query
                };
                const response = await cityService.searchCities(query);
                this.cities = response.data;
                } catch (error) {
                        this.flashMessage.error({
                        message: "Some error occurred",
                        time: 5000
                        });
                    }
            },
            disableSubmission(btnSubmit) {
                btnSubmit.setAttribute("disabled", "disabled");
                this.btnSubmitOldHtml = btnSubmit.innerHTML;
                btnSubmit.innerHTML =
                    '<span class="fa fa-spinner fa-spin"></span> Please wait...';
            },
            enableSubmission(btnSubmit) {
                btnSubmit.removeAttribute("disabled");
                btnSubmit.innerHTML = this.btnSubmitOldHtml;
            },
            attachImage() {
                this.blogData.blogpicture = this.$refs.image1.files[0];
                let reader = new FileReader();
                reader.addEventListener(
                    "load",
                    function () {
                    this.$refs.newImage1Display.src = reader.result;
                    }.bind(this),
                    false
                );
                reader.readAsDataURL(this.blogData.blogpicture);
            },

        }
    };

</script>
