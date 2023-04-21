const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    proxy: {
        '/api': {
            // 此处的写法，目的是为了 将 /api 替换成你所访问的服务器地址
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
