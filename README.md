# 邮件验证-前端

后端项目地址：https://github.com/Glong97/Redis-Applications

## 前端项目运行和配置

### 环境

[NodeJS：v18.15.0](https://nodejs.cn/)

[npm：9.5.0](http://dev.nodejs.cn/learn/an-introduction-to-the-npm-package-manager)

[Vue-cli：3.2.13](https://cli.vuejs.org/zh/)

### 配置

```js
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/api': {
            // 此处的写法，目的是为了将 /api 替换成你所访问的服务器地址
            target: 'http://localhost:8204/api',
            // 允许跨域
            changeOrigin: true,
            ws: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    }
}
})
```

* target：修改为你后端服务的地址和端口，若后端服务在本机，并且端口号为8204则不用改

### 安装依赖

```
npm install
```

### 运行项目
```
npm run serve
```

