<template>
  <div class="container">
      <h2 v-text="titulo"></h2>
      
      <div class="row g-3 mt-2">

          <div class="col-lg-5">
              <label class="form-label" for="">Nome do Solicitante</label>
              <input class="form-control" type="text">
          </div>

          <div class="col-lg-3">
                <label class="form-label" for="">Data de Reserva</label>
                <input class="form-control" type="text">
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Hora de Entrada</label>
                <input class="form-control" type="text">
          </div>

          <div class="col-lg-2">
                <label class="form-label" for="">Horas de Reserva</label>
                <input class="form-control" type="text">
          </div>

      </div>
      <div class="row g-3 mt-2">

          <div class="col-lg">
              <label class="form-label" for="">Placa</label>
              <input class="form-control" type="text">
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Modelo</label>
              <input class="form-control" type="text">
          </div>

          <div class="col-lg">
              <label class="form-label" for="">Ano</label>
              <input class="form-control" type="number">
          </div>

      </div>
  </div>
</template>

<script>
export default {
    name: "meuFormulario",
    data() {
        return {
            titulo: "Reserva de vaga de estacionamento",
            formulario: {
                nome: "",
                dataReserva: "",
                horaEntrada: "",
                horasDeReserva: "",
                placa: "",
                modelo: "",
                ano: ""
            }
        }
    },
    
}
</script>

<style>

</style>