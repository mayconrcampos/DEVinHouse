<template>
  <div>
    <ul v-for="(item, key) in produtos" :key="key">
        <li>Nome: {{ item.nome }} Valor(R$): {{ item.valor }}</li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "ListaProdutos",
    props: {
        produtos: []
    }
}
</script>

<style>
    ul li {
        list-style: none;
    }
</style>