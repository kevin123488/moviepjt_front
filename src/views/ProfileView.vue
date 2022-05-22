<template>
  <div>
    <h1>{{ profile.username }}</h1>

    <h2>작성한 리뷰</h2>
    <ul>
      <li v-for="review in profile.reviews" :key="review.pk">
        <router-link :to="{ name: 'reviewDetail', params: { reviewPk: review.pk } }">
          {{ review.review_title }}
        </router-link>
      </li>
    </ul>

    <h2>좋아요 한 영화</h2>
    <ul>
      <li v-for="movie in profile.like_movies" :key="movie.pk">
        <router-link :to="{ name: 'moviedetail', params: { moviePk: movie.pk } }">
          {{ movie.title }}
        </router-link>
      </li>
    </ul>
    <h2> 팔로우</h2>   
    <h2> 팔로워</h2>   
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'


export default {
  name: 'ProfileView',
  computed: {
    ...mapGetters(['profile'])
  },
  methods: {
    ...mapActions(['fetchProfile'])
  },
  created() {
    const payload = { username: this.$route.params.username }
    this.fetchProfile(payload)
  },
}
</script>
