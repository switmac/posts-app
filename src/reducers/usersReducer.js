import faker from "faker";
import { FETCH_USER, SELECT_USER } from "../constants/actionTypes";

const DEFAULT_USER = { id: 1 };
export const userReducer = (state = DEFAULT_USER, action) => {
  if (action.type === SELECT_USER) {
    return action.payload;
  }
  return state;
};

export const usersReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_USER:
      const users = action.payload.map((user) => {
        return { ...user, image: faker.image.avatar() };
      });
      return users;
    default:
      return state;
  }
};
