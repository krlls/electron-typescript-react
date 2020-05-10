const path = require("path");
const merge = require('webpack-merge');

const baseConfig = require('./webpack.main.js');

module.exports = merge.smart(baseConfig, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, '/build'),
    compress: true,
    port: 3000
  },
})
