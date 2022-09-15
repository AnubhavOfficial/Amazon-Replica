const initialState = [];
const OrdersReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ORDERS":
      return [...state, action.value];
    default:
      return state;
  }
};

export default OrdersReducer;
