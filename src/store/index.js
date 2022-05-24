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
    movies_db: [],
    movieWanted: '',
    movieNow: '',
    movie8Top: [],
    movie4Top: [],
    movie2Top: [],
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
    },
    MOVIE_DB(state, takenMovies) {
      state.movies_db = takenMovies
    },
    GO_QUATER_FINAL(state, quaterfinal) {
      state.movie8Top = quaterfinal
    },
    GO_SEMI_FINAL(state, semifinal) {
      state.movie4Top = semifinal
    },
    GO_FINAL(state, final) {
      state.movie2Top = final
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
    },
    movieDb({ commit }, takenMovies) {
      commit('MOVIE_DB', takenMovies)
    },
    goQuaterFinal({ commit }, quaterfinal) {
      commit('GO_QUATER_FINAL', quaterfinal)
    },
    goSemiFinal({ commit }, semifinal) {
      commit('GO_SEMI_FINAL', semifinal)
    },
    goFinal({ commit }, final) {
      commit('GO_FINAL', final)
    },
  },
  modules: { accounts, community
  }
})
