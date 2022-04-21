<template>
  <div>
      <h1>Digite sua idade</h1>
      <input v-model="idade" type="number" placeholder="Digite seu nome">
      <button @click.prevent="enviarNome">Enviar</button>
  </div>
</template>

<script>
import barramento from "../barramento"
export default {
    name: "Enviar",
    data() {
        return {
            idade: ""
        }
    },
    methods: {
        enviarNome(){
            barramento.$emit('idadeEnviado', this.idade)
        }
    },
}
</script>

<style>

</style>