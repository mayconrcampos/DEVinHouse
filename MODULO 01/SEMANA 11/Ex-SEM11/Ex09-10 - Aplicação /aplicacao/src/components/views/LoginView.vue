<template>
  <div class="container">
    <h1 class="text-center">Login</h1>
    <hr />

    <span
      class="badge bg-primary border w-100"
      @click="setAddUserSuccess(false)"
      v-if="addUserSuccess.erro"
      v-text="addUserSuccess.msg"
    ></span>

    <div class="container w-75 m-auto">
      <Form @submit="autenticar()">
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
        </div>

        <div class="mb-3">
          <label for="Fieldsenha1" class="form-label">Senha</label>
          <Field
            :rules="validaSenha"
            name="senha"
            v-model="senha"
            type="password"
            class="form-control"
            id="inputsenha1"
          />
          <ErrorMessage name="senha" class="text-danger" />
        </div>

        <button type="submit" class="btn btn-dark me-2">
          Login no Sistema
        </button>
        <router-link to="/register" class="btn btn-secondary"
          >Cadastrar-se</router-link
        >
      </Form>
    {{logado}}
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
      logado: state => state.userStore.logado
    }),
  },
  methods: {
    ...mapMutations(["setAddUserSuccess"]),
    ...mapActions(["auth"]),
    autenticar() {
      this.auth({
          "email": this.email,
          "senha": this.senha
      }).then(() => {
          console.log("OK ta logado.")
      }).catch(erro => {
          console.log("Deu merda", erro)
      })
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
</style>