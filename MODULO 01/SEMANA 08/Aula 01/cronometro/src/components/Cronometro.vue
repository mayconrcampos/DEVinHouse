<template>
    <div id="cronometro">
        <h1 @dblclick="$emit('parar')">{{ hora }}:{{ minuto }}:{{ segundos }}:{{ milisegundos }}</h1>

        <Transition name="bounce">
            <div v-if="listaVoltas.length > 0" id="listaVoltas">
                <ul v-for="(item, key) in listaVoltas" :key="key">
                  <li> {{key + 1}} - {{item}}</li>
                </ul>
            
            </div>
        </Transition>
            <div>
                <button @click="$emit('addlista', [hora, minuto, segundos, milisegundos])">Marcar Tempo</button>
                <button @click="$emit('limpatempo')">Limpar</button>
            </div>
        
    </div>
        
</template>

<script>
export default {
    name: "Cronometro",
    props: {
        hora: String,
        minuto: String,
        segundos: String,
        milisegundos: String,
        listaVoltas: {
            type: Array
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Press+Start+2P&display=swap');
#cronometro {
    width: 50%;
    margin: auto;
    background-color: #fefefe;
    box-shadow: 7px 7px 20px black;
    padding: 20px;
    border-radius: 10px;
    margin-top: 10px;
    margin-bottom: 50px;
}

#cronometro h1:hover{
    color: #0a520a;
}

#cronometro h1 {
    font-family: 'Open Sans', sans-serif;
    font-family: 'Press Start 2P', cursive;
    font-size: 4em;
    color: #339933;
    cursor: pointer;
}


#cronometro button:hover{
    background-color: coral;
    border-color: lightblue;
    color: dimgray;
}
#cronometro button {
    background-color: #a4a4a4;
    font-family: 'Courier New', Courier, monospace;
    font-size: 2em;
    font-weight: bold;
    color: whitesmoke;
    padding: 10px;
}
ul li {
    list-style: none;
    font-family: 'Courier New', Courier, monospace;
    font-size: 3em;
    color: dimgray;
}

@media (max-width: 1475px){
  #cronometro h1{
    font-size: 2em;
   }
   ul li {
       font-size: 2em;
   }
}

@media (max-width: 740px){
    #cronometro h1{
    font-size: 1em;
    }
    ul li {
        font-size: 1em;
    }
    #cronometro button {
        font-size: 1em;
    }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.25);
  }
  100% {
    transform: scale(1);
  }
}

</style>