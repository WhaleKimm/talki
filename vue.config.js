const path = require('path')

module.exports = {
  transpileDependencies: [], // 빈 배열 또는 필요한 종속성을 포함한 배열로 수정
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'), // '@' 별칭을 'src' 디렉토리에 매핑합니다.
      },
    },
  },
}
