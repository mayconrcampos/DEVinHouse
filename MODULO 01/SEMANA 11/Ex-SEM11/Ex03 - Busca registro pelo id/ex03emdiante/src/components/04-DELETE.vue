<template>
  <div class="container w-75 m-auto p-3">
    <h1 class="text-center">Ex07 - DELETE</h1>
    <hr />

    <div class="container w-75 m-auto">
      <span
        class="badge bg-danger border w-100"
        v-if="msg_delete.erro"
        v-text="msg_delete.msg"
      ></span>
      <span
        class="badge bg-primary border w-100"
        v-else
        v-text="msg_delete.msg"
      ></span>
    </div>

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
          <th scope="row">{{ p.id }}</th>
          <td>{{ p.nome }}</td>
          <td>{{ p.data_nasc }}</td>
          <td>{{ p.cep }}</td>
          <td>
            <button class="btn btn-danger" @click="deleta(p.id)">
              Excluir
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "deLete",
  computed: {
    ...mapState(["msg_delete"]),
  },
  methods: {
    ...mapActions(["excluir", "getAll"]),
    ...mapMutations(["setMsgDelete"]),
    deleta(id) {
      const confirma = confirm("Deseja mesmo excluir este registro?");

      if (confirma) {
        this.excluir(id).then(() => {
          this.getAll();
        });
      }
    },
  },
  mounted() {
    this.getAll();
  },
};
</script>

<style>
</style>