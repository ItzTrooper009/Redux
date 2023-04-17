import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";
import moment from "moment";
import { apiCallBegan } from "../store/api";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: {
    list: [],
    loading: false,
    lastFetch: null,
  },
  reducers: {
    bugsRequested: (bugs, action) => {
      bugs.loading = true;
    },
    bugsRequestFailed: (bugs, action) => {
      bugs.loading = false;
    },
    bugsReceived: (bugs, action) => {
      bugs.list = action.payload;
      bugs.loading = false;
      bugs.lastFetch = Date.now();
    },
    bugAdded: (bugs, action) => {
      bugs.list.push(action.payload);
    },

    bugRemoved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs.list.splice(index, 1);
    },

    bugAssignedToUser: (bugs, action) => {
      const { id: bugId, userId } = action.payload;
      const index = bugs.list.findIndex((bug) => bug.id === bugId);
      bugs.list[index].userId = userId;
    },

    bugResolved: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].resolved = true;
    },

    bugUpdated: (bugs, action) => {
      const index = bugs.list.findIndex((bug) => bug.id === action.payload.id);
      bugs.list[index].updated = true;
    },
  },
});

// export const getUnresolvedBugs = (state) =>
//   state.entities.bugs.filter((bug) => !bug.resolved);

// Memoization
export const getUnresolvedBugs = createSelector(
  (state) => state.entities.bugs,
  (bugs) => bugs.filter((bug) => !bug.resolved)
);

export const getBugsByUser = (userId) =>
  createSelector(
    (state) => state.entities.bugs,
    (bugs) => bugs.filter((bug) => bug.userId === userId)
  );

const {
  bugAdded,
  bugRemoved,
  bugResolved,
  bugUpdated,
  bugAssignedToUser,
  bugsReceived,
  bugsRequested,
  bugsRequestFailed,
} = slice.actions;

export default slice.reducer;

const url = "/bugs";

export const loadBugs = ({ dispatch, getState }) => {
  const { lastFetch } = getState().entities.bugs;
  console.log(lastFetch);
  const diffInMinutes = moment().diff(moment(lastFetch), "seconds");
  console.log(diffInMinutes);
  if (!diffInMinutes || diffInMinutes <= 3) {
    dispatch(
      apiCallBegan({
        url,
        onStart: bugsRequested.type,
        onSuccess: bugsReceived.type,
        onError: bugsRequestFailed.type,
      })
    );
  }
};
export const addBug = (bug) =>
  apiCallBegan({
    url,
    method: "post",
    data: bug,
    onSuccess: bugAdded.type,
  });

export const resolveBug = (id) =>
  apiCallBegan({
    url: url + "/" + id,
    method: "patch",
    data: { resolved: true },
    onSuccess: bugResolved.type,
  });

export const assignUserId = (bugId, userId) =>
  apiCallBegan({
    url: url + "/" + bugId,
    method: "patch",
    data: { userId },
    onSuccess: bugAssignedToUser.type,
  });

//Action Creators

////Creating Action Using createAction Function
// export const bugUpdated = createAction("bugUpdated");

// export const bugAdded = createAction("bugAdded");

// export const bugRemoved = createAction("bugRemoved");

// export const bugResolved = createAction("bugResolved");

//Creating Action manually
// export const bugAdded = (description) => ({
//   type: BUG_ADDED,
//   payload: {
//     description: description,
//   },
// });

// export const bugRemoved = (id) => ({
//   type: BUG_REMOVED,
//   payload: {
//     id: id,
//   },
// });

// export const bugResolved = (id) => ({
//   type: BUG_RESOLVED,
//   payload: {
//     id: id,
//   },
// });

//Reducer

//// Creating Reducer using createreducer function
// export default createReducer([], {
//   bugAdded: (bugs, action) => {
//     bugs.push({
//       id: ++lastId,
//       description: action.payload.description,
//       resolved: false,
//     });
//   },

//   bugResolved: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].resolved = true;
//   },

//   bugUpdated: (bugs, action) => {
//     const index = bugs.findIndex((bug) => bug.id === action.payload.id);
//     bugs[index].updated = true;
//   },

//   bugRemoved: (bugs, action) => {
//     bugs.pop((bug) => bug.id != action.payload.id);
//   },
// });

//// Manually creating Reducer
// export default function reducer(state = [], action) {
//   switch (action.type) {
//     case bugAdded.type:
//       return [
//         ...state,
//         {
//           id: ++lastId,
//           description: action.payload.description,
//           resolved: false,
//         },
//       ];
//     case bugRemoved.type:
//       return state.filter((bug) => bug.id !== action.payload.id);

//     case bugResolved.type:
//       return state.map((bug) =>
//         bug.id === action.payload.id ? { ...bug, resolved: true } : bug
//       );

//     case bugUpdated.type:
//       return state.map((bug) =>
//         bug.id === action.payload.id ? { ...bug, updated: true } : bug
//       );

//     default:
//       return state;
//   }
// }
