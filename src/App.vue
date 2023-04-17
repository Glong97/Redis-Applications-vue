<template>
  <div class="email-box">
    <EmailValidation></EmailValidation>
  </div>
</template>

<script>
import EmailValidation from './components/EmailValidation.vue';
export default {
  components: {
    EmailValidation
  },
  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style>
  .email-box {
    display: flex;
    justify-content: center;
  }
</style>
