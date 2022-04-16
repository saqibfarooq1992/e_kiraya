<template>
    <nav class="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        <button v-on:click="toggleSidebar" id="sidebarToggleTop" class="btn btn-link d-md-none rounded-circlenav">
            <i class="fa fa-bars"></i>
        </button>
            <div class="d-sm-flex align-items-center justify-content-between mb-1">
                <h5 class="mb-0 text-gray-800">Wellcome to {{$store.state.profile.role}} Dashboard</h5>
            </div>
          <ul class="navbar-nav ml-auto">
            
            <li v-if="$store.state.profile.role === 'admin'" class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{totals}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                New Property Alerts
                </h6>
                <span v-for="(notification , index) in notifications" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'show-admin', params: {id: notification.id}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{notification.created_at}}</div>
                            <span v-if="notification.new">
                                <router-link class="font-weight-bold" :to="{name: 'show-admin', params: {id: notification.id}}"  v-on:click="seenProperty(notification)" >{{notification.title}}</router-link>
                            </span>
                            <span else>
                                <router-link :to="{name: 'show-admin', params: {id: notification.id}}"  v-on:click="seenProperty(notification)" >{{notification.title}}</router-link>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <div class="topbar-divider d-none d-sm-block"></div>
            
            
             <li v-if="$store.state.profile.role === 'admin'"  class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{commented}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                    <h6 class="dropdown-header">
                    Commented Property Alerts For Manager
                    </h6>
                    <span v-for="(comment , index) in comments" :key="index">
                        <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'show-all-property-notification', params: {id: comment.id}}">
                            <div class="mr-3">
                                <div class="icon-circle bg-primary">
                                <i class="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div >
                                <div class="small text-gray-500">{{comment.created_at}}</div>
                                <span v-if="comment.new">
                                    <a class="font-weight-bold" v-bind:href="`/property-details/${comment.id}`" v-on:click="seenProperty(comment)" >{{comment.title}}</a>
                                </span>
                                <span else>
                                    <a  v-bind:href="`/property-details/${comment.id}`" v-on:click="seenProperty(comment)" >{{comment.title}}</a>
                                </span>
                            </div>
                        </router-link>
                    </span>
                    <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <div class="topbar-divider d-none d-sm-block"></div>
            <li v-if="$store.state.profile.role === 'employee'"   class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{totals}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                Reserved Property Alerts For Employee
                </h6>
                <span v-for="(notification , index) in notifications" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'property-details', params: {slug: notification.slug}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{notification.created_at}}</div>
                            <span v-if="notification.new">
                                <a class="font-weight-bold" v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                            <span else>
                                <a  v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            
            <li v-if="$store.state.profile.role === 'admin'"   class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{appProCounts}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                    <h6 class="dropdown-header">
                        Approved Property Alerts For Employee
                    </h6>
                    <span v-for="(property , index) in properties" :key="index">
                        <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'show-admin', params: {id: property.slug}}">
                            <div class="mr-3">
                                <div class="icon-circle bg-primary">
                                <i class="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div >
                                <div class="small text-gray-500">{{property.created_at}}</div>
                                <span v-if="property.new">
                                    <a class="font-weight-bold" v-bind:href="`/property-details/${property.id}`" v-on:click="seenProperty(property)" >{{property.title}}</a>
                                </span>
                                <span else>
                                    <a  v-bind:href="`/property-details/${property.id}`" v-on:click="seenProperty(property)" >{{property.title}}</a>
                                </span>
                            </div>
                        </router-link>
                    </span>
                    <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <li v-if="$store.state.profile.role === 'landloard'"   class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{appProCounts}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                    <h6 class="dropdown-header">
                        Approved Property Alerts For Employee
                    </h6>
                    <span v-for="(property , index) in properties" :key="index">
                        <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'show-admin', params: {id: property.slug}}">
                            <div class="mr-3">
                                <div class="icon-circle bg-primary">
                                <i class="fas fa-file-alt text-white"></i>
                                </div>
                            </div>
                            <div >
                                <div class="small text-gray-500">{{property.created_at}}</div>
                                <span v-if="property.new">
                                    <a class="font-weight-bold" v-bind:href="`/property-details/${property.id}`" v-on:click="seenProperty(property)" >{{property.title}}</a>
                                </span>
                                <span else>
                                    <a  v-bind:href="`/property-details/${property.id}`" v-on:click="seenProperty(property)" >{{property.title}}</a>
                                </span>
                            </div>
                        </router-link>
                    </span>
                    <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <div class="topbar-divider d-none d-sm-block"></div>
            <li v-if="$store.state.profile.role === 'employee'"   class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{commented}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                Commented Property Alerts For Employee
                </h6>
                <span v-for="(notification , index) in notifications" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'property-details', params: {slug: notification.slug}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{notification.created_at}}</div>
                            <span v-if="notification.new">
                                <a class="font-weight-bold" v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                            <span else>
                                <a  v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <li v-if="$store.state.profile.role === 'admin'"   class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{totals}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Reserved Property Alerts For Employee
                </h6>
                <span v-for="(notification , index) in notifications" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'property-details', params: {slug: notification.slug}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{notification.created_at}}</div>
                            <span v-if="notification.new">
                                <a class="font-weight-bold" v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                            <span else>
                                <a  v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <li v-if="$store.state.profile.role === 'landloard'"   class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{totals}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Reserved Property Alerts
                </h6>
                <span v-for="(notification , index) in notifications" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'property-details', params: {slug: notification.slug}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{notification.created_at}}</div>
                            <span v-if="notification.new">
                                <a class="font-weight-bold" v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                            <span else>
                                <a  v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <li v-if="$store.state.profile.role === 'csr'"   class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{totals}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                Reserved Property Alerts For Employee
                </h6>
                <span v-for="(notification , index) in notifications" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'property-details', params: {slug: notification.slug}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{notification.created_at}}</div>
                            <span v-if="notification.new">
                                <a class="font-weight-bold" v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                            <span else>
                                <a  v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <li v-if="$store.state.profile.role === 'manager'"  class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{commented}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Commented Properties Notification
                </h6>
                <span v-for="(comment , index) in comments" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'show-all-property-notification', params: {id: comment.id}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{comment.created_at}}</div>
                            <span v-if="comment.new">
                                <a class="font-weight-bold" v-bind:href="`/property-details/${comment.id}`" v-on:click="seenProperty(comment)" >{{comment.title}}</a>
                            </span>
                            <span else>
                                <a  v-bind:href="`/property-details/${comment.id}`" v-on:click="seenProperty(comment)" >{{comment.title}}</a>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <div class="topbar-divider d-none d-sm-block"></div>
            <li v-if="$store.state.profile.role === 'landloard'" class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{commented}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  Commented Property
                </h6>
                <span v-for="(notification , index) in notifications" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'property-details', params: {slug: notification.slug}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{notification.created_at}}</div>
                            <span v-if="notification.new">
                                <a class="font-weight-bold" v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <li v-if="$store.state.profile.role === 'csr'" class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{totals}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                  New Property Alerts 
                </h6>
                <span v-for="(newPro , index) in newProperty" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'show-csr', params: {slug: newPro.id}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{newPro.created_at}}</div>
                            <span v-if="newPro.new">
                                <a class="font-weight-bold" v-bind:href="`/show-all-property-csr/${newPro.id}`" v-on:click="seenProperty(newPro)" >{{newPro.title}}</a>
                            </span>
                            <span else>
                                <a  v-bind:href="`/show-all-property-csr/${newPro.id}`" v-on:click="seenProperty(newPro)" >{{newPro.title}}</a>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <li v-if="$store.state.profile.role === 'manager'"   class="nav-item dropdown no-arrow mx-1">
              <a class="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                <i class="fas fa-bell fa-fw"></i>
                <span class="badge badge-danger badge-counter">{{totals}}</span>
              </a>
              <div class="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="alertsDropdown">
                <h6 class="dropdown-header">
                Reserved Property Alerts For Employee
                </h6>
                <span v-for="(notification , index) in notifications" :key="index">
                    <router-link class="dropdown-item d-flex align-items-center" :to="{name: 'property-details', params: {slug: notification.slug}}">
                        <div class="mr-3">
                            <div class="icon-circle bg-primary">
                            <i class="fas fa-file-alt text-white"></i>
                            </div>
                        </div>
                        <div >
                            <div class="small text-gray-500">{{notification.created_at}}</div>
                            <span v-if="notification.new">
                                <a class="font-weight-bold" v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                            <span else>
                                <a  v-bind:href="`/property-details/${notification.id}`" v-on:click="seenProperty(notification)" >{{notification.title}}</a>
                            </span>
                        </div>
                    </router-link>
                </span>
                <a class="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
              </div>
            </li>
            <div class="topbar-divider d-none d-sm-block"></div>
            <li class="nav-item dropdown no-arrow">
              <a class="nav-link dropdown-toggle" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span class="mr-2 d-none d-lg-inline text-gray-600 small">{{$store.state.profile.name}}</span>
                    <avatar v-if="$store.state.profile"
                        :username="$store.state.profile.name"
                        :size="35"
                    ></avatar>
              </a>
              <div class="dropdown-menu dropdown-menu-right shadow animated--grow-in" aria-labelledby="userDropdown">
                    <!-- <router-link v-if="$store.state.profile.role === 'admin'" to="/profile-admin" class="dropdown-item">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </router-link>
                     <router-link v-if="$store.state.profile.role === 'manager'" to="/profile-manager" class="dropdown-item">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </router-link>
                     <router-link v-if="$store.state.profile.role === 'employee'" to="/profile-employee" class="dropdown-item">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </router-link>
                    <router-link v-if="$store.state.profile.role === 'csr'" to="/profile-csr" class="dropdown-item">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </router-link>
                     <router-link v-if="$store.state.profile.role === 'landloard'" to="/profile-landlord" class="dropdown-item">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </router-link>
                    <router-link v-if="$store.state.profile.role === 'tenant'" to="/profile-tenant" class="dropdown-item">
                        <i class="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                    </router-link> -->
                <!-- <div class="dropdown-divider"></div> -->
                <button class="dropdown-item" v-on:click="logout">
                    <i class="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                    Logout
                </button>
              </div>
            </li>
          </ul>

    </nav>
</template>

<script>
import * as auth from "../services/auth_service";
import * as adminService from "../services/admin_service";
import * as PropertiesService from "../services/properties_service";
import * as managerService from "../services/manager_service";
import Avatar from 'vue-avatar';
export default {
    name: "navbar",
    components: {
        Avatar
    },
    data() {
        return {
            loaded: false,
            notifications:[],
            totals:[],
            comments:[],
            commented:[],
            properties:[],
            newProperty:[],
            appProCounts:[],
        };
    },
    mounted() {
        if (!this.$store.state.isLoading) {
            setTimeout(() => {
                this.loaded = true;
            }, 1000);
        }
        this.getNotification();
        this.propertyCount();
        this.commentedPropertyCount();
        this.getCommentedProperty();
        this.getPropertyNotify();
        this.getApprovedPropertyNotification();
        this.getApprovedPropertyCount();
    },
    methods: {
        seenProperty:async function(notification){
                try {
                   const response = await PropertiesService.seenProperty(notification.id);
                    this.notifications = this.notifications.filter(obj => {
                                return obj.id !=notification.id;
                        });
                    this.commentedPropertyCount();
                } catch (error) {
                        this.flashMessage.error({
                        message: 'Some error occurred!',
                        time: 5000
                    });
                }

        },
        logout: async function(){
            await auth.logout();
            this.$router.push('/login');
        },
        getNotification:async function (){
            try {
                const response = await adminService.getNotification();
                this.notifications = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:500
                    });
            }
        },
        getApprovedPropertyCount:async function (){
            try {
                const response = await adminService.getApprovedPropertyCount();
                this.appProCounts = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'some error occurred!',
                    time:500
                });
            }
        },
        getApprovedPropertyNotification:async function (){
            try {
                const response = await adminService.getApprovedPropertyNotification();
                this.properties = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:500
                    });
            }
        },
        propertyCount:async function(){
            try {
                const response = await adminService.propertyCount();
                this.totals = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:500
                    });
            }
        },
        commentedPropertyCount:async function(){
            try {
                const response = await managerService.commentedPropertyCount();
                this.commented = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:500
                    });
            }
        },
        getCommentedProperty:async function (){
            try {
                const response = await managerService.getCommentedProperty();
                this.comments = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time:500
                    });
            }
        },
        getPropertyNotify:async function(){
            try {
                const response = await adminService.getPropertyNotify()
                this.newProperty = response.data;
            } catch (error) {
                this.flashMessage.error({
                    message: 'Some error occurred!',
                    time: 5000
                });
            }
        },
        toggleSidebar() {
            document.getElementsByTagName('body')[0].classList.contains('sidebar-toggled') ? document.getElementsByTagName('body')[0].classList.remove('sidebar-toggled') : document.getElementsByTagName('body')[0].classList.add('sidebar-toggled');
            document.getElementById('accordionSidebar').classList.contains('toggled') ? document.getElementById('accordionSidebar').classList.remove('toggled') : document.getElementById('accordionSidebar').classList.add('toggled');
        }
    }
};
</script>

<style lang="stylus">

</style>
<style scoped>
    .dropdown-item.active, .dropdown-item:active {
    color: #fff;
    text-decoration: none;
    background-color: #f8f9fa;
}
</style>
