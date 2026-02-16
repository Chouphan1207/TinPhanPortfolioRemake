import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { UserSchema } from '../types/UserSchema'

const initialState: UserSchema = {
  authData: undefined,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<UserSchema>) => {
      state.authData = action.payload.authData;
    },
    clearUserData: (state) => {
      state.authData = undefined;
    },
  },
})

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;