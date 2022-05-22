<template>
  <div>
    <h1>내가 찜한 영화</h1>
    <div v-if="likedMovie">
      <h1>{{ likedMovie }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LikeMovie',
  data: function() {
    return {
      likedMovie: this.$store.state.movieWanted,
    }
  },
  created() {
    
  },
}
</script>

<style>

</style>