import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive("aumenta", (el) => {
    el.addEventListener("mouseover", () => {
        if(el.style.fontSize !== "30px"){
            el.style.fontSize = "30px"
        }else{
            el.style.fontSize = "14px"
        }
        
    })
})

app.mount('#app')
