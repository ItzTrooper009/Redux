// import store from "./store";
// // import * as actions from "./actionTypes";
// import * as act from "./actions";
// import store from "./store/configStore";
import configStore from "./store/configStore";
import * as actions from "./store/bugs";

const store = configStore();
const unsubscribe = store.subscribe(() =>
  console.log("State has been changed", store.getState())
);

store.dispatch(actions.bugAdded({ description: "Bug 1 is Added" }));
store.dispatch(actions.bugAdded({ description: "Bug 2 is Added" }));

// unsubscribe();

store.dispatch(actions.bugResolved({ id: 2 }));

store.dispatch(actions.bugAdded({ description: "Bug 3 is Added" }));

store.dispatch(actions.bugRemoved({ id: 3 }));

store.dispatch(actions.bugAdded({ description: "Bug 4 is Added" }));

store.dispatch(actions.bugUpdated({ id: 4 }));

console.log(store.getState());

// store.dispatch(actions.bugAdded("bug 1"));
