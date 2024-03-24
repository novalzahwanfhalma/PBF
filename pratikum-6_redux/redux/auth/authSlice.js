// authSlice.js

import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
   name: 'auth',
   initialState: {
      isLogin: false, // Pastikan Anda menginisialisasi isLogin dengan nilai yang sesuai
   },
   reducers: {
      setLogin(state, action) {
         state.isLogin = action.payload.isLogin;
      },
   },
});

export const { setLogin } = authSlice.actions;
export default authSlice.reducer;
