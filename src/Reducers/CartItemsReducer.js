const initialState = { items: [], count: 0 };

const CartItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NEW_PRODUCT_TO_CART":
      let newItem = action.value;
      newItem.price = Math.floor(newItem.price * 79.67);
      newItem.quantity = action.quantity;
      return {
        ...state,
        items: [...state.items, newItem],
        count: parseInt(state.count) + parseInt(action.quantity),
      };
    case "ADD_EXISTING_PRODUCT_TO_CART":
      let obj = [...state.items];
      for (let i = 0; i < obj.length; i++) {
        if (obj[i].id === action.id) {
          obj[i].quantity =
            parseInt(obj[i].quantity) + parseInt(action.quantity);
          break;
        }
      }

      return {
        items: obj,
        count: parseInt(state.count) + parseInt(action.quantity),
      };
    case "UPDATE_PRODUCT":
      let obj2 = [...state.items];
      let newQuantity;
      for (let i = 0; i < obj2.length; i++) {
        if (obj2[i].id === action.id) {
          newQuantity = parseInt(obj2[i].quantity) - parseInt(action.quantity);
          obj2[i].quantity = parseInt(action.quantity);
          break;
        }
      }

      return {
        items: obj2,
        count: parseInt(state.count) - parseInt(newQuantity),
      };
    case "SET_CART_FROM_LOCAL_STORAGE":
      return action.value;

    case "REMOVE_PRODUCT_FROM_CART":
      let item = [...state.items];
      let index = 0;
      for (let i = 0; i < item.length; i++) {
        if (item[i].id === action.id) {
          index = i;
        }
      }
      item.splice(index, 1);
      return {
        items: item,
        count: parseInt(state.count) - parseInt(action.quantity),
      };

    case "CLEAR_CART":
      return {
        items: [],
        count: 0,
      };
    default:
      return state;
  }
};

export default CartItemsReducer;
