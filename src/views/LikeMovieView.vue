<template>
  <div>
    <h1>내가 찜한 영화</h1>
    <!-- <div v-if="profile.like_movies"> -->
      <button type="button" @click="movieLiked">찜한 영화 보기</button>
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
import { mapGetters } from 'vuex'


export default {
  name: 'likemovieView',
  computed: {
    ...mapGetters(['profile'])
  },
  // update() {
  //   const payload = { username: this.$route.params.username }
  //   this.fetchProfile(payload)
  // },
}
</script>

<style>

</style>