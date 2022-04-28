<template>
  <div class="container">
    <MeuHeader/>

    <meu-formulario
      :titulo="formulario.titulo"
     
    />

    <meu-botao 
        @efetuar="reserva"
        :nomeBtn="botaoReservar.nome"  
        :primary="true"
        :salvar="true"
        />

    <meu-botao
        @efetuar="limparCampos()"
        :nomeBtn="botaoLimpar.nome" 
        :dark="true"
        :lixeira="true"
        />
    
    <minha-tabela :tabela="lista.reservas"/>

    
  </div>
</template>

<script>
// imports componentes
import MeuHeader from "./components/Header.vue"
import meuFormulario from "./components/Formulario.vue"
import minhaTabela from "./components/Tabela.vue"
import meuBotao from "./components/Button.vue";
// import Store
import { useReservaStore } from "./store/storeReservas.js"
import { storeToRefs, mapActions } from "pinia"

export default {
  name: 'App',
  data() {
    return {
      
    }
  },
  setup() {
    // Mapeando variáveis da Store
    const {formulario, botaoReservar, botaoLimpar, lista} = storeToRefs(useReservaStore())
    // Mapeando Actions
    const { reservar, limparCampos } = mapActions(useReservaStore, ["reservar", "limparCampos"])

    return {
      formulario,
      botaoReservar,
      botaoLimpar,
      lista,

      reservar,
      limparCampos
    }

  },
  methods: {
    reserva(){
      this.reservar({
        "nome": this.formulario.nome,
        "dataReserva": this.formulario.dataReserva,
        "horaEntrada": this.formulario.horaEntrada,
        "horasDeReserva": this.formulario.horasDeReserva,
        "placa": this.formulario.placa,
        "ano": this.formulario.ano
      })
      this.limparCampos()
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
