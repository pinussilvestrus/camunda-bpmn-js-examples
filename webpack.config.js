module.exports = {
  mode: 'development',
  entry: {
    base: './src/base.js',
    ['camunda-cloud']: './src/camunda-cloud.js',
    ['camunda-platform']: './src/camunda-platform.js'
  },
  output: {
    filename: '[name].js',
    path: __dirname + '/public'  +'/dist'
  },
  module: {
    rules: [
      {
        test: /\.(bpmn)$/,
        use: 'raw-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      },
    ]
  }
};