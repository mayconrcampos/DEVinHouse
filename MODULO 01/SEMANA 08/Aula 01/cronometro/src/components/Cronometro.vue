<template>
    <div id="cronometro">
        <h2>Relógio</h2>

        <p>{{ hora }}:{{ minuto }}:{{ segundos }}</p>
    </div>
</template>

<script>
export default {
    name: "Cronometro",
    props: {
        hora: String,
        minuto: String,
        segundos: String
    }
}
</script>

<style>

</style>