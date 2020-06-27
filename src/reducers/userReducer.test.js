import { SELECT_USER } from "../constants/actionTypes";
import { userReducer } from "./usersReducer";

describe("userReducer", () => {
  test("returns default state when no action is passed", () => {
    const expectedDefaultState = { id: 1 };
    const newState = userReducer(undefined, {});
    expect(newState).toEqual(expectedDefaultState);
  });

  test("returns the payload from the action object when action type is SELECT_USER", () => {
    const action = {
      type: SELECT_USER,
      payload: true,
    };

    const newState = userReducer(undefined, action);
    expect(newState).toBe(true);
  });
});
