import {EntityState} from '@reduxjs/toolkit'
import {Article, ArticleSortField, ArticleView} from 'entities/Article'
import {SortOrder} from 'shared/types'
import {ArticleType} from 'entities/Article/model/consts/consts'

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