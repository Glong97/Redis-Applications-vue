<template>
    <div class="email-div">
        <!-- 提示 -->
        <div class="tips" :class="{passed: emailValidated}">
            <p>{{ tipsEmail }}</p>
        </div>
        <div class="emil-div-send">
            <label>请输入邮箱号：</label>
            <input class="input-style"  type="text" v-model="email" placeholder="请输入邮箱号" @keyup="onChange">
            <button class="btn-style" @click="sendCode">发送验证码</button>
        </div>
        <div class="email-div-valid">
            <label>请输入验证码：</label>
            <input class="input-style" type="text" v-model="code" placeholder="请输入验证码">
            <button class="btn-style" @click="validateCode">确定</button>
        </div>
        <div class="tips" :class="{passed: codeValidated}">
            <p>{{ tipsCode }}</p>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request';
    export default {
        data(){
            return {
                email: "",  // 邮箱信息
                code: "",   // 验证码信息
                emailValidated: false,  // 邮箱格式是否通过
                codeValidated: false,   // 验证码是否通过
                tipsEmail: "",   // 邮箱号提示信息
                tipsCode: "",   // 验证码提示信息
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
                    this.tipsEmail = "邮箱格式正确，可以发送验证码了！"
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
                        this.codeValidated = true;
                        this.tipsCode = response.data.message
                        console.log(response)
                    }else{
                        // 验证失败
                        this.codeValidated = false;
                        this.tipsCode = response.data.message
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
.email-div {
    margin-top: 300px;
    width: 500px;
    height: 300px;
    padding-bottom: 50px;
}
.emil-div-send {
    margin-bottom: 20px;
}

.btn-style {
    width: 100px;
    height: 30px;
    margin-left: 10px;
}

.input-style {
    height: 25px;
}

.tips {
    color: red;
}
.tips.passed{
    color: green;
}
</style>