import { configureStore } from "@reduxjs/toolkit";
import NotificationReducer from "./Reducers/Notification/Notification.reducer";

export default configureStore({
  reducer: {
    notification: NotificationReducer
  },
});
