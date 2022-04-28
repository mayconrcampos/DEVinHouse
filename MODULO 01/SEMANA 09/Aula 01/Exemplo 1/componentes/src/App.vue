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
    
    <minha-tabela :tabela="lista.reservas" @preenche="campos" @deleta="deletaItem()"/>

    
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
      indice: null,
      edita: false
    }
  },
  setup() {
    // Mapeando variáveis da Store
    const {formulario, botaoReservar, botaoLimpar, lista} = storeToRefs(useReservaStore())
    // Mapeando Actions
    const { reservar, limparCampos, dataParaArray, preencheFormulario, dataParaTabela, deletaItem } = mapActions(useReservaStore, ["reservar", "limparCampos", "dataParaArray", "preencheFormulario", "dataParaTabela", "deletaItem"])

    return {
      formulario,
      botaoReservar,
      botaoLimpar,
      lista,

      reservar,
      limparCampos,
      dataParaArray,
      preencheFormulario,
      dataParaTabela,
      deletaItem
    }

  },
  methods: {
    reserva(){
      if(this.formulario.nome.length == 0) return false
      if(this.formulario.dataReserva == "NaN/NaN/NaN") return false
      if(!this.formulario.horaEntrada) return false
      if(this.formulario.horasDeReserva <= 0) return false
      if(this.formulario.placa.length == 0) return false
      if(this.formulario.ano < 1900) return false

      this.reservar({
        "nome": this.formulario.nome,
        "dataReserva": this.dataParaArray(this.formulario.dataReserva),
        "horaEntrada": this.formulario.horaEntrada,
        "horasDeReserva": this.formulario.horasDeReserva,
        "modelo": this.formulario.modelo,
        "placa": this.formulario.placa,
        "ano": this.formulario.ano
      })
      this.limparCampos()
    },
    campos(key, nome, dataReserva, horaEntrada, horasDeReserva, placa, modelo, ano){
      this.preencheFormulario(
          nome,
          this.dataParaTabela(dataReserva),
          horaEntrada,
          horasDeReserva,
          placa,
          modelo,
          ano 
      )

      this.indice = key 
      this.edita = true


    },
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
