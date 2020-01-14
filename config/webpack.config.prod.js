const path = require("path");
const merge = require("webpack-merge");
const common = require("./webpack.config.common.js");

module.exports = merge(common, {
  mode: "production",
  entry: {
    app: "./src/index.js"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "../dist")
  }
});
