<template>
  <div>
      <button @click="$emit('corVermelho', cor, frase)">Cor Vermelho</button>
  </div>
</template>

<script>
export default {
    name: "Vermelho",
    data() {
        return {
            cor: "color: red;",
            frase: "Sou a cor vermelha"
        }
    },
}
</script>

<style>

</style>