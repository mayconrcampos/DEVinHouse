<template>
  <div>
      <button @click="$emit('corAmarelo', cor, frase)">Cor Amarelo</button>
  </div>
</template>

<script>
export default {
    name: "Amarelo",
    data() {
        return {
            cor: "color: yellow;",
            frase: "Sou a cor Amarela"
        }
    },
}
</script>

<style>

</style>