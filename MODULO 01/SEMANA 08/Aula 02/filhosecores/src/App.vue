<template>
    <div>
      <h1 :style="cor">{{ frase }}</h1>

      <Azul @corAzul="mudacor"/>
      <Amarelo @corAmarelo="mudacor" />
      <Vermelho @corVermelho="mudacor"/>

      {{verificaCorAzul}}
    
    </div>
</template>

<script>
import Azul from "./components/Azul.vue"
import Amarelo from "./components/Amarelo.vue"
import Vermelho from "./components/Vermelho.vue"

export default {
  name: 'App',
  components: {
    Azul,
    Amarelo,
    Vermelho
  },
  data() {
    return {
      cor: "",
      frase: "",
    }
  },
  methods: {
    mudacor(cor, frase){
      this.cor = cor
      this.frase = frase
    }
  },
  watch: {
    // Monitora estado da variável
    cor(novoValor, valorAntigo){
      console.log("Novo valor: "+novoValor)
      console.log("Valor antigo: "+valorAntigo)
    }
  },
  computed: {
    // verifica se cor é azul
    verificaCorAzul(){
      return this.frase == "Sou a cor Azul" ? "Melhor cor" : "Feinha que dói"
    }
  }
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
