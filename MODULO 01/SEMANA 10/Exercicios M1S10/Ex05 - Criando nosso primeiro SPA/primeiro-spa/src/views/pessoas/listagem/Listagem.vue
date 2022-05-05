<template>
  <div class="container">
      <h1 class="text-center text-white mt-3">Listagem de Pessoas</h1>
      <hr>

      <div v-if="$store.state.cadastroStore.pessoas.length > 0" class="container table-responsive">
            <table class="table table-hover table-dark">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nome</th>
                  <th scope="col">Idade</th>
                  <th scope="col">Ação</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(pessoa, indice) in $store.state.cadastroStore.pessoas" :key="pessoa.id">
                  <th scope="row">{{ pessoa.id }}</th>
                  <td>{{ pessoa.nome}}</td>
                  <td>{{ pessoa.idade}}</td>
                  <td><button @click="del(indice)" class="btn btn-danger">x</button></td>
                </tr>
              </tbody>
            </table>
      </div>
      <div v-else class="alert alert-danger text-center">
          <h5>Não há pessoas cadastradas</h5> 
      </div>

  </div>
</template>

<script>
export default {
    name: "lisTagem",
    methods: {
        del(indice){
            this.$store.commit("deletaPessoa", indice)
        }
    },
}
</script>

<style>

</style>