import { combineReducers } from "redux";
import user from "./user/userSlice.js";
import plantes from "./plantes/plantesSlice"


const rootReducer = combineReducers({
  user,
  plantes
});

export default rootReducer;
