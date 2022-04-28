<template>

      <button :class="[
                primary ? 'btn btn-primary' : '', 
                danger ? 'btn btn-danger' : '', 
                dark ? 'btn btn-dark' : ''
            ]" 
            @click="$emit('efetuar')">
            
            <i :class="[
                lixeira ? 'fa-solid fa-trash-can' : '', 
                salvar ? 'fa-solid fa-floppy-disk': ''
            ]"></i> 

            {{nomeBtn}}
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
            
        },
        lixeira: {
            type: Boolean,
            default: () => false
        },
        salvar: {
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