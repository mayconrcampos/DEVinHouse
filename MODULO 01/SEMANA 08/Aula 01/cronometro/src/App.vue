<template>
<div>
  <div id="header">
    <h1>Cronômetro</h1>
    <img src="./assets/relogio.png" alt="reloginho">
  </div>
    
    <div id="buttons">
      <button id="btn1" @click.prevent="relogio()">Iniciar</button>
      <button id="btn2" @click.prevent="parar()">Parar</button>
      <button id="btn3" @click.prevent="zerar()">Zerar</button>
    </div>

    <Cronometro @parar="parar" @limpatempo="limpatempo" @addlista="marcarVolta" :listaVoltas="listadeVoltas" :hora="addZero(hora)" :minuto="addZero(minuto)" :segundos="addZero(segundos)" :milisegundos="addZero(milisegundos)"/>

   
</div>
</template>

<script>
import Cronometro from "./components/Cronometro.vue"
export default {
  name: 'App',
  components: {
    Cronometro
  },
  data(){
    return{
      hora: 0,
      minuto: 0,
      segundos: 0,
      milisegundos: 0,
      contador: 0,
      listadeVoltas: [],
    
    }
  },
 
  methods: {
    limpatempo(){
      this.listadeVoltas = []
    },
    addZero(tempo){
      return tempo < 10 ? "0"+Number(tempo) : `${tempo}`
    },

    marcarVolta(tempo){
      var volta = `${this.addZero(tempo[0])}:${this.addZero(tempo[1])}:${this.addZero(tempo[2])}:${this.addZero(tempo[3])}`
      this.listadeVoltas.push(volta)
    },

    zerar(){
      this.hora = 0
      this.minuto = 0
      this.segundos = 0
      this.milisegundos = 0

    },

    parar(){
      clearInterval(this.contador)
    },

    relogio(){
      this.contador = setInterval(() => {
        this.milisegundos++
        if(this.milisegundos == 100){
          this.segundos++
          this.milisegundos = 0
        }
        
        if(this.segundos == 60){
          this.minuto++
          this.segundos = 0
        }
        
        if(this.minuto == 60){
          this.hora++
          this.minuto = 0
        }
        if(this.hora == 60){
          this.minuto = 0
          this.hora = 0
          this.segundos = 0
        }
      }, 10)
    }
  }
}
</script>

<style>
body {
  background: rgb(255,255,255);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(78,198,234,1) 63%); 
  top: 0;
}
#header {
  top: 0;
  left: 0;
  display: flexbox;
  flex-direction: row;
  margin-bottom: 20px;
  
}
#header h1 {
  text-align: center;
  font-family: 'Courier New', Courier, monospace;
  font-size: 3em;
}
#header img {
  width: 150px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: whitesmoke;
  margin-top: 60px;
}
#buttons {
  padding: 10px;
}
#btn1:hover{
  background-color: #083d08;
}
#btn1 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 2em;
  border: none;
  border-radius: 7px;
  padding: 10px;
  margin: 5px;
  background-color: #329632;
  box-shadow: 3px 4px 10px black;
  color: whitesmoke;
  cursor: pointer;
}
#btn2:hover{
  background-color: rgb(175, 45, 22);
}
#btn2 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 2em;
  border: none;
  border-radius: 7px;
  padding: 10px;
  margin: 5px;
  background-color: tomato;
  box-shadow: 3px 4px 10px black;
  color: whitesmoke;
  cursor: pointer;
}
#btn3:hover{
  background-color: rgb(139, 153, 153);
}
#btn3 {
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 2em;
  border: none;
  border-radius: 7px;
  padding: 10px;
  margin: 5px;
  background-color: lightcyan;
  box-shadow: 3px 4px 10px black;
  color: black;
  cursor: pointer;
}
div h1 {
  color: black;
}


@media (max-width: 670px){
  #btn1 {
    font-size: 1em;
  }
  #btn2 {
    font-size: 1em;
  }
  #btn3 {
    font-size: 1em;
  }
}
</style>
