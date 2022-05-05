<template>
    <div>
        <img alt="Vue logo" src="./assets/logo.png">

        <h1>Usando Vuex</h1>

        <div class="container w-75 m-auto border text-center">

            <h1>{{$store.state.display.value}}</h1>


            <input type="text" v-model="display">
            <button @click="alteraDisplay()" class="btn btn-primary">Mudar display</button>
        </div>

        <h2>Actions</h2>

        <div class="container">
          <h1>{{$store.state.segundos.value}}</h1>

          <button @click.prevent="dispara()" class="btn btn-primary">Disparar Segundos</button>
          <button @click.prevent="zerar()">Zerar contagem</button>
          <button @click.prevent="parar()">Parar</button>
        </div>
        <hr>

        <div class="container">
          <input type="text" v-model="nome">
          <input type="text" v-model="idade">

          <button @click.prevent="add()" class="btn btn-primary">Add</button>
        </div>

        <ul>
          <li v-for="(p, indice) in $store.state.pessoas.pessoas" :key="indice" >Nome: {{p.nome}} Idade: {{p.idade}} <button @click="del(indice)">x</button></li>
        </ul>
    


    </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      display: "jeansplay",
      nome: "",
      idade: ""
    }
  },
  components: {
    
  },
  computed: {
  

  },
  methods: {
    alteraDisplay(){
      this.$store.commit("setdisplay",this.display)
    },
    dispara(){
    this.$store.dispatch("startCron")
    },
    zerar(){
      this.$store.commit("setsegundos", 0)
    },
    add(){
      this.$store.commit("insertPessoa", {"nome": this.nome, "idade": this.idade})

      this.nome = ""
      this.idade = ""
    },
    del(i){
      this.$store.commit("delPessoa", i)
    }
  },
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
