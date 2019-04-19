const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');


module.exports = {
  entry: [
    "./bootstrap.ts"
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
  resolve: {
    extensions: [".js", ".ts", '.wasm']
  },
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
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        test: /\.wasm$/,
        type: "webassembly/experimental"
      }
    ]
  }
};