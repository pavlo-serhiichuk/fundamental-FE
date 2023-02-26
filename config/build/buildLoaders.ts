import webpack from 'webpack'
import {BuildOptions} from './types/config'
import {buildCssLoader} from './loaders/buildCssLoader'

//для конфігурації файлів які виходять за рамки js
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const babelLoader =  {
    test: /\.m?(js|ts|tsx)s$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          "i18next-extract",
          {"nsSeparator": '~'},
          {
            locales: ['ua', 'en'],
            keyAsDefaultValue: true
          },
        ]
      }
    }
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff|woff2)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  }

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  }

  const cssLoader = buildCssLoader(options.isDev)

  //If we use ts we don't need babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    fileLoader,
    svgLoader,
    babelLoader,
    typescriptLoader,
    cssLoader
  ]
}