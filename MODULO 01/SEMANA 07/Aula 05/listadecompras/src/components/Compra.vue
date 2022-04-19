<template>

    <div class="card p-3 w-75 m-auto rounded rounded-3 shadow">
        <h2 class="fs-1">Lista de Compras</h2>
        <form class="w-75 m-auto">
       

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
         
          
          <button type="submit" @click.prevent="!edita ? adicionar() : editar(status)" class="btn btn-primary w-25">{{edita ? "Editar" : "Adicionar"}}</button>
          <button type="submit" @click.prevent="cancelar()" class="btn btn-danger w-25 ms-2">Cancelar</button>
          <button @click.prevent="limparCampos()" class="btn btn-dark ms-2">Limpar</button>

        </form>
        <div id="tabelaCompras" class="mt-5 mb-5">
          <table class="table table-hover table-striped mt-4">
            <thead class="table-dark">
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Nome</th>
                <th scope="col">Valor (R$)</th>
                <th scope="col">Ações</th>
              </tr>
            </thead>
            <tbody class="fs-5">
              <tr v-for="(item, chave) in listaProdutos" :key="chave">
                <th class="text-start" scope="row"> <input class="form-check-input me-3" @click="checkUncheck(chave, item.nome, item.valor, item.status)" :checked="item.status ? true: false" type="checkbox"> {{chave + 1}}</th>
                <td :class="item.status == true ? 'text-decoration-line-through':''">{{item.nome}}</td>
                <td>{{Number(item.valor).toFixed(2)}}</td>
                <td><button @click.prevent="preencheCampos(chave, item.nome, item.valor, item.status)" class="btn btn-primary">Editar</button> <button @click.prevent="deleta(chave)" class="btn btn-danger">Delete</button></td>
              </tr>
              <tr class="alert alert-light">
                <th></th>
                <th>Total</th>
                <th>{{ grana }}</th>
                <th v-show="totalComprados == true"><button @click.prevent="deletaComprados()" class="btn btn-primary p-1">Deletar Comprados</button></th>
              </tr>
              
            </tbody>
          </table>
        </div>
        
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
        totalComprados: false,
        grana: 0,

        listaProdutos: [],
        mensagemErro: "",
        erroNome: false,
        erroValor: false,
        edita: false,
        addOuEdita: "",
        indice: "",
        status: false

      }
    },
    mounted() {
      this.carregarDB()
    },

    methods:{
      salvaDB(){
        var lista = JSON.stringify(this.listaProdutos)
        localStorage.setItem("compras", lista)
      },

      carregarDB(){
        var dados = localStorage.getItem("compras")
        dados = JSON.parse(dados)
        if(dados.length > 0){
            for (let index = 0; index < dados.length; index++) {
                this.listaProdutos.push(dados[index])
            }
            this.somarTudo()
            
        }else{
            alert("ERRO! Não há itens salvos no DB")
        }
      },

      checkUncheck(chave, nome, valor, status){
        this.listaProdutos.splice(chave, 1,{
          "nome": nome,
          "valor": valor,
          "status": status ? false : true
        })

        this.salvaDB()
        this.somarTudo()
      },
  
      limparCampos(){
        this.produto.nome = ""
        this.produto.valor = ""
        this.edita = false
        this.indice = ""
      },

      preencheCampos(index, nome, valor, status){
        this.produto.nome = nome
        this.produto.valor = valor
        this.status = status
        this.indice = index
        this.edita = true
      },

      deleta(key){
        this.listaProdutos.splice(key, 1)
        this.salvaDB()
        this.somarTudo()
      },

      deletaComprados(){
        var tamanho = this.listaProdutos.length - 1
        for(let i = tamanho; i >= 0; i--){
          if(this.listaProdutos[i].status == true){
            this.deleta(i)
          }
        }
        this.salvaDB()
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

      editar(status){
        this.validaCampos()
        if(this.produto.nome != "" && !isNaN(this.produto.valor) && this.produto.valor > 0){
          this.listaProdutos.splice(this.indice, 1, {
            "nome": this.produto.nome,
            "valor": this.produto.valor,
            "status": status
          })
        } 
          this.salvaDB()
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
            "valor": this.produto.valor,
            "status": false
          })
        } 
          this.salvaDB()
          this.somarTudo()
          this.produto.nome = ""
          this.produto.valor = ""  
      },

      cancelar(){
        this.listaProdutos = []
        this.somarTudo()
        this.salvaDB()
      },

      somarTudo(){
        this.total = 0
        var flag = 0
        for (const item of this.listaProdutos) {
          this.total += Number(item.valor)
          
          if(item.status == true){
            flag++
          }
        }

        this.grana = this.total.toLocaleString("pt-br", {style: "currency", currency: "BRL"})
 

        if(flag > 0){
            this.totalComprados = true
          }else{
            this.totalComprados = false
          }
      },

    
    }
}
</script>

<style>
.msg-error{
  color: red;
}

</style>