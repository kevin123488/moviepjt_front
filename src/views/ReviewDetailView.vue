<template>
  <div class="m-5 container text-center">
    <h1>{{ review.user.username }}님의 게시글</h1>
    <div class="d-flex justify-content-center m-5">
      <div class="card" style="width: 50rem;">
        <h3>리뷰 제목 : {{ review.review_title }}</h3>
        <h4>영화 제목 :{{ review.movie_title }}</h4>
        <!-- <p>{{ review.pk }}</p> -->
        <p>내용 : {{ review.content }}</p>
        <div>
          좋아요:
          <button class="btn btn-outline-dark" 
            @click="likeReview(reviewPk)"
          >{{ likeCount }}</button>
        </div>
        <div v-if="isAuthor">
          <!-- <p> 임마가 맞다</p> -->
          <router-link :to="{ name: 'reviewEdit', params: { reviewPk } }">
            <button class="btn btn-outline-dark">Edit</button>
          </router-link>&nbsp;&nbsp;
          <button class="btn btn-outline-dark" @click="deleteReview(reviewPk)">Delete</button>
        </div>
      </div>
    </div>
    <!-- Article Edit/Delete UI -->

    <!-- Article Like UI -->
    <h3>댓글 목록</h3>
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
        // if (this.review.lik_user?.length == 0) {
        //   return "♡"
        // } else {
        //   return "♥"
        // }
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
