import { createApp } from 'vue'
import App from './App.vue'
import { createWebHashHistory, createRouter } from 'vue-router'

// Import rotas
import CREATE from "./components/01-CREATE.vue"
import READ from "./components/02-READ.vue"
import UPDATE from "./components/03-UPDATE.vue"
import DELETE from "./components/04-DELETE.vue"
import Home from "./components/Home.vue"
import store from './store'

const routes = [
    { path: "/", redirect: "/home" },
    { path: "/home", component: Home },
    { path: "/create", component: CREATE },
    { path: "/read", component: READ },
    { path: "/update", component: UPDATE },
    { path: "/delete", component: DELETE } 
]


const router = new createRouter({
    routes,
    history: createWebHashHistory()
})


createApp(App).use(store).use(router).mount('#app')
