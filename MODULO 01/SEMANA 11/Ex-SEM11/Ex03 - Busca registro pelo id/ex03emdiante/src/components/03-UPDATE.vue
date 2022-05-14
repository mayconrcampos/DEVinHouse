<template>
  <div class="container w-75 m-auto p-3">
    <h1 class="text-center">Ex06 - UPDATE</h1>
    <hr />

    <div class="container w-75 m-auto">
      <span
        class="badge bg-danger border w-100"
        v-if="msg_update.erro"
        v-text="msg_update.msg"
      ></span>
      <span
        class="badge bg-primary border w-100"
        v-else
        v-text="msg_update.msg"
      ></span>
    </div>

    <form @submit.prevent="editar()">
      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">Nome</label>
        <input
          type="text"
          v-model="nome"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label"
          >Data Nascimento</label
        >
        <input
          type="date"
          v-model="data_nasc"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>

      <div class="mb-3">
        <label for="exampleInputPassword1" class="form-label">CEP</label>
        <input
          type="text"
          v-model="cep"
          maxlength="8"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Editar</button>
    </form>

    <hr />

    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Nome</th>
          <th scope="col">Nascimento</th>
          <th scope="col">CEP</th>
          <th scope="col">Editar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(p, index) in $store.state.pessoas" :key="index">
          <th scope="row">{{ p.id }}</th>
          <td>{{ p.nome }}</td>
          <td>{{ p.data_nasc }}</td>
          <td>{{ p.cep }}</td>
          <td>
            <button
              class="btn btn-primary"
              @click="preencheCampos(p.id, p.nome, p.data_nasc, p.cep)"
            >
              Editar
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
  name: "upDate",
  data() {
    return {
      nome: "",
      data_nasc: "",
      cep: "",
      idUser: "",
    };
  },
  mounted() {
    this.getAll();
  },
  computed: {
    ...mapState(["msg_update"]),
  },
  methods: {
    ...mapActions(["getAll", "edita"]),
    ...mapMutations(["setMsgUpdate"]),
    preencheCampos(id, nome, data_nasc, cep) {
      this.idUser = id;
      this.nome = nome;
      this.data_nasc = data_nasc;
      this.cep = cep;
      this.setMsgUpdate("");
    },
    editar() {
      if (!this.idUser) return false;
      if (this.nome.length == 0 || !this.nome) return false;
      if (this.data_nasc == "NaN-NaN-NaN" || !this.data_nasc) return false;
      if (!this.cep || this.cep.length < 8) return false;

      this.edita({
        id: this.idUser,
        nome: this.nome,
        data_nasc: this.data_nasc,
        cep: this.cep,
      }).then(() => {
        this.getAll();
      });

      this.idUser = "";
      this.nome = "";
      this.data_nasc = "";
      this.cep = "";
    },
  },
};
</script>

<style>
</style>