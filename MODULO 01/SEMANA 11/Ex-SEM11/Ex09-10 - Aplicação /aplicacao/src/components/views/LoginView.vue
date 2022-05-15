<template>
  <div class="container">
    <h1 class="text-center">Login</h1>
    <hr />

    <div class="container w-75 m-auto">
      <Form id="form" @submit="autenticar()" class="mb-5">
        <div class="mb-3">
          <label for="inputnome" class="form-label">Email</label>
          <Field
            :rules="validaEmail"
            name="email"
            v-model="email"
            type="email"
            class="form-control"
            id="Fieldnome"
            aria-describedby="emailHelp"
            required
          />
          <ErrorMessage name="email" class="text-danger" />

          <span
            class="badge bg-danger border w-100"
            v-if="erroEmailLogin.erro"
            v-text="erroEmailLogin.msg"
          ></span>
        </div>

        <div class="mb-3">
          <label for="Fieldsenha1" class="form-label">Senha</label>
          <Field
            :rules="validaSenha"
            name="senha"
            v-model="senha"
            type="password"
            class="form-control"
            id="Fieldsenha"
          />
          <ErrorMessage name="senha" class="text-danger" />

          <span
            class="badge bg-danger border w-100"
            v-if="erroSenhaLogin.erro"
            v-text="erroSenhaLogin.msg"
          ></span>
        </div>

        <button type="submit" class="btn btn-dark me-2">
          Login no Sistema
        </button>
        <router-link to="/register" class="btn btn-secondary"
          >Cadastrar-se</router-link
        >
      </Form>

      <span
        class="alert alert-danger w-100 mt-5"
        v-if="alertaLogado"
        v-text="alertaLogado"
      ></span>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      senha: "",
    };
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  computed: {
    ...mapState({
      addUserSuccess: (state) => state.storeAlerts.addUserSuccess,
      logado: (state) => state.userStore.logado,
      erroEmailLogin: (state) => state.userStore.erroEmailLogin,
      erroSenhaLogin: (state) => state.userStore.erroSenhaLogin,
      alertaLogado: (state) => state.userStore.alertaLogado,
    }),
  },
  methods: {
    ...mapMutations(["setAddUserSuccess"]),
    ...mapActions(["auth"]),
    autenticar() {
      if (!this.logado.status) {
        this.auth({
          email: this.email,
          senha: this.senha,
        });

        if (this.logado.status) {
          this.$toast.success(`Seja Bem vindo, ${this.email}!`);
          this.email = "";
          this.senha = "";
          this.$cookies.set("logado", this.logado);
          this.$router.push("/home");
        } else {
          this.$toast.error("Erro de autenticação");
        }
      } else {
        this.$toast.error("Usuário já está logado");
        this.$router.push("/home");
      }
    },
    validaEmail(email) {
      if (email && email.trim()) {
        return true;
      }

      return "Campo email obrigatório";
    },

    validaSenha(senha) {
      if (senha.length > 0 && senha.trim()) {
        return true;
      }

      return "Campo senha obrigatório";
    },
  },
};
</script>

<style>
@media (max-width: 600px) {
  #form {
    width: 100%;
  }
  .btn {
    font-size: x-small;
  }
  #Fieldnome, #Fieldsenha {
    min-width: 250px;
    margin-left: 0;
  }
}
</style>