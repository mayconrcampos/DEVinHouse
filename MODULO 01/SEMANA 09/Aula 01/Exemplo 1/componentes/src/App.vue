<template>
  <div class="container">
    <MeuHeader/>

    <meu-formulario
      :titulo="titulo"
     
     
    />

    <meu-botao 
        @efetuar="reserva"
        :nomeBtn="edita ? 'Editar': 'Reservar'"   
        :primary="true"
        :salvar="true"
        />

    <meu-botao
        @efetuar="limpar"
        :nomeBtn="botaoLimpar.nome" 
        :dark="true"
        :lixeira="true"
        />
    
    <minha-tabela :tabela="lista.reservas" @preenche="campos" @deleta="del"/>

    
  </div>
</template>

<script>
// import componentes
import MeuHeader from "./components/Header.vue"
import meuFormulario from "./components/Formulario.vue"
import minhaTabela from "./components/Tabela.vue"
import meuBotao from "./components/Button.vue";
// import Store Pinia
import { useReservaStore } from "./store/storeReservas.js"
import { storeToRefs, mapActions } from "pinia"

export default {
  name: 'App',
  components: {
    MeuHeader,
    meuFormulario,
    minhaTabela,
    meuBotao
  },
  data() {
    return {
      indice: null,
      edita: false
    }
  },
  setup() {
    // Mapeando variáveis da Store
    const {titulo, formulario, botaoReservar, botaoLimpar, lista, valida} = storeToRefs(useReservaStore())
    // Mapeando Actions
    const { reservar, limparCampos, dataParaArray, preencheFormulario, dataParaTabela, deletaItem, salvaDB, carregaDB, editaItem, esvaziaLista } = mapActions(useReservaStore, ["reservar", "limparCampos", "dataParaArray", "preencheFormulario", "dataParaTabela", "deletaItem", "salvaDB", "carregaDB", "editaItem", "esvaziaLista"])

    return {
      // Variáveis da Store
      titulo, formulario, botaoReservar, botaoLimpar, lista, valida,

      // Actions da Store
      reservar, limparCampos, dataParaArray, preencheFormulario, dataParaTabela, 
      deletaItem, salvaDB, carregaDB, editaItem, esvaziaLista
    }

  },
  mounted() {
    this.esvaziaLista()
    this.carregaDB()
  },
  methods: {
  

    /**********
     * Método limpar - ligada ao botão Limpar
     * - Chama Action limparCampos
     * - Seta variável edita como false.
     */

    limpar(){
      this.limparCampos()
      this.edita = false
    },

    /***********************************
     * Método de duplo fluxo, onde ele valida as entradas para proteger
     * array de inserção indevida com campos vazios.
     * - Se variável edita for true, chama Action editaItem para realizar
     * atualização do registro no índice passado por parâmetro.
     * Ao término da atualização, edita é setado false e índice null.
     * 
     * - Se variável edita for false, trata-se de uma nova inserção.
     * - Chama Action reservar passando o objeto preenchido por parâmetro.
     * - Ao término da transação, chama Action limparCampos.
     * - Chama Action salvaDB para persistir na localstorage.
     */

    reserva(){

      if(!this.formulario.nome || this.valida.nome) return false
      if(!this.formulario.dataReserva || this.valida.dataReserva) return false
      if(!this.formulario.horaEntrada || this.valida.horaEntrada) return false
      if(!this.formulario.horasDeReserva || this.valida.horasDeReserva) return false
      if(!this.formulario.placa || this.valida.placa) return false
      if(!this.formulario.modelo || this.valida.modelo) return false
      if(!this.formulario.ano || this.valida.ano) return false
      

      if(this.edita){
        this.editaItem(this.indice, {
          "nome": this.formulario.nome,
          "dataReserva": this.dataParaArray(this.formulario.dataReserva),
          "horaEntrada": this.formulario.horaEntrada,
          "horasDeReserva": this.formulario.horasDeReserva,
          "modelo": this.formulario.modelo,
          "placa": this.formulario.placa.toUpperCase(),
          "ano": this.formulario.ano
        })

        this.edita = false
        this.indice = null
        
      }else{
        this.reservar({
          "nome": this.formulario.nome,
          "dataReserva": this.dataParaArray(this.formulario.dataReserva),
          "horaEntrada": this.formulario.horaEntrada,
          "horasDeReserva": this.formulario.horasDeReserva,
          "modelo": this.formulario.modelo,
          "placa": this.formulario.placa.toUpperCase(),
          "ano": this.formulario.ano
        })
      }

      console.log(this.dataParaArray(this.formulario.dataReserva))
      console.log(this.formulario.dataReserva)

      this.limparCampos()
      this.salvaDB()
    },
    /****
     * Método del que abre um confirm antes de excluir
     * Ao confirmar, chama Action deleta item passando ID para exclusao.
     * Chama Action salvaDB para atualizar localStorage.
     */
    del(id){
      const confirma = confirm("Deseja realmente excluir este item?")
      if(confirma){
        this.deletaItem(id)
        this.salvaDB()
      }
      
    },

    /***
     * Método que chama action para preencher formulário.
     * Depois de preenchido, seta valor de índice e edita true para habilitar botão editar. 
     * */ 
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

      console.log(this.dataParaTabela(dataReserva))
      console.log(dataReserva)

      this.indice = key 
      this.edita = true
    },
  },
  
  
}
</script>

<style scoped>
body {
  top: 0;
  margin: 0;
}

</style>
