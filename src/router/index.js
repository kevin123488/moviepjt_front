import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LikeMovieView from '../views/LikeMovieView.vue'
import RecommendMovieView from '../views/RecommendMovieView.vue'
import MovieDetailView from '../views/MovieDetailView.vue'
import LoginView from '../views/LoginView.vue'
import LogoutView from '../views/LogoutView.vue'
import SignupView from '../views/SignupView.vue'
import ProfileView from '../views/ProfileView.vue'
import ReviewListView from '../views/ReviewListView.vue'
import ReviewDetailView from '../views/ReviewDetailView.vue'
import ReviewNewView from '../views/ReviewNewView.vue'
import ReviewEditView from '../views/ReviewEditView.vue'
import NotFound404 from '../views/NotFound404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/likemovie',
    name: 'likemovie',
    component: LikeMovieView
  },
  {
    path: '/recommendmovie',
    name: 'recommendmovie',
    component: RecommendMovieView
  },
  // 아직 login관련 컴포넌트를 만들어두진 않음. 우선 어떤 컴포넌트를 연결할 것인지 정도만 써두자
  {
    path: '/movies/detail/:moviePk',
    name: 'moviedetail',
    component: MovieDetailView
  },
  // 여기부터 accounts 관련 routing
  {
    path: '/login', // 로그인
    name: 'login',
    component: LoginView
  },
  {
    path: '/logout', // 로그아웃
    name: 'logout',
    component: LogoutView
  },
  {
    path: '/signup', // 회원가입
    name: 'signup',
    component: SignupView
  },
  {
    path: '/profile/:username', // 유저 프로필 조회
    name: 'profile',
    component: ProfileView
  },
  // 여기까지가 accounts 관련된 내용
  // 여기부터는 community review 관련 내용
  {
    path: '/reviews', // 커뮤니티 글 목록 쭉
    name: 'reviews',
    component: ReviewListView
  },
  {
    path: '/reviews/:reviewPk', // 커뮤니티 글 세부조회
    name: 'reviewDetail',
    component: ReviewDetailView
  },
  // 인증 필요
  {
    path: '/reviews/new', // 커뮤니티 글 생성
    name: 'reviewNew',
    component: ReviewNewView
  },
  // 인증 필요
  {
    path: '/reviews/:reviewPk/edit', // 커뮤니티 글 수정
    name: 'reviewEdit',
    component: ReviewEditView
  },
  // 여기까지가 community review 관련 내용
  // 추후 추가할 것 있으면 추가
  {
    path: '/404', // 404
    name: 'NotFound404',
    component: NotFound404
  },
  {
    path: '*',
    redirect: '/404',
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


// router.beforeEach((to, from, next) => {
//   // 로그인 여부에 따라 해당 페이지를 보여줄 것인지, 로그인 페이지로 넘길 것인지를 결정하는 코드를 쓰자

// })

export default router
