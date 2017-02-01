import webpack from 'webpack';
import path from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
  debug: true,
  // devtool: 'cheap-module-eval-source-map', // TODO: cheap-module-eval-sourse-map gives a warning in Chrome 50.0.2661
  devtool: 'source-map',
  noInfo: false,
  entry: './src/index',
  target: 'web',
  output: {
    path: __dirname + '/dist', // Note: Physical files are only output by the production build task `npm run build`.
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.DefinePlugin(GLOBALS),
    new ExtractTextPlugin('styles.css'),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()

  ],
  module: {
     loaders: [
       {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']},
       {test: /(\.css)$/, loader: ExtractTextPlugin.extract("css?sourceMap")},
       {test: /\.(eot|woff|woff2|ttf|svg|)(\?\S*)?$/, loader: 'url?limit=100000&name=[name]-[hash].[ext]'},
       {test: /\.(png|jpg|jpeg|gif)$/, loader: "file-loader"},
       {test: /\.json$/, loader: "json"}
     ]
   }
};

