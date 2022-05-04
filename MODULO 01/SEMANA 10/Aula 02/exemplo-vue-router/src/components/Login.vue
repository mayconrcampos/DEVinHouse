<template>
  <div>
      <h1>Tela de Login</h1>

      <form action="">
          <input type="text" placeholder="nome"><br>
          <input type="text" placeholder="senha"><br>

          <button>Login</button>
      </form>

      <router-link to="/">Home</router-link>
  </div>
</template>

<script>
export default {
    name: "meuLogin"
}
</script>

<style>

</style>