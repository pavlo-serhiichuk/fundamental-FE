import {combineReducers} from '@reduxjs/toolkit'
import {ArticleDetailsPageSchema} from '@/pages/ArticleDetailsPage'
import {articleDetailsPageRecReducer} from '@/pages/ArticleDetailsPage/model/slices/ArticleDetailsPageRecSlice'
import {articleDetailsCommentsReducer} from '@/pages/ArticleDetailsPage/model/slices/ArticleDetailsCommentsSlice'

export const articleDetailsPageReducer = combineReducers({
  recommendations: articleDetailsPageRecReducer,
  comments: articleDetailsCommentsReducer
})