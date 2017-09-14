const path = require("path")
const webpack = require("webpack")
const HtmlWebPackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

module.exports = {
  entry:{
    index:'./src/index.js'
  },
  output:{
    filename:"bundle.js",
    path:path.resolve(__dirname,'dist')
  },
  devtool: 'inline-source-map',
  devServer: {
    hot:true,
    contentBase: path.join(__dirname, "dist"),
    port:8888
    // historyApiFallback: true,
    // inline: true
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|svg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test:/\.js$/,
        use:[
          "babel-loader"
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebPackPlugin({
      title: 'ES6_'
    })
  ]
}
