<template>
  <div>
    <meu-form :mouseentra="aumenta" @mouseover="mousemove1" @mouseleaver="mousesai1"/>
  </div>
</template>

<script>
import MeuForm from "./components/formulario.vue"

export default {
  name: 'App',
  components: {
    MeuForm
  },
  data() {
    return {
      tamanho: "",
      aumenta: false,
      aumenta2: false
    
    }
  },
  methods: {
    mousemove(){
      this.aumenta = true
    },
    mousesai(){
      this.aumenta = false
    },
    mousemove1(){
      this.aumenta = true
    },
    mousesai1(){
      this.aumenta = false
    }
  }
}
</script>

<style>

</style>
