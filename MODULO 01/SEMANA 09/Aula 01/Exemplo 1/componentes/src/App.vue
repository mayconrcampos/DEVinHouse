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
      if(this.formulario.nome.length == 0) return false
      if(!this.formulario.dataReserva) return false
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
    dataParaArray(data){
      let d = new Date(data)
      let dia = d.getDate() + 1 < 10 ? `0${d.getDate() + 1}` : d.getDate() + 1
      let mes = d.getMonth() + 1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() + 1
      let ano = d.getFullYear()

      return `${dia}/${mes}/${ano}`
    },
    dataParaTabela(data){
      let d = new Date(data)
      let dataFormatada = (d.getFullYear() + "-" + ((d.getMonth() + 1)) + "-" + (d.getDate() )) ;                 
      return dataFormatada
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
