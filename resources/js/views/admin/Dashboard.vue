<template>
    <div class="w-100">
        <div class="container-fluid" >
            <!-- <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">All Dashboard</h1>
            </div> -->
            <div class="row mx-auto mobiledash" style="margin-left: 8%;">
                <router-link to="/admin-dashboard">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2" style="border-radius: 50%; width: 136px;">
                            <div class="card-body" style="border-radius: 50%;">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Admin Dashboard</div>
                                    </div>
                                    <div class="col-auto">
                                    <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 5px;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/manager-dashboard-for-admin">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2" style="border-radius: 50%; width: 136px;">
                            <div class="card-body" style="border-radius: 50%;">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Manager Dashboard</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 5px;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/csr-dashboard-admin">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-success shadow h-100 py-2" style="border-radius: 50%; width: 136px;">
                            <div class="card-body" style="border-radius: 50%;">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">CSR<br>Dashboard</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 5px;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/employee-dashboard-for-admin">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-danger shadow h-100 py-2" style="border-radius: 50%; width: 136px;">
                            <div class="card-body" style="border-radius: 50%;">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Employee Dashboard</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 5px;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/landloard-dashboard-admin">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-warning shadow h-100 py-2" style="border-radius: 50%; width: 136px;">
                            <div class="card-body" style="border-radius: 50%;">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-warning text-uppercase mb-1">Landlord Dashboard</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 5px;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/tenant-dashboard-admin">
                <div class="col-xl-3 col-md-6 mb-4">
                    <div class="card border-left-secondary shadow h-100 py-2" style="border-radius: 50%; width: 136px;">
                        <div class="card-body" style="border-radius: 50%;">
                            <div class="row no-gutters align-items-center">
                                <div class="col mr-2">
                                    <div class="text-xs font-weight-bold text-secondary text-uppercase mb-1">Tenant Dashboard</div>
                                    <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                                </div>
                                <div class="col-auto">
                                    <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 5px;"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </router-link>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Dashboard",

    }

</script>

<style>
@media only screen and (max-width:660px ){
         .mobiledash{
             display: flex;
             justify-content: center;
         }
         .mobiledash{
             margin-left: 0px !important;
         }
      }
</style>
