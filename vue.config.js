module.exports = {
    devServer: {
        proxy: {
            '/backend': {
                target: 'http://140.143.210.90:9999',
                changeOrigin: true,
                pathRewrite: {
                    // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
                    '^/backend': '/'
                }
            },
            '/backend/magic/web/console': {
                target: 'ws://140.143.210.90:9999',
                ws:true,
                changeOrigin: true,
                pathRewrite: {
                    // 替换target中的请求地址，也就是说以后你在请求http://api.jisuapi.com/XXXXX这个地址的时候直接写成/api即可
                    '^/backend': '/'
                }
            }
        }
    }
}