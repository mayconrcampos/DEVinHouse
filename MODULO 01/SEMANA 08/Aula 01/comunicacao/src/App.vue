<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">
    <Aluno :nomeAluno="aluno" />

    <input v-model="aluno" type="text">

    <p>Nome no elemento pai: {{aluno}}</p>
  </div>
</template>

<script>
import Aluno from "./components/Aluno.vue"

export default {
 
  name: 'App',
  data(){
    return{
      aluno: ""
    }
  },
  components: {
    Aluno
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
