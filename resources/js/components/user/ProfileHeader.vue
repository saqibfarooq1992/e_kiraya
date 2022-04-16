<template>
    <main>
         <div class="breadcrumb-section" style="padding-top:1px">
            <ol class="breadcrumb">
                <li><a href="index.html">Home</a></li>
                <li>Ad Post</li>
            </ol>
            <h2 class="title mt-3">My Profile</h2>
        </div>
        <div class="ad-profile section">
            <div class="user-profile">
                <div class="user-images">
                    <img :src="`${$store.state.serverPath}storage/${$store.state.profile.avatar}`" style="width:100px; border-radius: 50%;" alt="User Images" class="img-fluid">
                </div>
                <div class="user">
                    <h2>Salam, <a href="#">{{$store.state.profile.name}}</a></h2>
                    <h5>You last logged in at: 14-01-2018 6:40 AM [ USA time (GMT + 6:00hrs)]</h5>
                </div>

                <div class="favorites-user">
                    <div class="my-ads">
                        <a href="my-ads.html">23<small>My ADS</small></a>
                    </div>
                    <div class="favorites">
                        <a href="#">18<small>Favorites</small></a>
                    </div>
                </div>
            </div><!-- user-profile -->

            <ul class="user-menu">
                <li class="active"><router-link to="/my-profile">Profile</router-link></li>
                <li v-if="$store.state.isLoggedIn"><router-link to="/MyAds">My ads</router-link></li>
                <li><router-link to="/favourite">Favourite ads</router-link></li>
                <!-- <li><a href="archived-ads.html">Archived ads </a></li> -->
                <li><router-link to="/pendding-ads">Pending approval</router-link></li>
            </ul>
        </div>
    </main>
</template>
