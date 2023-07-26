import {createAsyncThunk} from '@reduxjs/toolkit'
import {User} from '@/entities/User/model/types/userSchema'
import {USER_LOCALSTORAGE} from '@/shared/consts/localStorage'
import {userActions} from '@/entities/User'
import {ThunkConfig} from '@/app/providers/StoreProvider'

interface LoginByUsernameProps {
  username: string
  password: string
}
                                             // те, що отримає в результаті зіпиту | те, що відправляє | якщо помилка
export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    const {dispatch, extra, rejectWithValue} = thunkAPI
    try {
      const response = await extra.api.post<User>('/login', authData)
      // const response = await axios.post<User>('http://localhost:8000/login', authData)
      if (!response.data) {
        throw new Error()
      }

      localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))
      // @ts-ignore
      extra.navigate('/about')
      return response.data
    } catch (e) {
      return rejectWithValue('Wrong username or password')
    }
  }
)