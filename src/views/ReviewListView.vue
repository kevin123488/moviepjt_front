<template>
  <div>
    <h1>Home</h1>
    <router-link to="/review/new">글 작성</router-link>
    <ul>
      <li v-for="review in reviews" :key="review.pk">
        <!-- 작성자 -->
        {{ review.user.username }} : 

        <!-- 글 이동 링크 (제목) -->
        <router-link 
          :to="{ name: 'reviewDetail', params: {reviewPk: review.pk} }">
            {{ review.review_title }}
        </router-link>


      </li>
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

<style></style>
