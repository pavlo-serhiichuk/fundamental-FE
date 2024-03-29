import webpack from 'webpack'
import {BuildOptions} from './types/config'
import {buildCssLoader} from './loaders/buildCssLoader'
import {buildBabelLoader} from './loaders/buildBabelLoader'

//для конфігурації файлів які виходять за рамки js
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {

  const codeBabelLoader = buildBabelLoader({...options, isTsx: false})
  const tsxCodeBabelLoader = buildBabelLoader({...options, isTsx: true})

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
    use: [{
      loader: '@svgr/webpack',
      options: {
        icon: true,
        svgoConfig: {
          plugins: [
            {
              name: 'convertColors',
              params: {
                currentColor: true
              }
            }
          ]
        }
      }
    }],
  }

  const cssLoader = buildCssLoader(options.isDev)

  //If we use ts we don't need babel-loader
  // const typescriptLoader = {
  //   test: /\.tsx?$/,
  //   use: 'ts-loader',
  //   exclude: /node_modules/,
  // }

  return [
    fileLoader,
    svgLoader,
    codeBabelLoader,
    tsxCodeBabelLoader,
    // babelLoader,
    // typescriptLoader,
    cssLoader
  ]
}