<template>
  <div class="alunos container">
    <h1>Lista de alunos DevInHouse - Conecta Núvem</h1>
    <div class="input-group mt-5 mb-3 input-aluno col-md-6 offset-md-4">
        <input type="text" class="form-control" :placeholder="inputPlaceHolder"  @keydown.enter="adicionarAluno" v-model="aluno.nome">
    </div>
        
    <button type="button" class="btn btn-light col-md-1" @click="adicionarAluno">Adicionar</button>

    <hr />

      <div class="tabela-alunos" v-show="alunos.length > 0">
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nome</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(aluno, indice) in alunos" :key="indice">
                        <td>{{ indice + 1 }}</td>
                        <td>{{ aluno }}</td>
                        <td>
                            <button type="button" class="btn btn-danger" @click="excluirAluno(indice)">Excluir</button>
                        </td>
                    </tr>
                </tbody>
            </table>
      </div>
      <div class="mensagem-tabela-vazia" v-if="alunos.length == 0">
          <h3 v-text="mensagemTabelaVazia"></h3>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            inputPlaceHolder: 'Insira o nome do aluno',
            mensagemTabelaVazia:'Não há registro de aluno',
            aluno: {
                nome:null
            },
            alunos:[]
        }
    },
    methods:{
        adicionarAluno() {
            if (this.aluno.nome) {
                this.alunos.push(this.aluno.nome);
                this.limparCampo();
            } else {
                alert('Preencha o campo com o nome do aluno')
            }
        },
        excluirAluno(indice) {
            this.alunos.splice(indice, 1)
        },
        limparCampo() {
            this.aluno.nome = null;
        }
    }
}
</script>

<style>
    .input-aluno {
        width: 30%;
    }
    table {
        background-color: #ffffff;
    }
</style>