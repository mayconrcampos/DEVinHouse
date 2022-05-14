<template>
  <div class="container">
    <h1 class="text-center mt-3">Fazer Login</h1>

    <hr />

    <div class="container w-75 m-auto">
      <form @submit.prevent="autenticar()">
        <div class="mb-3">
          <label for="inputnome" class="form-label">Email</label>
          <input
            v-model="email"
            type="email"
            class="form-control"
            id="inputnome"
            aria-describedby="emailHelp"
            required
          />
        </div>

        <div class="mb-3">
          <label for="inputsenha1" class="form-label">Senha</label>
          <input
            v-model="senha"
            type="password"
            class="form-control"
            id="inputsenha1"
          />
        </div>

        <button type="submit" class="btn">Login no Sistema</button>
      </form>
    </div>

    <div v-if="mensagem" class="container">
      <div class="alert alert-danger w-50 m-auto mt-5 border text-center p-2">
        <span>{{ mensagem }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  name: "loginUser",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  computed: {
    ...mapState({
      mensagem: state => state.userStore.mensagem,
      token: state => state.userStore.token,
      idUser: state => state.userStore.idUser,
      usuarioLogado: state => state.userStore.usuarioLogado
    })
  },
  methods: {
    ...mapActions(["auth", "carregaDB"]),
    autenticar() {
      // Envia email e senha para action autenticar
      this.auth({
        email: this.email,
        senha: this.senha,
      });
      // Se a Action autenticou
      if (this.token) {
        this.$cookies.set("logado", true);
        this.$cookies.set("id", this.idUser);
        this.$cookies.set("user", this.usuarioLogado);
        this.carregaDB();
        this.$router.push("/home");
      }
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