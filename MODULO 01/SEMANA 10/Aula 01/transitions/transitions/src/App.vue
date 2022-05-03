<template>
  <div class="container d-flex flex-column">
    <transition name="header">
      <h1 v-show="show">Header</h1>
    </transition>
    
    <button class="btn btn-dark mt-5" @click="show1 = !show1">Alterar estado</button>
  
    <h4>mode="in-out" - Insere segundo elemento pra depois remover o primeiro</h4>
   <transition name="header-bounce" mode="in-out">
      <h1 v-if="show1">Header</h1>
       <h1 v-else>Header</h1>
    </transition>
<hr>
  <h4>mode="out-in" - Remove o primeiro pra inserir o segundo</h4>
    <transition name="header-bounce" mode="out-in">
      
      <h1 v-if="show">Header</h1>
       <h1 v-else>Header</h1>
    </transition>
    
    <button class="btn btn-dark mt-5" @click="show = !show">Alterar estado</button>


    <hr class="container mt-5">


    <transition-group name="lista" tag="ul">
        <li v-for="(item, key) in numeros" :key="item" >Numero {{item}} <button @click="del(key)" class="btn btn-danger ms-3 mt-3">X</button></li>
    </transition-group>

    <label for="">Insira o numero: </label>
    <input type="text" v-model="num">
    <button @click.prevent="addNum()">Adicionar</button>

    <hr class="container mt-3">

    <div class="container">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
            <th>Del</th>
          </tr>
        </thead>
   
        
        <transition-group tag="tbody" name="corpo">
          <tr v-for="(pessoa, index) in pessoas" :key="pessoa.id">
            <td>{{pessoa.id}}</td>
            <td>{{pessoa.nome}}</td>
            <td>{{pessoa.idade}}</td>
            <td><button @click="delPessoa(index)" class="btn btn-danger">X</button></td>
          </tr>
        </transition-group>
      </table>
    </div>

    <input type="text" v-model="nome">
    <input type="text" v-model="idade">
    <button @click.prevent="addPessoa()" class="btn btn-primary mb-5">Adicionar Pessoa</button>


    </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },
  data() {
    return {
      show: false,
      show1: false,
      numeros: [1,3,5,7,9],
      num: null,
      pessoas: [{"id": 1234 ,"nome": "Maycon", "idade": 39}],
      nome: "",
      idade: ""
    }
  },
  methods: {
    addNum(){
      this.numeros.push(Number(this.num))
      this.numeros.sort((x, y) => {
        return x > y
      })
      this.num = ""
    },
    del(index){
      this.numeros.splice(index, 1)
    },
    addPessoa(){
      this.pessoas.push({
        "nome": this.nome,
        "idade": this.idade,
        "id": new Date().getMilliseconds() 
      })
      this.pessoas.sort((x, y) => {
        return x.idade > y.idade
      })

      this.nome = ""
      this.idade = ""
    },
    delPessoa(indice){
      this.pessoas.splice(indice, 1)
    }
  }
}
</script>

<style>
/*********
Entrada do elemento

Enter-from - valor de partida 0 - invisível
Enter-active - valor da transition e tempo de execução animação
Enter-to - Valor final da execução da entrada do elemnto 1 - visível

Saida do elemento
leave-from - valor inicial da saida do elemento = 1 visivel
leave-active - transition e tempo
leave-to - valor final - 0 invisível

************ */
.header-leave-to,
.header-enter-from {
  opacity: 0;
}
.header-leave-from,
.header-enter-to {
  opacity: 1;
}
.header-enter-active,
.header-leave-active {
  transition: opacity 0.6s;
}

/************************
  Transition bounce
*/

.header-bounce-enter-active {
  animation: bounce-in 0.5s;
}
.header-bounce-leave-active {
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


.lista-leave-to,
.lista-enter-from {
  opacity: 0;
  transform: translate(30px);
}
.lista-leave-from,
.lista-enter-to {
  opacity: 1;
}
.lista-move,
.lista-enter-active,
.lista-leave-active {
  transition: all 2s;
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
