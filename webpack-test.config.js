const CopyWebpackPlugin = require("copy-webpack-plugin");
const path = require('path');
const glob = require("glob");

module.exports = {
  entry: [].concat.apply([], [
    './spec/runner.js',
  ]),
  output: {
    path: path.resolve(__dirname, "test-dist"),
    filename: "test_index.js",
  },
  target: 'web',
  mode: "development",
  plugins: [
    new CopyWebpackPlugin(['test.html'])
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
      },
      {
        test: /spec\.js$/,
        use: 'mocha-loader',
        exclude: /node_modules/
      }
    ]
  },
  node: {
    fs: 'empty'
  },
};
