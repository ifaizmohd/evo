const path = require("path");
const webpackNodeExternals = require("webpack-node-externals");

module.exports = {
  // entry point of webpack
  entry: ["@babel/polyfill", "./src/index.ts"],
  target: "node",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
        use: "ts-loader",
        exclude: "/node_modules/",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx"],
  },
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  externals: [webpackNodeExternals()],
};
