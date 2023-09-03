import {lazy, Suspense} from 'react'
import {Loader} from '@/shared/ui/Loader'
import {ArticleRatingProps} from '@/features/articleRating/ui/ArticleRating/ ArticleRating'

const ArticleRatingLazy = lazy(() => import('./ ArticleRating'))

export const ArticleRatingAsync = (props: ArticleRatingProps) => {
  return (
    <Suspense fallback={<Loader />}>
      <ArticleRatingLazy {...props}/>
    </Suspense>
  )
}