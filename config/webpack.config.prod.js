const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  entry: {
    index: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  },
  plugins: [new CleanWebpackPlugin()]
});
