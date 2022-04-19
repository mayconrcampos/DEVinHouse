<template>
    <div id="cronometro">
        <h2>Relógio</h2>

        <p>{{ hora }}:{{ minuto }}:{{ segundos }}</p>

        <div v-show="listaVoltas.length > 0" id="listaVoltas">
            <ul v-for="(item, key) in listaVoltas" :key="key">
              <li>{{key - item}}</li>
            </ul>
        </div>
        <button @click="$emit('addlista', [hora, minuto, segundos])">Marcar Volta</button>
    </div>
</template>

<script>
export default {
    name: "Cronometro",
    props: {
        hora: String,
        minuto: String,
        segundos: String,
        listaVoltas: []
    }
}
</script>

<style>

</style>