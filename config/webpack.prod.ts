import * as path from 'path';
import * as webpack from 'webpack';
import HtmlWebPackPlugin from 'html-webpack-plugin';

const htmlPlugin: HtmlWebPackPlugin = new HtmlWebPackPlugin({
  filename: 'index.html',
  template: './src/index.html',
  favicon: './src/favicon.ico',
});

const envPlugin = new webpack.EnvironmentPlugin({ NODE_ENV: 'production' });

const config: webpack.Configuration = {
  mode: 'production',
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, '..', 'dist'),
    filename: 'build.js',
  },
  resolve: {
    // Add '.ts' and '.tsx' as resolvable extensions.
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.webp$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/images',
        },
      },
      {
        test: /\.ttf$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'static/fonts/',
        },
      },
      {
        test: /\.ico$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  },
  plugins: [htmlPlugin, envPlugin],
};

export default config;
