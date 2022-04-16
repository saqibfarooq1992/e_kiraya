<template>
    <div>
        <router-link to="">
            <div class="col-xl-2 col-md-3 col-sm-6 col-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2" style="border-radius: 50%; width: 136px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Invoice for Tenant</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{{totalPaidRent}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
        <router-link to="">
            <div class="col-xl-2 col-md-3 col-sm-6 col-6 mb-4">
                <div class="card border-left-info shadow h-100 py-2" style="border-radius: 50%; width: 136px;">
                    <div class="card-body">
                        <div class="row no-gutters align-items-center">
                            <div class="col mr-2">
                                <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Invoice for Landlord</div>
                                <div class="h5 mb-0 font-weight-bold text-gray-800">{{totalPaidRent}}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {

        }
    },
    mounted() {

    },
    methods: {

    },
}
</script>
