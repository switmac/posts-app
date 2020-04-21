import {
  FETCH_POST,
  FETCH_USER_POST,
  CREATE_POST,
  VIEW_POST,
  DELETE_POST,
} from "../constants/actionTypes";

export const postReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_POST:
      return action.payload;
    case VIEW_POST:
      return action.payload;
    case DELETE_POST:
      return action.payload;
    default:
      return state;
  }
};

export const postsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER_POST:
      return action.payload;
    case FETCH_POST:
      return action.payload;
    default:
      return state;
  }
};
