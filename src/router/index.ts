import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home.vue";
import Notes from "../views/notes.vue";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/notes',
            name: 'notes',
            component: Notes
        },
    ]
})

// exportar la variables
export default router;