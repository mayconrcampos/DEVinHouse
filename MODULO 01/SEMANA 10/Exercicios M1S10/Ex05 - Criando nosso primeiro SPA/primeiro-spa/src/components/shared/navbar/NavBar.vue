<template>
  <div>
    <nav class="navbar navbar-expand-lg">
      <div class="container-fluid">
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon">=</span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" aria-current="page" to="/home"
                >Home</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/pessoas/cadastro"
                >Cadastro</router-link
              >
            </li>
            <li class="nav-item">
              <router-link
                class="nav-link"
                aria-current="page"
                to="/pessoas/listagem"
                >Listagem</router-link
              >
            </li>

            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Usuários
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <router-link class="dropdown-item" to="/user/cadastro"
                    >Cadastrar</router-link
                  >
                </li>
                <li>
                  <router-link class="dropdown-item" to="/user/login"
                    >Fazer Login</router-link
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <router-link class="dropdown-item" to="#"
                    ><p @click="Sair()">Sair</p></router-link
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div
        class="text-white me-4"
        v-text="token ? `Usuário: ${usuarioLogado}` : ''"
      ></div>
    </nav>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "navBar",
  methods: {
    ...mapActions(["logoff"]),
    Sair() {
      this.logoff();
      this.$router.push("/");
      this.$cookies.remove("logado");
      this.$cookies.remove("id");
      this.$cookies.remove("user");
    },
  },
  computed: {
    ...mapState({
      usuarioLogado: state => state.userStore.usuarioLogado,
      token: state => state.userStore.token
    })
  },
};
</script>

<style scoped>
.navbar {
  background: rgb(41, 45, 62);
  background: linear-gradient(
    106deg,
    rgba(41, 45, 62, 1) 48%,
    rgba(66, 184, 131, 1) 96%
  );
}
button:hover {
  background: #41b681;
  transition: 1s;
}

button {
  border: 3px solid #42b883 !important;
  padding: 0 !important;
}
button span:hover {
  color: #292d3e;
}
button span {
  font-size: 1.5em;
  margin-top: 5px;
  color: #42b883;
}

.nav-link:hover {
  background-color: #42b883;
  color: white;
  border-radius: 7px;
  transition: 0.5s;
}
.nav-link {
  color: whitesmoke;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.3em;
}
</style>