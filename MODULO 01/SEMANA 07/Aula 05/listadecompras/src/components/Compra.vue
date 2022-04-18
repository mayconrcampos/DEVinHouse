<template>

    <div class="card p-3 w-75 m-auto rounded rounded-3 shadow">
        <h2>Lista de Compras</h2>
        <form>
       

          <div class="mb-3">
            <label for="produto" class="form-label">Produto</label>
            <input type="text" v-model="produto.nome"  class="form-control" id="produto" aria-describedby="emailHelp">
            <span v-show="erroNome" class="msg-error">{{mensagemErro}}</span>
          </div>

          <div class="mb-3">
            <label for="preco"  class="form-label">Preço</label>
            <input type="text" v-model="produto.valor" class="form-control" id="preco">
            <span v-show="erroValor" class="msg-error">{{mensagemErro}}</span>
          </div>
         
          
          <button type="submit" @click.prevent="!edita ? adicionar() : editar()" class="btn btn-primary w-25">{{edita ? "Editar" : "Adicionar"}}</button>
          <button type="submit" @click.prevent="cancelar()" class="btn btn-danger w-25 ms-2">Cancelar</button>
          <button @click.prevent="limparCampos()" class="btn btn-dark ms-2">Limpar</button>

        </form>

        <table class="table mt-4">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Valor (R$)</th>
              <th scope="col">Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, chave) in listaProdutos" :key="chave">
              <th scope="row"><input type="checkbox"> {{chave + 1}}</th>
              <td>{{item.nome}}</td>
              <td>{{item.valor}}</td>
              <td><button @click.prevent="preencheCampos(chave, item.nome, item.valor)" class="btn btn-primary">Editar</button> <button @click.prevent="deleta(chave)" class="btn btn-danger">Delete</button></td>
            </tr>
            <th>Total (R$)</th>
            <th>{{ total.toFixed(2) }}</th>
          </tbody>
        </table>
    </div>

</template>

<script>
export default {
    name: "compras"
    ,
    data(){
      return{
        produto: {
          nome: null,
          valor: null
        },
        total: 0,
        listaProdutos: [],
        mensagemErro: "",
        erroNome: false,
        erroValor: false,
        edita: false,
        addOuEdita: "",
        indice: ""

      }
    },
    methods:{
      limparCampos(){
        this.produto.nome = ""
        this.produto.valor = ""
        this.edita = false
        this.indice = ""
      },
      preencheCampos(index, nome, valor){
        this.produto.nome = nome
        this.produto.valor = valor
        this.indice = index
        this.edita = true
      },

      deleta(key){
        this.listaProdutos.splice(key, 1)
        this.somarTudo()
      },

      validaCampos(){
        this.erroNome = false
        this.erroValor = false
        if(!this.produto.nome){
          this.erroNome = true
          this.mensagemErro = "Preenchimento obrigatório"
        }
        if(!this.produto.valor || isNaN(this.produto.valor)){
          this.erroValor = true
          this.mensagemErro = "Preenchimento obrigatório"
        }
      },

      editar(){
        this.validaCampos()
        if(this.produto.nome != "" && !isNaN(this.produto.valor) && this.produto.valor > 0){
          this.listaProdutos.splice(this.indice, 1, {
            "nome": this.produto.nome,
            "valor": this.produto.valor
          })
        }
          this.somarTudo()
          this.produto.nome = ""
          this.produto.valor = ""
          this.indice = ""
          this.edita = false
      },

      adicionar(){
        this.validaCampos()
        if(this.produto.nome != "" && !isNaN(this.produto.valor) && this.produto.valor > 0){
          this.listaProdutos.push({
            "nome": this.produto.nome,
            "valor": this.produto.valor
          })
        }
          this.somarTudo()
          this.produto.nome = ""
          this.produto.valor = ""  
      },

      cancelar(){
        this.listaProdutos = []
      },

      somarTudo(){
        this.total = 0
        for (const item of this.listaProdutos) {
          this.total += Number(item.valor)
        }
      }
    }
}
</script>

<style>
.msg-error{
  color: red;
}

</style>