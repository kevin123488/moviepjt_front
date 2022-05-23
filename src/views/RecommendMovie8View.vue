<template>
  <div>
      <h1>
          8강 입니다
      </h1>
      <button type="button" @click="takeMovie">8강 시작하기</button>
      <div v-for="movie in movies" :key="movie">
          {{ movie }}
      </div>
  </div>
</template>

<script>
export default {
    name: 'recommend8Top',
    data: function() {
        return {
            movies: [],
        }
    },
    methods: {
        takeMovie: function() {
            this.movies = this.$store.state.movie8Top
        }
    }
}
</script>

<style>

</style>