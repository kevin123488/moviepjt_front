<template>
  <li>
    <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
      작성자 : {{ comment.user.username }}
    </router-link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <span v-if="!isEditing">{{ payload.content }}</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    <span v-if="isEditing">
      <input type="text" v-model="payload.content">&nbsp;&nbsp;
      <button class="btn btn-outline-dark" @click="onUpdate">Update</button> &nbsp;&nbsp;
      <button class="btn btn-outline-dark" @click="switchIsEditing">Cancle</button>
    </span>

    <span v-if="currentUser.username === comment.user.username && !isEditing">
      <button class="btn btn-outline-dark" @click="switchIsEditing">Edit</button> &nbsp;&nbsp;
      <button class="btn btn-outline-dark" @click="deleteComment(payload)">Delete</button>
    </span>
  </li>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'CommentListItem',
  props: { comment: Object },
  data() {
    return {
      isEditing: false,
      payload: {
        reviewPk: this.comment.review,
        commentPk: this.comment.pk,
        content: this.comment.content
      },
    }
  },
  computed: {
    ...mapGetters(['currentUser']),
  },
  methods: {
    ...mapActions(['updateComment', 'deleteComment']),
    switchIsEditing() {
      this.isEditing = !this.isEditing
    },
    onUpdate() {
      this.updateComment(this.payload)
      this.isEditing = false
    }
  },

}
</script>

<style>
</style>