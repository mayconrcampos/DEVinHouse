<template>
  <div class="container">
        <h1 class="text-center text-white mt-3">Home</h1>
        <hr>

        <p>{{$store.state.homeStore.conteudohome}}</p>

        <ul>
            <li v-for="(c, indice) in $store.state.homeStore.conceitos" :key="indice">{{ c }}</li>
        </ul>

   

  </div>
</template>

<script>
export default {
    name: "hoMe"
}
</script>

<style scoped>
    .container {
        font-family: Arial, Helvetica, sans-serif;
        color: whitesmoke;
    }
</style>