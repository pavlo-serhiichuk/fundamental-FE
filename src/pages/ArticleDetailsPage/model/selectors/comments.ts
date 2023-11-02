import {StateSchema} from '@/app/providers/StoreProvider'

export const getArticleCommentsIsLoading = (state:StateSchema) => state.articleDetailsPageComments?.isLoading
export const getArticleCommentsError = (state: StateSchema) => state.articleDetailsPageComments?.error