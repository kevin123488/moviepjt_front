<template>
    <div class="d-flex justify-content-center card-ev">
    <div class="card m-3 bg-ivory card-thing" style="width: 1200px;">
        <div class="row g-0">
            <div class="col-md-4">
            <img :src="'https://image.tmdb.org/t/p/original' + movie.poster_path" alt="" class="card-img-top img-fluid detail-img-size rounded-start">
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h1 class="card-title fs-3">{{ movie.title }}</h1>
                <div class="overview-scrolling">
                    <p class="card-text fs-4 mt-5">{{ movie.overview }}</p>
                </div>
                <div class="detail-buttons">
                    <button class="detail-buttonn" style="color: black" data-bs-toggle="modal" data-bs-target="#exampleModal" type="button" @click="trailerOn">트레일러 보기</button>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div class="modal-dialog modal-xl">
                            <div class="modal-content">
                            <div class="modal-body">
                                <div>
                                    <iframe :src="videoURL" frameborder="0" style="width: 1100px; height:600px;"></iframe>
                                </div>
                            </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                </div>
                            </div>
                        </div>
                        </div>
                    <button class="detail-buttonn" style="color: black" type="button" @click="likeMovie">찜하기</button>
                    <button class="detail-buttonn" style="color: black" type="button"><a href="/" style="color: black">back</a></button>
                </div>
            </div>
            </div>
        </div>
    </div>

    </div>

</template>

<script>
import axios from 'axios'
const API_KEY = process.env.VUE_APP_TMDB_API_KEY

export default {
    name: 'movieDetail',
    computed: {
        videoURL() {
            const videoId = this.trailer
            return `https://www.youtube.com/embed/${videoId}`
        }
    },
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
            alert("찜했습니다.")
        },
        trailerOn() {
            const URL_TRAILER = `https://api.themoviedb.org/3/movie/${this.movie.movienumber}/videos`
            // const URL_TRAILER = 'https://api.themoviedb.org/3/movie/popular' 요청 확인용 -> 잘 됨
            const params = {
                api_key: API_KEY,
                language: 'ko'
            }
            axios.get(URL_TRAILER, {params})
            .then(res => {
                console.log(res.data.results[0].id)
                console.log(res.data.results)
                this.trailer = res.data.results[0].key
            })
                
                // axios 요청 제대로 안들어가짐. 나중에 수정
                // 다른 경로로의 axios는 잘 먹힘. URL_TRAILER가 문제인듯
                // id가 아니라 key로 요청을 보내야 함
            
        },
    }


}
</script>

<style>

.overview-scrolling {
    overflow: auto;
}

.card-thing {
    box-shadow: 10px 10px black;
    /* height: 35rem; */
}

.card-ev {
    margin-top: 50px;
}

a:link {
  color : white;
  text-decoration: none;
}
a:visited {
  color : white;
  text-decoration: none;
}
a:hover {
  color : white;
  text-decoration: none;
}
.detail-img-size {
    width: 60rem;
    height: 35rem;
}

.detail-buttons {
    position: absolute;
    top: 90%;
    left: 75%;
}

.detail-buttonn {
    border-radius: 10px;
    background-color: white;
    color: black;
    border: 1px solid black;
    margin: 5px;
    height: 35px;
}

.detail-button:hover {
  background-color: #d49466;
  border-radius: 10px;
}

.detail-buttonn:hover {
  background-color: #d49466;
  border-radius: 10px;
}
</style>