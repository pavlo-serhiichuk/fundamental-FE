import {StateSchema} from 'app/providers/StoreProvider'
import {ArticleView} from 'entities/Article'

export const getArticlesListIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesListError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL