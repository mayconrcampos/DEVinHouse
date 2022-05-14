<template>
  <div>
    <Navbar />

    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/layout/navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

<style>
</style>
