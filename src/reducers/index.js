import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import { postReducer, postsReducer} from "./postsReducer";
import { userReducer, usersReducer } from "./usersReducer";

export default combineReducers({
  form: formReducer,
  post: postReducer,
  posts: postsReducer,
  users: usersReducer,
  user: userReducer,
});
