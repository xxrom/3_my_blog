const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch', // hot loader
    './src/app.jsx', // in file
  ],
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'] // extensions
  },
  watchOptions: {
    aggregateTimeout: 300, // watch
    poll: 1000 // watch
  },
  module: {
    rules: [
      { // babel
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin() // hot loader
  ],
  devServer: {
    contentBase: './dist',
    hot: true // hot loader
  }
};