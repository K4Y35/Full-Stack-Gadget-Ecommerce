import { combineReducers } from "redux";
import authReducer from "./auth";
import cartReducer from "./cart";
import searchResultReducer from "./searchResult";

const allReducers = combineReducers({
  authState: authReducer,
  SearchState: searchResultReducer,
  cartState: cartReducer,
});

export default allReducers;
