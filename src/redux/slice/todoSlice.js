import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  createTodo: false,
  updateTodo: false,
  deleteTodo: false,
};

const todoSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setTodoStatus: (state, { payload }) => {
      state.user = { ...state, ...payload };
    },
  },
});

export const { setTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
