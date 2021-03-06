const resolve = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const HtmlWebpackHarddiskPlugin = require("html-webpack-harddisk-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV,
  entry: resolve(__dirname, "src/index.js"),
  output: {
    path: resolve(__dirname, "dist"),
    filename: "main.js"
  },
  resolve: {
    extensions: [".js", ".less"]
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      },
      {
        test: /\.(less|css)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === "development"
            }
          },
          "css-loader",
          "less-loader"
        ]
      }
    ]
  },
  devServer: {
    contentBase: resolve(__dirname, "dist"),
    watchContentBase: true,
    compress: true,
    port: 8080
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "assets/styles/base.css"
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src/index.html"),
      alwaysWriteToDisk: true,
      hash: true
    }),
    new HtmlWebpackHarddiskPlugin(),
    new CopyWebpackPlugin([
      {
        from: resolve(__dirname, "src/assets"),
        to: resolve(__dirname, "dist/assets"),
        ignore: ["*.less"]
      }
    ])
  ]
};
