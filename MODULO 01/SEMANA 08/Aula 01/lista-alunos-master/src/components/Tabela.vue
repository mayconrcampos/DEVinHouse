<template>
  <div>
      <div class="tabela-alunos" v-show="listaDeAlunos.length > 0">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(aluno, indice) in listaDeAlunos" :key="indice">
                        <td>{{ indice + 1 }}</td>
                        <td>{{ aluno }}</td>
                        <td>
                            <button type="button" class="btn btn-danger" @click="$emit('excluir-aluno', indice)">Excluir</button>
                        </td></tr>
                </tbody>
            </table>
      </div>
  </div>
</template>

<script>
export default {
    name: "Tabela",
    props: {
        listaDeAlunos: {
            type: Array,
        }
    },
    methods:{
      
        
    }

}
</script>

<style>

</style>