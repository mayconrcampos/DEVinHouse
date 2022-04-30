<template>
    <div class="container w-100 mt-2 g-3 text-center table-responsive-md"> 
        <hr>
      <transition name="slide-fade">
        <table v-if="tabela.length > 0" class="table table-sm table-hover table-bordered border-secondary table-align-middle">
          <thead class="table-dark">
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
            <tr v-for="(r, key) in tabela" :key="key">
              <th scope="row">{{r.nome}}</th>
              <td>{{r.dataReserva}}</td>
              <td>{{r.horaEntrada}}</td>
              <td>{{r.horasDeReserva}}</td>
              <td>{{r.placa}}</td>
              <td>{{r.modelo}}</td>
              <td>{{r.ano}}</td>
              <td>
                <a  @click="$emit('preenche', key, r.nome, r.dataReserva, r.horaEntrada, r.horasDeReserva, r.placa, r.modelo, r.ano)" class="btn btn-sm btn-primary me-2">Editar</a>
                <a  @click="$emit('deleta', key)" class="btn btn-sm btn-danger">Deletar</a>
              </td>
            </tr>
          </tbody>
        </table>
      
        <div v-else class="alert alert-danger text-center">
          <h1>Lista Vazia</h1>
        </div>
      </transition>
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

<style scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>>
