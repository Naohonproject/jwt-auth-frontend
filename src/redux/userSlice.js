import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: {
      allUsers: null,
      isFetching: false,
      error: false,
    },
  },
  reducers: {
    getUserStart: (state) => {
      state.users.isFetching = true;
    },
    getUserSuccess: (state, action) => {
      state.users.isFetching = false;
      state.users.allUsers = action.payload;
      state.users.error = false;
    },
    getUserFailed: (state) => {
      state.users.error = true;
      state.users.isFetching = false;
    },
    deleteUserStart: (state) => {
      state.users.isFetching = true;
    },
    deleteUserSuccess: (state) => {
      state.users.isFetching = false;
    },
    deleteUserFailed: (state) => {
      state.users.isFetching = false;
      state.users.error = true;
    },
  },
});
export const { getUserFailed, getUserStart, getUserSuccess } =
  userSlice.actions;

export default userSlice;
