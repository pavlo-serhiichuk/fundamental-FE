import {StateSchema} from '@/app/providers/StoreProvider'

export const getArticleRecIsLoading = (state: StateSchema) => {
  return state.articleDetailsPageRec?.isLoading || false
}

export const getArticleRecError = (state: StateSchema) => {
  return state.articleDetailsPageRec?.error
}