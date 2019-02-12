/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["@babel/react", "@babel/preset-env"],
          plugins: ["@babel/proposal-class-properties"]
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  resolve: {
    extensions: [".js"]
  },

  output: {
    filename: "bundle-[name].js",
    path: path.resolve(__dirname, "public", "scripts"),
    publicPath: "scripts/"
  },

  devServer: {
    contentBase: path.join(__dirname, "public"),
    historyApiFallback: true,
    compress: true,
    port: 3000
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
