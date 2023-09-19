import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from '@/app/providers/StoreProvider'
import { Profile} from '@/entities/Profile'
import {getProfileForm} from '../../selectors/getProfileForm/getProfileForm'
import {validateProfileData} from '../validateProfileData/validateProfileData'
import {getProfileData} from '../../selectors/getProfileData/getProfileData'
import {ValidateProfileError} from '../../consts/consts'

// те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<ValidateProfileError[]>>(
  'common/updateProfileData',
  async (_, thunkAPI) => {
    const {extra, rejectWithValue, getState} = thunkAPI

    const formData = getProfileForm(getState())
    const profile = getProfileData(getState())
    const errors = validateProfileData(formData)

    if (errors.length) {
      return rejectWithValue(errors)
    }

    try {
      const response = await extra.api.put<Profile>('/profile/' + profile?.id, formData)

      if (!response.data) {
        throw new Error()
      }

      return response.data
    } catch (e) {

      return rejectWithValue([ValidateProfileError.SERVER_ERROR])
    }
  }
)