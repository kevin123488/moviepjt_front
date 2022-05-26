<template>
    <div class="container">
      <div class="d-flex">
          <button v-if="!start" class="button-next" type="button" @click="takeMovie">시작하기</button>
      </div>
      <div v-if="!!start">
          <div class="group"><div class="group-align"><h1>Match final</h1></div></div>
          <div class="select"><h1>최종선택: {{ selected[selected.length-1] }}</h1></div>
          <div class="d-flex justify-content-between matchup">
            <div></div>
            <div @click="clickFinal(movies[0])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_1" alt=""></div>
            <div @click="clickFinal(movies[1])"><img class="img" :src="'https://image.tmdb.org/t/p/original' + poster_2" alt=""></div>
            <div></div>
          </div>

          <div class="d-flex">
              <button type="button" class="button-next" v-if="isSelected" @click="finished">저장</button>
          </div>
          <div class="d-flex">
              <button type="button" class="button-next" data-bs-toggle="modal" data-bs-target="#exampleModal" v-if="final_submit">제출</button>
          </div>
          <div v-if="!!poster">
              <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content modal-sizeup">
                        <div class="modal-body">
                            <h1 class="text-center" style="color: black">champion!!</h1>
                            <div><img class="img-final" :src="'https://image.tmdb.org/t/p/original' + poster" alt=""></div>
                        </div>
                    </div>
                </div>
              </div>
          </div>
      </div>
    </div>
</template>

<script>
export default {
    name: 'RecommendFinal',
    data: function() {
        return {
            movies: [],
            start: false,
            isSelected: false,
            selected: [],
            poster: '',
            poster_1: '',
            poster_2: '',
            final_submit: false,
        }
    },
    methods: {
        takeMovie: function() {
            this.movies = this.$store.state.movie2Top
            this.start = true
            const movie1 = this.movies[0]
            const movie2 = this.movies[1]
            this.$store.state.movies_db.forEach(res => {
                if (res.title === movie1) {
                    this.poster_1 = res.poster_path
                } else if (res.title === movie2) {
                    this.poster_2 = res.poster_path
                }
            })
        },
        clickFinal: function(movie) {
            this.selected.push(movie)
            this.isSelected = true
            this.final_submit = false
        },
        finished: function() {
            const movieSelected = this.selected[this.selected.length-1]
            this.$store.state.movies_db.forEach(res => {
                if (res.title === movieSelected) {
                    this.poster = res.poster_path
                }
            })
            console.log(this.poster)
            this.isSelected = false
            this.final_submit = true
            // this.selected = []
        }
    },
}
</script>

<style>

.modal-sizeup {
    height: 700px;
    width: 600;
    border-radius: 50px;
    box-shadow: 5px 5px 5px 5px black;
}

.img-final {
    height: 600px;
    width: 460px;
    border-radius: 50px;
}

</style>