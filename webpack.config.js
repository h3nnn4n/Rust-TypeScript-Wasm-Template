const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');


module.exports = {
  entry: [
    "core-js/modules/es6.promise",
    "core-js/modules/es6.array.iterator",
    "./bootstrap.js"
  ],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bootstrap.js",
  },
  target: 'web',
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['index.html'])
  ],
  module: {
    rules: [{
        include: [
          path.resolve(__dirname, "js")
        ],
      },
      {
        test: /\.js$/,
        exclude: ["/node_modules/"],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-syntax-dynamic-import']
          }
        }
      }
    ]
  }
};