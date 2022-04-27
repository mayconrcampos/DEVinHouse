<template>
  <div>
    <div v-show="titulo">
      <h3>Mostrando Componente</h3>
      <meu-header :titulo="titulo"/>
    </div>

    <input type="text" v-model="titulo">
    
  </div>
</template>

<script>
import meuHeader from "./components/header.vue"

export default {
  name: 'App',
  components: {
    meuHeader
  },
  data() {
    return {
      titulo: ""
    }
  },
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
