<template>
  <div class="container border w-75 m-auto rounded-3 mt-5">
      <h3>Formulário</h3>
      <label v-aumenta class="form-label">Nome</label>
      <input class="form-control" type="text" placeholder="Nome completo">

      <label v-aumenta class="form-label" for="">Idade</label>
      <input class="form-control" type="number" placeholder="Idade">

      <button class="btn btn-primary mt-3 mb-3">Adicionar</button>
  </div>
</template>

<script>
export default {
    name: "MeuForm",
    props: {


    },
  

}
</script>

<style scoped>
label {
    font-size: 15px;
}

</style>