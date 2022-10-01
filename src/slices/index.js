import { combineReducers } from "redux";
import user from './user/userSlice.js'
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

const rootReducer = combineReducers({
    user
})

export default rootReducer