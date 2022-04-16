<template>
    <div>
        <!-- Admin Dashboard -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" ref="sidebar" id="accordionSidebar" v-if="$store.state.profile.role === 'admin'">
            <router-link to="/" exact class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon ">
                    <img style="width: 93px;"  :src="`${$store.state.serverPath}images/eko.png`" alt="Logo">
                </div>
            </router-link>
            <li class="nav-item">
                <router-link to="/admin" class="nav-link" exact>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/add-ones-admin" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Add on's</span>
                </router-link>
            </li>
            <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/suspended" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Suspended Property</span>
                </router-link>
            </li>
            <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/admin-blogs" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Blogs</span>
                </router-link>
            </li>
             <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/add-property-admin" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Add Property</span>
                </router-link>
            </li>
             <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/subscriber" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Subscriber</span>
                </router-link>
            </li>
            <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/add-pages" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Pages</span>
                </router-link>
            </li>

        </ul>
         <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" ref="sidebar" id="accordionSidebar" v-if="$store.state.profile.role === 'landloard'">
            <router-link to="/" exact class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon ">
                   <img style="width: 93px;"  :src="`${$store.state.serverPath}images/eko.png`" alt="Logo">
                </div>
            </router-link>
            <li class="nav-item">
                <router-link to="/landloard" class="nav-link" exact>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>

            <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/property-landlord" class="nav-link" exact>
                    <i class="fas fa-plus-circle"></i>
                    <span>Add Property</span>
                </router-link>
            </li>
            <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/property-landlord" class="nav-link" exact>
                    <i class="fas fa-plus-circle"></i>
                    <span>Add Advartisment</span>
                </router-link>
            </li>
            <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/Faqs" class="nav-link" exact>
                    <i class="fas fa-hands-helping"></i>
                    <span>Help / Support</span>
                </router-link>
            </li>
            <hr class="sidebar-divider">

        </ul>
        <!-- Manager Dashboard -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" ref="sidebar" id="accordionSidebar" v-if="$store.state.profile.role === 'manager'">
            <router-link to="/" exact class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon ">
                    <img style="width: 93px;"  :src="`${$store.state.serverPath}images/eko.png`" alt="Logo">
                </div>
            </router-link>
            <li class="nav-item">
                <router-link to="/manager" class="nav-link" exact>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>
             <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/property" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Add Property</span>
                </router-link>
            </li>
             <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/assigned-property" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Assigned Property</span>
                </router-link>
            </li>
              <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/commented-property-manager" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Commented Property</span>
                </router-link>
            </li>

        </ul>
        <!-- Employee Dashboard -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" ref="sidebar" id="accordionSidebar" v-if="$store.state.profile.role === 'employee'">
            <router-link to="/" exact class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon ">
                    <img style="width: 93px;"  :src="`${$store.state.serverPath}images/eko.png`" alt="Logo">
                </div>
            </router-link>
            <li class="nav-item">
                <router-link to="/employee" class="nav-link" exact>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>
             <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/property-employee" class="nav-link" exact>
                    <i class="fas fa-synagogue"></i>
                    <span>Add Property</span>
                </router-link>
            </li>
             <hr class="sidebar-divider">
               <li class="nav-item">
                <router-link to="/commented-property" class="nav-link" exact>
                    <i class="fas fa-synagogue"></i>
                    <span>Commented Property</span>
                </router-link>
            </li>
             <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/Faqs" class="nav-link" exact>
                    <i class="fas fa-hands-helping"></i>
                    <span>Help / Support</span>
                </router-link>
            </li>

        </ul>
        <!-- Renter Dashboard -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" ref="sidebar" id="accordionSidebar" v-if="$store.state.profile.role === 'tenant'">
            <router-link to="/" exact class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon ">
                   <img style="width: 93px;"  :src="`${$store.state.serverPath}images/eko.png`" alt="Logo">
                </div>
            </router-link>
            <li class="nav-item">
                <router-link to="/tenant" class="nav-link" exact>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>
            <li class="nav-item">
                <router-link to="/Faqs" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Help & Support</span>
                </router-link>
            </li>

        </ul>
        <!-- Csr Dashboard -->
        <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" ref="sidebar" id="accordionSidebar" v-if="$store.state.profile.role === 'csr'">
            <router-link to="/" exact class="sidebar-brand d-flex align-items-center justify-content-center">
                <div class="sidebar-brand-icon ">
                    <img style="width: 93px;"  :src="`${$store.state.serverPath}images/eko.png`" alt="Logo">
                </div>
            </router-link>
            <li class="nav-item">
                <router-link to="/csr" class="nav-link" exact>
                    <i class="fas fa-fw fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                </router-link>
            </li>
             <hr class="sidebar-divider">
            <li class="nav-item">
                <router-link to="/property-csr" class="nav-link" exact>
                    <i class="fas fa-fw fa-folder"></i>
                    <span>Add Property</span>
                </router-link>
            </li>

        </ul>
    </div>
</template>

<script>
    export default {
        name: "sidebar",
        mounted() {
            this.toggleSidebar();
        },
        methods: {
            toggleSidebar() {
                document
                    .getElementsByTagName("body")[0]
                    .classList.contains("sidebar-toggled") ?
                    document
                    .getElementsByTagName("body")[0]
                    .classList.remove("sidebar-toggled") :
                    document
                    .getElementsByTagName("body")[0]
                    .classList.add("sidebar-toggled");
                this.$refs.sidebar.classList.contains("toggled") ?
                    this.$refs.sidebar.classList.remove("toggled") :
                    this.$refs.sidebar.classList.add("toggled");
            }
        }
    };

</script>
