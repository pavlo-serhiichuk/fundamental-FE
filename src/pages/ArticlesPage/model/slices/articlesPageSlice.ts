import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Article, ArticleView} from 'entities/Article'
import {ArticlesPageSchema} from '../types/articlesPageSchema'
import {StateSchema} from 'app/providers/StoreProvider'
import {fetchArticlesList} from '../services/fetchArticlesList'
import {ARTICLE_VIEW_LOCALSTORAGE} from 'shared/consts/localStorage'

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    ids: [],
    entities: {},
    isLoading: false,
    error: undefined,
    view: ArticleView.SMALL
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE, action.payload)
    },
    initState: (state) => {
      state.view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE) as ArticleView
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined
        state.isLoading = true
      })
      .addCase(fetchArticlesList.fulfilled, (state, action: PayloadAction<Article[]>) => {
        state.isLoading = false
        articlesAdapter.setAll(state, action.payload)
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {actions: articlesPageActions} = articlesPageSlice
export const {reducer: articlesPageReducer} = articlesPageSlice
