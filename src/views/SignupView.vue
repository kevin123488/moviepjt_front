<template>
  <div class="container text-center">
    <h1 class="m-2">Signup</h1>
    <div class="d-flex justify-content-center">
      <form @submit.prevent="signup(credentials)">
        <div class="m-2">
          <label class="form-label" for="username">Username </label>
          <input class="form-control" v-model="credentials.username" type="text" id="username" placeholder="Username" required />
        </div>
        <div class="m-2">
          <label class="form-label" for="password1">Password </label>
          <input class="form-control" v-model="credentials.password1" type="password" id="password1" placeholder="Password1" required />
        </div>
        <div class="m-2">
          <label class="form-label" for="password2">Password Confirmation</label>
          <input class="form-control" v-model="credentials.password2" type="password" id="password2" placeholder="Password Confirmation" required />
        </div>
      <account-error-list v-if="authError"></account-error-list>
        <div>
          <button class=" m-1 btn btn-outline-dark">Signup</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
  import { mapActions, mapGetters} from 'vuex'
  import AccountErrorList from '@/components/AccountErrorList.vue'
  export default {
    components: {
      AccountErrorList,
    },
    name: 'SignupView',
    data() {
      return {
        credentials: {
          username: '',
          password1: '',
          password2: '',
        }
      }
    },
    computed: {
      ...mapGetters(['authError'])
    },
    methods: {
      ...mapActions(['signup'])
    },
  }
</script>

<style></style>
