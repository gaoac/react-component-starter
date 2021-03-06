const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
  devtool: "cheap-module-eval-source-map",
  mode: "development",
  entry: {
    index: "./example/src/index.js"
  },
  output: {
    filename: "js/[name].[hash:8].bundle.js",
    path: path.resolve(__dirname, "../dist")
  },
  devServer: {
    contentBase: path.resolve(__dirname, "dist"),
    open: true,
    port: 9000,
    compress: true,
    hot: true
  },
  module: {
    rules: [
      {
        test: /\.(css|less)$/,
        use: ["style-loader", "css-loader", "postcss-loader", "less-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "example/src/index.html",
      inject: "body",
      hash: false
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
});
