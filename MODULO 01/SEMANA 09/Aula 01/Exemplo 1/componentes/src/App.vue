<template>
  <div class="">
    <MeuHeader/>
    <meu-formulario/>
    <meu-botao :nome="nomebtn" :classbtn="classebtn"/>
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
      classebtn: "btn btn-primary d-flex flex-end",
      nomebtn: "Reservar",
    }
  },
  components: {
    MeuHeader,
    meuFormulario,
    meuBotao,
    minhaTabela
  }
}
</script>

<style scoped>
body {
  top: 0;
  margin: 0;
}

</style>
