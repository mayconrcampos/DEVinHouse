<template>

      <button :class="classbtn" :click="$emit('click')">{{nome}}
      </button>

</template>

<script>
export default {
    name: "meuBotao",
    props: {
        nome: {
            type: String,
            default: () => "Botão"
        },
        class: {
            type: String,
            default: () => "btn btn-dark"
        },
        classbtn: {
            type: String
        }

    },

}
</script>

<style scoped>
    .container {
        width: 20px;
    }
    button {
        margin-right: 10px;
    }
</style>