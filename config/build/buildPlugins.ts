import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {BuildPath} from './types/config'

export function buildPlugins(path: BuildPath): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: path.html
    }),
    new webpack.ProgressPlugin(),
  ]
}