import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {BuildPath} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'

export function buildPlugins(path: BuildPath): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: path.html
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    })
  ]
}