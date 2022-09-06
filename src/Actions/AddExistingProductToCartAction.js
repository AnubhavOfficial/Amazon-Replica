const AddExistingProductToCartAction = (id, quantity) => {
  return {
    type: "ADD_EXISTING_PRODUCT_TO_CART",
    id: id,
    quantity: quantity,
  };
};

export default AddExistingProductToCartAction;
