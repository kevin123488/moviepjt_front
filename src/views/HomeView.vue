<template>
  <div>
    <h1>Home</h1>
    <hr>
    <h1>인기순</h1>
    <!-- <hr>
      <div v-if="modalClicked" @click="modalClicked=false">
        <button type="button" @click="likeMovie(watchingMovie.id)">찜하기</button>
        <h1>{{ watchingMovie.title }}</h1>
        <img :src="'https://image.tmdb.org/t/p/original' + watchingMovie.poster_path" alt="">
      </div>
    <hr> -->
    <carousel :per-page="5">
      <slide v-for="movie in movies" :key="movie.id">
          <div class="card" style="width: 20rem;">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
            <button @click="createDetail(movie)" type="button">
              상세정보
            </button>
              <!-- <router-link :to="{path: `/movies/detail/${movie.id}`, params: {movie: watchingMovie} }" @click="createDetail(movie)">상세정보</router-link> -->
          </div>
        </slide>
    </carousel>
    <hr>
    <h1>개봉 예정작</h1>
    <hr>
    <carousel :per-page="5">
      <slide v-for="movie in movies_upto" :key="movie.id">
          <div class="card" style="width: 20rem;" @click="isModalViewed=true">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
            <!-- <button type="button" class="btn btn-primary" @click="createDetail(movie)">상세정보</button> -->
          <button @click="createDetail(movie)" type="button">
              상세정보
            </button>
          </div>
        </slide>
    </carousel>
    <hr>
    <h1>평점순</h1>
    <hr>
    <carousel :per-page="5">
      <!-- <div v-for="movie in movies_stars" :key="movie.id"> -->
        <slide v-for="movie in movies_stars" :key="movie.id">
          <div class="card" style="width: 20rem;" @click="isModalViewed=true">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
            <!-- <button type="button" class="btn btn-primary" @click="createDetail(movie)">상세정보</button> -->
          <button @click="createDetail(movie)" type="button">
              상세정보
            </button>
          </div>
        </slide>
      <!-- </div> -->
    </carousel>

  </div>
</template>

<script>
// @ is an alias to /src
import { Carousel, Slide } from 'vue-carousel'
import axios from 'axios'


export default {
  name: 'HomeView',
  components: {
    Carousel,
    Slide,
  },
  data() {
    return {
      movies: this.$store.state.movies,
      movies_upto: this.$store.state.movies_upto,
      movies_stars: this.$store.state.movies_stars,
      watchingMovie: [],
    }
  },
  methods: {
    createDetail(movie) {
      this.watchingMovie = movie
      console.log(this.watchingMovie)
      this.$router.push(`/movies/detail/${movie.id}`)
      this.$store.state.movieNow = this.watchingMovie

    },
    likeMovie(movie_id) {
      // this.$store.dispatch('movieLike', this.watchingMovie)
      // 로그인 여부 확인 후 적절한 조치를 취하는 로직 필요
      // 생각해봤는데 찜하기 버튼을 로그인시에만 보여주는게 더 좋을듯
      const URL_LIKE = `http://127.0.0.1:8000/movies/like/${movie_id}`
      axios.post(URL_LIKE) // 이렇게 하면 로그인한 유저의 정보로 해당 영화가 들어가겠지? 그러면 해당 유저의 like movie
      // 부분에 영화 정보가 들어가겠지?
      // 그 영화 정보를 LikeMovieView에서 요청받아보면 될 듯 
    }
  }

}
</script>
