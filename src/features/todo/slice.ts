import { createSlice, isRejected, type PayloadAction } from "@reduxjs/toolkit";
import { STATUS } from "./constants/STATUS";
import type { TodosState } from "./types/TodosState";
import { addTodo, deleteTodo, fetchTodos, toggleTodo } from "./middleware";

const initialState: TodosState = {
  todos: [],
  status: STATUS.IDLE, //"idle"
  error: null,
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    //Reducers sincrónicos
  },
  extraReducers: (builder) => {
    builder
      // GET Cases
      .addCase(fetchTodos.pending, (state) => {
        state.error = null;
        state.status = STATUS.PENDING;
      })
      .addCase(fetchTodos.fulfilled, (state, action: PayloadAction<Todo[]>) => {
        state.status = STATUS.FULFILLED;
        state.todos = action.payload;
      })
      // POST Cases
      .addCase(addTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        state.todos.push(action.payload);
      })
      // PUT Cases
      .addCase(toggleTodo.fulfilled, (state, action: PayloadAction<Todo>) => {
        const index = state.todos.findIndex(
          (todo) => (todo.id = action.payload.id)
        );

        // findIndex devuelve -1 si no encuentra el elemento
        if (index !== -1) {
          state.todos[index] = action.payload;
        }
      })
      // DELETE Cases
      .addCase(deleteTodo.fulfilled, (state, action: PayloadAction<string>) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      })
      // Global Error Handler (solo se ejecuta si no se explicita el error case correspondiente)
      .addMatcher(isRejected, (state, action) => {
        state.status = STATUS.REJECTED;
        state.error =
          action.error.message || "Something went wrong with the todos slice";
      });
  },
});

export const todosReducer = todoSlice.reducer;
