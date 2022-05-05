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
            value : 0
        }
    },
    mutations: {
        
        setsegundos(state, valor){
            state.value = valor
        }
    },
    actions: {
        startCron(context) {
            setInterval(() => {
                context.state.value++

            }, 1000)
        },
      
    },
    getters: {
        tempoFormatado(state){
            state
        }
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
