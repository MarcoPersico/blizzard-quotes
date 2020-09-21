import { Configuration } from 'webpack';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const htmlPlugin: HTMLWebpackPlugin = new HTMLWebpackPlugin({
  template: './src/index.html',
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
