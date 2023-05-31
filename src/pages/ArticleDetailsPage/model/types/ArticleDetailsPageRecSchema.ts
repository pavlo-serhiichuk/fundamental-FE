import {EntityState} from '@reduxjs/toolkit'
import {Comment} from 'entities/Comment'
import {Article} from 'entities/Article'

export interface ArticleDetailsPageRecSchema extends EntityState<Article>{
  isLoading?: boolean
  error?: string
}