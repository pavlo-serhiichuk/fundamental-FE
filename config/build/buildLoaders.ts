import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import {BuildOptions} from './types/config'

//для конфігурації файлів які виходять за рамки js
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,  // Creates `style` nodes from JS strings
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:2]'
              : '[hash:base64:8]'
          }
        },
      },    // Translates CSS into CommonJS
      'sass-loader',   // Compiles Sass to CSS
    ],
  }

  //If we use ts we don't need babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
    cssLoader
  ]
}