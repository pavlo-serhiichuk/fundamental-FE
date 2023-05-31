import {EntityState} from '@reduxjs/toolkit'
import {Comment} from 'entities/Comment'
import {ArticleDetailsCommentsSchema} from './ArticleDetailsCommentsSchema'
import {ArticleDetailsPageRecSchema} from './ArticleDetailsPageRecSchema'

export interface ArticleDetailsPageSchema extends EntityState<Comment> {
  comments: ArticleDetailsCommentsSchema,
  recommendations: ArticleDetailsPageRecSchema
}