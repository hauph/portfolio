<template>
  <section id="projects" class="section">
    <div class="container">
      <h1 class="title">
        <i class="fa fa-tasks"></i>{{ projectData.label }}
      </h1>

      <div class="columns is-multiline">
        <div v-for="item in this.projectData.projects" :key="item.id" class="column is-one-third-desktop is-half-tablet">
          <div class="card">
            <div class="card-header">
              <div class="card-image">
                <figure class="image is-4by3">
                  <img v-bind:src="`${this.apiURL}${item.cover.url}`" v-bind:alt="item.label" />
                </figure>
              </div>

              <div class="is-size-5 has-text-weight-medium has-text-centered card-title">
                {{item.label}}
              </div>

              <div class="card-content is-size-7">
                <div v-html="item.description"></div>
                <p v-if="item.Technologies.length" class="is-italic">
                  <span class="has-text-weight-bold">Technologies: </span>
                  <span v-for="(tech, index) in item.Technologies" :key="tech.id">{{tech.name}}<span v-if="index < item.Technologies.length - 1">, </span></span>
                </p>
              </div>
            </div>

            <div class="card-footer">
              <div class="card-footer-item media">
                <a v-bind:href="item.link" target="_blank" rel="noopener noreferrer" class="is-size-7 is-primary">Learn More</a >
              </div>
            </div>
          </div>
        </div>
      </div>
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

<style lang="scss" scoped>
  #projects {
    .card {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;

      &-header {
        display: block;
        box-shadow: unset;

        .card-image {
          margin-bottom: 0.75rem;
          
          figure {
            position: relative;
            overflow: hidden;

            img {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              height: auto;
            }
          }
        }        
      }
    }
  }
</style>