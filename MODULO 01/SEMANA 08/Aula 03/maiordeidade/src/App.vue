<template>
  <div id="app">
    <Enviar/>
    <MostrarIdade/>
  </div>
</template>

<script>
import Enviar from "./components/Enviar.vue"
import MostrarIdade from "./components/MostrarIdade.vue"

export default {
  name: 'App',
  components: {
    Enviar,
    MostrarIdade    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
