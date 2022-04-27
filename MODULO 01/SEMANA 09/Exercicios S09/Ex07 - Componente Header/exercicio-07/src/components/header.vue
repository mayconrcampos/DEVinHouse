<template>
  <div>
      <header>
          <h1 v-text="titulo"></h1>
      </header>
  </div>
</template>

<script>
export default {
    name: "meuHeader",
    props: {
        titulo: {
            type: String,
            default: () => "Aqui vai o título"
        }
    }
}
</script>

<style>
header {
    border: 1px groove red;
}

</style>