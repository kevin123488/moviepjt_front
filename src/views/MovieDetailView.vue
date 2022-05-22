<template>
    <div>
        <h1>영화 세부조회</h1>
        {{ movie.title }}
        {{ movie.overview }}
        <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
        
        <button type="button" @click="likeMovie">찜하기</button>

    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'movieDetail',
    data() {
        return {
            movie: this.$store.state.movieNow
        }
    },
    methods: {
        likeMovie() {
            const URL_LIKE = `http://127.0.0.1:8000/movies/like/${this.movie.id}`
            axios.post(URL_LIKE)
        }
    }


}
</script>

<style>

</style>