<template>
  <div class="container text-center">
  
    <h1 class="m-2">Login</h1>
    <div class="d-flex justify-content-center">

      <form @submit.prevent="login(credentials)">
        <div class="m-2">
          <label class="form-label" for="username">Username </label>
          <input  class="form-control" v-model="credentials.username" type="text" id="username" placeholder="Username" required />
        </div>

        <div class="m-2">
          <label class="form-label" for="password">Password: </label>
          <input class="form-control" v-model="credentials.password" type="password" id="password" placeholder="Password" required/>
        </div>
        <account-error-list v-if="authError"></account-error-list>

        <button class=" m-1 btn btn-outline-dark">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'

  export default {
    name: 'LoginView',
    components: {
      AccountErrorList,
    },
    data() {
      return {
        credentials: {
          username: '',
          password: '',
        }
      }
    },
  computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['login'])
    },
  }
</script>

<style></style>
