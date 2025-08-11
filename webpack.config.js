const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = (env, argv) => {
  const isProd = argv.mode === 'production';
  const isReadable = env && env.readable;

  return {
    mode: isProd ? 'production' : 'development',
    entry: './src/main.js',
    output: {
      filename: isProd ? 'main.[contenthash].js' : 'main.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
    },
    devtool: isProd ? (isReadable ? 'source-map' : false) : 'source-map',
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
            },
          },
        },
        {
          test: /\.scss$/,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
            'sass-loader',
          ],
        },
        {
          test: /\.css$/i,
          use: [
            isProd ? MiniCssExtractPlugin.loader : 'style-loader',
            'css-loader',
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: isProd ? 'images/[name].[contenthash][ext]' : 'images/[name][ext]',
          },
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/i,
          type: 'asset/resource',
          generator: {
            filename: isProd ? 'fonts/[name].[contenthash][ext]' : 'fonts/[name][ext]',
          },
        },
      ],
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: isProd ? 'styles/style.[contenthash].css' : 'styles/style.css',
      }),
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'src/index.html'),
        filename: 'index.html',
        minify: isProd && !isReadable
          ? {
              collapseWhitespace: true,
              removeComments: true,
              removeRedundantAttributes: true,
              useShortDoctype: true,
            }
          : false,
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/asset'),
            to: 'asset',
            noErrorOnMissing: true,
          },
        ],
      }),
    ],
    devServer: {
      hot: true,
      liveReload: true,
      open: true,
    },
    optimization: isProd
      ? isReadable
        ? { minimize: false }
        : {
            minimize: true,
            splitChunks: { chunks: 'all' },
            runtimeChunk: 'single',
          }
      : {},
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
};
