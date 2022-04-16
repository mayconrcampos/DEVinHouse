<template>
  <div>
    <Compras/>

  </div>
</template>

<script>
import Compras from "./components/Compra.vue"

export default {
  name: 'App',
  components: {
    Compras
    
  }
}
</script>

<style>
body{
  background: rgb(69,73,109);
  background: linear-gradient(90deg, rgba(69,73,109,1) 71%, rgba(64,64,64,1) 100%); 
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

</style>
