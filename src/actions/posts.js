import jsonPlaceHolder from "../api/jsonPlaceHolder";
import {
  FETCH_POST,
  CREATE_POST,
  VIEW_POST,
  DELETE_POST,
  FETCH_USER_POST,
  FETCHING_USER_POST,
  FETCH_POST_COMMENT,
} from "../constants/actionTypes";

export const createPost = (post) => async (dispatch) => {
  const response = await jsonPlaceHolder.post("/posts", post);

  dispatch({
    type: CREATE_POST,
    payload: response.data,
  });
};

export const deletePost = (postId) => async (dispatch) => {
  await jsonPlaceHolder.delete(`/posts/${postId}`);

  dispatch({
    type: DELETE_POST,
    payload: true,
  });
};

export const viewPost = (postId) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/posts/${postId}`);

  dispatch({
    type: VIEW_POST,
    payload: response.data,
  });
};

export const fetchPostComments = (postId) => async (dispatch) => {
  const response = await jsonPlaceHolder.get(`/comments?postId=${postId}`);

  dispatch({
    type: FETCH_POST_COMMENT,
    payload: response.data,
  });
};

export const fetchPost = () => async (dispatch) => {
  const response = await jsonPlaceHolder.get("/posts");

  dispatch({
    type: FETCH_POST,
    payload: response.data,
  });
};

export const fetchUserPost = (userId) => async (dispatch) => {
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
