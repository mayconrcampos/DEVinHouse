<template>
  <div>

      <h3>Bio: {{nome}}</h3>


      <h4>Bio</h4>
      
      <p>{{bio}}</p>

      

      <router-link to="/equipe">Retornar</router-link>
  </div>
</template>

<script>
export default {
    name: "umMembro",
    data() {
      return {
        
      }
    },
    
    //computed: {
    //  membro(){
    //    return this.$route.params.nome
    //  },
    //  bio(){
    //    return this.$route.params.bio
    //  }
    //},
    props: {
      nome: {
        type: String
      },
      bio: {
        type: String
      }
    }
   
  
}
</script>

<style>

</style>