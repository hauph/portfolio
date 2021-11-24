<template>
  <div id="work-experience" class="container">
    <div class="mt-6">
      <h3 class="has-text-centered has-text-grey-dark title">
        {{ this.experience.label }}
      </h3>
    </div>

    <div class="mt-6 is-multiline">
      <div class="is-ancestor columns is-multiline">
        <div
          class="tile is-parent column is-one-third-desktop is-half-tablet"
          v-for="item in this.ex"
          v-bind:key="item.id"
        >
          <article class="tile is-child box">
            <figure class="image is-64x64">
              <img
                v-bind:src="`${this.apiURL}${item.company_icon.url}`"
                alt=""
              />
            </figure>
            <p v-html="item.detail"></p>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "WorkExperience",
  data() {
    return {
      ex: this.experience.experience,
      apiURL: process.env.NODE_ENV === 'development ' ? process.env.VUE_APP_API_URL : '',
    //   apiURL: '',
    };
  },
  props: {
    experience: {
      type: Object,
    },
  },
};
</script>

<style lang="scss">
#work-experience {
  ul {
    list-style: disc;
  }
}
</style>