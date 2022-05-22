<template>
  <div>
    <h1>내가 찜한 영화</h1>
    <!-- <div v-if="profile.like_movies"> -->
      <ul>
        <li v-for="movie in profile.like_movies" :key="movie.pk">
          <!-- <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }"> -->
            {{ movie.title }}
          <!-- </router-link> -->
        </li>
      </ul>
    <!-- </div> -->
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'


export default {
  name: 'likemovieView',
  computed: {
    ...mapGetters(['profile', 'currentUser'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  // update() {
  //   const payload = { username: this.$route.params.username }
  //   this.fetchProfile(payload)
  // },
  created() {
    const payload = { username: this.currentUser.username }
    this.fetchProfile(payload)
  },
}
</script>

<style>

</style>