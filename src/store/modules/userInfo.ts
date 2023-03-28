import { createSlice } from '@reduxjs/toolkit'
export type TAction = {
  isLogin: boolean
  username: string
}
export const userInfoSlice = createSlice({
  name: 'userInfoSlice',
  initialState: {
    username: 'John Doe',
    isLogin: false,
  } as TAction,
  reducers: {
    setLoginStatus(state, action) {
      state.isLogin = action.payload.isLogin
      state.username = action.payload.username
    },
  },
})

export default userInfoSlice.reducer
