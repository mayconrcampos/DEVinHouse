<template>
  <div class="container mt-2 w-75 m-auto d-flex flex-row-reverse">
      <button :class="classbtn" :click="$emit('click')">
          {{nome}}
      </button>
  </div>
</template>

<script>
export default {
    name: "meuBotao",
    props: {
        nome: {
            type: String
        },
        class: {
            type: String,
        },
        classbtn: {
            type: String
        }

    },

}
</script>

<style>

</style>