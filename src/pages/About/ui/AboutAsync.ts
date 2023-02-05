import {lazy} from 'react'

export const AboutAsync = lazy(() => new Promise(res => {
  // @ts-ignore
  setTimeout(() => res(import('./About')), 500)
}))