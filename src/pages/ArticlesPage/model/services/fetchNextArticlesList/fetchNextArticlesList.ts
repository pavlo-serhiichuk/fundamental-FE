import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {
  getArticlesListIsLoading,
  getArticlesPageHasMore,
  getArticlesPageNum
} from '../../selectors/getArticlesListSelectors'
import {fetchArticlesList} from '../../services/fetchArticlesList'
import {articlesPageActions} from '../../slices/articlesPageSlice'

// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const fetchNextArticlesList = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesList',
  async (props, thunkAPI) => {
    const { getState, dispatch} = thunkAPI
    const hasMore = getArticlesPageHasMore(getState())
    const page = getArticlesPageNum(getState())
    const isLoading = getArticlesListIsLoading(getState())

    if (hasMore && !isLoading) {
      dispatch(fetchArticlesList({}))
      dispatch(articlesPageActions.setPage(page + 1))
    }
  }
)