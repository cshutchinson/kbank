module.exports = {
  entry: [
    './public/src/index.js'
  ],
  output: {
    path: __dirname + '/public/',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {exclude: /node_modules/, loader: 'babel'},
      {test: /\.css$/, loader: "style-loader!css-loader" },
      {test: /\.jpg$/, loader: "file-loader"}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './public'
  }
};
