import store from "./store";
// import * as actions from "./actionTypes";
import * as act from "./actions";

const unsubscribe = store.subscribe(() =>
  console.log("State has been changed", store.getState())
);

store.dispatch(act.bugAdded("Bug 1 is Added"));
store.dispatch(act.bugAdded("Bug 2 is Added"));

// unsubscribe();

// store.dispatch(act.bugRemoved(2));
store.dispatch(act.bugResolved(2));

store.dispatch(act.bugAdded("Bug 3 is Added"));

console.log(store.getState());
