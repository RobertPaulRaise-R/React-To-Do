import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      return [...state, action.payload];
    },
    removeTodo: (state, action) => {
      return state.filter((task) => task.id !== action.payload);
    },
    completedTodo: (state, action) => {
      return void state.filter((task) =>
        task.id === action.payload ? [...state, (task.completed = true)] : null,
      );
    },
  },
});

export const { addTodo, removeTodo, completedTodo } = todoSlice.actions;
export default todoSlice.reducer;
