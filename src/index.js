// import store from "./store";
// // import * as actions from "./actionTypes";
// import * as act from "./actions";
import store from "./store";
import * as actions from "./actions";

const unsubscribe = store.subscribe(() =>
  console.log("State has been changed", store.getState())
);

store.dispatch(actions.bugAdded("Bug 1 is Added"));
store.dispatch(actions.bugAdded("Bug 2 is Added"));

// unsubscribe();

// store.dispatch(actions.bugRemoved(2));
store.dispatch(actions.bugResolved(2));

store.dispatch(actions.bugAdded("Bug 3 is Added"));

console.log(store.getState());

// store.dispatch(actions.bugAdded("bug 1"));
