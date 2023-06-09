// // import store from "./store";
// // // import * as actions from "./actionTypes";
// // import * as act from "./actions";
// // import store from "./store/configStore";
import configStore from "./store/configStore";
import * as actions from "./store/api";
import { addBug, loadBugs, resolveBug, assignUserId } from "./store/bugs";
import { months, parseTwoDigitYear } from "moment";
// import {
//   bugAdded,
//   bugRemoved,
//   bugResolved,
//   bugUpdated,
//   busAssignedToUser,
//   getBugsByUser,
//   getUnresolvedBugs,
// } from "./store/bugs";
// import { projectAdded, projectDeleted } from "./store/projects";
// import { userAdded, userAddBug, getUserWithBugs } from "./store/users";

// const store = configStore();
// const unsubscribe = store.subscribe(() =>
//   console.log("State has been changed", store.getState())
// );

// ////From Actions
// store.dispatch(projectAdded({ name: "Project 1 is Added" }));
// store.dispatch(projectAdded({ name: "Project 2 is Added" }));
// store.dispatch(projectAdded({ name: "Project 3 is Added" }));
// store.dispatch(projectAdded({ name: "Project 4 is Added" }));

// store.dispatch(projectDeleted({ id: 2 }));

// store.dispatch(projectAdded({ name: "Project 5 is Added" }));

// //// From Bugs
// store.dispatch(bugAdded({ description: "Bug 1 is Added" }));
// store.dispatch(bugAdded({ description: "Bug 2 is Added" }));

// // unsubscribe();

// store.dispatch(bugResolved({ id: 2 }));

// store.dispatch(bugAdded({ description: "Bug 3 is Added" }));

// store.dispatch(bugAdded({ description: "Bug 4 is Added" }));

// store.dispatch(bugRemoved({ id: 3 }));

// store.dispatch(bugUpdated({ id: 4 }));

// store.dispatch(busAssignedToUser({ bugId: 1, userId: 1 }));

// //From Users

// store.dispatch(userAdded({ username: "Aman" }));

// store.dispatch(userAdded({ username: "Dayal" }));

// store.dispatch(userAdded({ username: "Rinku" }));

// store.dispatch(userAdded({ username: "Danny" }));

// store.dispatch(userAdded({ username: "Ankit" }));

// store.dispatch(userAddBug({ id: 2, bug: "A new Bug Is added" }));

// // store.dispatch(userAddBug({ id: 3, bug: "A new Bug Is added" }));

// //Selector
// const bugs = getBugsByUser(1)(store.getState());
// console.log(bugs);
// // const userWithBugs = getUserWithBugs(store.getState());

// // console.log("Users With Bugs-", userWithBugs);

// //Using Selectors
// // const x = getUnresolvedBugs(store.getState());
// // const y = getUnresolvedBugs(store.getState());
// // console.log("X-", x, "    Y-", y);
// // console.log(x === y);

//Using Middleware
// const store = configStore();
// store.dispatch((dispatch, getState) => {
//   dispatch({ type: "bugsReceived", bugs: [1, 2, 3, 4] });
//   console.log("Function", getState());
// });

// store.dispatch({
//   type: "error",
//   payload: { message: "An Error Occured" },
// });
// console.log("Error", store.getState());

//API Call
// const date = new Date();
// const day = date.getDate();
// console.log(`${day}`);
const store = configStore();

store.dispatch(loadBugs());

setTimeout(() => store.dispatch(loadBugs()), 20000);
// store.dispatch(addBug({ description: "New bug added" }));
// setTimeout(() => store.dispatch(resolveBug(3)));
// setTimeout(() => {
//   loadBugs(store);
// }, 5000);
// store.dispatch({
//   type: "apiCallBegan",
//   payload: {
//     url: "/bugs",
//     method: "get",
//     data: {},
//     onSuccess: "bugsReaceived",
//     onError: "apiRequestFailed",
//   },
// });
