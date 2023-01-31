import {BuildOptions} from './types/config'
import webpack from 'webpack'
import path from 'path'
import {buildLoaders} from './buildLoaders'
import {buildResolvers} from './buildResolvers'
import {buildPlugins} from './buildPlugins'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, path} = options
  return {
    mode: 'development',
    entry: path.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: path.build,
      clean: true
    },
    module: {rules: buildLoaders()},
    resolve: buildResolvers(),
    plugins: buildPlugins(path),
  }
}