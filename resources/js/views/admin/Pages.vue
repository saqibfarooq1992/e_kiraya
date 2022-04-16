<template>
    <div class="w-100">
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Add Pages</h1>
            </div>
            <div class="row" style="margin-left: 4%;">
                <router-link to="/about">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-primary shadow h-100 py-2" style="border-radius: 50%; width: 155px;">
                            <div class="card-body" style="border-radius: 50%;">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">About us</div>
                                    </div>
                                    <div class="col-auto">
                                    <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 12px; margin-top: 124%;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/admin-blogs">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-info shadow h-100 py-2" style="border-radius: 50%; width: 155px;">
                            <div class="card-body" style="border-radius: 50%;">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-info text-uppercase mb-1">Blogs</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 12px; margin-top: 124%;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/header">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-success shadow h-100 py-2" style="border-radius: 50%; width: 155px;">
                            <div class="card-body" style="border-radius: 50%;">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Header</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 12px; margin-top: 124%;"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </router-link>
                <router-link to="/footer">
                    <div class="col-xl-3 col-md-6 mb-4">
                        <div class="card border-left-danger shadow h-100 py-2" style="border-radius: 50%; width: 155px;">
                            <div class="card-body" style="border-radius: 50%;">
                                <div class="row no-gutters align-items-center">
                                    <div class="col mr-2">
                                        <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Footer</div>
                                        <div class="h5 mb-0 font-weight-bold text-gray-800"></div>
                                    </div>
                                    <div class="col-auto">
                                        <i class="fas fa-arrow-right fa-2x text-gray-300" style="margin-right: 12px; margin-top: 124%;"></i>
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
    import LineChart from '../../components/LineChart';
    import Pie from '../../components/PieChart';
    export default {
        name: "Dashboard",
        components: {
            LineChart,
            Pie
        }
    }

</script>

<style>

</style>
