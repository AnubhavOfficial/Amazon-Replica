import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartItemsReducer from "./CartItemsReducer";
import ShowLoginPageReducer from "./ShowLoginPageReducer";
import SetUserReducer from "./setUserReducer";

const allReducers = combineReducers({
  products: ProductsReducer,
  cart: CartItemsReducer,
  showLogin: ShowLoginPageReducer,
  user: SetUserReducer,
});

export default allReducers;
