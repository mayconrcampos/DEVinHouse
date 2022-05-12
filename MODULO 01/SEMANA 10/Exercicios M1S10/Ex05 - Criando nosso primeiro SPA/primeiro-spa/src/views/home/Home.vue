<template>
  <div class="container">
        <h1 class="text-center text-white mt-3">Home</h1>
        <hr>

        <p>{{$store.state.homeStore.conteudohome}}</p>

        <ul>
            <li v-for="(c, indice) in $store.state.homeStore.conceitos" :key="indice">{{ c }}</li>
        </ul>

        <div id="spanmsg" title="Clique para fechar esta mensagem" @click="$store.commit('setMensagem', '')" v-if="$store.state.userStore.mensagem" class="container">
          <div  class="alert alert-success w-50 m-auto mt-5 border text-center p-2">
            <span>{{ $store.state.userStore.mensagem }}</span> 
          </div>
      </div>


  </div>
</template>

<script>
export default {
    name: "hoMe",
    
}
</script>

<style scoped>
    .container {
        font-family: Arial, Helvetica, sans-serif;
        color: whitesmoke;
    }
    #spanmsg {
        cursor: pointer;
    }
</style>