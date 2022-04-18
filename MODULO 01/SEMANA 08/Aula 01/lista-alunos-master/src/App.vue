<template>
  <Alunos />
</template>

<script>
import Alunos from './components/Alunos.vue'

export default {
  name: 'App',
  components: {
    Alunos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #BCE0EC;
  margin-top: 60px;
}
body {
  background-color: #8875BD;
}
</style>
