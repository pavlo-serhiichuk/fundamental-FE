import {ResolveOptions} from 'webpack'
import {BuildOptions} from './types/config'

export function buildResolvers (options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'], // import without file extensions
    preferAbsolute: true,
    modules: [options.path.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {} // could be empty with preferedAbsolute & modules
  }
}