<template>
  <form @submit.prevent="onSubmit" class="comment-list-form">
    <label for="comment">댓글달기: </label>
    <input type="text" id="comment" v-model="content" required>&nbsp;
    <button class="btn btn-outline-light">Comment</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListForm',
  data() {
    return {
      content: ''
    }
  },
  computed: {
    ...mapGetters(['review']),
  },
  methods: {
    ...mapActions(['createComment']),
    onSubmit() {
      this.createComment({ reviewPk: this.review.pk, content: this.content, })
      this.content = ''
      console.log(this.review.pk)
    }
  }
}
</script>

<style>
.comment-list-form {
  border: 1px;
  margin-left: 10rem;
  margin-right: 10rem;
  margin-top: 1rem;
  padding: 1rem;
}
</style>