<template>
<main>
    <scroll-fixed-header :fixed.sync="fixed" :threshold="56">
	<header id="header" class="clearfix">
        <nav class="navbar navbar-default  navbar-expand-lg">
            <div class="container-fluid p-2 mx-2">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#tr-mainmenu" aria-controls="tr-mainmenu" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"><i class="fa fa-align-justify"></i></span>
                </button>
                <router-link class="navbar-brand" to="/"><img  :src="`${$store.state.serverPath}images/eko.png`" style="width: 100px;" alt="Logo"></router-link>
                <div class="collapse navbar-collapse" id="tr-mainmenu">
                    <ul class="nav navbar-nav mx-auto">
                        <li class="nav-item"><router-link class="nav-link" to="/">Home</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/about-us">About Us</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/How-Eko-Works">How EKO Works</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/project">Projects</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/Faqs">Help/Support</router-link></li>
                        <!-- <li v-if="$store.state.isLoggedIn"><router-link to="/my-profile">Profile</router-link></li> -->
                        <li class="nav-item"><router-link class="nav-link" to="/blogs">blog</router-link></li>
                        <li class="nav-item"><router-link class="nav-link" to="/contact-us">Contact Us</router-link></li>
                    </ul>
                    <div class="nav-right">
                    <ul class="sign-in" v-if="!$store.state.isLoggedIn">
                        <li class="nav-item" ><router-link to="/login"> Sign In </router-link></li>
                    </ul>
                    <ul class="sign-in" v-else>
                        <li ><router-link class="dashboard" v-if="$store.state.profile.role === 'admin'" to="/admin"><img src="/images/bg/user.png" alt=""></router-link></li>
                        <li ><router-link  v-if="$store.state.profile.role === 'landloard'" to="/landloard"><img src="/images/bg/user.png" alt=""></router-link></li>
                        <li ><router-link  v-if="$store.state.profile.role === 'csr'" to="/csr"><img src="/images/bg/user.png" alt=""></router-link></li>
                        <li ><router-link  v-if="$store.state.profile.role === 'tenant'" to="/tenant"><img src="/images/bg/user.png" alt=""></router-link></li>
                        <li ><router-link  v-if="$store.state.profile.role === 'employee'" to="/employee"><img src="/images/bg/user.png" alt=""></router-link></li>
                        <li ><router-link  v-if="$store.state.profile.role === 'manager'" to="/manager"><img src="/images/bg/user.png" alt=""></router-link></li>
                    </ul>
                    <ul class="sign-in">
                        <li v-if="$store.state.profile.role === 'admin'" >
                            <router-link to="/add-property-admin" class="btn post-ad">Post Your Ad <i class="fa fa-plus text-white"></i></router-link>
                        </li>
                        <li v-if="$store.state.profile.role === 'landloard'" >
                            <router-link to="/property-landlord" class="btn post-ad">Post Your Ad <i class="fa fa-plus text-white"></i></router-link>
                        </li>
                        <li v-if="$store.state.profile.role === 'employee'" >
                            <router-link to="/property-employee" class="btn post-ad">Post Your Ad <i class="fa fa-plus text-white"></i></router-link>
                        </li>
                        <li v-if="$store.state.profile.role === 'manager'" >
                            <router-link to="/property" class="btn post-ad">Post Your Ad <i class="fa fa-plus text-white"></i></router-link>
                        </li>
                        <li v-if="!$store.state.isLoggedIn">
                            <router-link to="/add-property" class="btn post-ad">Post Your Ad <i class="fa fa-plus text-white"></i></router-link>
                        </li>
                    </ul>
                </div>
                </div>
            </div>
        </nav>

    </header>
    </scroll-fixed-header>
</main>
</template>
<script>
    export default {
        name:'Header',
        data(){
            return{
                fixed: false,
            };
        },
    }
</script>
<style scoped>
.exact-active{
    color:green !important;

}
@media only screen and (max-width: 600px) {
.sign-in{
    margin-top: 20px;
    display: inline-block;
}
.post-ad{
position: static;
display: inline;
}

#header a.btn{
    position: static;
    display: inline;
}
.navbar-toggler{
    margin-top: 20px;
}
}
@media only screen and (max-width: 786px) {

.sign-in{
    margin-top: 50px;
    display: inline-block;
}
.post-ad{
position: static;
display: inline;
}

#header a.btn{
    position: static;
    display: inline;
}
.navbar-toggler{
    margin-top: 20px;
}
}
@media only screen and (max-width: 990px) {

.navbar-toggler{
	margin-top: 15px;
}
}
@media only screen and (max-width: 1200px) {

#header a.btn{
position: none;
top: 60px;
right: 15px;
z-index: 10;
width: 134px;
}
.banner{
	margin-top: 100px !important;
}
}


</style>
