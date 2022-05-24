<template>
  <div>

    <h1 class="title">9oodmood.Search</h1>

      <div class="search-box">
        <input class="search-txt" type="text" v-model="keywords" @keyup.enter="searchStart" placeholder="Search . . .">
        <a href="#" class="search-btn" @click="searchStart">
            <i style="color: white;" class="fas fa-search"></i>
        </a>
      </div>

      <div style="text-align: center;" v-if="doesnt">올바른 검색 결과가 없습니다</div>

      <div class="result" v-if="found">
          <div class="results" v-for="foun in found" :key="foun.id">
            <div class="left-img">
                <img :src="'https://image.tmdb.org/t/p/original'+ foun.poster_path" alt="">
            </div>
            <div class="right-text">
                <h3>{{ foun.title }}</h3>
                <hr>
                {{ foun.overview }}
            </div>
          </div>
      </div>

  </div>
</template>

<script>
export default {
    name: 'movieSearchView',
    computed: { 
    },
    data() {
        return {
            keywords: '',
            found: [],
            doesnt: false,
        }
    },
    methods: {
        // searchStart: function() {
        //     const movieDb = this.$store.state.movies_db
        //     console.log(movieDb)
        //     console.log(this.keywords)
        //     movieDb.foreach(element => {
        //         if (element.title.includes(this.keywords)) {
        //             console.log(element.title)
        //         }
        //     })
        // }
        searchStart: function() {
            this.found = []
            this.doesnt = false
            const movieDb = this.$store.state.movies_db
            console.log(movieDb)
            console.log(this.keywords)
            if (this.keywords !== '') {
                movieDb.forEach(element => {
                    if (element.title.includes(this.keywords)) {
                        console.log(element.title)
                        this.found.push(element)
                    }
                })
                if (this.found.length === 0) {
                    this.doesnt = true
                }
            } else {
                alert('검색어를 입력하세요')
            }
            this.keywords = ''
        },
    }
}
</script>

<style>

.result {
    margin-top: 150px;
}

.results {
    display: flex;
    justify-content: center;
    margin-top: 150px;
}

.left-img {
    width: 200px;
    height: 250px;
}

.results:hover > .right-text {
    width: 500px;
    height: 250px;
    color: #2f3640;
}

.right-text {
    width: 0;
    height: 0;
    color: white;
    transition: 0.4s;
}

.title {
    text-align: center;
    margin-top: 5%;
}

img {
    width: 200px;
}

.search-box {
    position: absolute;
    top:30%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #2f3640;
    height: 55px;
    border-radius: 40px;
    padding: 10px;
}

.search-box:hover > .search-txt {
    width: 350px;
    padding: 0 6px;
}

.search-btn {
    color: #e84118;
    float: right;
    width: 40px;
    height: 35px;
    border-radius: 50%;
    background: #2f3640;
    display: flex;
    justify-content: center;
    align-items: center;
}

.search-txt {
    border: none;
    background: none;
    outline: none;
    float: left;
    padding: 0;
    color: white;
    font-size: 16px;
    transition: 0.4s;
    line-height: 35px;
    width: 0px;
}

</style>