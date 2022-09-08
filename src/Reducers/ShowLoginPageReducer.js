const ShowLoginPageReducer = (state = false, action) => {
  switch (action.type) {
    case "SHOW_LOGIN_PAGE":
      return !state;
    default:
      return state;
  }
};

export default ShowLoginPageReducer;
