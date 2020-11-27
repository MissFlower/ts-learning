/*
 * @Description: 
 * @Version: 0.1.0
 * @Author: AiDongYang
 * @Date: 2020-11-20 18:55:55
 * @LastEditors: AiDongYang
 * @LastEditTime: 2020-11-25 20:53:06
 */
const { resolve, join } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
module.exports = {
  entry: './src/index.ts',
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: {
        loader: 'ts-loader'
      },
      exclude: /node_modules/
    }]
  },
  devtool:  process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  devServer: {
    contentBase: './dist',
    // stats: 'error-only',
    compress: false, // 不启动压缩
    host: 'localhost',
    port: 9000,
    open: false
  },
  plugins: [
    new CleanWebpackPlugin({
      cleanOneBeforeBuildPatterns: ['../dist']
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, '../src/template/index.html')
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: join(__dirname, '../src/example/global.js'),
          to: resolve(__dirname, '../dist')
        }
      ]
    })
  ]
}
