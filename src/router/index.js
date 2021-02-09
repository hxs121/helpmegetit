import Vue from 'vue'
import VueRouter from 'vue-router'
import Account from "@/views/Account";
import Run_Center from "@/views/Job_Offer";
import Help_Center from "@/views/Help_Center";
import My_Post from "@/views/My_Post";
import My_Job from "@/views/My_Job";
import Contact from "@/views/Contact";
import MuseUI from 'muse-ui';
import 'muse-ui/dist/muse-ui.css';
import Login from "@/views/Login";

Vue.use(MuseUI);

Vue.use(VueRouter)


const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes:[
        {
            path: '/',
            name: 'help_center',
            component: () => import('../views/Help_Center.vue')
        },
        {
            path: '/job_offer',
            name: 'job_offer',
            component: () => import('../views/Job_Offer.vue')
        },
        {
            path: '/account',
            name: 'account',
            component: () => import('../views/Account.vue')
        },
        {
            path: '/help_center',
            name: 'help_center',
            component: () => import('../views/Help_Center.vue')
        },
        {
            path: '/my_post',
            name: 'my_post',
            component: () => import('../views/My_Post.vue')
        },
        {
            path: '/my_job',
            name: 'my_job',
            component: () => import('../views/My_Job.vue')
        },
        {
            path: '/contact',
            name: 'contact',
            component: () => import('../views/Contact.vue')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/Login.vue')
        },
    ]
})

// const routes = [
//     {
//         path: '/',
//         name: 'help_center',
//         component: () => import('../views/Help_Center.vue')
//     },
//     {
//         path: '/run_center',
//         name: 'run_center',
//         component: () => import('../views/Job_Offer.vue')
//     },
//     {
//         path: '/account',
//         name: 'account',
//         component: () => import('../views/Account.vue')
//     },
//     {
//         path: '/address',
//         name: 'address',
//         component: () => import('../views/Address.vue')
//     },
//     {
//         path: '/help_center',
//         name: 'help_center',
//         component: () => import('../views/Help_Center.vue')
//     },
//     {
//         path: '/my_post',
//         name: 'my_post',
//         component: () => import('../views/My_Post.vue')
//     },
//     {
//         path: '/my_job',
//         name: 'my_job',
//         component: () => import('../views/My_Job.vue')
//     },
//     {
//         path: '/contact',
//         name: 'contact',
//         component: () => import('../views/Contact.vue')
//     },
//     {
//         path: '/login',
//         name: 'login',
//         component: () => import('../views/Login.vue')
//     },
// ]

export default router
