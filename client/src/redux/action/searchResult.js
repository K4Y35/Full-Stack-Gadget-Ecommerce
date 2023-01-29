export const SetSearchResult = ({ data }) => {
    return {
      type: "SET_SEARCH_RESULT",    
      payload: data,
    };
  };
  
  export const RemoveSearchResult = () => {
    return {
      type: "REMOVE_SEARCH_RESULT",
    };
  };
  