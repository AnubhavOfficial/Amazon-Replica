import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartItemsReducer from "./CartItemsReducer";

const allReducers = combineReducers({
  products: ProductsReducer,
  cart: CartItemsReducer,
});

export default allReducers;
