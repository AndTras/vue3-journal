import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

import isAuthenticatedGuard from '../modules/auth/router/auth-guard'

import authRouter from '../modules/auth/router'
import daybookRouter from '../modules/daybook/router'

const routes = [{
        path: '/',
        component: () =>
            import ( /* webpackChunkName: "Login" */ '@/modules/auth/views/Login.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/auth',
        ...authRouter,
    },
    {
        path: '/daybook',
        beforeEnter: [isAuthenticatedGuard],
        ...daybookRouter
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router