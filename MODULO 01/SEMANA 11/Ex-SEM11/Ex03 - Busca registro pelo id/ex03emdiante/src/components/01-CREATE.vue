<template>
  <div class="container w-75 m-auto p-3">
      <h1 class="text-center">Ex05 - CREATE</h1>

      <hr>
      <form @submit.prevent="inserir()">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Nome</label>
          <input type="text" v-model="nome" class="form-control" id="exampleInputPassword1">
          
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Data Nascimento</label>
          <input type="date" v-model="data_nasc" class="form-control" id="exampleInputPassword1">
          
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">CEP</label>
          <input type="text" v-model="cep" maxlength="8" class="form-control" id="exampleInputPassword1">
          
        </div>
      
        <button type="submit" class="btn btn-primary">Encontrar</button>
      </form>
      <div class="container text-success">{{mensagem}}</div>

  </div>
</template>

<script>
import axios from "axios"

export default {
    name: "creAte",
    data() {
      return {
        nome: "",
        data_nasc: "",
        cep: "",
        mensagem: ""
      }
    },
    methods: {
      async inserir(){
          this.mensagem = ""
          if(this.nome.length == 0 || !this.nome) return false
          if(this.data_nasc == "NaN-NaN-NaN" || !this.data_nasc) return false
          if(!this.cep || this.cep.length < 8) return false
          
          await axios.post(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/`, {
            "id": new Date().getTime(),
            "nome": this.nome,
            "data_nasc": this.data_nasc,
            "cep": this.cep
          })
          .then(response => {
              this.mensagem = `Pessoa ${response.data.nome} inserida com sucesso.`
              this.nome = ""
              this.data_nasc = ""
              this.cep = ""
          })
          .catch(error => {
              this.mensagem = error
          })
        }
    }
}
</script>

<style>

</style>