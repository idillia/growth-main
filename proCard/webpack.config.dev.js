import webpack from 'webpack';
import path from 'path';


export default {
  debug: true,
  // devtool: 'cheap-module-eval-source-map', // TODO: cheap-module-eval-sourse-map gives a warning in Chrome 50.0.2661
  devtool: 'eval-source-map',
  noInfo: false,
  entry: [
    'eventsource-polyfill', // necessary for hot reloading with IE
    'webpack-hot-middleware/client?reload=true', //note that it reloads the page if hot module reloading fails.
    './src/index'
  ],
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './src'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
     loaders: [
       {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
       {test: /(\.css)$/, loaders: ['style', 'css']},
       {test: /\.(eot|woff|woff2|ttf|svg)(\?\S*)?$/, loader: 'url?limit=100000&name=[name]-[hash].[ext]'},
       {test: /\.(png|jpg|jpeg|gif)$/, loader: "file-loader"},
       {test: /\.less$/, loader: "style!css!less"},
       {test: /\.json$/, loader: "json"}
     ]
   }
};