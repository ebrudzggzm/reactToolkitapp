import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modal: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalIsOpen: (state) => {
      state.modal = !state.modal;
    },
  },
});

export default modalSlice.reducer;

export const { modalIsOpen, modalAdd } = modalSlice.actions;
