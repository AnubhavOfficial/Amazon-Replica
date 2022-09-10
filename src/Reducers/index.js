import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartItemsReducer from "./CartItemsReducer";
import SetUserReducer from "./setUserReducer";
import SignedInReducer from "./SignedInReducer";

const allReducers = combineReducers({
  products: ProductsReducer,
  cart: CartItemsReducer,
  user: SetUserReducer,
  signedIn: SignedInReducer,
});

export default allReducers;
