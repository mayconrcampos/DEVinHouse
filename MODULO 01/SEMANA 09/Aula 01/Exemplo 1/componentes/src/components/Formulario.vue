<template>
  <div class="container">
      <h2 v-text="titulo"></h2>
      
      <div class="row g-3 mt-2">

          <div class="col-lg-5">
              <label class="form-label" for="">Nome do Solicitante</label>
              <input v-model="formulario.nome" class="form-control" type="text" >
          </div>

          <div class="col-lg-3">
                <label class="form-label" for="">Data de Reserva</label>
                <input v-model="formulario.dataReserva" class="form-control" type="date" >
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Hora de Entrada</label>
                <input v-model="formulario.horaEntrada" v-mask="'##:##:##'" class="form-control" type="text" >
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Horas de Reserva</label>
                <input v-model="formulario.horasDeReserva" class="form-control" type="number" > 
          </div>

      </div>

      <div class="row g-3 mt-2">

          <div class="col-lg">
              <label class="form-label" for="">Placa</label>
              <input v-model="formulario.placa" v-mask="['AAA#A##',  'AAA-####' ]" class="form-control" type="text" >
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Modelo</label>
              <input v-model="formulario.modelo" class="form-control" type="text" >
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Ano</label>
              <input v-model="formulario.ano" class="form-control" type="number" >
          </div>

              <div class="d-flex flex-row-reverse w-100 mt-3 m-auto p-2">

            </div>

    </div>

  </div>
</template>

<script>
import { mask } from "vue-the-mask"
import { useReservaStore } from "../store/storeReservas.js" 
import { storeToRefs } from "pinia"

export default {
    name: "meuFormulario",
    components: {
        
    },
    directives: {
        mask
    },
    setup() {
        const { formulario } = storeToRefs(useReservaStore())

        return {
            formulario
        }
    },
    
    data() {
        return {
            
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