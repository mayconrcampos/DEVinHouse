import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
    state: () => {
        return {
            counter: 0
        }
       
    },
    actions: {
        incrementa(){
            this.counter++
        }
    }
})