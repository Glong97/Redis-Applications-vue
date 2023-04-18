<template>
    <div class="email-div">
        <div class="emil-div-send">
            <label>请输入邮箱号：</label>
            <input class="input-style" id="email-input" name="email-input" type="text" v-model="email" placeholder="请输入邮箱号">
            <button class="btn-style" @click="sendCode">发送验证码</button>
        </div>
        <div class="email-div-valid">
            <label>请输入验证码：</label>
            <input class="input-style" id="code-input" name="code-input" type="text" placeholder="请输入验证码">
            <button class="btn-style">确定</button>
        </div>
    </div>
</template>

<script>
import request from '@/utils/request';
    export default {
        data(){
            return {
                email: ""
            }
        },
        methods: {
            sendCode(){
                const urlEmail = "/email/send/" + this.email;
                console.log(urlEmail);
                request({
                    method: 'Get',
                    url: urlEmail
                })
                request.get(urlEmail)
                .then(function (response){
                    console.log(response)
                })
                .catch(function (error) {
                    // 处理错误情况
                    console.log("error");
                })
                .then(function () {
                    // 总是会执行
                });
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
</style>