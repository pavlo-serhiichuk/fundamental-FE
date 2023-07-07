import {rtkApi} from 'shared/api/rtkApi'
import {Article} from 'entities/Article'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getArticleRecomm: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit
        }
      })
    })
  })
})

export const useArticleRecomm = recommendationsApi.useGetArticleRecommQuery
