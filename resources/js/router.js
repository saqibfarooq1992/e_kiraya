import Vue from 'vue';
import Router from 'vue-router';
const Welcome = () => import('./views/Welcome.vue');
const Home = () => import('./views/Home.vue');
import * as auth from './services/auth_service';
import store from './store';

Vue.use(Router);

const routes = [{
        path: '/',
        name: Welcome,
        component: Welcome,
    },
    {
        path:"/about-us",
        name:"about-us",
        component: () => import("./views/user/AboutUs.vue")
    },
    {
        path:"/guides-for-tenants",
        name:"guidefortenant",
        component: () => import("./views/user/guidesfortenant.vue")
    },
    {
        path:"/guide-for-landlord",
        name:"Guide-for-landlord",
        component: () => import("./views/user/Guide-for-landlord.vue")
    },
    {
        path:"/benefits",
        name:"Benefits",
        component: () => import("./views/user/Benefits.vue")
    },
    {
        path:"/Privacy-policy",
        name:"Privacy-policy",
        component: () => import("./views/user/Privacypolicy.vue")
    },
    {
        path:"/How-Eko-Works",
        name:"How-Eko-Works",
        component: () => import("./views/user/HowEkoWorks.vue")
    },
    {
        path:"/Faqs",
        name:"faq",
        component: () => import("./views/user/Help&Support.vue")
    },
    {
        path:"/invoice-user/:slug",
        name:"invoice-user",
        component: () => import("./views/user/invoice.vue")
    },
    {
        path:"/project",
        name:"project",
        component: () => import("./views/user/Project.vue")
    },

    {
        path:"/contact-us",
        name:"contact-us",
        component: () => import("./views/user/Contact.vue")
    },
    {
        path:"/favourite",
        name:"favourite",
        component: () => import("./views/user/FavouriteAdvertisment.vue")
    },
    {
        path:"/property-details/:slug",
        name:"property-details",
        component: () => import("./views/user/PropertyDetails.vue")
    },
    {
        path:"/MyAds",
        name:"MyAds",
        component: () => import("./views/user/MyAds.vue")
    },
    {
        path:"/pendding-ads",
        name:"pendding-ads",
        component: () => import("./views/user/PenddingAds.vue")
    },
    {
        path:"/blogs",
        name:"blogs",
        component: () => import("./views/user/Blogs.vue")
    },
    {
        path:"/single-blogs/:slug",
        name:"single-blogs",
        component: () => import("./views/user/SingleBlog.vue")
    },
    {
        path:"/advartisment",
        name:"advartisment",
        component: () => import("./views/user/Advertisment.vue")
    },
    {
        path:"/advartisment-detail",
        name:"advartisment-detail",
        component: () => import("./views/user/AdsDetail.vue")
    },
    {
        path:"/map",
        name:"map",
        component: () => import("./views/user/Map.vue")
    },
    {
        path: '/add-property',
        name: '/add-property',
        component: () => import('./views/admin/Property.vue'),
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next('/login');
            } else {
                next('/');
            }
        }
    },

    //Admin route
    {
        path: "/admin",
        component: Home,
        children: [{
            path:"",
            name:"admin-dashboard",
            component: () => import("./views/admin/AdminDashboard.vue")
        },

        {
            path:"/property-admin",
            name:"property-admin",
            component: () => import("./views/admin/AddProperty.vue")
        },
        {
            path:"/admin-blogs",
            name:"admin-blogs",
            component: () => import("./views/admin/Blogs.vue")
        },
        {
            path: '/show-admin/:id',
            name: 'show-admin',
            component: () => import('./views/admin/Show.vue')
        },
        {
            path: '/show-reserved/:id',
            name: 'show-reserved',
            component: () => import('./views/admin/ShowReserved.vue')
        },
        {
            path: '/year-invoice/:id',
            name: 'year-invoice',
            component: () => import('./views/admin/YearInvoice.vue')
        },

        {
            path:"/add-pages",
            name:"add-pages",
            component: () => import("./views/admin/Pages.vue")
        },

        {
            path:"/suspended",
            name:"suspended",
            component: () => import("./views/admin/SuspendedProperty.vue")
        },



        {
            path: '/about',
            name: 'about',
            component: () => import('./views/admin/AboutUs.vue')
        },
        {
            path: '/header',
            name: 'header',
            component: () => import('./views/admin/Header.vue')
        },
        {
            path: '/help-support-admin',
            name: 'help-support-admin',
            component: () => import('./views/admin/Faq.vue')
        },

        {
            path: '/add-property-admin',
            name: '/add-property-admin',
            component: () => import('./views/admin/Property.vue')
        },

        {
            path: '/invoice-admin/:id',
            name: 'invoice-admin',
            component: () => import('./views/admin/Invoice.vue')
        },


        {
            path: '/footer',
            name: 'footer',
            component: () => import('./views/admin/Footer.vue')
        },

        {
            path:"/profile-admin/:id",
            name:"profile-admin",
            component: () => import("./views/admin/Profile.vue")
        },

        {
            path:"/notification",
            name:"notification",
            component: () => import("./views/admin/LeaseTerminationNotice.vue")
        },




        {
            path:"/add-ones-admin",
            name:"add-ones-admin",
            component: () => import("./views/admin/AddOnes.vue")
        },


        {
            path: '/subscriber',
            name: 'subscriber',
            component: () => import('./views/admin/Subscriber.vue')
        },




    ],
        beforeEnter(to, from, next) {
            if (auth.getUserRole() === 'admin') {
                next();
            } else {
                next('/404');
            }
        }
    },
    //Employee route
    // {
    //     path: "/employee",
    //     component: Home,
    //     children: [{
    //         path:'',
    //         name: 'employee-dashboard',
    //         component: () => import("./views/employee/EmployeeDashboard.vue")
    //     },

    //     {
    //         path: '/show-employee/:id',
    //         name: 'show-employee',
    //         component: () => import('./views/employee/Show.vue')
    //     },

    //     {
    //         path: '/property-employee',
    //         name: 'property-employee',
    //         component: () => import('./views/admin/Property.vue')
    //     },

    //     {
    //         path:"/profile-employee",
    //         name:"profile-employee",
    //         component: () => import("./views/Profile.vue")
    //     },


    //     {
    //         path:"/lease-termination-employee",
    //         name:"lease-termination-employee",
    //         component: () => import("./views/admin/Leasetermination.vue")
    //     },


    //     {
    //         path:"/add-property-employee",
    //         name:"add-property-employee",
    //         component: () => import("./views/admin/AddProperty.vue")
    //     },


    // ],
    //     beforeEnter(to, from, next) {
    //         if (auth.getUserRole() ==='employee') {
    //             next();
    //         } else {
    //             next('/404');
    //         }
    //     }
    // },
    //manager route
    // {
    //     path: "/manager",
    //     component: Home,
    //     children: [{
    //         path: '',
    //         name: 'manager-dashboard',
    //         component: () => import("./views/manager/ManagerDashboard.vue")
    //     },

    //     {
    //         path: '/show-manager/:id',
    //         name: 'show-manager',
    //         component: () => import('./views/manager/Show.vue')
    //     },

    //     {
    //         path: '/property',
    //         name: 'property',
    //         component: () => import('./views/admin/Property.vue')
    //     },

    //     {
    //         path: '/rules-manager',
    //         name: 'rules-manager',
    //         component: () => import('./views/admin/Rule.vue')
    //     },
    //     {
    //         path: '/invoice-manager/:id',
    //         name: 'invoice-manager',
    //         component: () => import('./views/admin/Invoice.vue')
    //     },

    //     {
    //         path:"/profile-manager",
    //         name:"profile-manager",
    //         component: () => import("./views/Profile.vue")
    //     },



    //     {
    //         path:"/total-rent",
    //         name:"total-rent",
    //         component: () => import("./views/admin/TotalRentForLandlord.vue")
    //     },



    // ],
    // beforeEnter(to, from, next) {
    //     if (auth.getUserRole() === 'manager') {
    //         next();
    //     } else {
    //         next('/404');
    //     }
    // }
    // },
     //CSR route
    {
        path: "/csr",
        component: Home,
        children: [{
            path: '',
            name: 'csr-dashboard-csr',
            component: () => import("./views/csr/CsrDashboard.vue")
        },
        {
            path: '/show-csr/:id',
            name: 'show-csr',
            component: () => import('./views/csr/Show.vue')
        },
        {
            path: '/property-csr',
            name: 'property-csr',
            component: () => import('./views/admin/Property.vue')
        },
        {
            path:"/profile-csr",
            name:"profile-csr",
            component: () => import("./views/Profile.vue")
        },





    ],
    beforeEnter(to, from, next) {
        if (auth.getUserRole() ==='csr') {
            next();
        } else {
            next('/404');
        }
    }
    },
    //landloard route
    {
        path: "/landloard",
        component: Home,
        children: [
            {
                path: "",
                name: "landloard-dashboard",
                component: () => import("./views/landloard/LandloardDashboard.vue")
            },
            {
                path: '/property-landlord',
                name: 'property-landlord',
                component: () => import('./views/landloard/Property.vue')
            },
            {
                path:'/show-landlord/:id',
                name:'show-landlord',
                component: () => import("./views/landloard/Show.vue")
            },
            {
                path: '/invoice-landlord/:id',
                name: 'invoice-landlord',
                component: () => import('./views/landloard/Invoice.vue')
            },
            {
                path:"/profile-landlord",
                name:"profile-landlord",
                component: () => import("./views/Profile.vue")
            },
            {
                path: '/tenant-invoice/:id',
                name: 'tenant-invoice',
                component: () => import('./views/landloard/YearInvoice.vue')
            },

        ],
        beforeEnter(to, from, next) {
            if (auth.getUserRole() ==='landloard') {
                next();
            } else {
                next('/404');
            }
        }

    },
    //Tenent route
    {
        path: "/tenant",
        component: Home,
        children: [
            {
                path:'',
                name:'tenant-dashboard',
                component: () => import("./views/tenant/TenantDashboard.vue")
            },

            {
                path:'/show-tenant/:id',
                name:'show-tenant',
                component: () => import("./views/tenant/Show.vue")
            },
            {
                path:"/profile-tenant",
                name:"profile-tenant",
                component: () => import("./views/Profile.vue")
            },
            {
                path: '/invoice-tenant/:id',
                name: 'invoice-tenant',
                component: () => import('./views/tenant/Invoice.vue')
            },
        ],
        beforeEnter(to, from, next) {
            if (auth.getUserRole() ==='tenant') {
                next();
            } else {
                next('/404');
            }
        }

    },
    {
        path: '/login',
        name: 'login',
        component: () => import('./views/authentication/Login.vue'),
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next('/admin');
            }
        }
    },
    {
        path: '/reset-password-request',
        name: 'reset-password-request',
        component: () => import('./views/authentication/ResetPasswordRequest.vue'),
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/reset-password/:email',
        name: 'reset-password',
        component: () => import('./views/authentication/ResetPassword.vue'),
        beforeEnter(to, from, next) {
            if (!auth.isLoggedIn()) {
                next();
            } else {
                next('/');
            }
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('./views/authentication/Register.vue'),
        // beforeEnter(to, from, next) {
        //     if (!auth.isLoggedIn()) {
        //         next();
        //     } else {
        //         next('/');
        //     }
        // }
    },

    {
        path: '*',
        component: () => import('./views/404.vue')
    },

];
const router = new Router({
    mode: 'history',
    routes: routes,
    scrollBehavior:(to,from,savedPosition) => ({y:0}),
    linkActiveClass: 'active',
});

// router.beforeResolve((to, from, next) => {
//     store.state.isLoading = true;
//     next();
// });

// router.afterEach((to, from) => {
//     store.state.isLoading = false;
// });

export default router;
