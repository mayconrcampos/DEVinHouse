import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import { createStore } from 'vuex'

import userStore from './store/userStore'
import storeAlerts from './store/storeAlerts'

const store = createStore({
  modules: {
      userStore,
      storeAlerts 
  }
})

// Import das views
import Home from "./components/views/HomeView.vue"
import Register from "./components/views/RegisterView.vue"
import Login from "./components/views/LoginView.vue"
import Dashboard from "./components/views/DashboardView.vue"

const routes = [
    {path: "/", redirect: "/login"},
    {path: "/home", component: Home},
    {path: "/register", component: Register},
    {path: "/login", component: Login},
    {path: "/dashboard", component: Dashboard}
]


const router = new createRouter({
    routes,
    history: createWebHashHistory()
})

createApp(App)
.use(store)
.use(router)
.mount('#app')
