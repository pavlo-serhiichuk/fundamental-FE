import webpack from 'webpack'

//для конфігурації файлів які виходять за рамки js
export function buildLoaders (): webpack.RuleSetRule[] {

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  }

  return [
    typescriptLoader,
  ]
}