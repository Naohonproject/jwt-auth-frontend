import { configureStore } from "@reduxjs/toolkit";

import authSlice from "./authSlice";
import userSlice from "./userSlice";

export default configureStore({
  reducer: { auth: authSlice.reducer, users: userSlice.reducer },
});
