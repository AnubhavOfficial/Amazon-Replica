const UpdateProductAction = (id, quantity) => {
  return {
    type: "UPDATE_PRODUCT",
    id: id,
    quantity: quantity,
  };
};

export default UpdateProductAction;
