import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {ProfileType} from 'entities/Profile'


// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const fetchProfileData = createAsyncThunk<ProfileType, void, ThunkConfig<string>>(
  'login/fetchProfileData',
  async (_, thunkAPI) => {
    const {extra, rejectWithValue} = thunkAPI
    try {

      const response = await extra.api.get<ProfileType>('/profile')

      return response.data
    } catch (e) {
      return rejectWithValue('Wrong username or password')
    }
  }
)