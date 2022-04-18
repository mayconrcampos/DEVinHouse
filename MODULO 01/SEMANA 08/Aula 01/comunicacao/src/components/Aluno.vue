<template>
    <div>
        <h1>Aluno - componente filho</h1>

        <h5>Nome via Props: {{nomeAluno}}</h5>
    </div>
     
</template>

<script>
export default {
    name: "Aluno",
    props: {
      nomeAluno: {
          type: String,
          default: "Maycon",
      }
    }
  
}
</script>

<style>

</style>