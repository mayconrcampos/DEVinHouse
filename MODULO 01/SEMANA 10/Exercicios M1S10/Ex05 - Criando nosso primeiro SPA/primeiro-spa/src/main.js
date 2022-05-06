import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHashHistory } from "vue-router"
import { createStore } from "vuex"

// Imports dos módulos da Store
import homeStore from './store/homeStore.js'
import cadastroStore from './store/cadastroStore.js'
import userStore from './store/userStore.js'

// Imports das views
import Home from "./views/home/Home.vue"
import Cadastro from "./views/pessoas/cadastro/Cadastro.vue"
import Listagem from "./views/pessoas/listagem/Listagem.vue"
import CadastroUser from "./views/user/cadastro/Cadastro.vue"
import loginUser from "./views/user/cadastro/Login.vue"

// Criação das rotas

const routes = [
    {path: "/", redirect: "/user/cadastro"},
    {path: "/home", component: Home},
    {path: "/user/cadastro", component: CadastroUser},
    {path: "/user/login", component: loginUser},
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
        cadastroStore,
        userStore
    }
})

createApp(App).use(router).use(store).mount('#app')
