import { createAsyncThunk } from "@reduxjs/toolkit";
import AxiosClient from "../../services/axiosClient";
import { loginUrl } from "../../API";

export const userLogin = createAsyncThunk("user/login", async (payload) => {
  const response = await AxiosClient.post(loginUrl, {
    email: payload.email,
    password: payload.payload,
  });
  return response.data;
});
