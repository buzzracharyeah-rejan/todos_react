import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    email: '',
    password: '',
    isLoggedIn: false,
    message: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = { ...state.user, ...payload };
    },
  },
});

export const { setUser } = userSlice.actions;
export default userSlice.reducer;
