<template>
  <div>
    <navbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/shared/navbar/NavBar.vue"
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>

</style>
