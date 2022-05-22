<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/recommendmovie">Recommend</router-link> |
      <router-link to="/likemovie">Likemovie</router-link> |
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

const URL = 'http://127.0.0.1:8000/movies/'
const URL_UP_TO = 'http://127.0.0.1:8000/movies/up_to/'
const URL_STARS = 'http://127.0.0.1:8000/movies/stars/'

export default {
  name: 'App',
  created() {
    axios.get(URL)
    .then(res => {
      console.log(res.data)
      this.$store.dispatch('movieList', res.data)
    })
    axios.get(URL_UP_TO)
    .then(res => {
      console.log(res.data)
      this.$store.dispatch('movieListUpto', res.data)
    })
    axios.get(URL_STARS)
    .then(res => {
      console.log(res.data)
      this.$store.dispatch('movieListStars', res.data)
    })

  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
