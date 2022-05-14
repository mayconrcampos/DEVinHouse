<template>
  <div class="container">
    <h1 class="text-center text-white mt-3">Home</h1>
    <hr />

    <p>{{ conteudohome }}</p>

    <ul>
      <li v-for="(c, indice) in conceitos" :key="indice">
        {{ c }}
      </li>
    </ul>

    <div
      id="spanmsg"
      title="Clique para fechar esta mensagem"
      @click="setMensagem('')"
      v-if="mensagem"
      class="container"
    >
      <div class="alert alert-success w-50 m-auto mt-5 border text-center p-2">
        <span>{{ mensagem }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  name: "hoMe",
  computed: {
      ...mapState({
          mensagem: state => state.userStore.mensagem,
          conceitos: state => state.homeStore.conceitos,
          conteudohome: state => state.homeStore.conteudohome
      })
  },
  methods: {
      ...mapMutations(["setMensagem"])
  },
};
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