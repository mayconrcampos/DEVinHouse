<template>
  <div class="container border w-75 m-auto rounded-3 mt-5">
      <h3>Formulário</h3>
      <label class="form-label " :class="mouseentra ? 'fs-3' : ''"  @mouseenter="$emit('mousemover')" @mouseleave="$emit('mouseleaver')">Nome</label>
      <input :value="nome" class="form-control" type="text" placeholder="Nome completo">

      <label class="form-label" for="">Idade</label>
      <input :value="idade" class="form-control" type="number" placeholder="Idade">

      <button @click="$emit('add', nome, idade)" class="btn btn-primary mt-3 mb-3">Adicionar</button>
  </div>
</template>

<script>
export default {
    name: "MeuForm",
    props: {
        nome: {
            type: String
        },
        idade: {
            type: Number
        },
        mouseentra: {
            type: Boolean,
            default: () => false
        },
        
        tamanho: {
            type: Boolean,
            default: () => false
        }

    },
  

}
</script>

<style>

</style>