<template>
  <div class="container">
      <h2 v-text="titulo"></h2>
      
      <div class="row g-3 mt-2">
          <div class="col-5 col-auto">
              <label class="form-label" for="">Nome do Solicitante</label>
              <input class="form-control" type="text">
          </div>
          <div class="col-3">
                <label class="form-label" for="">Data de Reserva</label>
                <input class="form-control" type="text">
          </div>
          <div class="col-2">
                <label class="form-label" for="">Hora de Entrada</label>
                <input class="form-control" type="text">
          </div>
          <div class="col-2">
                <label class="form-label" for="">Horas de Reserva</label>
                <input class="form-control" type="text">
          </div>
      </div>
      <div class="row g-3 mt-2">
          <div class="col">
              <label class="form-label" for="">Nome do Solicitante</label>
              <input class="form-control" type="text">
          </div>
          <div class="col">
              <label class="form-label" for="">Nome do Solicitante</label>
              <input class="form-control" type="text">
          </div>
          <div class="col">
              <label class="form-label" for="">Nome do Solicitante</label>
              <input class="form-control" type="text">
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name: "meuFormulario",
    data() {
        return {
            titulo: "Reserva de vaga de estacionamento"
        }
    },
}
</script>

<style>

@media (max-width: 600px)
{
  .container
   {
    display: flex;
    flex-direction: column;
   }
}

</style>