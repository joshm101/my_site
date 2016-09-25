var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000', // WebpackDevServer host and port
    'webpack/hot/only-dev-server', // "only" prevents reload on syntax errors
    './src/index.js'
  ],
  output: { 
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: [/node_modules/, /flexboxgrid/],
      test: /\.js$/,
      loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
      include: [path.join(__dirname, 'src'),]
    },
    { test: /\.css$/,
      loader: 'style!css?modules',
      include: /flexboxgrid/
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css', '.scss', '.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};
