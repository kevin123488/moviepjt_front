<template>
    <div>
      <h1>결승전</h1>
      <div v-if="!start" @click="takeMovie"><button type="button">시작하기</button></div>
      <div v-if="!!start">
          <h1>Match Final</h1>
          <div @click="clickFinal(movies[0])">{{ movies[0] }}</div>
          <div @click="clickFinal(movies[1])">{{ movies[1] }}</div>
          <div><h1>최종선택: {{ selected[selected.length-1] }}</h1></div>
          <div v-if="isSelected" @click="finished"><button type="button">제출</button></div>
          <div v-if="!!poster">
              <img :src="'https://image.tmdb.org/t/p/original' + poster" alt="">
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
        }
    },
    methods: {
        takeMovie: function() {
            this.movies = this.$store.state.movie2Top
            this.start = true
        },
        clickFinal: function(movie) {
            this.selected.push(movie)
            this.isSelected = true
        },
        finished: function() {
            const movieSelected = this.selected[this.selected.length-1]
            this.$store.state.movies_db.forEach(res => {
                if (res.title === movieSelected) {
                    this.poster = res.poster_path
                }
            })
            console.log(this.poster)
        }
    },
}
</script>

<style>

</style>