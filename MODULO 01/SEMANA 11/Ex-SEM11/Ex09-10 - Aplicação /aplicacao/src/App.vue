<template>
  <div id="container">
    <navbar />
    <div id="content" class="container w-100 m-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import navbar from "./components/Navbar/Navbar.vue";
export default {
  name: "App",
  components: {
    navbar,
  },
  methods: {
    ...mapActions(["carregaLocalStorage"]),
  },
  mounted() {
    this.carregaLocalStorage()
  },
};
</script>

<style scoped>
body {
  padding: 0;
  left: 0;
  bottom: 0;
}
#container {
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(210, 210, 210, 1) 100%
  );
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  position: fixed;
  width: 100%;
  min-height: max-content;
  bottom: 0;
  top: 0;
}
#content {
  height: 95% !important;
}
</style>
