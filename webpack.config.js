const HtmlWebPackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  plugins: [
    new HtmlWebPackPlugin({
      chunks: ['index'],
      template: 'src/index.html',
      filename: 'index.html',
      hash: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'public/styles/[name].css',
      chunkFilename: 'public/styles/[id].css',
    }),
    new ESLintPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/pages/shared/css', to: 'public/styles' },
        { from: 'src/config', to: 'config' },
      ],
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    clean: true,
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|mjs|jsx|ts|tsx|css|eot|woff|woff2|ttf)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'svg-url-loader',
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        // config for sass compilation
        test: /\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        // config for sass compilation
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'public/images',
              name: '[name].[ext]',
            },
          },
        ],
      },
      {
        test: /\.(eot|woff|woff2|ttf)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'public/fonts',
              name: '[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
  },
  resolve: {
    extensions: [
      '.js',
      '.jsx',
      '.ts',
      '.tsx',
      '.svg',
      '.css',
      '.eot',
      '.woff',
      'woff2',
      'ttf',
    ],
  },
};
