<template>
  <div class="container">
    <h1 class="text-center text-white mt-3">Listagem de Pessoas</h1>
    <hr />

    <transition name="tables" mode="out-in">
      <div
        v-if="listaPessoasPorId.length > 0"
        class="container table-responsive"
      >
        <table class="table table-hover table-dark">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Idade</th>
              <th scope="col">Excluir</th>
            </tr>
          </thead>
          <transition-group tag="tbody" name="body">
            <tr v-for="pessoa in listaPessoasPorId" :key="pessoa.id">
              <th scope="row">{{ pessoa.id }}</th>
              <td>{{ pessoa.nome }}</td>
              <td>{{ pessoa.idade }}</td>
              <td>
                <button @click="del(pessoa.id)" class="btn btn-danger">
                  x
                </button>
              </td>
            </tr>
          </transition-group>
        </table>
      </div>
      <div v-else class="alert alert-danger text-center">
        <h5>Não há pessoas cadastradas</h5>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "lisTagem",

  methods: {
    ...mapActions(["delPessoa", "salvaDB"]),
    del(idPessoa) {
      const confirma = confirm("Deseja realmente excluir este registro?");
      if (confirma) {
        this.delPessoa(idPessoa);
        this.salvaDB();
      }
    },
  },
  computed: {
    ...mapState({
      pessoas: state => state.cadastroStore.pessoas,
      idUser: state => state.userStore.idUser
    }),
    listaPessoasPorId() {
      return this.pessoas.filter(
        (pessoa) => pessoa.idUser == this.idUser
      );
    },
  },
};
</script>

<style>
.container {
  color: whitesmoke;
}
/* Transition Body da table */
.body-leave-to,
.body-enter-from {
  opacity: 0;
  transform: translate(30px);
}
.body-leave-from,
.body-enter-to {
  opacity: 1;
}
.body-move,
.body-enter-active,
.body-leave-active {
  transition: all 0.8s;
}

/** Transition Tabelas***/
.tables-leave-to,
.tables-enter-from {
  opacity: 0;
}
.tables-leave-from,
.tables-enter-to {
  opacity: 1;
}
.tables-enter-active,
.tables-leave-active {
  transition: opacity 0.6s;
}
</style>