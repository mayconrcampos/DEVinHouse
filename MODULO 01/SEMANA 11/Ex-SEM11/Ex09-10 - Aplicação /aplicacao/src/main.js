import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import { createRouter, createWebHashHistory } from "vue-router"

const routes = []


const router = new createRouter({
    routes,
    history: createWebHashHistory()
})

createApp(App).use(store).use(router).mount('#app')
