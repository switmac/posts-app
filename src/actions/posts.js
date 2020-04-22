import jsonPlaceHolder from "../api/jsonPlaceHolder";
import {
  FETCH_POST,
  CREATE_POST,
  DELETE_POST,
  FETCH_USER_POST,
  CLEAR_USER_POST,
  FETCHING_USER_POST,
  CREATING_USER_POST,
  FETCH_POST_COMMENT,
  FETCHING_POST_COMMENT,
  VIEW_POST,
} from "../constants/actionTypes";

export const clearUserPost = () => dispatch => {
  dispatch({
    type: CLEAR_USER_POST,
    payload: {},
  });
};

export const createUserPost = post => async dispatch => {
  dispatch({
    type: CREATING_USER_POST,
    payload: true,
  });

  const response = await jsonPlaceHolder.post("/posts", post);

  dispatch({
    type: CREATE_POST,
    payload: response.data,
  });

  dispatch({
    type: CREATING_USER_POST,
    payload: false,
  });
};

export const deletePost = postId => async dispatch => {
  await jsonPlaceHolder.delete(`/posts/${postId}`);

  dispatch({
    type: DELETE_POST,
    payload: true,
  });
};

export const viewUserPost = post => dispatch => {
  dispatch({
    type: VIEW_POST,
    payload: post,
  });
};

export const fetchPostComments = postId => async dispatch => {
  dispatch({
    type: FETCHING_POST_COMMENT,
    payload: true,
  });

  const response = await jsonPlaceHolder.get(`/comments?postId=${postId}`);

  dispatch({
    type: FETCH_POST_COMMENT,
    payload: response.data,
  });

  dispatch({
    type: FETCHING_POST_COMMENT,
    payload: false,
  });
};

export const fetchPost = () => async dispatch => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({
    type: FETCH_POST,
    payload: response.data,
  });
};

export const fetchUserPost = userId => async dispatch => {
  dispatch({
    type: FETCHING_USER_POST,
    payload: true,
  });

  dispatch({
    type: FETCH_USER_POST,
    payload: [],
  });

  const response = await jsonPlaceHolder.get(`posts?userId=${userId}`);

  dispatch({
    type: FETCH_USER_POST,
    payload: response.data,
  });

  dispatch({
    type: FETCHING_USER_POST,
    payload: false,
  });
};
