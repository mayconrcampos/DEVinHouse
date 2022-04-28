<template>
    <div class="container w-100 mt-2 g-3 text-center"> 
        <hr>
        <table class="table table-sm">
  <thead>
    <tr class="bg-dark text-white">
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
    <tr v-for="(r, key) in tabela" :key="key">
      <th scope="row">{{r.nome}}</th>
      <td>{{r.dataReserva}}</td>
      <td>{{r.horaEntrada}}</td>
      <td>{{r.horasDeReserva}}</td>
      <td>{{r.placa}}</td>
      <td>{{r.modelo}}</td>
      <td>{{r.ano}}</td>
      <td>
        <a @click="$emit('preenche', key, r.nome, r.dataReserva, r.horaEntrada, r.horasDeReserva, r.placa, r.modelo, r.ano)" class="btn btn-sm btn-primary me-2">Editar</a>
        <a @click="$emit('deleta', key)" class="btn btn-sm btn-danger">Deletar</a>
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
      tabela: Array
    }
}
</script>

<style>

</style>>
