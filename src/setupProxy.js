const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        createProxyMiddleware('/tistory', {
            target: 'https://8ugust-dev.tistory.com',
            pathRewrite: { 
                '^/tistory':'' 
            },
            changeOrigin: true,
        })
    );
};