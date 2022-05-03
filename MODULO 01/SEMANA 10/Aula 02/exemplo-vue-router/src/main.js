import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router"


const routes = [
    
]


const router = createRouter({
    routes,
    history: createWebHashHistory()
})

const app = createApp(App)

// Use Vue Router
app.use(router)

app.mount('#app')
