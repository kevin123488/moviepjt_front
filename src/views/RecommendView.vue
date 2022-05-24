<template>
  <div>
      <h1>movie recommendation</h1>
      <div class="group"><h1>Group A</h1></div>
      <div class="adiv">
        <div class="teamA" v-for="movie in teamA.movie" :key="movie.id" @click="clicked(movie, teamA)">
            <!-- {{ movie.title }} -->
            <img class="img" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">
        </div>
      </div>
          <div class="group"><h1>Group B</h1></div>
        <div class="adiv">
            <div class="teamB" v-for="movie in teamB.movie" :key="movie.id" @click="clicked(movie, teamB)">
                <!-- {{ movie.title }} -->
                <img class="img" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">
            </div>
        </div>
          <div class="group"><h1>Group C</h1></div>
          <div class="adiv">
            <div class="teamC" v-for="movie in teamC.movie" :key="movie.id" @click="clicked(movie, teamC)">
                <!-- {{ movie.title }} -->
                <img class="img" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">
            </div>
          </div>
          <div class="group"><h1>Group D</h1></div>
          <div class="adiv">
            <div class="teamD" v-for="movie in teamD.movie" :key="movie.id" @click="clicked(movie, teamD)">
                <!-- {{ movie.title }} -->
                <img class="img" :src="'https://image.tmdb.org/t/p/original'+ movie.poster_path" alt="">
            </div>
          </div>
      <div>
          <button type="button" @click="gogogo">저장하기</button>
      </div>
      <div>
        <button type="button" v-if="goNext" @click="movieSave">
            <router-link to="/recommendmovie/8top">
                다음으로
            </router-link>
        </button>
      </div>

      <div class="basket">
        <div class="search-box">
            <a href="#" class="search-btn">
                <i class="fa-solid fa-basket-shopping"></i>
            </a>
        <div class="search-txt">
          <p>________________담은 목록__________________</p>
          <p v-for="select in selected" :key="select">{{ select }} /</p>
        </div>
        </div>
      </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
    name: 'recommendViewView',
    data() {
        return {
            movies: this.$store.state.movies_db,
            selected: [],
            teamA: {
                movie: [],
                isClicked: 0,
            }, // A에서 선택된 애들 넣을 예정
            teamB: {
                movie: [],
                isClicked: 0,
            },
            teamC: {
                movie: [],
                isClicked: 0,
            },
            teamD: {
                movie: [],
                isClicked: 0,
            },
            goNext: false,
        }
    },
    methods: {
        clicked: function(movie, team) {
            if (this.selected.includes(movie.title)) {
                team.isClicked -= 1
                const idx = this.selected.indexOf(movie.title)
                this.selected.splice(idx, 1)
            } else {
                if (team.isClicked === 2) {
                    // this.selected.splice(0, 1) // 클릭된게 2개인 상태에서 중복 아닌애가 클릭된다? 해당 영화 그룹중 가장 먼제 들어간 애를 지우자
                    // 해당하는 팀을 선택, 그 팀에 포함된 영화중 가장 앞에있는 영화와 같은 이름인 애의 인덱스를
                    // selected에서 찾은 후 걔를 splice
                    alert('팀당 2개의 영화를 선택할 수 있습니다. 선택한 영화를 한번 더 누르면 삭제 가능합니다.')
                } else {
                    this.selected.push(movie.title)
                    team.isClicked += 1
                }
                console.log(team.movie)
            }
            console.log(this.selected)
            console.log(this.teamA.isClicked)
            console.log(this.teamB.isClicked)
            console.log(this.teamC.isClicked)
            console.log(this.teamD.isClicked)
        },
        gogogo: function() {
            if (this.teamA.isClicked === 2 && this.teamB.isClicked === 2 
            && this.teamC.isClicked === 2 && this.teamD.isClicked === 2) {
                console.log(this.selected)
                this.goNext = true
            } else {
                alert('똑바로 선택하세요')
            }
        },
        movieSave: function() {
            console.log(this.selected)
            // this.$store.state.movie8Top = this.selected
            this.$store.dispatch('goQuaterFinal', this.selected)
        },
    },
    created() {
        this.teamA.movie = _.sampleSize(this.movies, 4)
        this.teamB.movie = _.sampleSize(this.movies, 4)
        this.teamC.movie = _.sampleSize(this.movies, 4)
        this.teamD.movie = _.sampleSize(this.movies, 4)
    },
}
</script>

<style>
.test {
    display: flex;
    flex-direction: column;
}

img {
  z-index: 1;
}

span {
        position: absolute;
        top: 50%;
    }
    
    .adiv {
      display: flex;
      align-items: center;
      justify-content: space-around;
    }
    
    .group {
      text-align: center;
      margin-bottom: 90px;
    }
    
    .img {
      width: 250px;
      height: 300px;
      border-radius: 20px;
      margin: 0;
      padding: 0;
    }
    
    .img:hover {
      width: 300px;
      height: 400px;
      border-radius: 100px;
      transition: 0.4s;
      margin: 0;
      padding: 0;
    }
    
    /* 여기부턴 장바구니 */
    .search-box {
      z-index: 0;
      position: fixed;
      display: flex;
      top:35%;
      left: 50%;
      transform: translate(-50%, -50%);
      background-color: transparent;
      height: 100px;
      width: 1000px;
      border-radius: 40px;
      padding: 10px;
      margin-right: 50px;
      justify-content: center;
      align-items: center;
    }
    
    .search-txt:hover{
      width: 1000px;
      padding: 0 6px;
      font-size: 16px;
      background-color: #2f3640;
      color: white;
      height: 500px;
      border-radius: 40px;
    }
    
    .search-btn {      
      color: #e84118;
      width: 40px;
      height: 35px;
      border-radius: 50%;
      background: #2f3640;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 16px;
      bottom: 15px;
    }
    
    .search-txt {
      position: absolute;
      border: none;
      background: transparent;
      outline: none;        
      padding: 0;
      color: transparent;
      font-size: 20px;
      transition: 0.4s;
      line-height: 35px;
      width: 0px;
    }
    
    i {
        color: white;
    }         
    </style>