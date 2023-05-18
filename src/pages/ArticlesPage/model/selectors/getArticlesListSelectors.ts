import {StateSchema} from 'app/providers/StoreProvider'
import {ArticleView} from 'entities/Article'

export const getArticlesListIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesListError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore