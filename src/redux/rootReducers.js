import { combineReducers } from "redux";
import userSlice from "./slices/user";
import homeSlice from "./slices/home";

const ROOT_REDUCERS = combineReducers({
  user: userSlice,
  home: homeSlice,
});

export default ROOT_REDUCERS;
