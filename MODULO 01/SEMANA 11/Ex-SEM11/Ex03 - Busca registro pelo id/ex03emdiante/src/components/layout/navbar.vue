<template>
  <div>
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <router-link class="navbar-brand" to="/home">Home</router-link>
        <router-link class="navbar-brand" to="/create">Create</router-link>
        <router-link class="navbar-brand" to="/read">Read</router-link>
        <router-link class="navbar-brand" to="/update">Update</router-link>
        <router-link class="navbar-brand" to="/delete">Delete</router-link>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "navBar",
};
</script>

<style>
</style>