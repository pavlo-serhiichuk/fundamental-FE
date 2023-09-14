import {createEntityAdapter, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {Article, ArticleSortField, ArticleView, ArticleType} from '@/entities/Article'
import {ArticlesPageSchema} from '../types/articlesPageSchema'
import {StateSchema} from '@/app/providers/StoreProvider'
import {fetchArticlesList} from '../services/fetchArticlesList'
import {ARTICLE_VIEW_LOCALSTORAGE} from '@/shared/consts/localStorage'
import {SortOrder} from '@/shared/types/sort'

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
    hasMore: true,
    sort: ArticleSortField.CREATED,
    search: '',
    order: 'asc',
    type: ArticleType.ALL,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(ARTICLE_VIEW_LOCALSTORAGE, action.payload)
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload
    },
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload
    },
    initState: (state ) => {
      const view = localStorage.getItem(ARTICLE_VIEW_LOCALSTORAGE) as ArticleView
      state.limit = view === ArticleView.SMALL ? 9: 4
      state.view = view
    }
  },
  extraReducers: (builder) => {
    // @ts-ignore
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined
        state.isLoading = true

        if(action.meta.arg.replace) {
          articlesAdapter.removeAll(state)
        }
      })
      .addCase(fetchArticlesList.fulfilled, (state, action) => {
        state.isLoading = false
        // @ts-ignore
        state.hasMore = action.payload.length >= state.limit
        state._inited = true

        if (action.meta.arg.replace) {
          articlesAdapter.setAll(state, action.payload)
        } else {
          articlesAdapter.addMany(state, action.payload)
        }
      })
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const {actions: articlesPageActions} = articlesPageSlice
export const {reducer: articlesPageReducer} = articlesPageSlice
