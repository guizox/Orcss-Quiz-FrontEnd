/* eslint-disable */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["syntax-dynamic-import"]
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
    hot: true,
    compress: true,
    port: 3000
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
};
