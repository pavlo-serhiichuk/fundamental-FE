import {BuildOptions} from '../types/config'

export function buildBabelLoader(options: BuildOptions) {
  return {
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
          options.isDev && require.resolve('react-refresh/babel'),
        ].filter(Boolean)
      }
    }
  }
}