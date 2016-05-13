var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

module.exports = {
  context: path.join(__dirname, "src"),
  devtool: debug ? "inline-sourcemap" : null,
  entry: './js/client.js',
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
        }
      },
      {
          test: /\.scss$/,
          loaders: ['style', 'css', 'sass']
      },

      // https://github.com/theodybrothers/webpack-bootstrap
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      // the url-loader uses DataUrls. 
      // the file-loader emits files. 
      { test: /\.(woff|woff2)($|\?)/,  loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf($|\?)/,    loader: "file-loader" },
      { test: /\.eot($|\?)/,    loader: "file-loader" },
      { test: /\.svg($|\?)/,    loader: "file-loader" }
    ],

    // Shut off warnings about using pre-built javascript files
    // as Quill.js unfortunately ships one as its `main`.
    // noParse: /node_modules\/quill\/dist/

  },
  output: {
    path: __dirname + "/src/",
    filename: "client.min.js"
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],
};
