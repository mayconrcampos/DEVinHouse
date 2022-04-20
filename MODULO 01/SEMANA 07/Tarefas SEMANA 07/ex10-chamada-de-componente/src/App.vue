<template>
  <div>
    <ComponenteFilho/>
  </div>
</template>

<script>
import ComponenteFilho from "./components/ComponenteFilho.vue"
export default {
  name: 'App',
  components: {
    ComponenteFilho
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
