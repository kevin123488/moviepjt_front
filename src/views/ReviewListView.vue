<template>
  <div class="container m-5 d-flex justify-content-center">
    <div>
      <h1>Community</h1>
      <br>
      <h3>리뷰 목록</h3>
      <router-link class="white-button btn btn-outline-light" style="color: white; hover-color: black;" to="/review/new">글 작성</router-link>
    </div>
    <ul>
      <ol v-for="review in reviews" :key="review.pk">
      <div class="card mt-2">
        <div class="card-header">
          작성자 : {{ review.user.username}}
        </div>
        <div class="card-body">
          <h5 class="card-title">제목 : {{ review.review_title}}</h5>
          <p class="card-text">♥️: {{ review.like_count}}</p>
          <router-link 
            :to="{ name: 'reviewDetail', params: {reviewPk: review.pk} }">
            <button class="detail-button btn btn-outline-dark" style="color: black">detail</button>
          </router-link>
        </div>
      </div>
      </ol>
      
    </ul>
   
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'

  export default {
    name: 'ReviewList',
    computed: {
      ...mapGetters(['reviews'])
    },
    methods: {
      ...mapActions(['fetchReviews'])
    },
    created() {
      this.fetchReviews()
    },
  }
</script>

<style>
  .white-button:hover {
    background-color: black;
  }
</style>
