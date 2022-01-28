import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  createTodo: false,
  updateTodo: false,
  deleteTodo: false,
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    setTodoStatus: (state, { payload }) => {
      state = { ...state, ...payload };
    },
  },
});

export const { setTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
