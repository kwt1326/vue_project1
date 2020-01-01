const path = require('path');
const vueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
  mode: "development",
  devtool: "eval", // 배포시에는 hidden-source-map 많이 사용
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    port: 8080
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  entry: {
    app: path.join(__dirname, 'main.js'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
    ]
  },
  plugins: [
      new vueLoaderPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  }
}