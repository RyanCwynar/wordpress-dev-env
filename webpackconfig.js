const path = require('path');
const webpack = require('webpack');
module.exports = {
  mode: "production",
  entry: {
    bundle: __dirname + "/wp-content/themes/fueled-on-bacon/src/bundle_this.ts",
  },
  output: {
    path: __dirname + "/wp-content/themes/fueled-on-bacon/js",
    filename: "[name].js",
    library: '[name]',
    libraryTarget: 'umd'
  },
  resolve: {
      extensions: [".ts", ".tsx", ".js"]
  },
  devtool: 'source-map',
  externals: [/(jQuery)/],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        use: ["source-map-loader"],
        enforce: "pre"
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader'],
      },
    ]
  },
}