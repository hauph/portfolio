<template>
  <nav
    class="navbar is-transparent is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="{name: 'Home', path: '/'}" class="navbar-item">
          <span class="icon"><i class="fa fa-home fa-lg"></i></span>
          <h1 class="navbar-item has-text-weight-bold is-size-4">{{this.userName.toUpperCase()}}</h1>
        </router-link>
        
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBurger"
          ><span aria-hidden="true"></span><span aria-hidden="true"></span
          ><span aria-hidden="true"></span
        ></a>
      </div>

      <div id="navbarBurger" class="navbar-menu">
        <div class="navbar-end">
          <router-link :to="{name: 'Home', path: '/'}" class="navbar-item has-text-weight-medium">Home</router-link>
          <router-link :to="{name: 'Projects', path: '/projects'}" class="navbar-item has-text-weight-medium">Projects</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    userName() {
      return this.userData.username;
    },
  },
};
</script>

<style>
</style>
