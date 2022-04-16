<template>
    <main>
        <div class="container bg-white p-2 shadow" style="border-radius:15px">
            <div class="row">
                <div class="col-lg-7">
                    <div id="product-carousel" class="carousel slide" data-ride="carousel">
                      <div class="carousel-inner" role="listbox">
                          <div class="item carousel-item active">
                          <div class="carousel-image">
                              <img
                              :src="`${$store.state.serverPath}storage/${properties.pic1}`"
                              height="400px"
                              alt="Featured Image"  class="rounded"
                              />
                          </div>
                          </div>
                          <div class="item carousel-item">
                          <div class="carousel-image">
                              <img
                              :src="`${$store.state.serverPath}storage/${properties.pic2}`"
                              height="400px"
                              alt="Featured Image"  class="rounded"
                              />
                          </div>
                          </div>
                          <div class="item carousel-item">
                          <div class="carousel-image">
                              <img
                              :src="`${$store.state.serverPath}storage/${properties.pic4}`"
                              height="400px"
                              alt="Featured Image"  class="rounded"
                              />
                          </div>
                          </div>
                          <div class="item carousel-item">
                          <div class="carousel-image">
                              <img
                              :src="`${$store.state.serverPath}storage/${properties.pic5}`"
                              alt="Featured Image"
                              height="400px"  class="rounded"
                              />
                          </div>
                          </div>
                          <div class="item carousel-item">
                              <div class="carousel-image">
                                  <img
                                  :src="`${$store.state.serverPath}storage/${properties.pic6}`"
                                  alt="Featured Image"
                                  height="400px"  class="rounded"
                                  />
                              </div>
                          </div>
                          <div class="item carousel-item">
                              <div class="carousel-image">
                                  <img
                                  :src="`${$store.state.serverPath}storage/${properties.pic6}`"
                                  alt="Featured Image"
                                  height="400px"  class="rounded"
                                  />
                              </div>
                          </div>
                          <div class="item carousel-item">
                              <div class="carousel-image">
                                  <img
                                  :src="`${$store.state.serverPath}storage/${properties.pic7}`"
                                  alt="Featured Image"
                                  height="400px"  class="rounded"
                                  />
                              </div>
                          </div>
                          <div class="item carousel-item">
                              <div class="carousel-image">
                                  <img
                                  :src="`${$store.state.serverPath}storage/${properties.pic8}`"
                                  alt="Featured Image"
                                  height="400px"  class="rounded"
                                  />
                              </div>
                          </div>
                          <div class="item carousel-item">
                              <div class="carousel-image">
                                  <img
                                  :src="`${$store.state.serverPath}storage/${properties.pic9}`"
                                  alt="Featured Image"
                                  height="400px"  class="rounded"
                                  />
                              </div>
                          </div>
                          <div class="item carousel-item">
                              <div class="carousel-image">
                                  <img
                                  :src="`${$store.state.serverPath}storage/${properties.pic10}`"
                                  alt="Featured Image"
                                  height="400px"  class="rounded"
                                  />
                              </div>
                          </div>
                          <div class="item carousel-item">
                              <div class="carousel-image">
                                  <img
                                  :src="`${$store.state.serverPath}storage/${properties.pic11}`"
                                  alt="Featured Image"
                                  height="400px"  class="rounded"
                                  />
                              </div>
                          </div>
                          <div class="item carousel-item">
                              <div class="carousel-image">
                                  <img
                                  :src="`${$store.state.serverPath}storage/${properties.pic12}`"
                                  alt="Featured Image"
                                  height="400px"  class="rounded"
                                  />
                              </div>
                          </div>
                      </div>
                          <a
                              class="left carousel-control"
                              href="#product-carousel"
                              role="button"
                              data-slide="prev"
                          >
                              <i class="fa fa-chevron-left"></i>
                          </a>
                          <a
                              class="right carousel-control"
                              href="#product-carousel"
                              role="button"
                              data-slide="next"
                          >
                              <i class="fa fa-chevron-right float-right"></i>
                          </a>
                    </div>
                </div>
                <div class="col-lg-5  p-3">
                    <div class="slider-text">
                        <h3 class="title text-success">{{properties.title}}</h3>
                        <p>
                            <span>
                            Offered by:
                            <a href="#">EKiraya Online</a>
                            </span>
                            <span>
                            Ad ID:
                            <a href="#" class="time">{{properties.property_number}}</a>
                            </span>
                        </p>
                        <div class="short-info">
                            <h4>Short Info</h4>
                            <p>
                                <strong>City:</strong>
                                <a href="#">{{properties.city_name}}</a>
                                <span class="px-3">
                                    <strong >Sector:</strong>
                                    <a href="#">{{properties.sector}}</a>
                                </span>

                            </p>
                            <p>
                                <strong>Property-Type:</strong>
                                <a href="#">{{properties.property_name}}</a>
                            </p>
                            <p>
                                <strong>Address:</strong>
                                <a href="#">{{properties.address}}</a>
                            </p>
                            <p>
                            <strong>Features:</strong>
                            <a>
                                <i class="fa fa-bed px-2"></i>{{properties.badrooms}}
                            </a>
                            <a>
                                <i class="fa fa-shower px-2"></i>{{properties.bathrooms}}
                            </a>
                            <a>
                                <i class="fa fa-area-chart px-2"></i>{{properties.size}} {{properties.unit}}
                            </a>
                            </p>
                            <p>
                            <a class="pr-1">
                                <strong>Furnished:</strong>{{properties.furnished}}
                            </a>
                            <a class="px-1">
                                <strong>Garage:</strong>{{properties.garage}}
                            </a>
                            <a class="px-1">
                                <strong>Tv Lounge:</strong>{{properties.tv_lounged}}
                            </a>
                            </p>
                            <p>
                              <strong>Price:</strong>
                              <a href="#">{{properties.rent_price}} Rs</a>
                              <strong>Status:</strong>
                              <a href="#">{{properties.status}}</a>
                            </p>
                        </div>
                        <div class="authorization-btn1">
                        <div class="row mx-auto">
                          <div class="m-1" v-if="properties.status != 'occupied'">
                              <button class="btn btn-success form-contol px-5" id="phonenumber">Call</button>
                          </div>
                          <div class="m-1">
                                <button
                                type="button"
                                class="btn btn-dark px-5"
                                v-on:click="showReservedModal()"
                                data-toggle="tooltip"
                                data-placement="top"
                                title="Assign"
                                >
                                Reserved
                                </button>
                            </div>
                          <div class="m-1" v-if="properties.status != 'occupied'">
                                <button   @click="showEmailModal" class="btn btn-warning px-5">Email</button>
                          </div>

                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="description-info" >
                <div class="row">
                    <div class="col-md-8">
                        <div>
                            <h4>Description</h4>
                            <p v-html="properties.description"></p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="short">
                            <h4>Short Info</h4>
                            <ul>
                                <li><i class="fa fa-shopping-cart"></i><a href="#">Office: Meet in person</a></li>
                                <li><i class="fa fa-user-plus"></i><a href="#">More Property by <span>E-Kiraya Online</span></a></li>
                                <li><i class="fa fa-reply"></i><a href="#">Send to a friend</a></li>
                                <li><i class="fa fa-heart-o"></i><a href="#">Save ad as Favorite</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
          <b-modal ref="newModal" hide-footer title="Reservation Form">
              <form  v-on:submit.prevent="updateReservedProperty()" class="p-3">
                      <fieldset>
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <div class=" inputGroupContainer">
                                          <div class="input-group">
                                              <span class="input-group-addon">
                                                  <i class="glyphicon glyphicon-user">
                                                  </i>
                                              </span>
                                              <!-- {{$store.state.profile.name}} -->
                                                  <input v-model="reservation.full_name"  name="fullName"   placeholder="Full Name" class="form-control" required="true"  type="text">
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
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
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">
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
                              </div>
                              <div class="col-md-6">
                                  <div class="form-group wrapper">
                                      <select required class="form-control" v-model="reservation.status" >
                                          <option value="" disabled selected hidden class="w-100"> Status</option>
                                          <option value="bachelor">Bachelor</option>
                                          <option value="family">Family</option>
                                      </select>
                                  </div>
                              </div>
                          </div>
                          <div class="row">
                              <div class="col-md-6">
                                  <div class="form-group">
                                      <div class=" inputGroupContainer">
                                      <div class="input-group"><span class="input-group-addon"><i class="glyphicon glyphicon-home"></i></span><input v-model="reservation.domicile" name="Domicile" placeholder="Domicile " class="form-control" required="true"  type="text"></div>
                                      </div>
                                  </div>
                              </div>
                              <div class="col-md-6">
                                  <div class="input-group">
                                      <div class="input-group-prepend ">
                                          <span class="input-group-text" id="basic-addon1"><img src="/../images/bg/pakflag.png"></span>
                                      </div>
                                      <input-mask v-model="reservation.phone" type="text" class="form-control" placeholder="Enter Your  Phone No"  mask="9999-9999999" maskChar="" aria-label="Phone" aria-describedby="basic-addon1"></input-mask>
                                  </div>
                              </div>
                          </div>
                      </fieldset>
                      <button type="submit"  class="btn btn-info" style="margin-left: 131px;" >Reserved Property</button>
              </form>
          </b-modal>
            <b-modal ref="newEmailModal" hide-footer title="Email Form">
                    <form id="contact-form" v-on:submit.prevent="contactUs" class="contact-form">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="text" v-model="contact.name" class="form-control" required="required" placeholder="Name">
                                </div>
                                <div class="invalid-feedback" v-if="errors.name">
                                    {{ errors.name[0] }}
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="email" v-model="contact.email" class="form-control" required="required" placeholder="Email Id">
                                </div>
                                <div class="invalid-feedback" v-if="errors.email">
                                    {{ errors.email[0] }}
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="form-group">
                                    <input type="text" v-model="contact.subject" class="form-control" required="required" placeholder="Subject">
                                </div>
                                <div class="invalid-feedback" v-if="errors.subject">
                                    {{ errors.subject[0] }}
                                </div>
                            </div>

                            <div class="col-sm-12">
                                <div class="form-group">
                                    <textarea  v-model="contact.message" id="message" required="required" class="form-control" rows="7" placeholder="Message"></textarea>
                                </div>
                                <div class="invalid-feedback" v-if="errors.subject">
                                    {{ errors.message[0] }}
                                </div>
                            </div>
                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-info">Submit Your Message</button>
                        </div>
                    </form>
            </b-modal>
    </main>
</template>
<script>
import * as PropertiesService from "../../services/properties_service";
import * as ManagerService from "../../services/manager_service";
import * as CsrService from "../../services/csr_service";
import * as MainService from '../../services/main_service';

import { VueEditor } from "vue2-editor";
import { throws } from "assert";
export default {
  name: "Properties",
  components: {
    VueEditor,
  },
  data() {
    return {
      query: "",
      cities: [],
      sectors: [],
      rules: [],
      city: 0,
      properties: [],
      contact:{
              name:'',
              email:'',
              subject:'',
              message:'',
          },
      protypes: [],
      editPropertyData: {},
      showName: false,
      showImage: true,
      moreExists: false,
      readMore: false,
      nextPage: 0,
      errors: {},
      reservation:{
              property_id:'',
              full_name:'' ,
              cnic:'',
              current_address: '',
              status: '',
              domicile:'',
              phone: '',
          },
    };
  },
    beforeRouteEnter: async function(to, from, next) {
                try {
                const response = await PropertiesService.getAllProperties(to.params.id);
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

    this.getProTypeData();
  },
  methods: {
    PropertyHot: async function (properties) {
      if (!window.confirm("Are you sure you want to Hot this Property")) {
        return;
      }
      try {
        const response = await CsrService.PropertyHot(properties.id);
        this.flashMessage.success({
          message: "Property Hoted Successfuly!",
          time: 5000,
        });
      } catch (error) {
        switch (error.response.status) {
                case 422:
                    this.errors = error.response.data.errors;
                    break;
                case 401:
                    this.errors = {};
                    this.flashMessage.info({
                        message: error.response.data.message,
                        time: 5000,
                    });
                    break;
                default:
                    this.errors = {};
                    this.flashMessage.error({
                        message: "Some error occurred please try again",
                        time: 5000,
                    });
                    break;
            }
      }
    },
    getProTypeData: async function () {
      try {
        const response = await PropertiesService.getProTypeData();
        this.protypes = response.data;
      } catch (error) {
        this.flashMessage.error({
          message: "Some error occurred!",
          time: 5000,
        });
      }
    },
    updateReservedProperty: async function()
        {
            if (!this.$store.state.isLoggedIn)
            {
                this.$router.push('/login');
                return;
            }else{
                this.$router.push('/tenant');
            }
             try {
                 this.reservation.property_id = this.properties.id;
                    const response = await MainService.updateReservedProperty(this.reservation)
                    this.flashMessage.success({
                        message: 'Property successfully add your reserved list',
                        time: 5000
                    });
                } catch (error) {
                  switch (error.response.status) {
                        case 422:
                            this.errors = error.response.data.errors;
                            break;
                        default:
                            this.errors = {};
                            this.flashMessage.error({
                                message: "Some error occurred please try again",
                                time: 5000,
                            });
                            break;
                    }
                }
    },
    showReservedModal() {
                this.$refs.newModal.show();
    },
    hideModal() {
            this.$refs.newModal.hide();
    },
    showEmailModal() {
        this.$refs.newEmailModal.show();
    },
    contactUs: async function () {
            try {
                const response = await userService.contactUs(this.contact);
                this.errors = {};
                this.contact = {};
                this.flashMessage.success({
                    message: "your email send successfully!",
                    time: 5000,
                });
            } catch (error) {
                this.errors = error.response.data.errors;
                this.flashMessage.error({
                    message: "Some error occurred!",
                    time: 5000,
                });
            }
    },
    showProperty: async function (property) {
      this.editPropertyData = { ...property };
      this.$refs.showProperty.show();
    },
    editProperty: async function (property) {
      this.editPropertyData = { ...property };
      this.$refs.editProperty.show();
    },
    deleteProperty: async function (property) {
      if (!window.confirm("Are you sure you want to delete this Property")) {
        return;
      }
      try {
        const responce = await PropertiesService.deleteProperty(property.id);
        this.properties = this.properties.filter((obj) => {
          return obj.id != property.id;
        });
        this.flashMessage.success({
          message: "Property deleted successfuly!",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: "Some thing going wrong!",
          time: 5000,
        });
      }
    },
    approvedProperty: async function (properties) {
      if (!window.confirm("Are you sure you want to Approve this Property")) {
        return;
      }
      try {
        const response = await CsrService.approvedProperty(properties.id);
        // this.properties = this.properties.filter(obj => {
        //             return obj.id !=property.id;
        //     });
        this.flashMessage.success({
          message: "Property Approved Successfuly!",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: "Some error occurred!",
          time: 5000,
        });
      }
    },
    PropertyOk: async function (properties) {
      if (!window.confirm("Are you sure you want to Attached this Property")) {
        return;
      }
      try {
        const response = await PropertiesService.PropertyOk(properties.id);
        // this.properties = this.properties.filter(obj => {
        //             return obj.id !=property.id;
        //     });
        this.flashMessage.success({
          message: "Property Attached Successfuly!",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: "Some error occurred!",
          time: 5000,
        });
      }
    },
    reloadProperty: async function (properties) {
      if (!window.confirm("Are you sure you want to Reload this Property")) {
        return;
      }
      try {
        const response = await PropertiesService.reloadProperty(properties.id);
        // this.properties = this.properties.filter((obj) => {
        //   return obj.id != property.id;
        // });
        this.flashMessage.success({
          message: "Property Reloaded Successfuly!",
          time: 5000,
        });
      } catch (error) {
          console.log(error + '');
        this.flashMessage.error({
          message: "Some error occurred!",
          time: 5000,
        });
      }
    },
    paidPropertyRent: async function (properties) {
      if (
        !window.confirm("Are you sure you want to paid rent of this Property")
      ) {
        return;
      }
      try {
        const response = await PropertiesService.paidPropertyRent(properties.id);
        // this.properties = this.properties.filter((obj) => {
        //   return obj.id != property.id;
        // });
        this.flashMessage.success({
          message: "Rent Paid Successfuly!",
          time: 5000,
        });
      } catch (error) {
        this.flashMessage.error({
          message: "Some error occurred!",
          time: 5000,
        });
      }
    },
    loadRule: async function () {
      try {
        const response = await PropertiesService.loadRule(this.nextPage);
        if (response.data.current_page < response.data.last_page) {
          this.readMore = true;
          this.nextPage = response.data.current_page + 1;
        } else {
          this.readMore = false;
        }
        response.data.data.forEach((data) => {
          this.rules.push(data);
        });
      } catch (error) {
        this.flashMessage.error({
          message: "Some error occurred during load more Cities",
          time: 5000,
        });
      }
    },
  },
};
</script>
<style scoped>
.authorization-btn button {
  /* border-radius: 50%; */
  height: 59px;
  width: 258px;
  margin-left: 100px;
}
</style>
