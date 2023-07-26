import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from '@/app/providers/StoreProvider'

import {getArticlesPage_Inited} from '../../selectors/getArticlesListSelectors'
import {fetchArticlesList} from '../../services/fetchArticlesList'
import {articlesPageActions} from '../../slices/articlesPageSlice'
import {SortOrder} from '@/shared/types'
import {ArticleSortField, ArticleType} from '@/entities/Article'

// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const initArticlesPage = createAsyncThunk<void, URLSearchParams, ThunkConfig<string>>(
  'articlesPage/fetchNextArticlesList',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch} = thunkAPI
    const inited = getArticlesPage_Inited(getState())

    if (!inited) {
      const searchFromUrl = searchParams.get('search')
      const orderFromUrl = searchParams.get('order') as SortOrder
      const sortFromUrl = searchParams.get('sort') as ArticleSortField
      const typeFromUrl = searchParams.get('type') as ArticleType

      if(searchFromUrl) {
        dispatch(articlesPageActions.setSearch(searchFromUrl))
      }
      if(orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl))

      }
      if(sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl))
      }

      if(typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl))
      }

      dispatch(articlesPageActions.initState())
      dispatch(fetchArticlesList({}))
    }
  }
)