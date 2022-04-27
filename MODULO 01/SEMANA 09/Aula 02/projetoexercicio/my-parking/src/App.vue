<template>
  <div class="container">
    <meu-header/>

      <h2>{{ titulo }}</h2>
      
      <div class="row g-3 mt-2">

          <div class="col-lg-5">
              <label class="form-label" for="">Nome do Solicitante</label>
              <input v-model="formulario.nome" class="form-control" type="text">
          </div>

          <div class="col-lg-3">
                <label class="form-label" for="">Data de Reserva</label>
                <input v-model="formulario.dataReserva" class="form-control" type="date">
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Hora de Entrada</label>
                <input v-model="formulario.horaEntrada" class="form-control" type="text">
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Horas de Reserva</label>
                <input v-model="formulario.horasDeReserva" class="form-control" type="number">
          </div>

      </div>

      <div class="row g-3 mt-2">

          <div class="col-lg">
              <label class="form-label" for="">Placa</label>
              <input v-model="formulario.placa" class="form-control" type="text">
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Modelo</label>
              <input v-model="formulario.modelo" class="form-control" type="text">
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Ano</label>
              <input v-model="formulario.ano" class="form-control" type="number">
          </div>

            <div class="d-flex flex-row w-100 mt-3 m-auto p-2">
              <button 
                @click.prevent="limpar()" 
                class="btn btn-danger me-2"
                >
                <i class="fa-solid fa-trash-can"></i>
                Limpar
                </button>
              <button 
                @click.prevent="reservar()" 
                class="btn btn-primary">
                <i class="fa-solid fa-floppy-disk"></i>
                {{!indice ? "Reservar" : "Editar"}}
                </button>
            </div>

            <minha-tabela :reservas="reservas" @editar="editar" @deletar="deletar"/>

    </div>
  </div>
</template>

<script>
import MeuHeader from "./components/Header.vue"
import minhaTabela from "./components/Tabela.vue"

export default {
  name: 'App',
  components: {
    MeuHeader,
    minhaTabela
  },
  data() {
    return {
      titulo: "Sistema para Reserva de Vagas",
      formulario: {
                nome: "",
                dataReserva: "",
                horaEntrada: "",
                horasDeReserva: "",
                placa: "",
                modelo: "",
                ano: "",
      },
      reservas: [],
      indice: false,
      textoBotao : ""
    }
  },

  mounted() {
    this.carregarDB()
  },
  methods: {
    deletar(indice){
      this.reservas.splice(indice - 1, 1)
      this.salvarDB()
    },
    editar(key,
            nome,
            dataReserva,
            horaEntrada,
            horasDeReserva,
            placa,
            modelo,
            ano){
        
        this.indice = key
        this.formulario.nome = nome
        this.formulario.dataReserva = dataReserva
        this.formulario.horaEntrada = horaEntrada
        this.formulario.horasDeReserva = horasDeReserva
        this.formulario.placa = placa
        this.formulario.modelo = modelo
        this.formulario.ano = ano

    },
    salvarDB(){
      if(this.reservas.length > 0){
            var dados = JSON.stringify(this.reservas)
            localStorage.setItem("reservas", dados)
      }
    },
    carregarDB(){
      var dados = localStorage.getItem("reservas")
        dados = JSON.parse(dados)
        if(dados.length >= 0){
            for (let index = 0; index < dados.length; index++) {
                this.reservas.push(dados[index])
            }
             
        }else{
            alert("ERRO! Não há itens salvos no DB")
        }
    },
    reservar(){
      if(this.formulario.nome.length == 0) return false
      if(!this.formulario.dataReserva) return false
      if(!this.formulario.horaEntrada) return false
      if(!this.formulario.horasDeReserva) return false
      if(!this.formulario.placa) return false
      if(!this.formulario.modelo) return false
      if(!this.formulario.ano) return false

      if(!this.indice){

        this.reservas.push({
        "nome": this.formulario.nome,
        "dataReserva": this.formulario.dataReserva,
        "horaEntrada": this.formulario.horaEntrada,
        "horasDeReserva": this.formulario.horasDeReserva,
        "placa": this.formulario.placa,
        "modelo": this.formulario.modelo,
        "ano": this.formulario.ano
        })

      }else{
        this.reservas.splice(this.indice - 1, 1, {
          "nome": this.formulario.nome,
          "dataReserva": this.formulario.dataReserva,
          "horaEntrada": this.formulario.horaEntrada,
          "horasDeReserva": this.formulario.horasDeReserva,
          "placa": this.formulario.placa,
          "modelo": this.formulario.modelo,
          "ano": this.formulario.ano
        })

        this.indice = false
      }

      this.salvarDB()
      this.limpar()
    },
    limpar(){
      this.formulario.nome = ""
      this.formulario.dataReserva = ""
      this.formulario.horaEntrada = ""
      this.formulario.horasDeReserva = ""
      this.formulario.placa = ""
      this.formulario.modelo = ""
      this.formulario.ano = ""
      this.indice = false
    }
  }

}
</script>


<style>

</style>
