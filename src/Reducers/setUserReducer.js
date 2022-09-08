const SetUserReducer = (state = {}, action) => {
  switch (action.type) {
    case "SET_USER":
      return action.value;
    default:
      return state;
  }
};

export default SetUserReducer;
