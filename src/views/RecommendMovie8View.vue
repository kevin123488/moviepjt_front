<template>
  <div>
      <h1>
          8강 입니다
      </h1>
      <button v-if="!start" type="button" @click="takeMovie">8강 시작하기</button>
      <div v-if="!!start">
        <div>
            <h1>match 1</h1>
            <div class="d-flex"><h1>선택중</h1>{{ clickA.movie[0] }}</div>
            <div @click="click1(movies[0])">{{ movies[0] }}</div>
            <div @click="click1(movies[7])">{{ movies[7] }}</div>
        </div>
        <div>
            <h1>match 2</h1>
            <div class="d-flex"><h1>선택중</h1>{{ clickB.movie[0] }}</div>
            <div @click="click2(movies[1])">{{ movies[1] }}</div>
            <div @click="click2(movies[6])">{{ movies[6] }}</div>
        </div>
        <div>
            <h1>match 3</h1>
            <div class="d-flex"><h1>선택중</h1>{{ clickC.movie[0] }}</div>
            <div @click="click3(movies[2])">{{ movies[2] }}</div>
            <div @click="click3(movies[5])">{{ movies[5] }}</div>
        </div>
        <div>
            <h1>match 4</h1>
            <div class="d-flex"><h1>선택중</h1>{{ clickD.movie[0] }}</div>
            <div @click="click4(movies[3])">{{ movies[3] }}</div>
            <div @click="click4(movies[4])">{{ movies[4] }}</div>
        </div>
        <div>
            <button type="button" @click="gogogo">저장하기(낙장불입)</button>
        </div>
        <div>
            <button type="button" v-if="goNext" @click="movieSave">
                <router-link to='/recommendmovie/4top'>
                    다음으로
                </router-link>
            </button>
        </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'recommend8Top',
    data: function() {
        return {
            movies: [],
            start: false,
            clickA: {
                movie: [],
                isClicked: 0,
            },
            clickB: {
                movie: [],
                isClicked: 0,
            },
            clickC: {
                movie: [],
                isClicked: 0,
            },
            clickD: {
                movie: [],
                isClicked: 0,
            },
            selected: [],
            goNext: false,
        }
    },
    methods: {
        takeMovie: function() {
            this.movies = this.$store.state.movie8Top
            this.start = true
        },
        click1: function(movie) {
            if (this.clickA.isClicked === 0) {
                this.clickA.isClicked += 1
                this.clickA.movie.push(movie)
            } else if (this.clickA.isClicked === 1) {
                if (movie === this.clickA.movie[0]) {
                    this.clickA.isClicked -= 1
                    this.clickA.movie = []
                } else {
                    this.clickA.movie = []
                    this.clickA.movie.push(movie)
                }
            }
            console.log(this.clickA.isClicked)
            console.log(this.clickA.movie)
        },
        click2: function(movie) {
            if (this.clickB.isClicked === 0) {
                this.clickB.isClicked += 1
                this.clickB.movie.push(movie)
            } else if (this.clickB.isClicked === 1) {
                if (movie === this.clickB.movie[0]) {
                    this.clickB.isClicked -= 1
                    this.clickB.movie = []
                } else {
                    this.clickB.movie = []
                    this.clickB.movie.push(movie)
                }
            }
        },
        click3: function(movie) {
            if (this.clickC.isClicked === 0) {
                this.clickC.isClicked += 1
                this.clickC.movie.push(movie)
            } else if (this.clickC.isClicked === 1) {
                if (movie === this.clickC.movie[0]) {
                    this.clickC.isClicked -= 1
                    this.clickC.movie = []
                } else {
                    this.clickC.movie = []
                    this.clickC.movie.push(movie)
                }
            }
        },
        click4: function(movie) {
            if (this.clickD.isClicked === 0) {
                this.clickD.isClicked += 1
                this.clickD.movie.push(movie)
            } else if (this.clickD.isClicked === 1) {
                if (movie === this.clickD.movie[0]) {
                    this.clickD.isClicked -= 1
                    this.clickD.movie = []
                } else {
                    this.clickD.movie = []
                    this.clickD.movie.push(movie)
                }
            }
        },
        gogogo: function() {
            if (this.clickA.isClicked + this.clickB.isClicked + this.clickC.isClicked + this.clickD.isClicked === 4) {
                this.selected.push(this.clickA.movie[0])
                this.selected.push(this.clickB.movie[0])
                this.selected.push(this.clickC.movie[0])
                this.selected.push(this.clickD.movie[0])
                this.goNext = true
                console.log(this.selected)
            } else {
                alert('똑바로 선택하세요')
            }
        },
        movieSave: function() {
            console.log(this.selected)
            this.$store.dispatch('goSemiFinal', this.selected)
        },
    }
}
</script>

<style>

</style>