module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000',
        changeOrigin: true
        // pathRewrite: {
        //     '^/api': ""
        // }
      }
    },
    disableHostCheck: false // 외부 접속 허용
  },
  outputDir: '../core/public' // ② 배포 파일의 위치를 지정
}
