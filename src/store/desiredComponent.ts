import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import {signUp} from '../api/dataBaseAuthMethods'

const initialState: {
  typedInput: string | null;
  error: null | string;
} = {
  typedInput: null,
  error: null,
};

export const desiredComponentSlice = createSlice({
  name: "desiredComponent",
  initialState,
  reducers: {
    changeInputDinamicComponent: (state, { payload }) => {
      const newInput = payload.newInput;
      state.typedInput = newInput;
    },
  },
});

export const { changeInputDinamicComponent } = desiredComponentSlice.actions;

export default desiredComponentSlice.reducer;
