<template>
  <div class="container">
    <h1 class="text-center mt-3">Cadastro de Usuário</h1>
    <hr />

    <div class="container w-75 m-auto">
      <form @submit.prevent="cadastrar()">
        <div class="mb-3">
          <label for="inputnome" class="form-label">Nome</label>
          <input
            v-model="nome"
            type="text"
            class="form-control"
            id="inputnome"
            aria-describedby="emailHelp"
            required
          />
        </div>
        <div class="mb-3">
          <label for="inputemail" class="form-label">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="inputemail"
            required
          />
        </div>

        <div class="mb-3">
          <label for="inputsenha1" class="form-label">Senha</label>
          <input
            v-model="senha1"
            type="password"
            class="form-control"
            id="inputsenha1"
            required
          />
        </div>

        <div class="mb-3">
          <label for="inputsenha2" class="form-label">Repita a Senha</label>
          <input
            v-model="senha2"
            type="password"
            class="form-control"
            id="inputsenha2"
            required
          />
        </div>

        <button type="submit" class="btn">Cadastrar</button>
      </form>
    </div>
    <div
      v-if="$store.state.userStore.validaAddUser.mensagemEmailExiste"
      class="alert alert-danger w-50 m-auto mt-5 border text-center p-2"
    >
      <span
        v-html="$store.state.userStore.validaAddUser.mensagemEmailExiste"
      ></span>
      <router-link class="text-success" to="/user/login"
        >Fazer Login</router-link
      >
    </div>

    <div
      v-if="mensagemSucesso"
      class="alert alert-success w-50 m-auto mt-5 border text-center p-2"
    >
      <span
        v-html="mensagemSucesso"
      ></span>
      <router-link class="text-success" to="/user/login"
        >Fazer Login</router-link
      >
    </div>
    <div
      v-if="mensagemSenhasDiferentes"
      class="alert alert-danger w-50 m-auto mt-5 border text-center p-2"
    >
      <span
        v-text="mensagemSenhasDiferentes"
      ></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "cadastroUser",
  data() {
    return {
      nome: "",
      email: "",
      senha1: "",
      senha2: "",
    };
  },
  computed: {
    ...mapState({
      mensagemSenhasDiferentes: (state) => state.userStore.validaAddUser.mensagemSenhasDiferentes,
      mensagemSucesso: (state) => state.userStore.validaAddUser.mensagemSucesso,
      mensagemEmailExiste: (state) => state.userStore.validaAddUser.mensagemEmailExiste,
    }),
  },
  methods: {
    ...mapActions(["addUser", "salvaUserDB"]),
    cadastrar() {
      this.addUser({
        id: new Date().getTime(),
        nome: this.nome,
        email: this.email,
        senha1: this.senha1,
        senha2: this.senha2,
      });

      this.nome = "";
      this.email = "";
      this.senha1 = "";
      this.senha2 = "";
      this.salvaUserDB();
    },
  },
};
</script>

<style scoped>
.btn {
  background-color: #42b883;
  color: aliceblue;

  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5em;
}
</style>