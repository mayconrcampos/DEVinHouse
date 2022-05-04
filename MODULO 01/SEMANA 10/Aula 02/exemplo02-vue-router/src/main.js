import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import Contatos from "./views/Contatos.vue"
import Empresa from "./views/Empresa.vue"

const routes = [
    {path: "/", alias: ["/home"], component: Home},
    {path: "/contatos", alias: ["/contatinhos"] , component: Contatos},
    {path: "/empresa", name: "company" , component: Empresa}
]


const route = createRouter({
    routes,
    history: createWebHistory()
})


createApp(App)
.use(route)
.mount('#app')
