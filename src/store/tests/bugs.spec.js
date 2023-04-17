import { addBug, bugAdded } from "../bugs";
import { apiCallBegan } from "../api";

import configStore from "../configStore";

describe("bugsSlice", () => {
  //// Solitary test
  //   describe("action Cerators", () => {
  //     it("addBug", () => {
  //       const bug = { description: "a" };
  //       const result = addBug(bug);
  //       const expected = {
  //         type: apiCallBegan.type,
  //         payload: {
  //           url: "/bugs",
  //           method: "post",
  //           data: bug,
  //           onSuccess: bugAdded.type,
  //         },
  //       };
  //       expect(result).toEqual(expected);
  //     });
  //   });

  ////Social Test
  it("Should handle the add bug action", async () => {
    const store = configStore();
    const bug = { description: "a" };
    await store.dispatch(addBug(bug));
    console.log(store.getState().entities.bugs.list);

    // console.log(store.getState());
  });
});
