<template>
  <div class="container m-5 d-flex justify-content-center">
    <div>
      <div class="main-title m-0">{{ profile.username }} 님의 프로필</div>
      <h3 class="main-title m-0 mt-3 mb-3">작성한 리뷰</h3>
      <div class="review_list">
        <div class="review" v-for="review in profile.reviews" :key="review.pk">
          <router-link :to="{ name: 'reviewDetail', params: { reviewPk: review.pk } }">
            {{ review.review_title }}
          </router-link>
        </div>
      </div>
      <div class="liked_movie_list">
        <h2 class="main-title mx-auto">내가 찜한 목록</h2>
        <div class="row">
          <div class="col col-lg-3 mt-5" v-for="movie in profile.like_movies" :key="movie.pk">
            <div class=" boxcard btn card" style="width: 12rem; height: 15rem;">
              <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="" class="card-img-top img-fluid profile-movie-image rounded-start">
              <div class="card-body">
                <p>{{ movie.title }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
    },
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>

<style>
  .liked_movie_list {
    width: 60rem;
    margin-left: 5rem;
    border-radius: 30px;
    box-shadow: 5px 5px black;
    padding-bottom: 25px;
  }

  .profile-movie-image {
    width: 10rem;
    height: 10rem;
  }
  a:hover {
    color : black;
    text-decoration: none;
  }
  .boxcard {
    box-shadow: 5px 5px 5px 5px black;
    overflow: auto;
  }

  .review_list {
    background: #4b546b;
    border-radius: 20px;
    border: 1px solid white;
    overflow: auto;
    width: 300px;
  }

  .review {
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 5px;
    margin-right: 5px;
    border-radius: 20px;
  }

</style>