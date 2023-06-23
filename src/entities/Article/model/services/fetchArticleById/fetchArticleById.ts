import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Article} from 'entities/Article'


// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const fetchArticleById = createAsyncThunk<Article, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleById',
  async (articleId, thunkAPI) => {
    const {extra, rejectWithValue} = thunkAPI
    try {
      const response = await extra.api.get<Article>(`/articles/${articleId}`, {
        params: {
          _expend: 'user'
        }
      })

      if(!response.data) {
        throw new Error()
      }
      return response.data
    } catch (e) {
      return rejectWithValue('Wrong username or password')
    }
  }
)