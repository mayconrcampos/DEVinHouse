<template>
  <div>
      <h1>Home</h1>

      <h3>Nossa Home</h3>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam doloremque maxime ut aut libero aperiam quam sint ipsa quasi doloribus tempore ullam, sit dolor inventore. Dolorem ab reiciendis minima nemo.</p>

      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis illo eos totam possimus quia nostrum inventore iste quo iusto soluta sint asperiores, dolorem natus vel amet molestias exercitationem magnam? Unde.</p>

      

      <button @click.prevent="this.$router.push({path: '/contatos'})">ir pra Contatos</button>
  </div>
</template>

<script>
export default {
    name: "minhaHome",
    data() {
      return {
        
      }
    },

    // redirecionamento
    created() {
      this.$router.push({path: "/"})
    },

}
</script>

<style>

</style>