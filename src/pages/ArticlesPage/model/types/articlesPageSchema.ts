import {EntityState} from '@reduxjs/toolkit'
import {Article, ArticleSortField, ArticleView, ArticleType} from '@/entities/Article'
import {SortOrder} from '@/shared/types'

export interface ArticlesPageSchema extends EntityState<Article>{
  isLoading?: boolean
  //pagination
  error?: string
  page: number
  limit?: number
  hasMore: boolean
  //filters
  view: ArticleView
  order: SortOrder
  sort: ArticleSortField
  search: string
  _inited: boolean
  type: ArticleType
}