import {StateSchema} from '@/app/providers/StoreProvider'
import {ArticleSortField, ArticleView, ArticleType} from '@/entities/Article/model/consts/consts'
import {buildSelector} from '@/shared/lib/store'

export const getArticlesListIsLoading = (state: StateSchema) => state.articlesPage?.isLoading || false
export const getArticlesListError = (state: StateSchema) => state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) => state.articlesPage?.view || ArticleView.SMALL
export const getArticlesPageNum = (state: StateSchema) => state.articlesPage?.page || 1
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9
export const getArticlesPageHasMore = (state: StateSchema) => state.articlesPage?.hasMore
export const getArticlesPageSort = (state: StateSchema) => state.articlesPage?.sort ?? ArticleSortField.CREATED
export const getArticlesPageOrder = (state: StateSchema) => state.articlesPage?.order ?? 'asc'
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.search ?? ''
export const getArticlesPageType = (state: StateSchema) => state.articlesPage?.type ?? ArticleType.ALL
export const getArticlesPage_Inited = (state: StateSchema) => state.articlesPage?._inited

export const [getArticleItemById] = buildSelector(
  (state, id: string) => state.articlesPage?.entities[id]
)