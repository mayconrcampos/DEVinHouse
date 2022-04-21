<template>
    <div>
        <h2>Emissor</h2>
        <input v-model="nome" type="text">
        <button @click.prevent="emitirTexto">Emitir</button>

    </div>
</template>

<script>
import barramento  from "../barramento";
export default {
    data() {
        return {
            nome: null
        }
    },
    methods: {
        emitirTexto(){
            barramento.$emit("textoEmitido", this.nome)
        }
    },
}
</script>

<style>

</style>