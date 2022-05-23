<template>
  <div>
    <h1>추천 영화</h1>
    <!-- <div class="genre-select" v-if="!genre_selected">
      <h2>장르를 선택해주세요</h2>
      <div>첫번째 영화 칸</div>
      <div>두번째 영화 칸</div>
      <div>세번째 영화 칸</div>
      <div>네번째 영화 칸</div>
    </div> -->
    <!-- <button @click="randomMovie"> A조</button> -->
    <!-- <img :src="imageSrc" class="card-img-top" alt="..."> -->
    <h2>A조</h2>
    <div class="d-inline-flex h-50 p-2 justify-content-center" v-for="movie in selectmoviesA" :key="movie.pk">
      <div class="card px-0" style="width: 18rem;">
        <img :src="'https://image.tmdb.org/t/p/original' + `${movie.poster_path}`" class="card-img-top" alt="...">
        <div class="card-body">
          {{movie.title}}
        </div>
      </div>
    </div>
    <h2>B조</h2>
    <div class="d-inline-flex h-50 p-2 justify-content-center" v-for="movie in selectmoviesB" :key="movie.pk">
      <div class="card px-0" style="width: 18rem;">
        <img :src="'https://image.tmdb.org/t/p/original' + `${movie.poster_path}`" class="card-img-top" alt="...">
        <div class="card-body">
          {{movie.title}}
        </div>
      </div>
    </div>
    <h2>C조</h2>
    <div class="d-inline-flex h-50 p-2 justify-content-center" v-for="movie in selectmoviesC" :key="movie.pk">
      <div class="card px-0" style="width: 18rem;">
        <img :src="'https://image.tmdb.org/t/p/original' + `${movie.poster_path}`" class="card-img-top" alt="...">
        <div class="card-body">
          {{movie.title}}
        </div>
      </div>
    </div>
    <h2>D조</h2>
    <div class="d-inline-flex h-50 p-2 justify-content-center" v-for="movie in selectmoviesD" :key="movie.pk">
      <div class="card px-0" style="width: 18rem;">
        <img :src="'https://image.tmdb.org/t/p/original' + `${movie.poster_path}`" class="card-img-top" alt="...">
        <div class="card-body">
          {{movie.title}}
        </div>
      </div>
    </div>

  </div>

</template>

<script>
import _ from 'lodash'
// import WhichMovieWant from '@components/WhichMovieWant.vue'

export default {
  name: 'recommendView',
  data() {
    return {
      movies: this.$store.state.movies_db,
      selectmoviesA: [],
      selectmoviesB: [],
      selectmoviesC: [],
      selectmoviesD: [],
    }
  },
  created() {
    this.selectmoviesA = _.sampleSize(this.movies,4)
    this.selectmoviesB = _.sampleSize(this.movies,4)
    this.selectmoviesC = _.sampleSize(this.movies,4)
    this.selectmoviesD = _.sampleSize(this.movies,4)
    console.log(this.selectmoviesA)
    console.log(this.selectmoviesB)
    console.log(this.selectmoviesC)
    console.log(this.selectmoviesD)
  },
  // methods: {
  //   randomMovie() {
  //     this.selectmovies = _.sampleSize(this.movies,4)
  //   }
  // },
}
</script>

<style>

</style>