const AddExistingProductToCartAction = (id) => {
  return {
    type: "ADD_EXISTING_PRODUCT_TO_CART",
    id: id,
  };
};

export default AddExistingProductToCartAction;
