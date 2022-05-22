import Vue from 'vue'
import Vuex from 'vuex'

// import movies from './modules/movies'
import accounts from './modules/accounts'
import community from './modules/community'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState()
  ],
  state: {
    movies: [],
    movies_upto: [],
    movies_stars: [],
    movieWanted: '',
    movieNow: '',
  },
  getters: {
  },
  mutations: {
    MOVIE_LIST(state, takenMovies) {
      state.movies = takenMovies
    },
    MOVIE_LIST_UPTO(state, takenMovies) {
      state.movies_upto = takenMovies
    },
    MOVIE_LIST_STARS(state, takenMovies) {
      state.movies_stars = takenMovies
    },
    MOVIE_LIKE(state, watchingMovie) {
      state.movieWanted = watchingMovie
    }
  },
  actions: {
    movieList({ commit }, takenMovies) {
      commit('MOVIE_LIST', takenMovies)
    },
    movieListUpto({ commit }, takenMovies) {
      commit('MOVIE_LIST_UPTO', takenMovies)
    },
    movieListStars({ commit }, takenMovies) {
      commit('MOVIE_LIST_STARS', takenMovies)
    },
    movieLike({ commit }, watchingMovie) {
      commit('MOVIE_LIKE', watchingMovie)
    }
  },
  modules: { accounts, community
  }
})
