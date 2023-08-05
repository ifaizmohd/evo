const path = require("path");

module.exports = {
  entry: ["@babel/polyfill", "./src/index.tsx"],
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(tsx|ts)?$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
        options: {
          presets: [
            "@babel/preset-react",
            "@babel/preset-typescript",
            [
              "@babel/preset-env",
              { targets: { browsers: ["last 2 versions"] } },
            ],
          ],
        },
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".jsx", ".ts", ".js"],
  },
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "public"),
  },
};
