<template>
  <nav
    class="navbar is-transparent is-fixed-top"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="container">
      <div class="navbar-brand">
        <router-link :to="{name: 'Home', path: '/'}" class="navbar-item" @click="goTo">
          <span class="icon"><i class="fa fa-home fa-lg"></i></span>
          <h1 class="navbar-item has-text-weight-bold is-size-4">{{this.userName.toUpperCase()}}</h1>
        </router-link>
        
        <a
          role="button"
          class="navbar-burger burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarBurger"
          >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span
        ></a>
      </div>

      <div id="navbarBurger" class="navbar-menu">
        <div class="navbar-end">
          <router-link :to="{name: 'Home', path: '/'}" class="navbar-item has-text-weight-medium" @click="goTo">Home</router-link>
          <router-link :to="{name: 'Projects', path: '/projects'}" class="navbar-item has-text-weight-medium" @click="goTo">Projects</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      $navBarBurger: null,
      $navBarMenu: null,
      $html: null,
    }
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    userName() {
      return this.userData.username;
    },
  },
  mounted() {
    this.$navBarBurger = document.querySelector('.navbar-burger');
    this.$navBarMenu = document.querySelector('.navbar-menu');
    this.$html = document.querySelector('html');
    this.$navBarBurger.addEventListener('click', () => {
      this.$navBarBurger.classList.toggle('is-active');
      this.$navBarMenu.classList.toggle('is-active');
      this.$html.classList.toggle('no-scroll');
    })
  },
  methods: {
    goTo() {
      this.$navBarBurger.classList.remove('is-active');
      this.$navBarMenu.classList.remove('is-active');
      this.$html.classList.remove('no-scroll');
    }
  },
};
</script>

<style lang='scss'>
.navbar {
  box-shadow: 0px 0px 5px lightgrey;

  &-item {
    padding-top: 0;
    padding-bottom: 0;
  }

  &-menu {
    &.is-active {
      height: 100vh;
      position: relative;
      
      .navbar-end {
        position: absolute;
        top: calc(50% - 52px);
        left: 50%;
        transform: translate(-50%, calc(-50% - 52px));
        font-size: 50px;
        text-align: center;
        width: 100%;
        
        a.router-link-active {
          color: var(--main-color);
        }
      }
    }

    .navbar-end {
      .router-link-active {
        color: var(--main-color);
      }
    }
  }
}
</style>
