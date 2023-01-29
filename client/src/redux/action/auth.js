export const SetAuth = ({ data }) => {
  return {
    type: "SET_AUTH",
    payload: data,
  };
};

export const RemoveAuth = () => {
  return {
    type: "REMOVE_AUTH",
  };
};
