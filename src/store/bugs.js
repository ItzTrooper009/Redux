import { createAction, createReducer, createSlice } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "bugs",
  initialState: [],
  reducers: {
    bugAdded: (bugs, action) => {
      bugs.push({
        id: ++lastId,
        description: action.payload.description,
        resolved: false,
      });
    },

    bugResolved: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].resolved = true;
    },

    bugUpdated: (bugs, action) => {
      const index = bugs.findIndex((bug) => bug.id === action.payload.id);
      bugs[index].updated = true;
    },

    bugRemoved: (bugs, action) => {
      bugs.pop((bug) => bug.id != action.payload.id);
    },
  },
});

export const { bugAdded, bugRemoved, bugResolved, bugUpdated } = slice.actions;

export default slice.reducer;

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
