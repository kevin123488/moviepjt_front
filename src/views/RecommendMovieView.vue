<template>
  <div>
    <h1>추천 영화</h1>
    <div class="genre-select" v-if="genre_selected">
      <h2>장르를 선택해주세요</h2>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'recommendView',
  data() {
    return {
      movies: this.$store.state.movies // 일단 인기순 10개 거기서 받아와서 한번 만들어보자
      // 나중에 백 조금 수정한 후(url 하나 더 파서 영화 싹 다 받아오게 할 것) state에 movies_db 만들어두고, 거기 영화 4000개 넣어둘 예정
      // 어차피 인기순, 평점순으로 모두 보여주기 기능을 넣어야 하므로 필요
    }
  }
}
</script>

<style>

</style>