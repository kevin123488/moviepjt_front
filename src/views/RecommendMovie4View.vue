<template>
  <div class="container">
      <div class="d-flex">
        <button v-if="!start" class="button-next" type="button" @click="takeMovie">4강 시작하기</button>
      </div>
    <div v-if="!!start">
        <div>
            <div class="group"><div class="group-align"><h1>Match 1</h1></div></div>
            <div class="select">{{ clickA.movie[0] }}</div>
            <div class="d-flex justify-content-between matchup">
                <div></div>
                <div @click="click1(movies[0])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_1" alt=""></div>
                <div @click="click1(movies[2])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_3" alt=""></div>
                <div></div>
            </div>
        </div>
        <div>
            <div class="group"><div class="group-align"><h1>Match 2</h1></div></div>
            <div class="select">{{ clickB.movie[0] }}</div>
            <div class="d-flex justify-content-between matchup">
                <div></div>
                <div @click="click2(movies[1])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_2" alt=""></div>
                <div @click="click2(movies[3])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_4" alt=""></div>
                <div></div>
            </div>
        </div>
        <div class="d-flex">
            <button type="button" class="button-next" v-if="!goNext" @click="gogogo">저장하기</button>
        </div>
        <div class="d-flex">
            <button type="button" class="button-next" v-if="goNext" @click="movieSave">
                <router-link style="color: white;" to="/recommendmovie/2top">
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
            poster_1: '',
            poster_2: '',
            poster_3: '',
            poster_4: '',
        }
    },
    methods: {
        takeMovie: function() {
            this.movies = this.$store.state.movie4Top
            this.start = true
            const movie1 = this.movies[0]
            const movie2 = this.movies[1]
            const movie3 = this.movies[2]
            const movie4 = this.movies[3]
            this.$store.state.movies_db.forEach(res => {
                if (res.title === movie1) {
                    this.poster_1 = res.poster_path
                } else if (res.title === movie2) {
                    this.poster_2 = res.poster_path
                } else if (res.title === movie3) {
                    this.poster_3 = res.poster_path
                } else if (res.title === movie4) {
                    this.poster_4 = res.poster_path
                }
            })
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