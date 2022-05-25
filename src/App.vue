<template>
  <div class="body">
    <nav class="navbar pb-0 pt-0">
      <div class="navbar__logo">
        <router-link class="link_tag" to="/"><img style="width:10rem; height:5rem;" src="@/assets/logo-goodmood2.png" alt=""></router-link>
      </div>
      <ul class="navbar__menu">
        <li><router-link class="link_tag" to="/">Home</router-link></li>
        <li><router-link class="link_tag" to="/recommendmovie">Recommend</router-link></li>
        <li><router-link class="link_tag" to="/reviews">Reviews</router-link></li>
        <!-- <li v-if="!!isLoggedIn"><router-link class="link_tag" v-if="!!isLoggedIn" to="/likemovie">Likemovie</router-link></li> -->
        <!-- <li v-if="!!isLoggedIn"><a class="link_tag" v-if="!!isLoggedIn" href="/likemovie">Likemovie</a></li> -->
      </ul>

      <ul class="navbar__icons">
        <li><router-link class="link_tag" style="font-size: 1.5rem; color: #EF6C35;" to="/search">Search</router-link></li>
        <li v-if="!isLoggedIn"><router-link class="link_tag" style="font-size: 1.5rem; color: #EF6C35;" v-if="!isLoggedIn" to="/login">Login</router-link></li>
        <li v-if="!isLoggedIn"><router-link class="link_tag" style="font-size: 1.5rem; color: #EF6C35;" v-if="!isLoggedIn" to="/signup">Signup</router-link></li>
        <li v-if="!!isLoggedIn"><router-link class="link_tag" style="font-size: 1.5rem; color: #EF6C35;" v-if="!!isLoggedIn" :to="{ name: 'profile', params:{username: currentUser.username} }">Profile</router-link></li>
        <li v-if="!!isLoggedIn"><router-link class="link_tag" style="font-size: 1.5rem; color: #EF6C35;" v-if="!!isLoggedIn" to="/logout">Logout</router-link></li>
      </ul>
      <!-- <a href="#" class="navbar__toogleBtn">
        <i class="fa-solid fa-bars"></i>
      </a> -->
    </nav>
    <router-view/>
  </div>
</template>

<script>
import axios from 'axios'

const URL = 'http://127.0.0.1:8000/movies/'
const URL_UP_TO = 'http://127.0.0.1:8000/movies/up_to/'
const URL_STARS = 'http://127.0.0.1:8000/movies/stars/'
const URL_DB = 'http://127.0.0.1:8000/movies/db/'



import { mapGetters, mapActions} from 'vuex'
export default {
  name: 'App',
  computed: {
    ...mapGetters(['isLoggedIn', 'currentUser'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
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
    axios.get(URL_DB)
    .then(res => {
      this.$store.dispatch('movieDb', res.data)
    })
    console.log(this.$store.getters.profile)
    
    // const payload = { username: this.currentUser.username }
    // this.fetchProfile(payload)
  }
}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

/* nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
} */
.body {
  margin: 0;
  font-family: 'Source Sans Pro', sans-serif;
}

.link_tag {
  color: #EF6C35;
  /* text-decoration: none; */
  /* color: white; */
  /* color: #EF6C35; */
  font-size: 1.5rem; 
}

.navbar {
  /* position: fixed; 최상단 고정용*/
  /* width: 100%; 최상단 고정시 레이아웃 보정 */
  /* z-index: 1; navbar 제일 앞에 두기 */
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #161C2E;
  /* background-color: #263343; */
  /* background-color: #E0E7E9; */
  /* background-color: white; */
  /* background-color: rgb(71, 67, 67); */
  padding: 8px 12px;
}

.navbar__logo {
  font-size: 24px;
  color: white;
}

.navbar__menu {
  display: flex;
  list-style: none;
  padding-left: 0;
  margin-bottom: 0px;
}

.navbar__menu li {
  padding: 8px 12px;
}

.navbar__menu li:hover {
  background-color: #d49466;
  border-radius: 4px;
}

.navbar__menu li:hover > .link_tag {
  color: black;
}

.navbar__icons {
  list-style: none;
  color: white;
  display: flex;
  padding-left: 0;
  margin-bottom: 0px;
}
.navbar__icons li {
  padding: 8px 12px;
}
.card {
  color: black;
}
.btn {
  color: white;
}

@media screen and (max-width: 768px) {
  .navbar {
    /* display: none; */
    flex-direction: column;
    align-items: flex-start;
    padding: 8px 24px;
  }
  .navbar__menu {
    /* display: none; */
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  .navbar__menu li{
    width: 100%;
    text-align: center;
  }
  .navbar__icons {
    /* display: none; */
    justify-content: center;
    width: 100%;
  }
  .navbar__toogleBtn {
    display: block;
  }
}
</style>
