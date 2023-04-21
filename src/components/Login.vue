<template>
    <div class="login-container">
        <h2>邮箱验证</h2>
        <div class="form-group">
            <label for="email">邮箱</label>
            <input type="email" id="email" v-model="email" placeholder="请输入邮箱" @keyup="onChange" :disabled="sendSuccess" required>
            <div class="tips" :class="{passed: emailValidated}">
              {{ tipsEmail }}
            </div>
        </div>
        <div class="form-group">
            <label for="password">验证码</label>
            <input type="text" id="code" v-model="code" placeholder="请输入验证码">
            <button @click="sendCode" :disabled="sendSuccess">发送验证码</button>
        </div>
        <button @click="validateCode">确定</button>
    </div>
</template>

<script>
import request from '@/utils/request';
    export default {
      emits: ["showResult"],
      data(){
          return {
              email: "",  // 邮箱信息
              code: "",   // 验证码信息
              emailValidated: false,  // 邮箱格式是否通过
              tipsEmail: "",   // 邮箱号提示信息
              sendSuccess: false // 发送是否成功
          }
      },
      methods: {
          // 发送验证码
          sendCode(){
              // 邮箱格式不正确则返回
              if(!this.emailValidated){
                  console.log("邮箱格式错误！")
                  return;
              }

              const urlEmail = "/email/send/" + this.email;
              console.log(urlEmail);
              // 发送Get请求
              request({
                  method: 'Get',
                  url: urlEmail
              })
              request.get(urlEmail)
              .then((response) => {
                  // 发送成功
                  if(response.data.code == 200){
                      this.tipsEmail = response.data.message
                      console.log(response)
                      this.sendSuccess = true;
                  }else{
                      //发送失败
                      this.sendSuccess = false;
                      this.tipsEmail = response.data.message
                  }
                  
              })
              .catch((error) => {
                  // 处理错误情况
                  console.log(error);
              })
          },
          // 邮箱格式验证
          onChange(){
              // 验证邮箱格式
              var verify = /^\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/; //正则表达式
              this.emailValidated = verify.test(this.email);
              if(!this.emailValidated){
                  this.tipsEmail = "请输入正确的邮箱"
              }else{
                  this.tipsEmail = "邮箱格式正确！"
              }
          },
          // 验证邮箱
          validateCode(){
              // 邮件未送成功
              if(!this.sendSuccess){
                  console.log("邮件未发送成功！")
                  return;
              }
              const urlCode = "/email/validate/" + this.email + "/" + this.code;
              console.log(urlCode);
              // 发送get请求
              request({
                  method: 'Get',
                  url: urlCode
              })
              .then((response) => {
                  // 验证成功
                  if(response.data.code == 200){
                      this.$emit("showResult", true)
                      console.log(response)
                  }else{
                      // 验证失败
                      this.$emit("showResult", false)
                  }
                  
              })
              .catch((error) => {
                  // 处理错误情况
                  console.log(error);
              })
          }
      }
    }
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
}

label {
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
  text-align: left;
}

input[type="email"],
input[type="text"] {
  padding: 0.5rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 1.2rem;
  margin-bottom: 15px;
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.tips {
  color: red;
}

.tips.passed{
    color: green;
}

</style>