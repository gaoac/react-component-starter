const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
  mode: "development",
  entry: {
    app: "./example/src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
    compress: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'example/src/index.html',
      inject: 'body',
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
