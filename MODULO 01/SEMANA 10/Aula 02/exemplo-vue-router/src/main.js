import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from "vue-router"

// Importando Componentes Rotas
import Home  from "./components/Home/Home.vue"
import Login from "./components/Login.vue"
import Contatos from "./components/Contatos.vue"

const routes = [
    { path: "/login", component: Login },
    { path: "/", component: Home },
    { path: "/contatos", component: Contatos}
]

const router = createRouter({
    routes,
    history: createWebHashHistory()
})

const app = createApp(App)

// Use Vue Router
app.use(router)

app.mount('#app')
