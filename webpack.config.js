const resolve = require("path").resolve;
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

console.log(process.env.NODE_ENV);

module.exports = {
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
    compress: true,
    port: 8080
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "base.css"
    }),
    new HtmlWebpackPlugin({
      template: resolve(__dirname, "src/index.html")
    })
  ]
};
