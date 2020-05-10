const path = require("path");
const merge = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const baseConfig = require('./webpack.main.js');

module.exports = merge.smart(baseConfig, {
  mode: 'production',
  output: {
    path: path.join(__dirname, "/build"),
    filename: "index_bundle.js"
  },
  performance: { hints: false },
  optimization: {
    minimizer: [new TerserPlugin(), new OptimizeCSSAssetsPlugin({})],
  },
    plugins: [
      new CleanWebpackPlugin(),
    ]
})
