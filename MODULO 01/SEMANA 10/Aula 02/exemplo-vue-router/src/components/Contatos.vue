<template>
  <div>
      <h2>Contatos</h2>

        <ul>
        <li><router-link to="/contatos/contatoum">Contato 1</router-link></li>
      </ul>

        
              <router-view></router-view>


      <router-link to="/home">Home</router-link>
  </div>
</template>

<script>
export default {
    name: "meuContato"
}
</script>

<style>

</style>