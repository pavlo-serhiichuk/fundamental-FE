import {createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import {User} from 'entities/User/model/types/userSchema'
import {USER_LOCALSTORAGE} from 'shared/consts/localStorage'
import {userActions} from 'entities/User'

interface LoginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (authData, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', authData)

      if (!response.data) {
        throw new Error()
      }
      console.log(2, response.data)
      localStorage.setItem(USER_LOCALSTORAGE, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('Wrong username or password')
    }
  }
)