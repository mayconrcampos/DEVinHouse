<template>
  <div>
    <h1>Cadastro de curso</h1>

    <label for="">Entre com a quantidade de vagas</label>
    <input v-model="numVagas" type="number">

    <Preenchidas :numEstudantes="numEstudantes" @descadastra="descadastra" @cadastra="cadastra(n)" :numVagas="numVagas"/>
    
  </div>
</template>

<script>
import Preenchidas from "./components/Preenchidas.vue"

export default {
  name: 'App',
  components: {
    Preenchidas
    
  },
  data() {
    return {
      numVagas:0,
      numEstudantes:0,
      calculado:0

    }
  },
  methods: {
    cadastra(){
      if(this.numEstudantes < this.numVagas){
        this.numEstudantes++
      }
    },
    descadastra(){
      if(this.numEstudantes > 0){
        this.numEstudantes--
      }
      
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
