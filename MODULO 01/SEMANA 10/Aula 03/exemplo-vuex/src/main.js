import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'


const pessoas = {
    state(){
        return {
      
            pessoas: []
        }
    },
    mutations: {
        insertPessoa(state, pessoa){
            state.pessoas.push(pessoa)
        },
        delPessoa(state, indice){
            state.pessoas.splice(indice, 1)
        }
    }
}

const display = {
    state(){
        return {
            value: "Display",
        }
    },
    mutations: {
        setdisplay(state, valor){
            state.value = valor.toUpperCase()
        },
    }
}

const segundos = {
    state(){
        return {
            value : 0,
            ativa: false
        }
    },
    mutations: {
        desativa(state){
            state.ativa = false
        },
        setsegundos(state, valor){
            state.value = valor
        }
    },
    actions: {
        startCron(context) {
            context.state.ativa = true
            const conta = setInterval(() => {
                if(context.state.ativa){
                    context.state.value++
                }else{
                    clearInterval(conta)
                }

            }, 1000)
        },
      
    },
    getters: {
     
    }
}


const store = createStore({
    modules: {
        display,
        segundos,
        pessoas
    },
})


const app = createApp(App)
app.use(store)
app.mount('#app')
