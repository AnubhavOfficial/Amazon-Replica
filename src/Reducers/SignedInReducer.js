const SignedInReducer = (state = false, action) => {
  switch (action.type) {
    case "SIGNED_IN":
      return action.value;
    default:
      return state;
  }
};

export default SignedInReducer;
