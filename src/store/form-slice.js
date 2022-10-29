import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    formData: [],
    form: false,
  },
  reducers: {
    formData(state, action) {
      const newData = action.payload;
      state.formData.push({ ...newData, id: 101 });
    },
    toggle(state) {
      state.form = !state.form;
    },
  },
});

export const formActions = formSlice.actions;

export default formSlice;
