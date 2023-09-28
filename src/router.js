import { createRouter, createWebHistory } from 'vue-router';

import HomePage from './pages/HomePage.vue';
import MainProjects from './pages/MainProjects.vue';
import SingleProject from './pages/SingleProject.vue';
import NotFound from './pages/NotFound.vue';


const router = createRouter({

    history: createWebHistory(),
    routes: [
    {
        path: '/',
        name: 'home',
        component: HomePage
    },
    {
        path: '/projects',
        name: 'projects',
        component: MainProjects
    },
    {
        path: '/project/:slug',
        name: 'project',
        component: SingleProject
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'not-found',
        component: NotFound
    },
    ]
});
export { router };