const SetCartFromLocalStorageAction = (data) => {
  return {
    type: "SET_CART_FROM_LOCAL_STORAGE",
    value: data,
  };
};

export default SetCartFromLocalStorageAction;
