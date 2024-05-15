// const { defineConfig } = require('@vue/cli-service')

// module.exports = ({
//   transpileDependencies: true,
//   devServer: {
//     proxy: {
//       '/api': {
//         target: 'http://localhost:8000', // Địa chỉ của máy chủ backend
//         changeOrigin: true,
//         pathRewrite: { '^/api': '' },
//       },
//     },
//   },
// });
module.exports = {
  devServer: {
    proxy: 'http://localhost:8000',
  },
}

