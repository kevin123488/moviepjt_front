import axios from 'axios'
import drf from '@/api/drf'
import router from '@/router'

import _ from 'lodash'
// import accounts from './accounts'

export default {
  // namespaced: true,
  state: {
    reviews: [],
    review: {},
  },

  getters: {
    reviews: state => state.reviews,
    review: state => state.review,
    isAuthor: (state, getters) => {
      return state.review.user?.username === getters.currentUser.username
    },
    isReview: state => !_.isEmpty(state.review),
  },

  mutations: {
    SET_REVIEWS: (state, reviews) => state.reviews = reviews,
    SET_REVIEW: (state, review) => state.review = review,
    SET_REVIEW_COMMENTS: (state, comments) => (state.review.comments = comments),
  },

  actions: {
    fetchReviews({ commit, getters }) {
      axios({
        url: drf.reviews.reviews(),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEWS', res.data))
        .catch(err => console.error(err.response))
    },

    fetchReview({ commit, getters }, reviewPk) {
      axios({
        url: drf.reviews.review(reviewPk),
        method: 'get',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEW', res.data))
        .catch(err => {
          console.error(err.response)
          if (err.response.status === 404) {
            router.push({ name: 'NotFound404' })
          }
        })
    },

    createReview({ commit, getters }, review) {
      
      axios({
        url: drf.reviews.reviews(),
        method: 'post',
        data: review,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW', res.data)
          router.push({
            name: 'reviews',
            params: { reviewPk: getters.review.pk }
          })
        })
    },

    updateReview({ commit, getters }, { pk, review_title, movie_title, content }) {
      axios({
        url: drf.reviews.review(pk),
        method: 'put',
        data: { review_title, movie_title, content },
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW', res.data)
          router.push({
            name: 'reviews',
            params: { reviewPk: getters.review.pk }
          })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteReview({ commit, getters }, reviewPk) {
      if (confirm('정말 삭제하시겠습니까?')) {
        axios({
          url: drf.reviews.review(reviewPk),
          method: 'delete',
          headers: getters.authHeader,
        })
          .then(() => {
            commit('SET_REVIEW', {})
            router.push({ name: 'reviews' })
          })
          .catch(err => console.error(err.response))
      }
    },

    likeReview({ commit, getters }, reviewPk) {
      axios({
        url: drf.reviews.likeReview(reviewPk),
        method: 'post',
        headers: getters.authHeader,
      })
        .then(res => commit('SET_REVIEW', res.data))
        .catch(err => console.error(err.response))
    },

		createComment({ commit, getters }, { reviewPk, content }) {
      const comment = { content }

      axios({
        url: drf.reviews.comments(reviewPk),
        method: 'post',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    updateComment({ commit, getters }, { reviewPk, commentPk, content }) {
      const comment = { content }

      axios({
        url: drf.reviews.comment(reviewPk, commentPk),
        method: 'put',
        data: comment,
        headers: getters.authHeader,
      })
        .then(res => {
          commit('SET_REVIEW_COMMENTS', res.data)
        })
        .catch(err => console.error(err.response))
    },

    deleteComment({ commit, getters }, { reviewPk, commentPk }) {
      /* 댓글 삭제
      사용자가 확인을 받고
        DELETE: comment URL (token)
          성공하면
            응답으로 state.article의 comments 갱신
          실패하면
            에러 메시지 표시
      */
        if (confirm('정말 삭제하시겠습니까?')) {
          axios({
            url: drf.reviews.comment(reviewPk, commentPk),
            method: 'delete',
            data: {},
            headers: getters.authHeader,
          })
            .then(res => {
              commit('SET_REVIEW_COMMENTS', res.data)
            })
            .catch(err => console.error(err.response))
        }
      },
  },
}
