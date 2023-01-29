const intitialAuthState = {
  auth: {},
};

const authReducer = (state = intitialAuthState, action) => {
  switch (action.type) {
    case "SET_AUTH":
      return action.payload;

    case "REMOVE_AUTH":
      return {};

    default:
      return state;
  }
};

export default authReducer;
