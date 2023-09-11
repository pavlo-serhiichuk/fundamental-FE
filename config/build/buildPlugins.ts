import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import {BuildOptions} from './types/config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BundleAnalyzerPlugin} from 'webpack-bundle-analyzer'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import CopyPlugin from 'copy-webpack-plugin';
import CircularDependencyPlugin from 'circular-dependency-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
export function buildPlugins({path, isDev, apiUrl, project}: BuildOptions): webpack.WebpackPluginInstance[] {
  const isProd = !isDev
  const plugins = [
    new HTMLWebpackPlugin({
      template: path.html
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
      __API__: JSON.stringify(apiUrl),
      __PROJECT__: JSON.stringify(project)
    }),
    new CircularDependencyPlugin({
      exclude: /node-modules/,
      failOnError: true,
    }),
    new ForkTsCheckerWebpackPlugin({
      typescript: {
        diagnosticOptions: {
          semantic: true,
          syntactic: true,
        },
        mode: 'write-references'
      }
    })
  ]

  if (isDev) {
    plugins.push(new BundleAnalyzerPlugin({openAnalyzer: false}))
    plugins.push(new webpack.HotModuleReplacementPlugin())
    plugins.push(new ReactRefreshWebpackPlugin())
  }

  if(isProd) {
    plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css'
    }))
    plugins.push(new CopyPlugin({
      patterns: [
        { from: path.locales, to: path.buildLocales },
      ],
    }))
  }

  return plugins
}