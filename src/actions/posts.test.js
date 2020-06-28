import { VIEW_POST } from "../constants/actionTypes";
import { viewUserPost } from "./posts";

describe("viewUserPost", () => {
  test("should call dispatch method", () => {
    const dispatch = jest.fn();
    const post = {
      id: 1,
      title: "My Post",
    };
    const expectedDispatchParams = {
      type: VIEW_POST,
      payload: post,
    };

    viewUserPost(post)(dispatch);

    expect(dispatch).toHaveBeenCalledWith(expectedDispatchParams);
  });
});
