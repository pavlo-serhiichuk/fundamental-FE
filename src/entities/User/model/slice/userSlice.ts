import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from '../types/userSchema'
import {USER_LOCALSTORAGE} from 'shared/consts/localStorage'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
        state.authData = action.payload
    },
    initAuthData: (state) => {
        const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE) || '')
      if (user) {
        state.authData = user
      }
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE)
    }
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
