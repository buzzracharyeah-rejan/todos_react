import { configureStore } from '@reduxjs/toolkit';
import todoSlice from './slice/todoSlice';
import userSlice from './slice/userSlice';

const store = configureStore({
  reducer: {
    user: userSlice,
    todo: todoSlice,
  },
});

export default store;
