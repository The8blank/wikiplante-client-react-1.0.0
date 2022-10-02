import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk("GET_USER", async (data) => {
  const token = data;

  const user = await axios
    .get("http://localhost:8080/api/user/" + token.userId)
    .then((res) => res.data.user);
  return {
    token,
    user,
  };
});

const initialState = {
  user: null,
  token: false,
  isLogged: false,
  fetch: { loading: false, isSucced: false, isReject: false },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    deco: (state, action) => {
      state.user = null;
      state.isLogged = false;
      state.token = false;
    },
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.fetch.loading = true;
      state.isLogged = false;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.token = payload.token
      state.user = payload.user 
      state.fetch.loading = false;
      state.fetch.isSucced = true;
      state.isLogged = true;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.isLogged = false;
      state.fetch.loading = false;
      state.fetch.isSucced = false;
      state.fetch.isReject = payload;
    },
  },
});

export default userSlice.reducer;
export const { deco } = userSlice.actions;
