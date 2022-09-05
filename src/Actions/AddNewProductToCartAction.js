const AddNewProductToCartAction = (data, count) => {
  return {
    type: "ADD_NEW_PRODUCT_TO_CART",
    value: data,
    quantity: count,
  };
};

export default AddNewProductToCartAction;
