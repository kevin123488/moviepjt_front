<template>
  <div class="container text-center">
    <div class="d-flex justify-content-center" >
      <form @submit.prevent="onSubmit">
        <div>
          <label class="form-label" for="review_title">Review_title </label>
          <input class="form-control" style="width: 50rem;" v-model="newReview.review_title" type="text" id="review_title" />
        </div>
        <div>
          <label class="form-label" for="movie_title">Movie_title: </label>
          <input class="form-control" style="width: 50rem;" v-model="newReview.movie_title" type="text" id="movie_title" />
        </div>
        <div>
          <label class="form-label" for="content">Content: </label>
          <textarea class="form-control" style="width: 50rem;" v-model="newReview.content" type="text" id="content"></textarea>
        </div>
        <div>
          <button class=" m-2 btn btn-outline-dark">{{ action }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    name: 'ReviewForm',
    props: {
      review: Object,
      action: String,
    },
    data() {
      return {
        newReview: {
          review_title: this.review.review_title,
          movie_title: this.review.movie_title,
          content: this.review.content,
        }
      }
    },

    methods: {
      ...mapActions(['createReview', 'updateReview']),
      onSubmit() {
        if (this.action === 'create') {
          this.createReview(this.newReview)
        } else if (this.action === 'update') {
          const payload = {
            pk: this.review.pk,
            ...this.newReview,
          }
          this.updateReview(payload)
        }
      },
    },
  }
</script>

<style></style>
