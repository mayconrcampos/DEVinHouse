<template>
    <div class="container w-100 mt-2 g-3 text-center">
        <hr>
        <table class="table table-responsive">
          <thead>
            <tr>
              <th scope="col">Solicitante</th>
              <th scope="col">Data de Reserva</th>
              <th scope="col">Hora de Entrada</th>
              <th scope="col">Horas de Reserva</th>
              <th scope="col">Placa</th>
              <th scope="col">Modelo</th>
              <th scope="col">Ano</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, key) in reservas" :key="key">
              <th scope="row">{{item.nome}}</th>
              <td>{{item.dataReserva}}</td>
              <td>{{item.horaEntrada}}</td>
              <td>{{item.horasDeReserva}}</td>
              <td>{{item.placa}}</td>
              <td>{{item.modelo}}</td>
              <td>{{item.ano}}</td>
              <td>
                <a title="Deletar" @click="$emit('deletar', key)" class="btn btn-danger me-1">
                  <i class="fa-solid fa-trash-can"></i>
                </a>

                <a 
                  @click="$emit('editar',
                      key + 1,
                      item.nome,
                      item.dataReserva,
                      item.horaEntrada,
                      item.horasDeReserva,
                      item.placa,
                      item.modelo,
                      item.ano
                  )" 
                  class="btn btn-primary"
                  title="Editar"
                  >
                  <i class="fa-solid fa-pen-to-square"></i>
                  </a>
              </td>
            </tr>

          </tbody>
        </table>


    </div>
</template>

<script>
export default {
    name: "minhaTabela",
    props: {
      reservas: {
        type: Array
      }
    }
}
</script>

<style>

</style>>
