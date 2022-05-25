<template>
  <li class="mt-4">
    <router-link :to="{ name: 'profile', params: { username: comment.user.username } }">
      작성자 : {{ comment.user.username }}
    </router-link>
    <div v-if="!isEditing"> 
      내용 : {{ payload.content }}
    </div>
    <div v-if="isEditing">
      <input type="text" v-model="payload.content">
      <button class="white-button btn btn-outline-light btn-sm" @click="onUpdate">Update</button>
      <button class="white-button btn btn-outline-light btn-sm" @click="switchIsEditing">Cancle</button>
    </div>
    <div v-if="currentUser.username === comment.user.username && !isEditing">
      <button class="white-button btn btn-outline-light btn-sm" @click="switchIsEditing">Edit</button>
      <button class="white-button btn btn-outline-light btn-sm" @click="deleteComment(payload)">Delete</button>
    </div>
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