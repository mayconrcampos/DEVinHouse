import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import { createStore } from 'vuex'
import Toaster from '@meforma/vue-toaster';
import VueCookies from 'vue3-cookies'

// Import das Stores
import userStore from './store/userStore'
import storeAlerts from './store/storeAlerts'

// Import das views
import Home from "./components/views/HomeView.vue"
import Register from "./components/views/RegisterView.vue"
import Login from "./components/views/LoginView.vue"
import Dashboard from "./components/views/DashboardView.vue"
import error404 from "./components/views/Error404.vue"

const store = createStore({
    modules: {
        userStore,
        storeAlerts
    }
})



const routes = [
    { path: "/", redirect: "/login" },
    { path: "/home", component: Home },
    { path: "/register", component: Register },
    { path: "/login", component: Login },
    { path: "/dashboard", component: Dashboard },
    { path: "/:pathMatch(.*)", component: error404 }
]


const router = new createRouter({
    routes,
    history: createWebHashHistory()
})

createApp(App)
    .use(store)
    .use(router)
    .use(Toaster)
    .use(VueCookies)
    .mount('#app')
