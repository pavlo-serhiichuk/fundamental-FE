import {lazy, Suspense} from 'react'
import {Loader} from '@/shared/ui/Loader/Loader'
import {ProfileRatingProps} from './ProfileRating'

const ArticleRatingLazy = lazy(() => import('./ProfileRating'))

export const ProfileRatingAsync = (props: ProfileRatingProps) => {
  return (
    <Suspense fallback={<Loader />}>
  <ArticleRatingLazy {...props}/>
  </Suspense>
)
}