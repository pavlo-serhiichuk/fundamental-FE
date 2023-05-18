import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Article} from 'entities/Article'
import {
  getArticlesListIsLoading,
  getArticlesPageHasMore,
  getArticlesPageLimit,
  getArticlesPageNum
} from 'pages/ArticlesPage/model/selectors/getArticlesListSelectors'
import {fetchArticlesList} from 'pages/ArticlesPage/model/services/fetchArticlesList'
import {articlesPageActions} from 'pages/ArticlesPage/model/slices/articlesPageSlice'

// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const fetchNextArticlesList = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesList',
  async (props, thunkAPI) => {
    const { getState, dispatch} = thunkAPI
    const hasMore = getArticlesPageHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesListIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(fetchArticlesList({page: page + 1}))
      dispatch(articlesPageActions.setPage(page + 1))
    }
  }
)