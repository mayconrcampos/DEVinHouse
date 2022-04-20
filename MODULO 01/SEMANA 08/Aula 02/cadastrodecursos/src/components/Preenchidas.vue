<template>
  <div>
      <h1>Porcentagem de vagas preenchidas</h1>

        <p v-show="numVagas > 0">{{ calculaPorcentagem }}%</p>

        <button @click="$emit('cadastra', 1)">Cadastra uma pessoa</button>
        <button @click="$emit('descadastra', 1)">Cancelar Cadastro</button>

        <p>Nº Estudantes: {{numEstudantes}}</p>
      
  </div>
</template>

<script>
export default {
    name: "Preenchidas",
    props: {
        numVagas: Number,
        numEstudantes: Number,
    },
    computed: {
    calculaPorcentagem(){
      let calculo = (this.numEstudantes / this.numVagas) / 1000 * 1000 * 100
      return calculo.toFixed(2)
    }
  }
}
</script>

<style>

</style>