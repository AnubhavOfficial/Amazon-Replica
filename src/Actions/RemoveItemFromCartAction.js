const RemoveItemFromCartAction = (id, quantity) => {
  return {
    type: "REMOVE_PRODUCT_FROM_CART",
    id: id,
    quantity: quantity,
  };
};

export default RemoveItemFromCartAction;
