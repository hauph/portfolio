<template>
    <div id="work-experience" class="container">
        <div class="columns mt-6">
            <div class="column">
                <h3 class="has-text-centered has-text-grey-dark title">Work Experience</h3>
            </div>
        </div>
        <div class="columns mt-6">
            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image is-64x64">
                            <img src="../../assets/images/fanniemae1.png" alt="text" />
                        </figure>
                        <p class="is-size-5 has-text-weight-bold">Fannie Mae Backend SWE Intern</p>
                        <ul class="ml-5">
                            <li>
                                <span class="is-size-7 ">
                                    Implemented RESTFUL API, and microservices using Spring Boot, Java
                                    Lambda 8 for users to determine whether loans should be held for sale or
                                    investment.
                        </span>
                            </li>
                            <li>
                                <span class="is-size-7 ">
                                    Wrote test cases using Junit 5,and Karate for the backend services.
                        </span>
                            </li>
                            <li>
                                <span class="is-size-7">
                                    Learned to track changes and collaborate with other engineers using
                                    Git, Bitbucket.
                        </span>
                            </li>
                        </ul>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image is-32x32">
                            <img src="../../assets/images/angel-hack2.png" alt="angel" />
                        </figure>
                        <p class="is-size-5 has-text-weight-bold">Participate in Angel Hackathon 2019.</p>
                        <ul class="ml-5">
                            <li>
                                <span class="is-size-7 ">
                                    Implemented Computer Vision (AWS API) to create a security camera.
                        </span>
                            </li>
                            <li>
                                <span class="is-size-7 ">
                                    Using phones to simulate public cameras to detect active shooters.
                        </span>
                            </li>
                            <li>
                                <span class="is-size-7">
                                    Embedded Google Map API to show the location where active shooters are at.
                        </span>
                            </li>
                        </ul>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image is-32x32">
                            <img src="../../assets/images/mission-hack1.png" alt="text" />
                        </figure>
                        <p class="is-size-5 has-text-weight-bold">Participate in Mission Hackathon 3.0.</p>
                        <ul class="ml-5">
                            <li>
                                <span class="is-size-7 ">
                                    Brainstormed ideas with a team of 5 to create a software called Smart-Collector
                                    that helps families and small businesses sort waste more efficiently.
                        </span>
                            </li>
                            <li>
                                <span class="is-size-7 ">
                                    Integrated Google Vision API to classify waste and Websocket for real-time
                                    communication using Java.
                        </span>
                            </li>
                        </ul>
                    </article>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: "WorkExperience",
};
</script>

<style lang="scss">
    #work-experience {
        figure {
            height: 32px;
        }

        ul {
            list-style: disc;
        }
    }

</style>