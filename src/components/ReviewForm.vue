<template>
  <form @submit.prevent="onSubmit">
    <div>
      <label for="review_title">review_title: </label>
      <input v-model="newReview.review_title" type="text" id="review_title" />
    </div>
    <div>
      <label for="movie_title">movie_title: </label>
      <input v-model="newReview.movie_title" type="text" id="movie_title" />
    </div>
    <div>
      <label for="content">contnet: </label>
      <textarea v-model="newReview.content" type="text" id="content"></textarea>
    </div>
    <div>
      <button>{{ action }}</button>
    </div>
  </form>
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
