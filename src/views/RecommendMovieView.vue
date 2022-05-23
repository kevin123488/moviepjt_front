<template>
  <div>
    <h1>추천 영화</h1>
    <div class="genre-select" v-if="!genre_selected">
      <h2>장르를 선택해주세요</h2>
      <div>첫번째 영화 칸</div>
      <div>두번째 영화 칸</div>
      <div>세번째 영화 칸</div>
      <div>네번째 영화 칸</div>
    </div>

  </div>

</template>

<script>
// import _ from 'lodash'

export default {
  name: 'recommendView',
  data() {
    return {
      movies: this.$store.state.movies_db
    }
  }
}
</script>

<style>

</style>