<template>
  <section className="section section-padding-top">
    <div className="container">
      <h1 className="title">
        <i className="fa fa-tasks"></i>{{ projectData.label }}
      </h1>
      <table class="table">
        <tbody>
          <tr v-for="item in this.projectData.projects" :key="item.id">
            <td>
              <figure className="image">
                <img v-bind:src="`${this.apiURL}${item.cover.url}`" v-bind:alt="item.label" />
                <figcaption class="has-text-centered">{{item.label}}</figcaption>
              </figure>
            </td>
            <td v-html="item.description"></td>
            <td><a v-bind:href="item.link">Learn More</a></td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectList",
  data() {
    return {
      apiURL: process.env.VUE_APP_API_URL,
    };
  },
  mounted() {
    console.log(this.userData);
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    projectData() {
      return this.userData.project;
    },
  },
};
</script>

<style lang="">
</style>