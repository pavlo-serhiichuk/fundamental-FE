import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Comment} from 'entities/Comment'
import {Article} from 'entities/Article'

// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const fetchArticlesList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const {extra, rejectWithValue} = thunkAPI


    try {
      const response = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _expand: 'user'
        }
      })

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('Wrong username or password')
    }
  }
)