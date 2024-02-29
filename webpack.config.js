const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode: 'production', // 或者 'development'
  entry: './src/vconsole/index.ts', // 入口文件
  output: {
    filename: 'bundle.js', // 输出文件名
    path: path.resolve(__dirname, 'dist'), // 输出目录
    library: 'vconsole', // 将 vconsole 作为全局变量导出
    libraryTarget: 'umd', // 设置打包目标为 UMD 格式
    globalObject: 'this' // 兼容不同环境下的全局对象
  },
  resolve: {
    extensions: ['.ts', '.js'], // 支持的文件扩展名
    alias: {
      '@': path.resolve(__dirname, 'src') // 设置模块别名
    }
  },
  module: {
    rules: [
      {
        test: /\.ts$/, // 匹配以 .ts 结尾的文件
        use: 'ts-loader', // 使用 ts-loader 来处理 TypeScript 文件
        exclude: /node_modules/ // 排除 node_modules 目录
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(), // 清理输出目录
    new HtmlWebpackPlugin({
      // 生成 HTML 文件
      template: './index.html', // 指定 HTML 模板文件
      filename: 'index.html', // 输出文件名
      inject: 'body' // 将 bundle.js 注入到 body 标签底部
    })
  ]
}
