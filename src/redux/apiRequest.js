import axios from "axios";
import {
  loginFailed,
  loginStart,
  loginSuccess,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";
import { getUserFailed, getUserStart, getUserSuccess } from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const response = await axios.post(
      "http://localhost:8000/api/auth/login",
      user
    );
    dispatch(loginSuccess(response.data));
    navigate("/");
  } catch (error) {
    dispatch(loginFailed());
  }
};

export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("http://localhost:8000/api/auth/register", user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (error) {
    dispatch(registerFailed());
  }
};

export const getAllUser = async (accessToken, dispatch) => {
  dispatch(getUserStart());
  try {
    const response = await axios.get("http://localhost:8000/api/users", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getUserSuccess(response.data));
  } catch (error) {
    dispatch(getUserFailed());
  }
};
