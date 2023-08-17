import {rtkApi} from '@/shared/api/rtkApi'
import {IArticleRating} from '@/entities/Rating'

interface GetArticleRatingArg {
  userId: string
  articleId: string
}

interface RateArticleArg {
  userId: string
  articleId: string
  rate: number
  feedback?: string
}

const articleRatingApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getArticleRating: build.query<IArticleRating[], GetArticleRatingArg>({
      query: ({userId, articleId}) => ({
        url: '/articles-ratings',
        params: {
          userId,
          articleId
        }
      })
    }),
    rateArticle: build.mutation<void, RateArticleArg>({
      query: (arg) => ({
        url: '/articles-ratings',
        method: 'POST',
        body: arg
      })
    }),

  })
})

export const useGetArticleRating = articleRatingApi.useGetArticleRatingQuery
export const useRateArticle = articleRatingApi.useRateArticleMutation
