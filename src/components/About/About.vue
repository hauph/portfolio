<template>
  <section id="about" class="section has-background-light">
    <div class="container scrollspy" v-if="this.about.enable">
      <div class="columns is-desktop">
        <div class="column about__image">
          <img
            class="ab-img"
            src="../../assets/images/ab-img.png"
            alt="About image"
          />
        </div>

        <div class="column about__profile-img">
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
        </div>

        <div class="column about__info">
          <div class="tile is-parent">
            <div class="tile is-child box">
              <p v-html="this.about.description"></p>
              <ul class="unorderd-list">
                <li v-for="item in this.about.skills" v-bind:key="item.id">
                  <span
                    class="has-text-grey-dark is-size-7 has-text-weight-medium"
                    >{{ item.skillName }}</span
                  >
                </li>
              </ul>
              <p>
                <button
                  type="button"
                  v-on:click="this.downloadCV()"
                  class="button is-rounded is-primary mt-5 is-outlined"
                >
                  Download CV
                  <span class="icon">
                    <i class="ml-3 fa fa-download"></i>
                  </span>
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <WorkExperience v-bind:experience="this.experience" v-if="this.experience.enable"/>
  </section>
</template>

<script>
import WorkExperience from "../WorkExperience/WorkExperience.vue";

export default {
  name: "About",
  components: {
    WorkExperience,
  },
  methods: {
    downloadCV() {
      fetch(this.cv)
        .then((resp) => resp.blob())
        .then((blob) => {
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement("a");
          a.style.display = "none";
          a.href = url;
          // the filename
          a.download =
            process.env.VUE_APP_USER === "1"
              ? "hauphamresume.pdf"
              : "tridoresume.pdf";
          document.body.appendChild(a);
          a.click();
          a.remove(); // remove a tag
          window.URL.revokeObjectURL(url);
        })
        .catch((err) => console.error("Error download file", err));
    },
  },
  computed: {
    userData() {
      return this.$store.state.userData;
    },
    about() {
      return this.userData.about;
    },
    cv() {
      return process.env.NODE_ENV === 'development' ? `${process.env.VUE_APP_API_URL}${this.about.CV.url}` : this.about.CV.url;
      // return this.about.CV.url;
    },
    experience(){
      return this.userData.experience;
    },
    profileImage() {
      return process.env.NODE_ENV === 'development' ? `${process.env.VUE_APP_API_URL}${this.userData.profileImage.url}` : this.userData.profileImage.url;
      // return this.userData.profileImage.url;
    }
  },
};
</script>

<style lang="scss">
#about {
  padding-top: 50px;

  .scrollspy {
    align-items: center;

    img {
      width: 100%;
    }

    .about__profile-img {
      display: none;
    }

    @media (max-width: 1024px) {
      .about__image {
        display: none;
      }

      .about__profile-img {
        display: block;

        img {
          width: 380px;
          
          @media (max-width: 500px) {
            width: 200px; 
            height: 200px ;
          }
        }
      }
    }

    .about__info {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>