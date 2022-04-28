<template>
  <div>
    <ul>
      <li v-for="(item, key) in lista" :key="key">{{ item }}</li>
    </ul>

    <table>
      <th>
        <td>Nome</td>
        <td>Idade</td>
      </th>
      <tr v-for="(p, key) in pessoas" :key="key">
        <td>{{ p.nome }} </td>
        <td>{{ p.Idade }}</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
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
      ]
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
