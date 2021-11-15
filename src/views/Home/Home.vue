<template>
  <Hero />
  <About />
</template>

<script>
import Hero from "../../components/Hero/Hero.vue";
import About from "../../components/About/About.vue";
import './Home.scss';

export default {
  components: {
    Hero,
    About,
  },
};
</script>

<style lang="">
</style>