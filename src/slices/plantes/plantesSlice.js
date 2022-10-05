import { createSlice } from "@reduxjs/toolkit";



const plantesSlice = createSlice({
  name: "plantes",
  initialState: {
    plantes: null,
  },
  reducers: {
    addPlantes : (state, action ) => {
      state.plantes = action.payload
    }
   
  },
});

export const {addPlantes} = plantesSlice.actions
export default plantesSlice.reducer;
