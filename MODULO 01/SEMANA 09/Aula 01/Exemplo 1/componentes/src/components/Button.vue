<template>

      <button :class="[
            primary ? 'btn btn-primary' : '', 
            danger ? 'btn btn-danger' : '', 
            dark ? 'btn btn-dark' : ''
            ]" 
            :click="$emit('click')">{{nomeBtn}}
      </button>

</template>

<script>
export default {
    name: "meuBotao",
    props: {
        nomeBtn: {
            type: String,
            default: () => "Botão"
        },
        primary: {
            type: Boolean,
            default: () => false
            
            
        },
        danger: {
            type: Boolean,
            default: () => false
            
        },
        dark: {
            type: Boolean,
            default: () => false
            
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