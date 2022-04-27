<template>
  <div class="container">
    <MeuHeader/>

    <meu-formulario
      :titulo="titulo"
    />

    <meu-botao 
        @click="reservar"
        :nomeBtn="botaoReservar.nome"  
        :primary="true"
        :salvar="true"
        />

    <meu-botao 
        :nomeBtn="botaoLimpar.nome" 
        :dark="true"
        :lixeira="true"
        />
    
    <minha-tabela/>
    
  </div>
</template>

<script>
import MeuHeader from "./components/Header.vue"
import meuFormulario from "./components/Formulario.vue"
import minhaTabela from "./components/Tabela.vue"
import meuBotao from "./components/Button.vue";


export default {
  name: 'App',
  data() {
    return {
      titulo: "Sistema para Reserva de Vagas",
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
    minhaTabela,
    meuBotao
  },
  
}
</script>

<style scoped>
body {
  top: 0;
  margin: 0;
}

</style>
