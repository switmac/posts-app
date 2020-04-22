import jsonPlaceHolder from "../api/jsonPlaceHolder";
import { FETCH_USER, SELECT_USER } from "../constants/actionTypes";

export const fetchUsers = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/users");

  dispatch({
    type: FETCH_USER,
    payload: response.data,
  });
};

export const selectUser = (user) => {
  return {
    type: SELECT_USER,
    payload: user,
  };
};
