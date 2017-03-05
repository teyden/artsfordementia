module.exports = {
  entry: [
    './app/ui/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/static/js',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['react', 'es2015', 'stage-1']
      }
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: "eval-source-map",
  devServer: {
    historyApiFallback: true,
    contentBase: './app/templates/dev'
  }
};
