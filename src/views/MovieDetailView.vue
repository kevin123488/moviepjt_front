<template>
    <div>
        <!-- <h1>영화 세부조회</h1> -->
        <div class="card">
            <div class="card-head">
                <h1>{{ movie.title }}</h1>
            </div>
            <div class="card-img-top">
                <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="">
            </div>

            <div class="card-body">
                {{ movie.overview }}
            </div>

        </div>
        <button type="button" @click="trailerOn">트레일러 보기</button>
        <button type="button" @click="likeMovie">찜하기</button>
        <button type="button"><a href="/">back</a></button>

    </div>
</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
    name: 'movieDetail',
    data() {
        return {
            movie: this.$store.state.movieNow,
            trailer: '',
        }
    },
    methods: {
        likeMovie() {
            const URL_LIKE = `http://127.0.0.1:8000/movies/like/${this.movie.id}/`
            // axios.post(URL_LIKE)
            // axios.post(URL_LIKE, {
            //     headers: {
            //         'Authorization': `Token ${this.$store.state.token}`
            //     }
            // })
            this.$store.dispatch('likeMovie', URL_LIKE)
        },
        trailerOn() {
            const URL_TRAILER = `https://api.themoviedb.org/3/movie/${this.movie.movienumber}/videos`
            // const URL_TRAILER = 'https://api.themoviedb.org/3/movie/popular' 요청 확인용 -> 잘 됨
            const params = {
                api_key: API_KEY,
            }
            axios.get(URL_TRAILER, {params})
            .then(res => {
                console.log(res.data)
                // axios 요청 제대로 안들어가짐. 나중에 수정
                // 다른 경로로의 axios는 잘 먹힘. URL_TRAILER가 문제인듯
            })
        }
    }


}
</script>

<style>

</style>