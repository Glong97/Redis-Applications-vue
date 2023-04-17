<template>
    <div class="email-div">
        <div class="emil-div-send">
            <label>请输入邮箱号：</label>
            <input class="input-style" id="email-input" name="email-input" type="text">
            <button class="btn-style">发送验证码</button>
        </div>
        <div class="email-div-valid">
            <label>请输入验证码：</label>
            <input class="input-style" id="code-input" name="code-input" type="text">
            <button class="btn-style">确定</button>
        </div>
    </div>
</template>

<script>
    export default {
        
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