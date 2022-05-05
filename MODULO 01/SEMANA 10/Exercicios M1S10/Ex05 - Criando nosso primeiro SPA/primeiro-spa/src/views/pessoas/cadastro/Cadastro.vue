<template>
  <div class="container">
      <h1 class="text-center mt-3">Cadastro</h1>
      <hr>
      <div class="container w-75 m-auto">

        <form>
          <div class="mb-3">
            <label for="inputnome" class="form-label">Nome</label>
            <input type="text" class="form-control" id="inputnome" aria-describedby="emailHelp">
        
          </div>
          <div class="mb-3">
            <label for="inputidade" class="form-label">Idade</label>
            <input type="date" class="form-control" id="inputidade">
          </div>
          
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
  </div>
</template>

<script>
export default {
    name: "caDastro"
}
</script>

<style scoped>
  .container {
    color: whitesmoke;
  }

</style>