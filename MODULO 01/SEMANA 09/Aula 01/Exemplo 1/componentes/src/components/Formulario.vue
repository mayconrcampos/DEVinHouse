<template>
  <div class="container">
      <h2 v-text="titulo"></h2>
      
      <div class="row g-3 mt-2">

          <div class="col-lg-5">
              <label class="form-label" for="">Nome do Solicitante</label>
              <input @blur="validaInputNome(formulario.nome)" v-model="formulario.nome" class="form-control" type="text" >
              <small v-if="valida.nome" class="text-danger">Campo nome obrigatório</small>
            
          </div>

          <div class="col-lg-3">
                <label class="form-label" for="">Data de Reserva</label>
                <input @blur="validaInputDataReserva(formulario.dataReserva)" v-model="formulario.dataReserva" class="form-control" type="date" >
                <small v-if="valida.dataReserva" class="text-danger">Campo data reserva obrigatório</small>
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Hora de Entrada</label>
                <input @blur="validaInputHoraEntrada(formulario.horaEntrada)" v-model="formulario.horaEntrada" v-mask="'##:##'" class="form-control" type="text" placeholder="--:--">
                <small v-if="valida.horaEntrada" class="text-danger">Campo Hora de entrada obrigatório</small>
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Horas de Reserva</label>
                <input @blur="validaInputHorasDeReserva(formulario.horasDeReserva)" v-model="formulario.horasDeReserva" class="form-control" type="number" > 
                <small v-if="valida.horasDeReserva" class="text-danger">Campo horas de reserva obrigatório</small>
          </div>

      </div>

      <div class="row g-3 mt-2">

          <div class="col-lg">
              <label class="form-label" for="">Placa</label>
              <input @blur="validaInputPlaca(formulario.placa)" v-model="formulario.placa" v-mask="['AAA#X##']" class="form-control" type="text" >
              <small v-if="valida.placa" class="text-danger">Campo placa obrigatório</small>
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Modelo</label>
              <input @blur="validaInputModelo(formulario.modelo)" v-model="formulario.modelo" class="form-control" type="text" >
              <small v-if="valida.modelo" class="text-danger">Campo modelo obrigatório</small>
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Ano</label>
              <!-----<input v-model="formulario.ano" class="form-control" type="number" >----->
              <select @click="validaInputAno(formulario.ano)" v-model="formulario.ano" class="form-select" aria-label="Default select example">
                <option v-for="(ano, key) in  anos" :key="key" :value="ano" selected>{{ ano }}</option>
            </select>
            <small v-if="valida.ano" class="text-primary">Escolha o ano do veículo</small>
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
        const { formulario, anos, valida } = storeToRefs(useReservaStore())
        const { 
            preencheAnos, 
            validaInputNome, 
            validaInputDataReserva, 
            validaInputHoraEntrada, 
            validaInputHorasDeReserva, 
            validaInputPlaca,
            validaInputModelo,
            validaInputAno } = mapActions(useReservaStore, [
                "preencheAnos", 
                "validaInputNome", 
                "validaInputDataReserva", 
                "validaInputHoraEntrada", 
                "validaInputHorasDeReserva", 
                "validaInputPlaca",
                "validaInputModelo",
                "validaInputAno"
                ])

        return {
            formulario,
            anos,
            valida,
            preencheAnos,
            validaInputNome,
            validaInputDataReserva,
            validaInputHoraEntrada,
            validaInputHorasDeReserva,
            validaInputPlaca,
            validaInputModelo,
            validaInputAno
        }
    },
    created() {
        this.preencheAnos()
    },
   
    methods: {
        validador(obj){
            console.log(obj)
        }
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