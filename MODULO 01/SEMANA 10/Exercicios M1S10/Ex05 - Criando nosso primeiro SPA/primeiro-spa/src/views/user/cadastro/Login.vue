<template>
  <div class="container">
      <h1 class="text-center mt-3">Fazer Login</h1>

      <hr>

      <div class="container w-75 m-auto">

        <form @submit.prevent="addUser()">
          <div class="mb-3">
            <label for="inputnome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="inputnome" aria-describedby="emailHelp">
            
        
          </div>
          <div class="mb-3">
            <label for="inputemail" class="form-label">Email</label>
            <input type="email" class="form-control" id="inputemail">
          </div>

          <div class="mb-3">
            <label for="inputsenha1" class="form-label">Senha</label>
            <input type="password" class="form-control" id="inputsenha1">
          </div>
          
          <button type="submit" class="btn">Login no Sistema</button>
        </form>
      </div>
        <div class="alert alert-danger w-50 m-auto mt-5 border text-center p-2">
          <span>Mensagem de erro</span>
      </div>
  </div>
</template>

<script>
export default {
    name: "loginUser"
}
</script>

<style scoped>
.btn {
    background-color: #42b883;
    color: aliceblue;

    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.5em;
  }

</style>