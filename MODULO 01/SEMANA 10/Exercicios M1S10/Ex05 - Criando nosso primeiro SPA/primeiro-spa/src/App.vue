<template>
  <div>
    <navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapMutations } from "vuex";
import Navbar from "./components/shared/navbar/NavBar.vue";
export default {
  name: "App",
  components: {
    Navbar,
  },
  mounted() {
    this.carregaUserDB(), this.carregaDB(), this.carregaUserID();
  },
  methods: {
    ...mapActions(["carregaUserDB", "carregaDB"]),
    ...mapMutations(["setToken", "setIdUser", "setUsuarioLogado"]),
    carregaUserID() {
      if (this.$cookies.get("logado")) {
        this.setToken(true);
        this.setIdUser(this.$cookies.get("id"));
        this.setUsuarioLogado(this.$cookies.get("user"));
      }
    },
  },
};
</script>

<style>
body {
  background: rgb(27, 30, 43);
  background: linear-gradient(
    106deg,
    rgba(27, 30, 43, 1) 0%,
    rgba(41, 45, 62, 1) 45%
  );
}
</style>
