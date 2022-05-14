<template>
  <div class="container">
    <h1 class="text-center">Register</h1>
    <hr />

    <div class="container w-75 m-auto">
      <Form @submit="register()">
        <div class="mb-3">
          <label for="Fieldnome" class="form-label">Nome</label>
          <Field
            :rules="validaNome"
            name="nome"
            v-model="formSchema.nome"
            type="text"
            class="form-control"
            id="Fieldnome"
            aria-describedby="emailHelp"
          />
          <ErrorMessage name="nome" class="text-danger" />
        </div>
        <div class="mb-3">
          <label for="Fieldemail" class="form-label">Email</label>
          <Field
            :rules="validaEmail"
            name="email"
            v-model="formSchema.email"
            type="email"
            class="form-control"
            id="inputemail"
          />
          <ErrorMessage name="email" class="text-danger" />
        </div>

        <div class="mb-3">
          <label for="inputsenha1" class="form-label">Senha</label>
          <Field
            :rules="validaSenha1"
            name="senha1"
            v-model="formSchema.senha1"
            type="password"
            class="form-control"
            id="Fieldsenha1"
          />
          <ErrorMessage name="senha1" class="text-danger" />
        </div>

        <div class="mb-3">
          <label for="Fieldsenha2" class="form-label">Repita a Senha</label>
          <Field
            :rules="validaSenha2"
            name="senha2"
            v-model="formSchema.senha2"
            type="password"
            class="form-control"
            id="Fieldsenha2"
          />
          <ErrorMessage name="senha2" class="text-danger" />
        </div>

        <button type="submit" class="btn btn-dark">Cadastrar</button>
      </Form>
    </div>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "reGister",
  data() {
    return {
      formSchema: {
        nome: "",
        email: "",
        senha1: "",
        senha2: "",
      },
    };
  },
  mounted() {
      this.setAddUserError(false)
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  computed: {
    ...mapState({
      add_error: (state) => state.storeAlerts.addUserError,
      user_exists: (state) => state.userStore.userExists,
    }),
  },
  methods: {
    ...mapMutations(["setAddUserSuccess", "setAddUserError"]),
    ...mapActions(["addUsuario", "salvaLocalStorage"]),

    register() {
      this.addUsuario({
        id: new Date().getTime(),
        nome: this.formSchema.nome,
        email: this.formSchema.email,
        senha: this.formSchema.senha1,
      });

      if (!this.user_exists) {
        this.setAddUserSuccess({
          msg: "Usuário cadastrado com sucesso",
          erro: true,
        });
        this.setAddUserError(false);
        this.salvaLocalStorage();
        this.formSchema.nome = "";
        this.formSchema.email = "";
        this.formSchema.senha1 = "";
        this.formSchema.senha2 = "";
        this.$toast.success("Usuário cadastrado com sucesso.")
        this.$router.push("/login");

      } else {
        this.formSchema.nome = "";
        this.formSchema.email = "";
        this.formSchema.senha1 = "";
        this.formSchema.senha2 = "";
        this.$toast.error("Usuário já existe")
      }
    },

    validaNome(nome) {
      if (nome && nome.trim()) {
        return true;
      }
      
      return "Campo nome obrigatório";
    },

    validaEmail(email) {
      if (email && email.trim()) {
        return true;
      }
      
      return "Campo email obrigatório";
    },

    validaSenha1(senha1) {
      if (senha1.length > 0 && senha1.trim()) {
        return true;
      }
      
      return "Campo senha obrigatório";
    },

    validaSenha2(senha2) {
      if (senha2 == this.formSchema.senha1) {
        return true;
      }
      
      return "As senhas devem ser iguais.";
    },
  },
};
</script>

<style>
</style>