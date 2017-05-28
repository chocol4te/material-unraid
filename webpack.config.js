const path = require('path');
var CompressionPlugin = require("compression-webpack-plugin");
var BundleAnalyzerPlugin = require("webpack-bundle-analyzer");
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/, loader: ['style-loader', 'css-loader'], exclude: /node_modules/ },
    ]
  },
  
  plugins: [
    new webpack.DefinePlugin({
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }}),
    
    new webpack.optimize.AggressiveMergingPlugin(),
    
    new CompressionPlugin({
                        asset: "[path].gz[query]",
                        algorithm: "gzip",
                        test: /\.js$|\.css$|\.html$/,
                        threshold: 10240,
                        minRatio: 0.8
    }),
  ],
  
}
