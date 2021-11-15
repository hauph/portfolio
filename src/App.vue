<template>
  <div class="app-inner" v-if="this.userData && Object.keys(this.userData).length">
    <NavBar />
    <router-view />
  </div>
  <Spinner v-else />
</template>

<script>
import NavBar from "./components/NavBar/NavBar.vue";
import Spinner from "./components/Spinner/Spinner.vue";
import "./assets/styles/index.css";

export default {
  name: "App",
  components: {
    NavBar,
    Spinner
  },
  mounted() {
    fetch(`${process.env.VUE_APP_API_URL}/users/${process.env.VUE_APP_USER}`)
      .then(function (response) {
        return response.json();
      })
      .then(data => {
        this.$store.commit('setUserData', data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  },
  computed: {
    userData() { 
      return this.$store.state.userData;
    }
  }
};
</script>

<style lang="scss">
html {
  &.no-scroll {
    overflow: hidden;
  }

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
}

a:hover, a:focus {
  color: var(--main-color) !important;

  h1 {
    color: var(--main-color) !important;
  }
}

:root {
  --main-color: #00d1b2;
}
</style>
