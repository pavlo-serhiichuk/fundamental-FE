import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Profile} from 'entities/Profile'


// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const fetchProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'login/fetchProfileData',
  async (_, thunkAPI) => {
    const {extra, rejectWithValue} = thunkAPI
    try {
      const response = await extra.api.get<Profile>('/profile')

      if(!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {
      return rejectWithValue('Wrong username or password')
    }
  }
)