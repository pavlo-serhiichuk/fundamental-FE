import {
  createEntityAdapter,
  createSlice, PayloadAction,
} from '@reduxjs/toolkit'
import {Comment} from 'entities/Comment'
import {StateSchema} from 'app/providers/StoreProvider'
import {ArticleDetailsCommentsSchema} from 'pages/ArticleDetailsPage'
import {fetchCommentsByArticleId} from '../services/fetchCommentsByArticleId/fetchCommentsByArticleId'
import {ArticleDetailsPageRecSchema} from 'pages/ArticleDetailsPage/model/types/ArticleDetailsPageRecSchema'
import {Article} from 'entities/Article'
import {fetchArticleRecList} from 'pages/ArticleDetailsPage/model/services/fetchArticleRec/fetchArticleRec'

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticleRecommendations = recommendationsAdapter.getSelectors<StateSchema>(
  (state) => state.articleDetailsPage?.recommendations || recommendationsAdapter.getInitialState()
)

const articleDetailsPageRecSlice = createSlice({
  name: 'articleDetailsRecSlice',
  initialState: recommendationsAdapter.getInitialState<ArticleDetailsPageRecSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleRecList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticleRecList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        recommendationsAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticleRecList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {reducer: articleDetailsPageRecReducer} = articleDetailsPageRecSlice