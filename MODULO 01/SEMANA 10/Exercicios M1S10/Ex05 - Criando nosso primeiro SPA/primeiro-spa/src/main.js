import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import Home from "./views/home/Home.vue"
import Cadastro from "./views/pessoas/cadastro/Cadastro.vue"
import Listagem from "./views/pessoas/listagem/Listagem.vue"


const routes = [
    {path: "/", redirect: "/home"},
    {path: "/home", component: Home},
    {path: "/pessoas/cadastro", component: Cadastro},
    {path: "/pessoas/listagem", component: Listagem}
    
]


const router = createRouter({
    routes,
    history: createWebHashHistory()
})

createApp(App).use(router).mount('#app')
