// webpack.config.js

const path = require('path');

module.exports = {
  entry: './src/index.js', // 指定库的入口文件
  output: {
    path: path.resolve(__dirname, 'dist'), // 输出目录
    filename: 'main.js', // 输出的库文件名
    libraryTarget: 'umd', // 将库导出为 UMD 格式
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader', // 使用 Babel 处理 ES6+ 代码
      },
    ],
  },
};
