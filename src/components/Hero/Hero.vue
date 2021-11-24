<template>
  <section id="home" class="section scrollspy">
    <div class="container">
      <div class="columns">
        <div class="column">
          <div class="columns">
            <div class="tile is-parent">
              <div class="tile is-child box">
                <p v-html="this.userData.introduction"></p>
                <p class="is-size-7 has-text-grey-dark mb-1">
                  <i class="fa fa-envelope mr-3"></i>{{ this.userData.email }}
                </p>
                <p class="is-size-7 has-text-grey-dark mb-1">
                  <i class="fa fa-phone mr-3"></i>{{ this.userData.phone }}
                </p>
                <p class="is-size-7 has-text-grey-dark mb-4">
                  <i class="fa fa-map-marker mr-3"></i> {{ this.userData.address }}
                </p>
                <a v-if="this.socialAccount.Github !== null" 
                  v-bind:href="this.socialAccount.Github.link"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i class="has-text-grey-dark is-size-5 fa fa-github mr-3"></i>
                </a>
                <a v-if="this.socialAccount.Linkedin !== null" 
                  v-bind:href="this.socialAccount.Linkedin.link"
                  target="_blank"
                  rel="noopener noreferrer">
                  <i class="has-text-grey-dark is-size-5 fa fa-linkedin mr-3"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="columns">
            <div class="tile is-parent" v-if="this.education.enable">
              <div class="tile is-child box">
                <p class="title has-text-grey-dark">{{this.education.label}}</p>
                <p class="subtitle has-text-grey is-italic mb-1">
                  {{this.education.mainEdu}}
                </p>
                <div class="education__item" v-for="item in this.education.Education" :key="item.id">
                  <p v-html="item.eduInfo"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="column">
          <div class="image-container">
            <div class="outer-border-image-lv1">
              <div class="outer-border-image-lv2">
                <figure class="image">
                  <img
                    class=""
                    v-bind:src="this.profileImage"
                    alt="Profile image"
                  />
                </figure>
              </div>
            </div>
          </div>
          <div class="has-text-centered">
            <a href="#about" class="has-text-primary">About Me</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Hero",
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    socialAccount() {
      return this.userData.social_account;
    },
    education() {
      return this.userData.education;
    },
    profileImage() {
      return process.env.NODE_ENV === 'development' ? `${process.env.VUE_APP_API_URL}${this.userData.profileImage.url}` : this.userData.profileImage.url;
      // return this.userData.profileImage.url;
    }
  },
};
</script>

<style lang="scss">

</style>