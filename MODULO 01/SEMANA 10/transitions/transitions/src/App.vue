<template>
  <div class="container d-flex flex-column">
    <transition name="header">
      <h1 v-show="show">Header</h1>
    </transition>
    
    <button class="btn btn-dark mt-5" @click="show1 = !show1">Alterar estado</button>
  
    <h4>mode="in-out" - Insere segundo elemento pra depois remover o primeiro</h4>
   <transition name="header-bounce" mode="in-out">
      <h1 v-if="show1">Header</h1>
       <h1 v-else>Header</h1>
    </transition>
<hr>
  <h4>mode="out-in" - Remove o primeiro pra inserir o segundo</h4>
    <transition name="header-bounce" mode="out-in">
      
      <h1 v-if="show">Header</h1>
       <h1 v-else>Header</h1>
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
      show: false,
      show1: false
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

/************************
  Transition bounce
*/

.header-bounce-enter-active {
  animation: bounce-in 0.5s;
}
.header-bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}



</style>
