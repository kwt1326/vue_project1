const path = require('path');
const webpack = require('webpack');
const vueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  devtool: "eval", // 배포시에는 hidden-source-map 많이 사용
  devServer: {
    contentBase: path.join(__dirname, './public'),
    compress: true,
    open: true,
    hot: true,
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
      {
        test: /\.s[ac]ss$/i,
        loader: ['style-loader','css-loader','sass-loader']
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
    ]
  },
  plugins: [
      new vueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.HotModuleReplacementPlugin(),
  ],
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist')
  }
}