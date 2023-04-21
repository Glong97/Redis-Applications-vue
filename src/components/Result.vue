<template>
    <div class="result-container">
      <div class="icon-container">
        <i :class="iconClass"></i>
      </div>
      <h2>{{ title }}</h2>
      <p>{{ message }}</p>
      <button @click="back">返回</button>
    </div>
</template>
    

<script>
export default {
    emits: ["backLogin"],
    props: {
        success: {
            type: Boolean,
            required: true
        }
    },
    computed: {
        iconClass() {
            return this.success ? 'fas fa-check-circle' : 'fas fa-times-circle'
        },
        title() {
            return this.success ? '验证成功' : '验证失败'
        },
        message() {
            return this.success ? '您已成功登录！' : '您输入的验证码有误，请重新输入。'
        }
    },
    methods: {
        back() {
            // 返回到登录界面
            this.$emit("backLogin");
        }
    }
}
</script>

<style scoped>
.result-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

.icon-container {
  font-size: 5rem;
  margin-bottom: 2rem;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

p {
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

button {
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  border-radius: 5px;
  border: none;
  background-color: #4CAF50;
  color: #fff;
  cursor: pointer;
}

button:hover {
  background-color: #3e8e41;
}

</style>