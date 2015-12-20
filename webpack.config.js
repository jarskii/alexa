const ejs = require('ejs');
const webpack = require('webpack');
const ReactToHtmlPlugin = require('react-to-html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const autoPrefixerCfg = JSON.stringify({
    browsers: [
        "last 1 versions",
        "IE 11",
        "IE 10",
        "IE 9",
        "IE 8",
        "Opera 12.1"
    ]
});

module.exports = {

  entry: './views/index.js',

  output: {
    filename: 'assets/[hash].js',
    path: 'dist',
    library: 'MyComponentExample',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      },
      {
        test: /\.styl$/,
        loader:  ExtractTextPlugin.extract('style', 'css!autoprefixer?' + autoPrefixerCfg + '!stylus')
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'component-css?ext=styl!babel',

      },
      {
        test: /\.(woff|woff2|ttf|eot|svg|png|gif|ico|jpg)($|\?)/,
        loader: 'file-loader?name=' + '[name].[ext]'
      }
    ]
  },
  watch: true,
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.DefinePlugin({ "global.GENTLY": false }),
    new ExtractTextPlugin('assets/bundle.css', {
        allChunks: true
    }),
    new ReactToHtmlPlugin('index.html', 'main', {
        template: function(data) {
            return ejs.render(
              `
              <!doctype html>
              <html>
                <head>
                  <meta charset="utf-8" />
                  <title>Alexa</title>
                  <link rel="stylesheet" href="assets/bundle.css" />
                </head>
                <body>
                  <div id="app"><%- html %></div>
                  <% for (var chunk in assets) { -%>
                    <script src="<%= assets[chunk] %>"></script>
                  <% } -%>
                </body>
              </html>
              `,data);
        }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({comments: /a^/, compress: {warnings: false}})
  ]
};
