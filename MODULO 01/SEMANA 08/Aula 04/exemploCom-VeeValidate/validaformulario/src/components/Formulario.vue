<template>
<div class="container text-left">
    <h1>Formulário</h1>
    <Form>
        <div class="mb-3">
            <label for="nomeproduto" class="form-label">Nome do produto</label>
            <Field :rules="validaNome" name="nome" v-model="produto.nome" type="text" class="form-control" id="nomeproduto" aria-describedby="emailHelp"/>
            <span>
                <ErrorMessage name="nome"/>
            </span>

        </div>
        <div class="mb-3">
            <label for="valorproduto" class="form-label">Valor</label>
            <Field :rules="validaValor"  name="valor" v-model="produto.valor" type="text" class="form-control" id="valorproduto"/>
            <span>
                <ErrorMessage name="valor"/>
            </span>
        </div>

          <button @click.prevent="add()" type="submit" class="btn btn-primary" :disabled="habilitabtn">Submit</button>
    </Form>
      <ListaProdutos :produtos="produtos" />
</div>
</template>

<script>
import {Form, Field, ErrorMessage} from "vee-validate"
import ListaProdutos from "./ListaProdutos.vue"

export default {
    name: "Formulario",
    components: {
        ListaProdutos,
        Form,
        Field,
        ErrorMessage
    },
    data() {
        return {
            produto: {
                nome: null,
                valor: null
            },
            produtos: [],
            habilitabtn: false
        }
    },
    methods: {
        add(){
            console.log(this.validaNome(this.produto.nome))
            console.log(this.validaValor(this.produto.valor))
            this.produtos.push({
                    "nome": this.produto.nome,
                    "valor": this.produto.valor
            })
        },
        validaNome(atributo){
            if(!atributo){
                this.habilitabtn = false
                return "Campo nome não pode ser vazio"
            }
            this.habilitabtn = true
            return true
        },
        validaValor(atributo){
            if(typeof atributo !== "number" || atributo == 0){
                this.habilitabtn = false
                return "O campo valor é obrigatório."
            }
            this.habilitabtn = true
            return true
            
        }
    },
}
</script>

<style>

</style>