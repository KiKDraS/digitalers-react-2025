import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { setCount } from "./api";

const initialState = {
  value: 0,
  status: "idle", // Desocupado
};

// Action Async
export const incrementAsync = createAsyncThunk(
  "counter/setCount",
  async (payload) => {
    return await setCount(payload);
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (oldState) => {
      // Redux Toolkit incluye la librería Immer
      // Immer toma código mutable
      oldState.value += 1;

      // Immer lo transforma a código inmutable
      // const newState = {
      //     ...state,
      //     value: 1
      // }
    },
    decrement: (oldState, action) => {
      oldState.value -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (oldState) => {
        oldState.status = "loading";
      })
      .addCase(incrementAsync.fulfilled, (oldState, action) => {
        oldState.status = "idle";
        oldState.value += action.payload;
      })
      .addCase(incrementAsync.rejected, (oldState) => {
        oldState.status = "failed";
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export const counterReducer = counterSlice.reducer;
