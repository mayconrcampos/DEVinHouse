<template>
  <div>
    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/shared/navbar/NavBar.vue"
export default {
  name: 'App',
  components: {
    Navbar
  },
  mounted() {
    this.$store.dispatch("carregaUserDB"),
    this.$store.dispatch("carregaDB"),
    this.carregaUserID()
  },
  methods: {
    carregaUserID(){
      if(this.$cookies.get("logado")){
        this.$store.commit("setToken", true)
        this.$store.commit("setIdUser", this.$cookies.get("id"))
        this.$store.commit("setUsuarioLogado", this.$cookies.get("user"))
      }
      
      

    }
  }
}
</script>

<style>
  body {
    background: rgb(27,30,43);
    background: linear-gradient(106deg, rgba(27,30,43,1) 0%, rgba(41,45,62,1) 45%); 
    
  }
</style>
