<template>
  <div class="container">
      <h2 v-text="titulo"></h2>
      
      <div class="row g-3 mt-2">

          <div class="col-lg-5">
              <label class="form-label" for="">Nome do Solicitante</label>
              <input v-model="formulario.nome" class="form-control" type="text" >
              <small v-if="!formulario.nome" class="text-danger">Campo nome obrigatório</small>
            
          </div>

          <div class="col-lg-3">
                <label class="form-label" for="">Data de Reserva</label>
                <input v-model="formulario.dataReserva" class="form-control" type="date" >
                <small v-if="!formulario.dataReserva" class="text-danger">Campo data reserva obrigatório</small>
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Hora de Entrada</label>
                <input v-model="formulario.horaEntrada" v-mask="'##:##'" class="form-control" type="text" placeholder="--:--">
                <small v-if="formulario.horaEntrada.length < 5" class="text-danger">Campo Hora de entrada obrigatório</small>
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Horas de Reserva</label>
                <input v-model="formulario.horasDeReserva" class="form-control" type="number" > 
                <small v-if="formulario.horasDeReserva <= 0" class="text-danger">Campo horas de reserva obrigatório</small>
          </div>

      </div>

      <div class="row g-3 mt-2">

          <div class="col-lg">
              <label class="form-label" for="">Placa</label>
              <input v-model="formulario.placa" v-mask="['AAA#X##']" class="form-control" type="text" >
              <small v-if="formulario.placa.length < 7" class="text-danger">Campo placa obrigatório</small>
              
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Modelo</label>
              <input v-model="formulario.modelo" class="form-control" type="text" >
              <small v-if="formulario.modelo.length == 0" class="text-danger">Campo modelo obrigatório</small>
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Ano</label>
              <!-----<input v-model="formulario.ano" class="form-control" type="number" >----->
              <select v-model="formulario.ano" class="form-select" aria-label="Default select example">
                <option selected>Selecione o Ano</option>
                <option v-for="(ano, key) in  anos" :key="key" :value="ano">{{ ano }}</option>
            </select>
            <small v-if="isNaN(formulario.ano)" class="text-danger">Campo Ano obrigatório</small>
          </div>

              <div class="d-flex flex-row-reverse w-100 mt-3 m-auto p-2">

            </div>
    </div>

  </div>
</template>

<script>
import { mask } from "vue-the-mask"
import { useReservaStore } from "../store/storeReservas.js" 
import { storeToRefs, mapActions } from "pinia"


export default {
    name: "meuFormulario",
    components: {
        
    },
    directives: {
        mask
    },
    setup() {
        const { formulario, anos } = storeToRefs(useReservaStore())
        const { preencheAnos } = mapActions(useReservaStore, ["preencheAnos"])

        return {
            formulario,
            anos,
            preencheAnos
        }
    },
    created() {
        this.preencheAnos()
    },
   
    methods: {
    
    },
   
    props: {
        titulo: {
            type: String,
            default: () => ""
        }
    },  
}
</script>

<style>

</style>