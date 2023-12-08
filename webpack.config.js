const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require("webpack");

module.exports = [
  {
    entry: './src/index.tsx',
    mode: 'development',
    target: 'web',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'index.js',
      clean: true
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx', '.jsx'],
    },
    plugins: [new HtmlWebpackPlugin({
      template: "./src/index.html"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          exclude: /node_modules/,
          use: "ts-loader",
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react',
                '@babel/preset-typescript',
              ],
            },
          },
        },
        {
          test: /\.css$/,
          exclude: /node_modules/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|svg|ttf)$/i,
          type: "asset/resource",
        }
      ],
    },
    devServer: {
      static: './dist',
     hot: true,
    },
  },
  
];
