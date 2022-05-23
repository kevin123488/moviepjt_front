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
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'likemovieView',
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  // update() {
  //   const payload = { username: this.$route.params.username }
  //   this.fetchProfile(payload)
  // },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
    // 현재 접속중인 user의 정보를 항상 admin으로 받아오는 것 같음
    // this.$route.params.username이 어떤 로직인지 알아봐야겠음
  },
}
</script>

<style>

</style>