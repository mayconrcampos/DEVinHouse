<template>
  <div>
      <h2>{{idade}}</h2>

      <p>{{maioroumenor}}</p>
  </div>
</template>

<script>
import barramento from "../barramento"

export default {
    name: "MostrarIdade",
    data() {
        return {
            idade: "",
            maioroumenor: ""
        }
    },
    created() {
        barramento.$on('idadeEnviado', idade => {
            this.idade = idade

            if(idade < 5){
                this.maioroumenor = "É um bebezinho"
            }else if(idade >= 5 && idade < 18){
                this.maioroumenor = "É de menor"
            }else if(idade >= 18 && idade < 40){
                this.maioroumenor = "É de maior"
            }else if(idade >= 40 && idade < 60){
                this.maioroumenor = "Tá ficano idoso"
            }else{
                this.maioroumenor = "Tá véiasso!"
            }
        })
    }

}
</script>

<style>

</style>