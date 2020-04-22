import {
  FETCH_POST,
  FETCH_USER_POST,
  FETCHING_USER_POST,
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

const PROGRESS_INITIAL_STATE = {
  isFetchingUserPost: false,
};

export const progressStateReducer = (
  state = PROGRESS_INITIAL_STATE,
  action
) => {
  if (action.type === FETCHING_USER_POST) {
    return { ...state, isFetchingUserPost: action.payload };
  }
  return state;
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
