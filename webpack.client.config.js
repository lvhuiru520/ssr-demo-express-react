const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.less$/,
        use: [
          'style-loader', // 将样式注入 DOM
          'css-loader',   // 解析 CSS
          {
            loader: 'less-loader',
            options: {
              lessOptions: {
                javascriptEnabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader', // 将样式注入 DOM
          'css-loader', // 解析 CSS
        ]
      }
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};