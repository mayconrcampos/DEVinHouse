<template>
  <div >
        <div v-show="produtos.length == 0" class="container mt-5">
            <h1>Lista Vazia</h1>
        </div>
    <table v-show="produtos.length > 0" class="table">
        <thead>
          <tr>
            <th scope="col">Indice</th>
            <th scope="col">Nome</th>
            <th scope="col">Valor</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody v-for="(item, key) in produtos" :key="key">
          <tr>
            <th scope="row">{{key}}</th>
            <td>{{ item.nome}}</td>
            <td>{{ item.valor}}</td>
            <td>
              <button class="btn btn-primary me-2" @click="$emit('preencheCampos', key, item.nome, item.valor)">Editar</button>

              <button class="btn btn-danger" @click="$emit('del', key)">Deletar</button></td>
          </tr>
        </tbody>
        <td></td>
        <td>Valor</td>
        <td>R$ {{ total }}</td>
    </table>
    
  </div>
  
</template>

<script>
export default {
    name: "ListaProdutos",
    props: {
        produtos: Array,
        total: Number
    },
}
</script>

<style scoped>





</style>