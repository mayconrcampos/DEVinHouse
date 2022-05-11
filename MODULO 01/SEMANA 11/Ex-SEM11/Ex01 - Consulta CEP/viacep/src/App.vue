<template>
  <div class="container">
    <img alt="Vue logo" src="./assets/logo.png">
    <h1>Consulta de CEP</h1>
    <hr>
    <div class="container w-75 m-auto">
      <label class="form-label">Digite o cep</label>
      <input class="form-control" maxlength="8"  type="text" v-model="cep">
      <button class="btn btn-dark mt-3" @click="pesquisar()">Consultar</button>
    </div>

    

    <hr>
    <transition name="div" mode="out-in">
      <div class="container w-75 m-auto" v-if="!mensagem">
        <p>{{endereco.uf}}</p>
        <p>{{endereco.localidade}}</p>
        <p>{{endereco.logradouro}}</p>
        <p>{{endereco.complemento}}</p>
        {{endereco}}
      </div>
      <p class="alert alert-danger mt-3" v-else v-text="mensagem"></p>
    </transition>
    
    
  </div>
</template>

<script>
import axios from "axios"

export default {
  name: 'App',
  data() {
    return {
      cep: "",
      endereco: "",
      mensagem: false
    }
  },
  methods: {
    async pesquisar(){
        if(this.cep.length == 8){
        this.mensagem = false
        await axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
        .then(response => {
          if("erro" in response.data){
            this.mensagem = "CEP inválido"
          }else{
            this.endereco = response.data
            this.mensagem = false
          }
        })
    
      }else{
        this.endereco = false
        this.mensagem = "CEP deve ter 8 dígitos"
      }
    },
    
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
.div-leave-to,
.div-enter-from {
  opacity: 0;
}
.div-leave-from,
.div-enter-to {
  opacity: 1;
}
.div-enter-active,
.div-leave-active {
  transition: opacity 0.6s;
}
</style>
