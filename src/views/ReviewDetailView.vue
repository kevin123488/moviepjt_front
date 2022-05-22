<template>
  <div>
    <h1>{{ review.review_title }}</h1>
    <h2>{{ review.movie_title }}</h2>
    <!-- <p>{{ review.pk }}</p> -->

    <p>
      {{ review.content }}
    </p>
    <!-- Article Edit/Delete UI -->
    <div v-if="isAuthor">
      <!-- <p> 임마가 맞다</p> -->
      <router-link :to="{ name: 'reviewEdit', params: { reviewPk } }">
        <button>Edit</button>
      </router-link>
      |
      <button @click="deleteReview(reviewPk)">Delete</button>
    </div>

    <!-- Article Like UI -->
    <div>
      Likeit:
      <button
        @click="likeReview(reviewPk)"
      >{{ likeCount }}</button>
    </div>

    <hr />
    <!-- Comment UI -->
    <comment-list :comments="review.comments"></comment-list>

  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'
  import CommentList from '@/components/CommentList.vue'



  export default {
    name: 'ReviewDetail',
    components: { CommentList },
    data() {
      return {
        reviewPk: this.$route.params.reviewPk,
      }
    },
    computed: {
      ...mapGetters(['isAuthor', 'review']),
      likeCount() {
        return this.review.like_users?.length
      }
    },
    methods: {
      ...mapActions([
        'fetchReview',
        'likeReview',
        'deleteReview',
      ])
    },
    created() {
      this.fetchReview(this.reviewPk)
    },
  }
</script>

<style></style>
