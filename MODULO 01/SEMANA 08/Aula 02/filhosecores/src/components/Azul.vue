<template>
  <div>
      <button @click="$emit('corAzul', cor, frase)">Cor Azul</button>
  </div>
</template>

<script>
export default {
    name: "Azul",
    data() {
        return {
            cor: "color: blue;",
            frase: "Sou a cor Azul"
        }
    },
}
</script>

<style>

</style>