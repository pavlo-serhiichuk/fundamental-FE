import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from 'app/providers/StoreProvider'
import {Profile} from 'entities/Profile'
import {getProfileForm} from '../selectors/getProfileForm/getProfileForm'

// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'login/updateProfileData',
  async (_, thunkAPI) => {
    const {extra, rejectWithValue, getState} = thunkAPI

    const formData = getProfileForm(getState())

    try {
      const response = await extra.api.put<Profile>('/profile', formData)
      return response.data
    } catch (e) {

      return rejectWithValue('Wrong username or password')
    }
  }
)