<template>
  <b-container fluid>
    <b-row>
      <b-col md="8" offset-md="2">
        <h4 class="title text-center">Our Team</h4>
        <b-row v-if="!!story.content && !!story.content.body">
          <b-col md="6" v-for="partner in story.content.body"
                 :key="partner.name">
            <article class="card" v-editable="partner" v-if="partner.staff">
              <img :src="partner.img"
                   class="card-img-top"/>
              <div class="card-body">
                <h4 class="title">{{partner.name}}</h4>
                <h5>{{partner.title}}</h5>
                <p class="card-text">
                  {{partner.bio}}
                </p>
                <p v-if="partner.twitter">
                  <i class="fab fa-twitter"></i>
                  <a v-bind:href="'http://www.twitter.com/' + partner.twitter">@{{partner.twitter}}</a>
                </p>
                <p v-if="partner.website.url">
                  <i class="fas fa-link"></i>
                  <a :href="partner.website.url">{{partner.website.url}}</a>
                </p>
              </div>
            </article>
          </b-col>
        </b-row>
        <!--board of directors-->
        <h4 class="title text-center">Board of Directors</h4>
        <b-row v-if="!!story.content && !!story.content.body">
          <b-col md="6" v-for="partner in story.content.body"
                 :key="partner.name">
            <article class="card" v-editable="partner" v-if="!partner.staff">
              <img :src="partner.img"
                   class="card-img-top"/>
              <div class="card-body">
                <h4 class="title">{{partner.name}}</h4>
                <h5>{{partner.title}}</h5>
                <p class="card-text">
                  {{partner.bio}}
                </p>
                <p v-if="partner.twitter">
                  <i class="fab fa-twitter"></i>
                  <a v-bind:href="'http://www.twitter.com/' + partner.twitter">@{{partner.twitter}}</a>
                </p>
                <p v-if="partner.website.url">
                  <i class="fas fa-link"></i>
                  <a :href="partner.website.url">{{partner.website.url}}</a>
                </p>
              </div>
            </article>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
  import storyblok from "../mixins/storyblok";

  export default {
    mixins: [storyblok],
    data() {
      return {
        slug: 'partners',
      }
    },
  }
</script>

<style scoped>
  .title {
    padding: 20px 0
  }

  .card {
    height: 100%;
  }
</style>
