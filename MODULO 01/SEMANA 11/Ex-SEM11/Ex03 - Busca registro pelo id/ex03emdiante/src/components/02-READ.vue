<template>
  <div class="container w-75 m-auto p-3">
      <h1 class="text-center">Ex03 e 04 - READ</h1>

      <hr>

      <div class="container w-75 m-auto">
        <span class="badge bg-danger border w-100" v-if="msg_read.erro" v-text="msg_read.msg"></span>
        <span class="badge bg-primary border w-100" v-else v-text="msg_read.msg"></span>
      </div>

    <form @submit.prevent="encontrar()">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Digite um ID</label>
          <input type="text" v-model="idUser" class="form-control" id="exampleInputPassword1">
          <small>Deixe em branco e aperte o botão para listar todos os registros</small>
        </div>
      
        <button type="submit" class="btn btn-primary">Encontrar</button>
    </form>

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
              <tr v-for="(p, index) in $store.state.pessoas" :key="index">
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
                <th scope="row">{{$store.state.pessoas.id}}</th>
                <td>{{$store.state.pessoas.nome}}</td>
                <td>{{$store.state.pessoas.data_nasc}}</td>
                <td>{{$store.state.pessoas.cep}}</td>
              </tr>

            </tbody>
        </table>
    </div>
      
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex"

export default {
    name: "reAd",
    data() {
        return {
            idUser:"",
        }
    },
    computed: {
        ...mapState(["msg_read"])
    },
    methods: {
        ...mapMutations(["setMsgRead", "setPessoas", "setIdUser"]),
        ...mapActions(["getAll", "getOne"]),

        encontrar(){
            if(isNaN(this.idUser)){
                this.setMsgRead("ERRO! ID não numérico")
                return
            }
            if(this.idUser){
                this.getOne(this.idUser)
            }else{
                this.getAll()
            }
        }
    },
}
</script>

<style>

</style>