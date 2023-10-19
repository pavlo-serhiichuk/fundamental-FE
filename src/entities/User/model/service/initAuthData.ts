import {createAsyncThunk} from '@reduxjs/toolkit'
import {ThunkConfig} from '@/app/providers/StoreProvider'
import {getUserDataByIdQuery, setJsonSettingsMutation} from '@/entities/User/api/userApi'
import {User} from '../types/userSchema'
import {USER_LOCALSTORAGE} from '@/shared/consts/localStorage'

export const initAuthData = createAsyncThunk<User, void, ThunkConfig<string>>(
  'user/initAuthData',
  async (newJsonSettings, thunkAPI) => {
    const {rejectWithValue, dispatch} = thunkAPI

    const userId = localStorage.getItem(USER_LOCALSTORAGE)

    if(!userId) {
      return rejectWithValue('')
    }

    try {
      const response = await dispatch(getUserDataByIdQuery(userId),).unwrap()

      return response
    } catch (e) {
      return rejectWithValue('Wrong username or password')
    }
  }
)