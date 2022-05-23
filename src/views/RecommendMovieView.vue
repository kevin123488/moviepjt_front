<template>
  <div>
    <h1>추천 영화</h1>
    <h2>A조</h2>
      <!-- <div class="d-inline-flex h-50 p-2 justify-content-center" v-for="movie in selectmoviesA" :key="movie.pk">
        <div class=" btn card px-0" style="width: 18rem;" @click="aClick">
          <img :src="'https://image.tmdb.org/t/p/original' + `${movie.poster_path}`" class="card-img-top" alt="...">
          <div class="card-body">
            {{movie.title}}
          </div>
        </div>
      </div> -->
      <div class="d-inline-flex h-50 p-2 justify-content-center">
        <div class="btn card px-0" style="width: 18rem;" @click="aClick">
          <img :src="'https://image.tmdb.org/t/p/original' + `${selectmoviesA1.poster_path}`" class="card-img-top" alt="...">
            <div class="card-body">
              {{selectmoviesA1.title}}
            </div>
        </div>
        <div class="btn card px-0" style="width: 18rem;" @click="aClick">
          <img :src="'https://image.tmdb.org/t/p/original' + `${selectmoviesA2.poster_path}`" class="card-img-top" alt="...">
            <div class="card-body">
              {{selectmoviesA2.title}}
            </div>
        </div>
        <div class="btn card px-0" style="width: 18rem;" @click="aClick">
          <img :src="'https://image.tmdb.org/t/p/original' + `${selectmoviesA3.poster_path}`" class="card-img-top" alt="...">
            <div class="card-body">
              {{selectmoviesA3.title}}
            </div>
        </div>
        <div class="btn card px-0" style="width: 18rem;" @click="aClick">
          <img :src="'https://image.tmdb.org/t/p/original' + `${selectmoviesA4.poster_path}`" class="card-img-top" alt="...">
            <div class="card-body">
              {{selectmoviesA4.title}}
            </div>
        </div>
      </div>
    <h2>B조</h2>
    <div class="d-inline-flex h-50 p-2 justify-content-center" v-for="movie in selectmoviesB" :key="movie.pk">
      <div class="btn card px-0" style="width: 18rem;" @click="bClick">
        <img :src="'https://image.tmdb.org/t/p/original' + `${movie.poster_path}`" class="card-img-top" alt="...">
        <div class="card-body">
          {{movie.title}}
        </div>
      </div>
    </div>
    <h2>C조</h2>
    <div class="d-inline-flex h-50 p-2 justify-content-center" v-for="movie in selectmoviesC" :key="movie.pk">
      <div class="btn card px-0" style="width: 18rem;" @click="cClick">
        <img :src="'https://image.tmdb.org/t/p/original' + `${movie.poster_path}`" class="card-img-top" alt="...">
        <div class="card-body">
          {{movie.title}}
        </div>
      </div>
    </div>
    <h2>D조</h2>
    <div class="d-inline-flex h-50 p-2 justify-content-center" v-for="movie in selectmoviesD" :key="movie.pk">
      <div class="btn card px-0" style="width: 18rem;" @click="dClick">
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
      selected : '',
      selectmoviesA:[],
      selectmoviesA1: {
        title:'',
        poster_path:'',
        isClicked:false
      },
      selectmoviesA2: {
        title:'',
        poster_path:'',
        isClicked:false
      },
      selectmoviesA3: {
        title:'',
        poster_path:'',
        isClicked:false
      },
      selectmoviesA4: {
        title:'',
        poster_path:'',
        isClicked:false
      },
      selectmoviesB: [],
      selectmoviesC: [],
      selectmoviesD: [],
      isClicked: false,
    }
  },
  methods: {
    aClick(a) {
      this.selectmoviesA.selected = a.type
        this.selectmoviesA.forEach(a => {
          if (a === a) {
            a.isClicked = !a.isClicked
            if (!a.isClicked) {
              this.selectmoviesA.selected = ''
            }
          } else {
            a.isClicked = false
          }
        })
      console.log(a.isClicked)
    },
    bClick() {
      if (this.selectmoviesB.isClicked == true) {
        this.selectmoviesB.isClicked = false
      } else {
        this.selectmoviesB.isClicked = true
      }
      console.log(this.selectmoviesB.isClicked)
    },
    cClick() {
      if (this.selectmoviesC.isClicked == true) {
        this.selectmoviesC.isClicked = false
      } else {
        this.selectmoviesC.isClicked = true
      }
      console.log(this.selectmoviesC.isClicked)
    },
    dClick() {
      if (this.selectmoviesD.isClicked == true) {
        this.selectmoviesD.isClicked = false
      } else {
        this.selectmoviesD.isClicked = true
      }
      console.log(this.selectmoviesD.isClicked)
    },
  },
  created() {
    this.selectmoviesA1 = _.sample(this.movies)
    this.selectmoviesA2 = _.sample(this.movies)
    this.selectmoviesA3 = _.sample(this.movies)
    this.selectmoviesA4 = _.sample(this.movies)
    this.selectmoviesA = [this.selectmoviesA1, this.selectmoviesA2, this.selectmoviesA3, this.selectmoviesA4]
    // this.selectmoviesA += this.selectmoviesA2
    // this.selectmoviesA += this.selectmoviesA3
    // this.selectmoviesA += this.selectmoviesA4
    // this.selectmoviesA = _.sampleSize(this.movies,4)
    this.selectmoviesB = _.sampleSize(this.movies,4)
    this.selectmoviesC = _.sampleSize(this.movies,4)
    this.selectmoviesD = _.sampleSize(this.movies,4)
    console.log(this.selectmoviesA1)
    console.log(this.selectmoviesA2)
    console.log(this.selectmoviesA3)
    console.log(this.selectmoviesA4)
    console.log(1)
    console.log(this.selectmoviesA)
    // console.log(this.selectmoviesB)
    // console.log(this.selectmoviesC)
    // console.log(this.selectmoviesD)
  },
}
</script>

<style>

</style>