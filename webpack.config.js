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
        ]
      },
    ]
  }
};