<template>
  <div class="container">
      <h1 class="text-center mt-3">Cadastro de Pessoas</h1>
      <hr>
      <div class="container w-75 m-auto">

        <form @submit.prevent="add()">
          <div class="mb-3">
            <label for="inputnome" class="form-label">Nome</label>
            <input @blur="validaNome(nome)" v-model.trim="nome" type="text" class="form-control" id="inputnome" aria-describedby="emailHelp">
            <small class="text-danger" v-if="valNome" v-text="erroNome"></small>
        
          </div>
          <div class="mb-3">
            <label for="inputidade" class="form-label">Idade</label>
            <input @blur="validaIdade(idade)" v-model="idade" type="date" class="form-control" id="inputidade">
            <small class="text-danger" v-if="valIdade" v-text="erroIdade"></small>
          </div>
          
          <button type="submit" class="btn">Cadastrar</button>
        </form>
      </div>
      <div v-if="sucesso" class="alert alert-success w-50 m-auto mt-5 border text-center p-2">
          <span>{{ mensagem }}</span>
      </div>
 
    
  </div>
</template>

<script>
export default {
    name: "caDastro",
    data() {
      return {
        nome: "",
        idade: "",
        erroNome: "ERRO! É obrigatório nome e sobrenome.",
        erroIdade: "ERRO! Data deve ser menor que a atual.",
        mensagem: "Pessoa cadastrada com sucesso",
        sucesso: false,
        valNome: false, // false não tem erro, true tem erro
        valIdade: false // false não tem erro, true tem erro

      }
    },
    methods: {
      add(){
        if(this.validaNome(this.nome) && this.validaIdade(this.idade)){
          this.$store.commit("addPessoa", {
            "id": new Date().getTime(),
            "nome": this.nome,
            "idade": this.calculaIdade(this.idade),
            "idUser": this.$store.state.userStore.idUser
          })

          this.$store.state.cadastroStore.pessoas.sort((x,y) => {
            return Number(x.idade) > Number(y.idade)
          })
          
          this.valNome = false
          this.valIdade = false
          this.sucesso = true

          this.nome = ""
          this.idade = ""
          this.$store.dispatch("salvaDB")
        }else{
          this.sucesso = false
        }
      },
      
      validaNome(val){
        this.sucesso = false
        let nomeCompleto = val.split(" ")
        var nome = nomeCompleto[0]
        var sobrenome = nomeCompleto[1]

        if(!nome) {
          this.valNome = true
        }

        if(!sobrenome){
          this.valNome = true
          return false
        }

        return true
      },

      validaIdade(data){
        if(!data) {
          this.valIdade = true
          return false
        }

        if(new Date(data) > new Date()){
          this.valIdade = true
          return false
        }

        return true
      },

      calculaIdade(data){
        let hoje = new Date().getTime()
        let Nascimento = new Date(data).getTime()
          
        let diff = Math.abs(hoje - Nascimento)
        let idade = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
        return idade
      }
    },
}
</script>

<style scoped>
  .container {
    color: whitesmoke;
  }
  .btn {
    background-color: #42b883;
    color: aliceblue;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
  }

</style>