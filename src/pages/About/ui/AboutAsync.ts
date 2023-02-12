import {lazy} from 'react'

export const AboutAsync = lazy(() => import('./About'))
  // new Promise(res => {
  // @ts-ignore
  // setTimeout(() => res(), 500)
// }))