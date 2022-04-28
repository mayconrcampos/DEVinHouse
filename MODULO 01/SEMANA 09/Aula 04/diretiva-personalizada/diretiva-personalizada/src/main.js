import { createApp } from 'vue'
import App from './App.vue'

// Diretivas personalizadas
const app = createApp(App)

// v-lindro
app.directive("lindro", {
    beforeMount(el) {
        console.log(el)
        if(el.innerHTML == "Maycon"){
            el.innerHTML += " é lindro"
        }else if(el.innerHTML == "Ariana"){
            el.innerHTML += " é lindra"
        }
        else{
            el.innerHTML += " não é lindro(a)"
        }
        
    },
})
// v-idade
app.directive("idade", {
    beforeMount(el){
        if(el.innerHTML < 18){
            el.innerHTML += " é de menor"
            el.style = "color:green"
        }else if(el.innerHTML >= 18 && el.innerHTML < 40){
            el.innerHTML += " tá ficando velho"
            el.style = "color: blue"
        }else{
            el.innerHTML += " esse já é idoso"
            el.style = "color:red"
        }
    }
})

app.mount('#app')
