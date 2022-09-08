import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartItemsReducer from "./CartItemsReducer";
import SetUserReducer from "./setUserReducer";

const allReducers = combineReducers({
  products: ProductsReducer,
  cart: CartItemsReducer,
  user: SetUserReducer,
});

export default allReducers;
