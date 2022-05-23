<template>
  <div>
      <h1>movie recommendation</h1>
          <h1>teamA</h1>
      <div class="teamA" v-for="movie in teamA.movie" :key="movie.id" @click="clicked(movie, teamA)">
          {{ movie.title }}
      </div>
          <h1>teamB</h1>
      <div class="teamB" v-for="movie in teamB.movie" :key="movie.id" @click="clicked(movie, teamB)">
          {{ movie.title }}
      </div>
          <h1>teamC</h1>
      <div class="teamC" v-for="movie in teamC.movie" :key="movie.id" @click="clicked(movie, teamC)">
          {{ movie.title }}
      </div>
          <h1>teamD</h1>
      <div class="teamD" v-for="movie in teamD.movie" :key="movie.id" @click="clicked(movie, teamD)">
          {{ movie.title }}
      </div>
      <div>
          <button type="button" @click="gogogo">저장하기</button>
      </div>
      <div>
        <button type="button" v-if="goNext" @click="movieSave">
            <router-link to="/recommendmovie/8top">
                다음으로
            </router-link>
        </button>
      </div>

  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'recommendViewView',
    data() {
        return {
            movies: this.$store.state.movies_db,
            selected: [],
            teamA: {
                movie: [],
                isClicked: 0,
            }, // A에서 선택된 애들 넣을 예정
            teamB: {
                movie: [],
                isClicked: 0,
            },
            teamC: {
                movie: [],
                isClicked: 0,
            },
            teamD: {
                movie: [],
                isClicked: 0,
            },
            goNext: false,
        }
    },
    methods: {
        clicked: function(movie, team) {
            if (this.selected.includes(movie.title)) {
                team.isClicked -= 1
                const idx = this.selected.indexOf(movie.title)
                this.selected.splice(idx, 1)
            } else {
                if (team.isClicked === 2) {
                    this.selected.splice(0, 1) // 클릭된게 2개인 상태에서 중복 아닌애가 클릭된다? 제일 첫값 지우자
                    this.selected.push(movie.title)
                } else {
                    this.selected.push(movie.title)
                    team.isClicked += 1
                }
            }
            console.log(this.selected)
            console.log(this.teamA.isClicked)
            console.log(this.teamB.isClicked)
            console.log(this.teamC.isClicked)
            console.log(this.teamD.isClicked)
        },
        gogogo: function() {
            if (this.teamA.isClicked === 2 && this.teamB.isClicked === 2 
            && this.teamC.isClicked === 2 && this.teamD.isClicked === 2) {
                console.log(this.selected)
                this.goNext = true
            } else {
                alert('똑바로 선택하세요')
            }
        },
        movieSave: function() {
            console.log(this.selected)
            // this.$store.state.movie8Top = this.selected
            this.$store.dispatch('goSemiFinal', this.selected)
        },
    },
    created() {
        this.teamA.movie = _.sampleSize(this.movies, 4)
        this.teamB.movie = _.sampleSize(this.movies, 4)
        this.teamC.movie = _.sampleSize(this.movies, 4)
        this.teamD.movie = _.sampleSize(this.movies, 4)
    },
}
</script>

<style>

</style>