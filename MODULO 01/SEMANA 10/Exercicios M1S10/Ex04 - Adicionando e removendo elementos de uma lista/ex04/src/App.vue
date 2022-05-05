<template>
  <div>
    <header class="card-header w-100">
        <h1>Formulário</h1>
    </header>
    
    <div class="container w-75 m-auto mt-3 mb-5">
        <form @submit.prevent="addPessoa()">
            <label class="form-label">Nome</label>
            <input v-model="nome" type="text" class="form-control w-50 m-auto">

            <label class="form-label">Data Nascimento</label>
            <input v-model="nascimento" type="date" class="form-control w-50 m-auto">

            <button class="btn btn-dark mt-3">Adicionar</button>
        </form>
    </div>

      <transition name="tables" mode="out-in">
      
        <div v-if="pessoas.length > 0" class="container w-75 m-auto mt-3">
            <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Idade</th>
                    <th scope="col">Ação</th>
                  </tr>
                </thead>
                <transition-group tag="tbody" name="corpo">
                  <tr v-for="(p, indice) in pessoas" :key="p.id">
                    <td>{{p.nome}}</td>
                    <td>{{p.idade}}</td>
                    <td><button @click.prevent="del(indice)" class="btn btn-danger">x</button></td>
                  </tr>
                </transition-group>
            </table>
        </div>
        <div v-else class=" d-flex mt-3 w-50 m-auto">
            <span class="alert alert-danger w-75 m-auto">Não há pessoas cadastradas</span>
        </div>
      </transition>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
      return {
        pessoas: [],
        nome: "",
        nascimento: null

      }
  },
    methods: {
        addPessoa(){
            this.pessoas.push({
                "id": new Date().getTime(),
                "nome": this.nome,
                "idade": this.getIdade(this.nascimento)
            })
            this.pessoas.sort((x, y) => {
              return Number(x.idade) > Number(y.idade)
            })
            this.nome = ""
            this.idade = ""
        },
        getIdade(data){
            let hoje = new Date().getTime()
            let Nascimento = new Date(data).getTime()
            
            let diff = Math.abs(hoje - Nascimento)

            let idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))

            return idade

        },
        del(indice){
            this.pessoas.splice(indice, 1)
        }
    },

}
</script>

<style>
        body {
            text-align: center;
        }
        header {
            width: 70%;
            margin: auto;
        }
        button {
            margin: auto;
        }
        
        /** Transition Tbody***/
        .tables-leave-to,
        .tables-enter-from {
          opacity: 0;
        }
        .tables-leave-from,
        .tables-enter-to {
          opacity: 1;
        }
        .tables-enter-active,
        .tables-leave-active {
          transition: opacity 0.6s;
        }

        .corpo-leave-to,
        .corpo-enter-from {
          opacity: 0;
          transform: translate(30px);
        }
        .corpo-leave-from,
        .corpo-enter-to {
          opacity: 1;
        }
        .corpo-move,
        .corpo-enter-active,
        .corpo-leave-active {
          transition: all 0.8s;
        }
</style>
