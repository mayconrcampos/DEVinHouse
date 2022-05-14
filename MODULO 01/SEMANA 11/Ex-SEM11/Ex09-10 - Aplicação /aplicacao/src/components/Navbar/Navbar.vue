<template>
  <div
    class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark"
    style="width: 220px"
    id="div"
  >
    <a
      href="/"
      class="
        d-flex
        align-items-center
        mb-3 mb-md-0
        me-md-auto
        text-white text-decoration-none
      "
    >
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>
      <span class="fs-4">Sidebar</span>
    </a>
    <hr />
    <ul class="nav nav-pills flex-column mb-auto">
      <li class="nav-item">
        <router-link to="/home" class="nav-link text-white" aria-current="page">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#home"></use>
          </svg>
          <i class="fa-solid fa-house"></i> Home
        </router-link>
      </li>
      <li>
        <router-link to="/dashboard" class="nav-link text-white">
          <svg class="bi me-2" width="16" height="16">
            <use xlink:href="#speedometer2"></use>
          </svg>
          <i class="fa-solid fa-align-justify"></i> Dashboard
        </router-link>
      </li>
    </ul>
    <hr />
    <div class="dropdown">
      <a
        href="#"
        class="
          d-flex
          align-items-center
          text-white text-decoration-none
          dropdown-toggle
        "
        id="dropdownUser1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <strong><i class="fa-solid fa-users"></i> Usuarios</strong>
      </a>
      <ul
        class="dropdown-menu dropdown-menu-dark text-small shadow"
        aria-labelledby="dropdownUser1"
      >
        <li>
          <router-link class="dropdown-item" to="/register"
            >Register</router-link
          >
        </li>
        <li>
          <router-link class="dropdown-item" to="/login">Login</router-link>
        </li>
        <li><hr class="dropdown-divider" /></li>
        <li><a class="dropdown-item" href="#">Sign out</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: "navBar",
  data() {
    return {
      ativa: "",
    };
  },
  methods: {},
  created() {},
};
</script>

<style>
#div {
  height: 100% !important;
}
ul li {
  transition: 1s;
}
ul li:hover {
  background: rgb(111, 113, 121);
  background: radial-gradient(
    circle,
    rgba(111, 113, 121, 1) 51%,
    rgba(30, 30, 30, 1) 96%
  );
}
</style>