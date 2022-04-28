<template>
  <div>

    <h1>Olar</h1>

    <ul>
      <li v-for="(item, key) in lista" :key="key">{{ item }}</li>
    </ul>

    <input type="text" v-model="nome">
    <input type="text" v-model="idade">
    <button @click="add()">Add</button>

    <table>
      <th>
        <td>Nome</td>
        <td>Idade</td>
        <td>edita</td>
        <td>Excluir</td>
      </th>
      <tr v-for="(p, key) in pessoas" :key="key">
        <td v-lindro>{{ p.nome }} </td>
        <td v-idade>{{ p.Idade }}</td>
        <td><button href="">Edit</button></td>
        <td><button href="">Del</button></td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  methods: {
    add(){
      this.pessoas.push({
        "nome": this.nome,
        "Idade": this.idade
      })
    }
  },
  data() {
    return {
      lista: [
        "Item 1", "Item 2", "Item 3"
      ],
      pessoas: [
        {"nome": "Maycon", "Idade": 39},
        {"nome": "Ariana", "Idade": 36},
        {"nome": "Izair", "Idade": 73},
        {"nome": "Terezinha", "Idade": 63},
        {"nome": "Benjamin", "Idade": 10}
      ],
      nome: "",
      idade: ""
    }
  },
}
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
</style>
