import About from '@/views/About.vue';
import ContactUs from '@/views/ContactUs.vue';
import Home from '@/views/Home.vue';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: About
    },
    {
        path: '/contact-us',
        name: 'contact-us',
        component: ContactUs
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
