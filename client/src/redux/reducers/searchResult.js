const intitialAuthState = {
  keyword: "",
  results: [],
};

const searchResultReducer = (state = intitialAuthState, action) => {
  switch (action.type) {
    case "SET_SEARCH_RESULT":
      return { ...state, results: action.payload };

    case "REMOVE_SEARCH_RESULT":
      return {};

    default:
      return state;
  }
};

export default searchResultReducer;
