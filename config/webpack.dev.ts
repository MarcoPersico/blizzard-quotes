import { Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const htmlPlugin: HTMLWebpackPlugin = new HTMLWebpackPlugin({
  filename: 'index.html',
  template: './src/index.html',
  favicon: './src/favicon.ico',
});

const config: Configuration = {
  mode: 'development',
  entry: './src/index.tsx',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', 'jsx'],
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
      { test: /\.(webp|ttf|png|ico|css)$/, loader: 'file-loader' },
    ],
  },
  plugins: [htmlPlugin],
};

export default config;
