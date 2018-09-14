
const path = require('path');

module.exports = {
  entry: './src/script/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: '/node_modules/', use: 'babel-loader' }
    ]
  }

};