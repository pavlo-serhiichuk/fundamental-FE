import {BuildOptions} from './types/config'
import {Configuration} from 'webpack'
import {buildLoaders} from './buildLoaders'
import {buildResolvers} from './buildResolvers'
import {buildPlugins} from './buildPlugins'
import {buildDevServer} from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const {mode, path, isDev} = options
  return {
    mode,
    entry: path.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: path.build,
      clean: true,
      publicPath: '/'
    },
    module: {rules: buildLoaders(options)},
    resolve: buildResolvers(options),
    plugins: buildPlugins(options),
    devtool: isDev ? 'inline-source-map': undefined,
    devServer: isDev ? buildDevServer(options): undefined
  }
}