import { createApp } from 'vue'
import App from './App.vue'
import {createWebHashHistory, createRouter} from 'vue-router'
import { Axios } from 'axios'


const routes = []


const router = new createRouter({
    routes,
    history: createWebHashHistory()
})


createApp(App).use(router).use(Axios).mount('#app')
