<template>
  <div>
      <p @click="select">{{ movie.title }}</p>
  </div>
</template>

<script>
export default {
    name: 'WhichMovieWant',
    data() {
        return {
            movieObject: null,
            value: false,
        }
    },
    props: {
        movie : {
            type: Object
        }
    },
    methods: {
        selectmovie() {
            this.$emit('choiceEvent', true)
        }
    }
}
</script>

<style>

</style>