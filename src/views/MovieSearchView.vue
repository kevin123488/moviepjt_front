<template>
  <div>
      <h1>영화 검색 페이지</h1>
      <input type="text" v-model="keywords" @keyup.enter="searchStart">
      <div v-if="doesnt">올바른 검색 결과가 없습니다</div>
      <div v-if="found">
          <div v-for="foun in found" :key="foun.id">
            <h1>
                {{ foun.title }}
            </h1>
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
        }
    }
}
</script>

<style>

</style>