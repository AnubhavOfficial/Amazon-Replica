const initialState = { items: [], count: 0 };

const CartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT_TO_CART":
      let newItem = action.value;
      newItem.quantity = action.quantity;
      return {
        ...state,
        items: [...state.items, newItem],
        count: state.count + 1,
      };
    case "ADD_EXISTING_PRODUCT_TO_CART":
      let obj = [...state.items];
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].id === action.id) {
          obj[i].quantity = obj[i].quantity + 1;
          console.log(obj[i].id);
          break;
        }
      }

      return {
        items: obj,
        count: state.count + 1,
      };
    case "SET_CART_FROM_LOCAL_STORAGE":
      return action.value;

    case "REMOVE_PRODUCT_TO_CART":
      return action.value;
    default:
      return state;
  }
};

export default CartItemsReducer;
