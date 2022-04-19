<template>
    <div>
        <div id="form">
            <label for="">Nome</label>
            <input v-model="nome" type="text" placeholder="Digite seu nome">

            <label for="">Idade</label>
            <input v-model="idade" type="text" placeholder="Digite sua idade">

            <button @click="$emit('mostrar', [nome, idade])">Cadastrar</button>
        </div>
        
    </div>
</template>

<script>
export default {
    name: "Formulario",
    data(){
        return{
            nome: "",
            idade: ""
        }
    }
}
</script>

<style>
#form {
    width: 70%;
    margin: auto;
    display: flex;
    flex-direction: column;
}

</style>