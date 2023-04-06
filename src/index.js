import store from "./store";
import * as actions from "./actionTypes";
import * as act from "./actions";

const unsubscribe = store.subscribe(() =>
  console.log("State has been changed", store.getState())
);

store.dispatch(act.bugAdded("Bug 1 is Added Now"));

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    discription: "Bug 2 is added",
  },
});

// unsubscribe();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

store.dispatch({
  type: actions.BUG_ADDED,
  payload: {
    discription: "Bug 3 is added",
  },
});

console.log(store.getState());
