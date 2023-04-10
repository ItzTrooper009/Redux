// import store from "./store";
// // import * as actions from "./actionTypes";
// import * as act from "./actions";
// import store from "./store/configStore";
import configStore from "./store/configStore";
import {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugUpdated,
  busAssignedToUser,
  getBugsByUser,
  getUnresolvedBugs,
} from "./store/bugs";
import { projectAdded, projectDeleted } from "./store/projects";
import { userAdded, userAddBug, getUserWithBugs } from "./store/users";

const store = configStore();
const unsubscribe = store.subscribe(() =>
  console.log("State has been changed", store.getState())
);

////From Actions
store.dispatch(projectAdded({ name: "Project 1 is Added" }));
store.dispatch(projectAdded({ name: "Project 2 is Added" }));
store.dispatch(projectAdded({ name: "Project 3 is Added" }));
store.dispatch(projectAdded({ name: "Project 4 is Added" }));

store.dispatch(projectDeleted({ id: 2 }));

store.dispatch(projectAdded({ name: "Project 5 is Added" }));

//// From Bugs
store.dispatch(bugAdded({ description: "Bug 1 is Added" }));
store.dispatch(bugAdded({ description: "Bug 2 is Added" }));

// unsubscribe();

store.dispatch(bugResolved({ id: 2 }));

store.dispatch(bugAdded({ description: "Bug 3 is Added" }));

store.dispatch(bugAdded({ description: "Bug 4 is Added" }));

store.dispatch(bugRemoved({ id: 3 }));

store.dispatch(bugUpdated({ id: 4 }));

store.dispatch(busAssignedToUser({ bugId: 1, userId: 1 }));

//From Users

store.dispatch(userAdded({ username: "Aman" }));

store.dispatch(userAdded({ username: "Dayal" }));

store.dispatch(userAdded({ username: "Rinku" }));

store.dispatch(userAdded({ username: "Danny" }));

store.dispatch(userAdded({ username: "Ankit" }));

// store.dispatch(userAddBug({ id: 2, bug: "A new Bug Is added" }));

// store.dispatch(userAddBug({ id: 3, bug: "A new Bug Is added" }));

//Selector
const bugs = getBugsByUser(1)(store.getState());
console.log(bugs);
// const userWithBugs = getUserWithBugs(store.getState());

// console.log("Users With Bugs-", userWithBugs);

//Using Selectors
// const x = getUnresolvedBugs(store.getState());
// const y = getUnresolvedBugs(store.getState());
// console.log("X-", x, "    Y-", y);
// console.log(x === y);

// store.dispatch(actions.bugAdded("bug 1"));
