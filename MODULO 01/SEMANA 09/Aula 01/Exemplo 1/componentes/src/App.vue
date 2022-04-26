<template>
  <div class="">
    <MeuHeader/>
    <meu-formulario/>
    <div class="d-flex flex-row-reverse w-75 m-auto p-3">
      <meu-botao :nome="nomebtn" :classbtn="switchButton"/>
      <meu-botao :nome="limpabtn" :classbtn="switchButton"/>
    </div>
    
    <minha-tabela/>
    

  </div>
</template>

<script>
import MeuHeader from "./components/Header.vue"
import meuFormulario from "./components/Formulario.vue"
import meuBotao from "./components/Button.vue"
import minhaTabela from "./components/Tabela.vue"

export default {
  name: 'App',
  data() {
    return {
      nome: "",
      classebtn: "",
      nomebtn: "Reservar",

      limpabtn: "Limpar",

    }
  },
  components: {
    MeuHeader,
    meuFormulario,
    meuBotao,
    minhaTabela
  },
  computed: {
    switchButton(){
        return this.nomebtn == "Reservar" ? "btn btn-primary" : "btn btn-danger"
      }
    
  }
}
</script>

<style scoped>
body {
  top: 0;
  margin: 0;
}

</style>
