<template>
  <div class="container w-75 m-auto p-3">
      <h1 class="text-center">Ex05 - CREATE</h1>

      <hr>
      <div class="container w-75 m-auto">
        <span class="badge bg-danger border w-100" v-if="msg_create.erro" v-text="msg_create.msg"></span>
        <span class="badge bg-primary border w-100" v-else v-text="msg_create.msg"></span>
      </div>
      

      <form @submit.prevent="inserir()">
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Nome</label>
          <input type="text" v-model="nome" class="form-control" id="exampleInputPassword1">
          
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Data Nascimento</label>
          <input type="date" v-model="data_nasc" class="form-control" id="exampleInputPassword1">
          
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">CEP</label>
          <input type="text" v-model="cep" maxlength="8" class="form-control" id="exampleInputPassword1">
          
        </div>
      
        <button type="submit" class="btn btn-primary">Inserir</button>
      </form>


  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'

export default {
    name: "creAte",
    data() {
      return {
        nome: "",
        data_nasc: "",
        cep: "",
      }
    },
    computed:{
      ...mapState(["msg_create"])
    },
    methods: {
      ...mapActions(["insere"]),
      ...mapMutations(["setMsgCreate"]),
      inserir(){
          this.setMensagem("")
          if(this.nome.length == 0 || !this.nome) return false
          if(this.data_nasc == "NaN-NaN-NaN" || !this.data_nasc) return false
          if(!this.cep || this.cep.length < 8) return false
          
          this.insere({
            "nome": this.nome,
            "data_nasc": this.data_nasc,
            "cep": this.cep
          })

          this.nome = ""
          this.data_nasc = ""
          this.cep = ""
          
      }
    }
}
</script>

<style>

</style>