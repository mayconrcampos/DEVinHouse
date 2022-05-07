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
import loginUser from "./views/user/cadastro/Auth.vue"
import error404 from "./views/404NotFound.vue"

// Definição das rotas
const routes = [
    {path: "/", redirect: "/user/login"},
    {path: "/user/cadastro", component: CadastroUser},
    {path: "/user/login", component: loginUser},

    // Rotas protegidas com autenticação (meta: {auth: true})
    {path: "/home", component: Home, meta: {auth: true}},
    {path: "/pessoas/cadastro", component: Cadastro, meta: {auth: true}},
    {path: "/pessoas/listagem", component: Listagem, meta: {auth: true}},
    {path: "/:pathMatch(.*)", component: error404}
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

// Regras para proteção de Rotas
router.beforeEach((to, from, next) => {
    if(to.meta.auth && store.state.userStore.token === false){
        next("/user/login")
    }else{
        next()
    }
   
    
})

createApp(App).use(router).use(store).mount('#app')
