const path = require('path');
process.env.NODE_ENV = 'development';

const HtmlWebPackPlugin = require("html-webpack-plugin");

// process.env.NODE_ENV = production;
config = {
  entry: "./src/js/common.js",
  output: {
    path:  path.join(__dirname, "../dist"),
    filename: "./js/bundle.js",
    chunkFilename: '[name].js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000
  },
  module: {
    rules: [
      {   
        test: /\.sass$/,
        use: [{
            loader: "style-loader" // creates style nodes from JS strings
        }, {
            loader: "css-loader" // translates CSS into CommonJS
        }, {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              includePaths: ["src/style.ssas", "dist/style.css"]
            }
        },
        ]
      },    
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader",
            options: { minimize: true }
          }
        ]
      }
    ,
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
      // { test: /\.ts$/, use: "ts-loader" },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: "babel-loader"
      //   }
      // }
    ]},
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
  ],
}

module.exports = config;