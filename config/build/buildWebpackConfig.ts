import {BuildOptions} from './types/config'
import webpack from 'webpack'
import {buildLoaders} from './buildLoaders'
import {buildResolvers} from './buildResolvers'
import {buildPlugins} from './buildPlugins'
import {buildDevServer} from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, path, isDev} = options
  return {
    mode,
    entry: path.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: path.build,
      clean: true
    },
    module: {rules: buildLoaders(options)},
    resolve: buildResolvers(options),
    plugins: buildPlugins(path),
    devtool: isDev ? 'inline-source-map': undefined,
    devServer: isDev ? buildDevServer(options): undefined
  }
}