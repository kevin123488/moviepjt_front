<template>
  <div class="container">
    <div class="d-flex">
      <button v-if="!start" class="button-next" type="button" @click="takeMovie">8강 시작하기</button>
    </div>
      <div v-if="!!start">
        <div>
            <div class="group"><div class="group-align"><h1>Match 1</h1></div></div>
            <div class="select">{{ clickA.movie[0] }}</div>
            <div class="d-flex justify-content-between matchup">
                <div></div>
                <div @click="click1(movies[0])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_1" alt=""></div>               
                <!-- <div @click="click1(movies[7])">{{ movies[7] }}<img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_8" alt=""></div> -->
                <div @click="click1(movies[7])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_8" alt=""></div>
                <div></div>
            </div>
        </div>
        <div>
            <div class="group"><div class="group-align"><h1>Match 2</h1></div></div>
            <div class="select">{{ clickB.movie[0] }}</div>
            <div class="d-flex justify-content-between matchup">
                <div></div>
                <div @click="click2(movies[1])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_2" alt=""></div>
                <div @click="click2(movies[6])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_7" alt=""></div>
                <div></div>
            </div>
        </div>
        <div>
            <div class="group"><div class="group-align"><h1>Match 3</h1></div></div>
            <div class="select">{{ clickC.movie[0] }}</div>
            <div class="d-flex justify-content-between matchup">
                <div></div>
                <div @click="click3(movies[2])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_3" alt=""></div>
                <div @click="click3(movies[5])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_6" alt=""></div>
                <div></div>
            </div>
        </div>
        <div>
            <div class="group"><div class="group-align"><h1>Match 4</h1></div></div>
            <div class="select">{{ clickD.movie[0] }}</div>
            <div class="d-flex justify-content-between matchup">
                <div></div>
                <div @click="click4(movies[3])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_4" alt=""></div>
                <div @click="click4(movies[4])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_5" alt=""></div>
                <div></div>
            </div>
        </div>
        <div class="d-flex">
            <button type="button" class="button-next" v-if="!goNext" @click="gogogo">저장하기</button>
        </div>
        <div class="d-flex">
            <button type="button" class="button-next" v-if="goNext" @click="movieSave">
                <router-link style="color: white;" to='/recommendmovie/4top'>
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
            poster_1: '',
            poster_2: '',
            poster_3: '',
            poster_4: '',
            poster_5: '',
            poster_6: '',
            poster_7: '',
            poster_8: '',
        }
    },
    methods: {
        takeMovie: function() {
            this.movies = this.$store.state.movie8Top
            this.start = true
            const movie1 = this.movies[0]
            const movie2 = this.movies[1]
            const movie3 = this.movies[2]
            const movie4 = this.movies[3]
            const movie5 = this.movies[4]
            const movie6 = this.movies[5]
            const movie7 = this.movies[6]
            const movie8 = this.movies[7]
            this.$store.state.movies_db.forEach(res => {
                if (res.title === movie1) {
                    this.poster_1 = res.poster_path
                } else if (res.title === movie2) {
                    this.poster_2 = res.poster_path
                } else if (res.title === movie3) {
                    this.poster_3 = res.poster_path
                } else if (res.title === movie4) {
                    this.poster_4 = res.poster_path
                } else if (res.title === movie5) {
                    this.poster_5 = res.poster_path
                } else if (res.title === movie6) {
                    this.poster_6 = res.poster_path
                } else if (res.title === movie7) {
                    this.poster_7 = res.poster_path
                } else if (res.title === movie8) {
                    this.poster_8 = res.poster_path
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

.matchup {
    background: white;
    margin-left: 20%;
    margin-right: 20%;
    padding: 30px 5px;
    border-radius: 50px;
    box-shadow: 5px 5px 5px 5px rgb(191, 189, 189);
    height: 480px;
    align-items: center;
}

.select {
    font-size: 24px;
    margin-bottom: 35px;
    text-align: center;
}

.button-next {
  width: 200px;
  height: 60px;
  margin: auto;
  margin-top: 40px;
  margin-bottom: 20px;
  font-size: 24px;
  border-radius: 10px;
  background-color: #2f3640;
  color: white;
  transition: 0.2s;
}

.button-next:hover {
  width: 250px;
  height: 75px;
}

</style>