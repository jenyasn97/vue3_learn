import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../pages/Main.vue')
    },
    {
        path: '/posts',
        component: () => import('../pages/UserPage.vue')
    },
    {
        path: '/about',
        component: () => import('../pages/About.vue')
    },
    {
        path: '/posts/:id',
        component: () => import('../pages/PostPage.vue')
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router