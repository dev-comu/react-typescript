const path = require("path");

const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlWebpackPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
});

module.exports = {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  output: {
    path: path.resolve("dist"),
    filename: "[name]-[hash].js",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
    alias: {},
  },
  watchOptions: {
    poll: true,
    ignored: /node_modules/,
  },
  plugins: [htmlWebpackPlugin],
  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "eslint-loader",
            options: {
              formatter: require("eslint/lib/cli-engine/formatters/stylish"),
            },
          },
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            "@babel/preset-env",
            "@babel/preset-react",
            "@babel/preset-typescript",
          ],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
};
