import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import { createStore } from 'vuex'
import Toaster from '@meforma/vue-toaster';
import VueCookies from 'vue-cookies'

// Import das Stores
import userStore from './store/userStore'
import storeAlerts from './store/storeAlerts'

// Import das views
import Home from "./components/views/HomeView.vue"
import Register from "./components/views/RegisterView.vue"
import Login from "./components/views/LoginView.vue"
import Dashboard from "./components/views/DashboardView.vue"
import error404 from "./components/views/Error404.vue"

// Importando módulos das stores

const store = createStore({
    modules: {
        userStore,
        storeAlerts
    }
})

// Definição das rotas

const routes = [
    { path: "/", redirect: "/login" },
    { path: "/login", component: Login },
    { path: "/home", component: Home, meta: { auth: true } },
    { path: "/register", component: Register },
    { path: "/dashboard", component: Dashboard , meta: { auth: true } },
    { path: "/:pathMatch(.*)", component: error404 }
]

// Create Router

const router = new createRouter({
    routes,
    history: createWebHashHistory()
})

// Regras para proteção de rotas
router.beforeEach((to, from, next) => {
    if (to.meta.auth && !VueCookies.get("logado")) {
        next("/login")
    }else if(!to.meta.auth && VueCookies.get("logado")){
        next("/dashboard")
    }else{
        next()
    }
    
})

createApp(App)
    .use(store)
    .use(router)
    .use(Toaster)
    .use(VueCookies)
    .mount('#app')
