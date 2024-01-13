import { createSlice } from "@reduxjs/toolkit";

export const notificationSlice = createSlice({
  name: "notification",
  initialState: {
    value: 0,
  },
  reducers: {
    SET_NOTIFICATION: (state, actions) => {
      return { ...state, ...actions.payload };
    },
  },
});

// Action creators are generated for each case reducer function
export const { SET_NOTIFICATION } = notificationSlice.actions;

export default notificationSlice.reducer;
