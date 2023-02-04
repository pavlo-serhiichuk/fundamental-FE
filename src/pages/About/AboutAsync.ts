import {lazy} from 'react'

const AboutAsync = lazy(() => new Promise(res => {
  // @ts-ignore
  setTimeout(() => res(import('./About')), 500)
}))

export default AboutAsync