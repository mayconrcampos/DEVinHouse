<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png" />

    <h1>Usando Axios</h1>

    <input type="text" v-model="nome" placeholder="nome" />
    <input type="text" v-model="email" placeholder="email" />
    <input type="text" v-model="idade" placeholder="idade" />
    <button @click="insert()">Inserir</button>
    <hr />
    <input type="text" v-model="id" placeholder="insira o id" />
    <button @click="getOne()">Procurar</button>

    <button @click="update()">Atualizar</button>
    <button @click="deleta()">Deleta</button>

    <table>
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Email</th>
        <th>Idade</th>
      </tr>
      <tr v-for="(p, key) in lista" :key="key">
        <td>{{ p.id }}</td>
        <td>{{ p.nome }}</td>
        <td>{{ p.email }}</td>
        <td>{{ p.idade }}</td>
      </tr>
    </table>

    <ul>
      <li v-for="(user, key) in getUM" :key="key">{{ user }}</li>
    </ul>

    <h5>Response: {{ mensagem }}</h5>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      lista: [],
      nome: "",
      email: "",
      idade: "",
      id: "",
      mensagem: "",
      getUM: [],
    };
  },
  created() {
    this.getall();
  },

  methods: {
    async getall() {
      await axios
        .get("https://6279974673bad506857ab3ab.mockapi.io/api/usuarios")
        .then((response) => {
          console.log(response);
          this.lista = response.data;
        })
        .catch((error) => {
          console.log(error);
          this.mensagem = error;
        });
    },

    async getOne() {
      this.getUM = [];
      await axios
        .get(
          "https://6279974673bad506857ab3ab.mockapi.io/api/usuarios/" + this.id
        )
        .then((response) => {
          this.getUM.push(response.data);
        })
        .catch((error) => {
          this.mensagem = error;
        });
    },

    async insert() {
      await axios
        .post("https://6279974673bad506857ab3ab.mockapi.io/api/usuarios", {
          nome: this.nome,
          email: this.email,
          idade: this.idade,
        })
        .then((response) => {
          this.mensagem = response.data;
          this.nome = "";
          this.email = "";
          this.idade = "";
          this.getall();
        })
        .catch((error) => {
          this.mensagem = error;
        });
    },

    async update() {
      await axios
        .put(
          "https://6279974673bad506857ab3ab.mockapi.io/api/usuarios/" + this.id,
          {
            nome: this.nome,
            email: this.email,
            idade: this.idade,
          }
        )
        .then((response) => {
          this.mensagem = response.data;
          this.getall();
        })
        .catch((error) => {
          this.mensagem = error;
        });
    },

    async deleta() {
      await axios
        .delete(
          "https://6279974673bad506857ab3ab.mockapi.io/api/usuarios/" + this.id
        )
        .then((response) => {
          this.mensagem = response.data;
          this.id = "";
          this, this.getall();
        })
        .catch((error) => {
          this.mensagem = error;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
table {
  width: 70%;
  margin: auto;
  margin-top: 20px;
}
</style>
