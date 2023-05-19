import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'

import {getArticlesPage_Inited} from 'pages/ArticlesPage/model/selectors/getArticlesListSelectors'
import {fetchArticlesList} from 'pages/ArticlesPage/model/services/fetchArticlesList'
import {articlesPageActions} from 'pages/ArticlesPage/model/slices/articlesPageSlice'

// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const initArticlesPage = createAsyncThunk<void, void, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesList',
  async (props, thunkAPI) => {
    const { getState, dispatch} = thunkAPI
    const inited = getArticlesPage_Inited(getState())

    if (!inited) {
      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({page: 1}))
    }
  }
)