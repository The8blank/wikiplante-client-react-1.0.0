import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getPlantes = createAsyncThunk(
  "GET_PLANTES",
  async (uid, { rejectWithValue }) => {
    return await axios
      .get("http://localhost:8080/api/plante/")
      .then((res) => res.data)
      .catch((err) => rejectWithValue(err));
  }
);

const plantesSlice = createSlice({
  name: "plantes",
  initialState: {
    plantes: null,
    planteFetched : false,
    fetch: { loading: false, isSucced: false, isReject: false },
  },
  reducers: {
  },
  extraReducers: {
    [getPlantes.pending]: (state) => {
      state.fetch.loading = true;
    },
    [getPlantes.fulfilled]: (state, { payload }) => {
      state.fetch.loading = false;
      state.plantes = payload
      state.planteFetched = true;
      state.fetch.isSucced = true;
    },
    [getPlantes.rejected]: (state, { payload }) => {
      state.fetch.loading = false;
      state.fetch.isSucced = false;
      state.fetch.isReject = payload;
    },
  },
});

export default plantesSlice.reducer;
