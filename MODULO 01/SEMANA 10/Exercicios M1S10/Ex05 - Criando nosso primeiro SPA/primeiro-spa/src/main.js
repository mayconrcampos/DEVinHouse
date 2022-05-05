import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import { createStore } from "vuex"
import homeStore from './store/homeStore.js'
import cadastroStore from './store/cadastroStore.js'

// Imports das views
import Home from "./views/home/Home.vue"
import Cadastro from "./views/pessoas/cadastro/Cadastro.vue"
import Listagem from "./views/pessoas/listagem/Listagem.vue"

// Criação das rotas

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

// Criação da Store

const store = createStore({
    modules: {
        homeStore,
        cadastroStore
    }
})

createApp(App).use(router).use(store).mount('#app')
