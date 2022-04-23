<template>
<div class="container text-left">
     <!-- Full screen modal -->
<div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <h1>Adicionar Itens</h1>
        <div class="mb-3">
            <label for="nomeproduto" class="form-label">Nome do produto</label>
            <input name="nome" v-model="produto.nome" type="text" class="form-control w-75 m-auto" id="nomeproduto" aria-describedby="emailHelp"/>
            <span>
                {{msgErro}}
            </span>

        </div>
        <div class="mb-3">
            <label for="valorproduto" class="form-label">Valor</label>
            <input  name="valor" v-model="produto.valor" type="text" class="form-control w-75 m-auto" id="valorproduto"/>
            {{msgErro}}
           
        </div>

          <button @click.prevent="add()" type="submit" class="btn btn-primary w-50 m-auto" :disabled="habilitabtn">Cadastrar</button>
      
      <div class="modal-footer">
        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Fecha formulário</button>
      </div>
    </div>
  </div>
</div>

    <a class="btn btn-primary mt-5" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Abrir formulário</a>
    


      <ListaProdutos :produtos="produtos" :total="total" @del="del" />

      
</div>
</template>

<script>
import ListaProdutos from "./ListaProdutos.vue"



export default {
    name: "Formulario",
    components: {
        ListaProdutos
    },
    data() {
        return {
            produto: {
                nome: null,
                valor: null
            },
            produtos: [],
            habilitabtn: false,
            msgErro: "",
            total: null
        }
    },
    methods: {
        add(){
            this.total = 0
            if(this.produto.nome.length > 0 && this.produto.valor > 0 && !isNaN(this.produto.valor)){
                this.produtos.push({
                "nome": this.produto.nome,
                "valor": this.produto.valor
                })
                this.somaTudo()
                this.msgErro = ""
            }else{
                this.msgErro = "Campos Vazios não são permitidos."
            }
            

            this.produto.nome = ""
            this.produto.valor = ""
            
        },
        del(key){
            this.produtos.splice(key, 1)
        },
        somaTudo(){
            this.produtos.forEach(item => {
                this.total += Number(item.valor)
            });
        }

       
    },
}
</script>

<style>

</style>