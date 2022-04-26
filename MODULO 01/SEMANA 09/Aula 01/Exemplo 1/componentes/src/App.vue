<template>
  <div class="">
    <MeuHeader/>

    <meu-formulario/>

    <div class="d-flex flex-row-reverse w-75 mt-3 m-auto p-2 pe-5">

      <meu-botao 
        :nomeBtn="botaoReservar.nome" 
        :primary="true"
        />

      <meu-botao 
        :nomeBtn="botaoLimpar.nome" 
        :dark="true"
        />
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
      botaoReservar: {
        nome: "Reservar",
      },
      botaoLimpar: {
        nome: "Limpar",
      }
      
    }
  },
  components: {
    MeuHeader,
    meuFormulario,
    meuBotao,
    minhaTabela
  },
  
}
</script>

<style scoped>
body {
  top: 0;
  margin: 0;
}

</style>
