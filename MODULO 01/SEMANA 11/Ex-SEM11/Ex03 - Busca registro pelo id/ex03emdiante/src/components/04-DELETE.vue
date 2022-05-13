<template>
  <div class="container w-75 m-auto p-3">
      <h1 class="text-center">Ex07 - DELETE</h1>
      <hr>

      <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nome</th>
                <th scope="col">Nascimento</th>
                <th scope="col">CEP</th>
                <th scope="col">Deletar</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(p, index) in $store.state.pessoas" :key="index">
                <th scope="row">{{p.id}}</th>
                <td>{{p.nome}}</td>
                <td>{{p.data_nasc}}</td>
                <td>{{p.cep}}</td>
                <td><button class="btn btn-danger" @click="deleta(p.id)">Excluir</button></td>
              </tr>

            </tbody>
        </table>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name:"deLete",
    methods: {
        ...mapActions(["excluir", "getAll"]),
        deleta(id){
            this.excluir(id)
            .then(() => {
                this.getAll()
            })
        }
    },
    mounted() {
        this.getAll()
    },
}
</script>

<style>

</style>