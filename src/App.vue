<template>
  <div>
    <component :is="curruntPage"
               :success="isSuccessed" 
               @showResult="showResult"
               @backLogin="backLogin"></component>
  </div>
</template>

<script>
import Login from './components/Login.vue';
import Result from './components/Result.vue';
export default {
  components: {
    Login,
    Result
  },
  data() {
    return {
      curruntPage: "Login",
      isSuccessed: true
    }
  },
  methods: {
    showResult(result){
      console.log(result)
      this.isSuccessed = result;
      this.curruntPage = "Result"
    },
    backLogin(){
      this.curruntPage = "Login"
    }
  }
}
</script>

<style>

</style>
