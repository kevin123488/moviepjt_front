const HOST = 'http://127.0.0.1:8000/'

const ACCOUNTS = 'accounts/'
const MOVIES = 'movies/'
const COMMUNITY = 'community/'
const COMMENTS = 'comments/'
export default {
    accounts: {
      login: () => HOST + ACCOUNTS + 'login/',
      logout: () => HOST + ACCOUNTS + 'logout/',
      signup: () => HOST + ACCOUNTS + 'signup/',
      // Token 으로 현재 user 판단
      currentUserInfo: () => HOST + ACCOUNTS + 'user/',
      // username으로 프로필 제공
      profile: username => HOST + ACCOUNTS + 'profile/' + username,
    },
    movies: {
      movies: () => HOST + MOVIES,
      movie: moviePk => HOST + MOVIES + 'detail/' + `${moviePk}/`,
      likeMovie: moviePk => HOST + MOVIES + 'like/' + `${moviePk}/`,
    },
    reviews: {
      reviews: () => HOST + COMMUNITY,
      review: reviewPk => HOST + COMMUNITY + 'detail/' + `${reviewPk}/`,
      likeReview: reviewPk => HOST + COMMUNITY + 'like/' + `${reviewPk}`,
      comments: reviewPk => HOST + COMMUNITY + COMMENTS + `${reviewPk}` ,
      comment: (reviewPk, commentPk) =>
        HOST + COMMUNITY + COMMENTS + `${reviewPk}` + `${commentPk}/`,
    }
  }