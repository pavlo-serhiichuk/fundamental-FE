import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Article} from 'entities/Article'

export const fetchArticleRecList = createAsyncThunk<Article[], void, ThunkConfig<string>>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const {extra, rejectWithValue} = thunkAPI

    try {
      const response = await extra.api.get<Article[]>(`/articles`, {
        params: {
          _expand: 'user',
          _limit: 6,
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