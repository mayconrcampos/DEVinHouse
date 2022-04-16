<template>
  <div id="principal">
    <h1>Formulário</h1>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Nome</label>
          <input type="email" v-model="pessoa.nome" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
      
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Idade</label>
          <input type="text" v-model="pessoa.idade" class="form-control" id="exampleInputPassword1">
        </div>
        <button @click.prevent="add()" type="submit" class="btn btn-primary">Add</button>
      </form>
      {{lista}}
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  },
  data(){
    return{
      pessoa: {
        nome: "",
        idade: ""
      },
      lista: []
    }
  },
  methods:{
    add(){
      if(this.pessoa.nome.length > 0 && !isNaN(this.pessoa.idade) && this.pessoa.idade > 0){
        this.lista.push({
          "nome": this.pessoa.nome,
          "idade": this.pessoa.idade
        })
      }
    }
  }
}
</script>

<style>
body{
  background-color: black;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: black;
}
#principal{
  margin: auto;
  width: 60%;
  background: rgb(102,158,102);
  background: linear-gradient(90deg, rgba(102,158,102,1) 85%, rgba(64,64,64,1) 100%); 
  color: white;
  border-radius: 19px;
  padding: 20px;
}
</style>
