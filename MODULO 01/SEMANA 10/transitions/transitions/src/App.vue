<template>
  <div class="container">
    <transition name="header">
      <h1 v-show="show">Header</h1>
    </transition>
    
    <button class="btn btn-dark mt-5" @click="show = !show">Alterar estado</button>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      show: false
    }
  },
}
</script>

<style>
/*********
Entrada do elemento

Enter-from - valor de partida 0 - invisível
Enter-active - valor da transition e tempo de execução animação
Enter-to - Valor final da execução da entrada do elemnto 1 - visível

Saida do elemento
leave-from - valor inicial da saida do elemento = 1 visivel
leave-active - transition e tempo
leave-to - valor final - 0 invisível

************ */
.header-leave-to,
.header-enter-from {
  opacity: 0;
}
.header-leave-from,
.header-enter-to {
  opacity: 1;
}
.header-enter-active,
.header-leave-active {
  transition: opacity 0.6s;
}



</style>
