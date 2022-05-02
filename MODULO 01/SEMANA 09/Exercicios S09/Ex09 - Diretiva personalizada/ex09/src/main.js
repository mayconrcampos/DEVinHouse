import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.directive("aumenta", (el) => {
    el.addEventListener("mouseenter", () => {
        el.style.fontSize = "20px"
    })

    el.addEventListener("mouseleave", () => {
        el.style.fontSize = "15px"
    })
})

app.mount('#app')
