import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {User, UserSchema} from '../types/userSchema'
import {USER_LOCALSTORAGE} from '@/shared/consts/localStorage'
import {setFeatureFlags} from '@/shared/lib/features'
import {saveJsonSettings} from '@/entities/User/model/service/saveJsonSettings'
import {JsonSettings} from '@/entities/User/model/types/jsonSettings'
import {initAuthData} from '../service/initAuthData'

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
      builder
          .addCase(initAuthData.fulfilled, (state, {payload}: PayloadAction<User>) => {
            state.authData = payload
            setFeatureFlags(payload.features)
            state._init = true
          });
      builder
          .addCase(initAuthData.rejected, (state) => {
            state._init = true
          });
  },
})

export const { actions: userActions } = userSlice
export const { reducer: userReducer } = userSlice
