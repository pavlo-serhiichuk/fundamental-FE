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
    view: ArticleView.SMALL,
    page: 1,
    hasMore: true
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    initState: (state ) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE) as ArticleView
      state.limit = view === ArticleView.SMALL ? 9: 4
      state.view = view
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
        articlesAdapter.addMany(state, action.payload)
        console.log('is' , action.payload.length > 0)
        state.hasMore = action.payload.length > 0
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {actions: articlesPageActions} = articlesPageSlice
export const {reducer: articlesPageReducer} = articlesPageSlice
