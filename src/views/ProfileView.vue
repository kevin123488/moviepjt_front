<template>
  <div>
    <h1>{{ profile.username }} 님의 프로필</h1>

    <h3>작성한 리뷰</h3>
    <ul class="review_list">
      <li v-for="review in profile.reviews" :key="review.pk">
        <router-link :to="{ name: 'reviewDetail', params: { reviewPk: review.pk } }">
          {{ review.review_title }}
        </router-link>
      </li>
    </ul>

    <h2>내가 찜한 목록</h2>
    <ul>
      <li v-for="movie in profile.like_movies" :key="movie.pk">
        <div class="btn card" style="width: 12rem; height: 15rem;">
          <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="" class="card-img-top img-fluid profile-movie-image rounded-start">
          <div class="card-body">
            <p>{{ movie.title }}</p>
          </div>
        </div>
      </li>
    </ul> 
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ProfileView',
  data() {
    return {
      watchingMovie:[]
    }
  },
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile']),
    goDetail(movie) {
      this.watchingMovie = movie
      console.log(this.watchingMovie)
      this.$router.push(`/movies/detail/${movie.pk}`)
      this.$store.state.movieNow = this.watchingMovie
    }
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style>
  .profile-movie-image {
    width: 10rem;
    height: 10rem;
  }
  a:hover {
    color : black;
    text-decoration: none;
  }
</style>