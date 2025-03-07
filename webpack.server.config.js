const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  mode: 'development',
  target: 'node',
  entry: './src/server/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'server.js',
  },
  externals: [nodeExternals()], // 排除 node_modules
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: {
          loader: 'ignore-loader',
        }
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};