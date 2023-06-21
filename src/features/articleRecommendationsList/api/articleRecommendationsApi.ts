import {rtkApi} from 'shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: build => ({
    getArticleRecomm: build.query({
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
