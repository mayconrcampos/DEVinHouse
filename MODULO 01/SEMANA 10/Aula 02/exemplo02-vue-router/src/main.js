import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from "vue-router"
import Home from "./views/Home.vue"
import Contatos from "./views/Contatos.vue"
import Empresa from "./views/Empresa.vue"
import Equipe from "./views/Equipe.vue"
import Membro from "./views/Membro.vue"
import Error404 from "./views/Error404.vue"

const routes = [
    {
        path: "/", 
        component: Home
    },

    {
        path: "/home",
        redirect: "/" // Ao invés de apelido para rota, tratamos como um redirecionamento.
    },

    {
        path: "/contatos", 
        alias: ["/contatinhos"] ,  // Apenas um apelido para a rota
        component: Contatos
    },

    {
        path: "/empresa", 
        name: "company" , 
        component: Empresa
    },

    {
        path: "/equipe",
        component: Equipe,
        name: "equipe",
        children: [
            { 
                path: ":nome([a-z]+)?",
                name: "membro", 
                component: Membro 
            }
        ]
    },
    {
        path: "/:pathMatch(.*)",
        component: Error404
    }
]


const route = createRouter({
    routes,
    history: createWebHistory()
})


createApp(App)
.use(route)
.mount('#app')
