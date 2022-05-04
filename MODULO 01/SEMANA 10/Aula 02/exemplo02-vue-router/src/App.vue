<template>
  <div>
    <img alt="Vue logo" src="./assets/logo.png">

    <header>
      <ul>
        <li><router-link to="/empresa">Empresa | </router-link></li>
        <li><router-link to="/contatinhos">Contatos | </router-link></li> <!---- Apelido para rota contatos----> 
        <li><router-link :to="{name: 'company'}">Home</router-link></li> <!-- rota com nome dinâmico --->
      </ul>
    </header>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
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

header ul {
  margin: auto;
  display: flex;
  flex-direction: row;
  list-style: none;
  justify-content: center;
  text-decoration: none;
}
header ul li {
  margin-right: 5px;
}
</style>
