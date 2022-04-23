<template>
  <div>
    <form action="" @submit.prevent="add()">
      <input 
        v-model.trim="v$.nome.$model"
        type="text" 
        name="nome" 
        placeholder="Digite seu nome"
        >
        <div v-if="v$.nome.$error">Name field has an error.</div>

      <input 
        v-model.trim="v$.idade.$model"
        type="text"
        name="idade"
        placeholder="Digite sua idade"
        >
        <div v-if="v$.idade.$error">Idade field has an error.</div>

        <input type="submit" value="Inserir">
    </form>
    <div>
      <ul v-for="(pessoa, key) in pessoas" :key="key">
        <li>Nome: {{pessoa.nome}} Idade: {{pessoa.idade}}</li>
      </ul>
    </div>
  </div>
  
</template>

<script>
import useVuelidate from '@vuelidate/core'
import {required, minLength, between} from "@vuelidate/validators"
export default {
  name: 'App',
  data() {
    return {
      nome: "",
      idade: 0,
      pessoas: [  ]
    }
  },
  methods: {
    add(){
      if(!this.nome) return false
      if(isNaN(this.idade)) return false
      if(this.idade == 0) return false
      if(this.nome.length < 2) return false
      if(this.idade <= 17 || this.idade >= 80) return false 

      this.pessoas.push({
        "nome": this.nome,
        "idade": this.idade
      })
    }
  },
  setup() {
    return { v$: useVuelidate() }
  },
  validations(){
    return {
      nome: {
      required,
      minLength: minLength(2)
      },
      idade: {
      required,
      between: between(17, 80)
      }
    }
    
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
