import { combineReducers } from "redux";
import ProductsReducer from "./ProductsReducer";
import CartItemsReducer from "./CartItemsReducer";
import SetUserReducer from "./setUserReducer";
import SignedInReducer from "./SignedInReducer";
import OrdersReducer from "./OrdersReducer";

const allReducers = combineReducers({
  products: ProductsReducer,
  cart: CartItemsReducer,
  user: SetUserReducer,
  signedIn: SignedInReducer,
  orders: OrdersReducer,
});

export default allReducers;
