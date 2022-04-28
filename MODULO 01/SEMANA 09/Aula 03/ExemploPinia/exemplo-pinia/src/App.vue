<template>
  <div>
    <h1>{{store.count}}</h1>
  </div>
</template>

<script>
import { useMainStore } from "./store/main.js"
export default {
  name: 'App',
  setup() {
    const contadorStore = useMainStore()

    return {contadorStore}
  },
  getters: {
    count(state){
      return state.counter
    }
  },
  computed: {
    triplo(){
      return this.contadorStore.counter * 3
    }
  }
}
</script>

<style>

</style>
