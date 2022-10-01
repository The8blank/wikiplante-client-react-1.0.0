import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUser = createAsyncThunk(
  "GET_USER",
  async (uid, { rejectWithValue }) => {
    return await axios
      .get("http://localhost:8080/api/user/" + uid)
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err));
  }
);

const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {},
    isLogged: false,
    log: { loading: false, isSucced: false, isReject: false },
  },
  reducers: {
    deco : (state, action) => {
        state.user = null
        state.isLogged = false
    }
  },
  extraReducers: {
    [getUser.pending]: (state) => {
      state.loading = true;
    },
    [getUser.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.user = payload.user;
      state.log.isSucced = true;
      state.isLogged = true;
    },
    [getUser.rejected]: (state, { payload }) => {
      state.loading = false;
      state.log.isSucced = false;
      state.log.isReject = payload;
    },
  },
});

export default userSlice.reducer;
export const {deco} = userSlice.actions

