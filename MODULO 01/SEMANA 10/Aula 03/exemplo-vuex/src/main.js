import { createApp } from 'vue'
import App from './App.vue'
import {createStore} from 'vuex'


const pessoas = {
    state(){
        return {
            lista: []
        }
    },
    mutations: {
        insertPessoa(state, pessoa){
            state.lista.push(pessoa)
        },
        delPessoa(state, indice){
            state.lista.splice(indice, 1)
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
                    if(context.state.value == 60){
                        context.state.value = 0
                    }
                }else{
                    clearInterval(conta)
                }

            }, 1000)
        },
      
    },
    getters: {
     formataSegundos(state){
         return state.value < 10 ? '0'+state.value : state.value
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
