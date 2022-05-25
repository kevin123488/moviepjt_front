<template>
  <div class="container text-center review-all">
    <div class="review-detail-title">{{ review.user.username }}님의 게시글</div>
    <div class="d-flex justify-content-center m-5">
      <div style="width: 50rem;">
        <div class="review-title-movie">
          <h3>리뷰 제목 : {{ review.review_title }}</h3>
          <h4>영화 제목 :{{ review.movie_title }}</h4>
        </div>
        <!-- <p>{{ review.pk }}</p> -->
        <div class="review-all" style="width: 300px; margin: auto;">
          <p>내용 : {{ review.content }}</p>
        </div>
        <div class="good-button">
          좋아요:
          <button class="white-button btn btn-outline-light btn-sm" 
            @click="likeReview(reviewPk)"
          >{{ likeCount }}</button>
        </div>
        <div v-if="isAuthor">
          <!-- <p> 임마가 맞다</p> -->
          <router-link :to="{ name: 'reviewEdit', params: { reviewPk } }">
            <button class="white-button btn btn-outline-light btn-sm">Edit</button>
          </router-link>&nbsp;&nbsp;
          <button class="white-button btn btn-outline-light btn-sm" @click="deleteReview(reviewPk)">Delete</button>
        </div>
      </div>
    </div>
    <!-- Article Edit/Delete UI -->

    <!-- Article Like UI -->
    <!-- <div>
      <h3>댓글 목록</h3>
      <comment-list :comments="review.comments"></comment-list>
    </div> -->

    <div class="container">
      <comment-list :comments="review.comments"></comment-list>
    </div>
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

<style>

.good-button {
  margin-top: 30px;
}

.review-title-movie {
  background: #4b546b;
  border-radius: 20px;
  box-shadow: 5px 5px black;
  margin-bottom: 15px;
}

.review-all {
  margin-top: 20px;
  border: 1px solid white;
  border-radius: 30px;
}

.review-detail-title {
  text-align: center;
  left: 50%;
  background: #4b546b;
  margin-top: 20px;
  font-size: 35px;
  width: 500px;
  border-radius: 20px;
  box-shadow: 5px 5px black;
  margin: auto;
  margin-top: 30px;
}

</style>