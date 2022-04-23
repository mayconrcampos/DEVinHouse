import { createApp } from 'vue'
import App from './App.vue'
import useVuelidate from "@vuelidate/core"

createApp(App).use(useVuelidate).mount('#app')
