<template>
  <div class="container w-75 m-auto p-3">
      <h1 class="text-center">READ</h1>

    <form @submit.prevent="encontrar()">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Digite um ID</label>
          <input type="text" v-model="idUser" class="form-control" id="exampleInputPassword1">
          <small>Deixe em branco e aperte o botão para listar todos os registros</small>
        </div>
      
        <button type="submit" class="btn btn-primary">Encontrar</button>
    </form>

    <div class="container text-danger text-center mt-3" v-if="mensagem" v-text="mensagem"></div>
    <hr>
    <div class="container" v-if="!idUser">
    
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Nascimento</th>
                <th scope="col">CEP</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, index) in pessoas" :key="index">
                <th scope="row">{{p.id}}</th>
                <td>{{p.nome}}</td>
                <td>{{p.data_nasc}}</td>
                <td>{{p.cep}}</td>
              </tr>

            </tbody>
        </table>
    </div>

    <div class="container" v-else>
        <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Nascimento</th>
                <th scope="col">CEP</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{{pessoas.id}}</th>
                <td>{{pessoas.nome}}</td>
                <td>{{pessoas.data_nasc}}</td>
                <td>{{pessoas.cep}}</td>
              </tr>

            </tbody>
        </table>
    </div>
      
  </div>
</template>

<script>
import axios from "axios"

export default {
    name: "reAd",
    data() {
        return {
            idUser:"",
            pessoas: "",
            umaPessoa: [],
            mensagem: ""
        }
    },
    methods: {
        async encontrar(){
            if(isNaN(this.idUser)){
                this.mensagem = "ERRO! ID não numérico"
                return
            }

            if(this.idUser){
                console.log("Cai no if")
                this.mensagem = ""
                await axios.get(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas/${this.idUser}`)
                .then(response => {
                    console.log(response.data)
                    this.pessoas = response.data
                    console.log(this.pessoas)
                })
                .catch(error => {
                    this.mensagem = error
                })
            }else{
                console.log("Cai no else")
                this.mensagem = ""
                await axios.get(`https://6279974673bad506857ab3ab.mockapi.io/api/pessoas`)
                .then(response => {
                    this.pessoas = response.data
                })
                .catch(error => {
                    this.mensagem = error
                })
            }
            


        }
    },
}
</script>

<style>

</style>