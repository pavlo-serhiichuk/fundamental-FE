import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from '../types/userSchema'
import {USER_LOCALSTORAGE} from '@/shared/consts/localStorage'
import {setFeatureFlags} from '@/shared/lib/features'
import {saveJsonSettings} from '@/entities/User/model/service/saveJsonSettings'
import {JsonSettings} from '@/entities/User/model/types/jsonSettings'

const initialState: UserSchema = {
  _init: false
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
        state.authData = action.payload
        setFeatureFlags(action.payload.features)
      localStorage.setItem(USER_LOCALSTORAGE, action.payload.id)
    },
    initAuthData: (state) => {
        // @ts-ignore
      const user = JSON.parse(localStorage.getItem(USER_LOCALSTORAGE))
      if (user) {
        state.authData = user
        setFeatureFlags(user.features)
      }
      state._init = true
    },
    logout: (state) => {
      state.authData = undefined
      localStorage.removeItem(USER_LOCALSTORAGE)
    }
  },
  extraReducers: (builder) => {
      builder
          .addCase(saveJsonSettings.fulfilled, (state, action: PayloadAction<JsonSettings>) => {
            if(state.authData) {
              state.authData.jsonSettings = action.payload
            }
          });
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
