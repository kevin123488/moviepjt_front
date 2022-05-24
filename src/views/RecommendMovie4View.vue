<template>
  <div>
    <h1>4강 입니다</h1>
    <button v-if="!start" type="button" @click="takeMovie">4강 시작하기</button>
    <div v-if="!!start">
        <div>
            <h1>match 1</h1>
            <div class="d-flex"><h1>선택중</h1>{{ clickA.movie[0] }}</div>
            <div @click="click1(movies[0])">{{ movies[0] }}</div>
            <div @click="click1(movies[2])">{{ movies[2] }}</div>
        </div>
        <div>
            <h1>match 2</h1>
            <div class="d-flex"><h1>선택중</h1>{{ clickB.movie[0] }}</div>
            <div @click="click2(movies[1])">{{ movies[1] }}</div>
            <div @click="click2(movies[3])">{{ movies[3] }}</div>
        </div>
        <div>
            <button type="button" @click="gogogo">저장하기(낙장불입)</button>
        </div>
        <div>
            <button type="button" v-if="goNext" @click="movieSave">
                <router-link to="/recommendmovie/2top">
                    다음으로
                </router-link>
            </button>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Recommend4Top',
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
            selected: [],
            goNext: false,
        }
    },
    methods: {
        takeMovie: function() {
            this.movies = this.$store.state.movie4Top
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
        gogogo: function() {
            if (this.clickA.isClicked + this.clickB.isClicked === 2) {
                this.selected.push(this.clickA.movie[0])
                this.selected.push(this.clickB.movie[0])
                this.goNext = true
                console.log(this.selected)
            } else {
                alert('똑바로 선택하세요')
            }
        },
        movieSave: function() {
            console.log(this.selected)
            this.$store.dispatch('goFinal', this.selected)
        },
    }
}
</script>

<style>

</style>