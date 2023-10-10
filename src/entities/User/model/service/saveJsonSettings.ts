import {createAsyncThunk} from '@reduxjs/toolkit'
import {Article} from '@/entities/Article'
import {ThunkConfig} from '@/app/providers/StoreProvider'
import {JsonSettings} from '@/entities/User/model/types/jsonSettings'
import {getUserAuthData} from '@/entities/User/model/selectors/getUserAuthData/getUserAuthData'
import {getJsonSettings} from '@/entities/User/model/selectors/jsonSettings'
import {setJsonSettingsMutation} from '@/entities/User/api/userApi'

export const saveJsonSettings = createAsyncThunk<JsonSettings, JsonSettings, ThunkConfig<string>>(
  'user/saveJsonSettings',
  async (newJsonSettings, thunkAPI) => {
    const {rejectWithValue, getState, dispatch} = thunkAPI
    const userData = getUserAuthData(getState())
    const currentSettings = getJsonSettings(getState())

    if(!userData) {
      return rejectWithValue('')
    }

    try {
      const response = await dispatch(setJsonSettingsMutation({
        userId: userData.id,
        jsonSettings: {
          ...currentSettings,
          ...newJsonSettings,
        }
      })).unwrap()

      if(!response.jsonSettings) {
        return rejectWithValue('')
      }

      return response.jsonSettings
    } catch (e) {
      return rejectWithValue('Wrong username or password')
    }
  }
)