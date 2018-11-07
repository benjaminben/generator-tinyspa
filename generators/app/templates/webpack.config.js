const path = require('path')
const args = require("minimist")(process.argv.slice(2))
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  entry: ['babel-polyfill', './src', './src/index.scss'],
  output: {
    path: __dirname + '/dist',
    filename: 'app.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ]
      },
      {
        test: /\.(css|sass|scss)$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 2,
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [
                require('autoprefixer')
              ],
              sourceMap: true
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  mode: args.e === "PROD" ? "production" : "development",
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'style.css',
    })
  ]
}
