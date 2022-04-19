<template>
<div>
  <Formulario @mostrar="mostrar"/>
  <div id="show">
    <p>Nome: {{ nome }}</p>
    <p>Idade: {{ idade }}</p>
  </div>
</div>
</template>

<script>
import Formulario from "./components/Formulário.vue"

export default {
  name: 'App',
  components: {
    Formulario
  },
  data(){
    return{
      nome: "",
      idade: ""
    }
    
  },
  methods: {
    mostrar(nomeIdade){
      this.nome = nomeIdade[0]
      this.idade = nomeIdade[1]
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
