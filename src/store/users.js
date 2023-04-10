import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "@reduxjs/toolkit";

let lastId = 0;

const slice = createSlice({
  name: "Users",
  initialState: [],
  reducers: {
    userAdded: (users, action) => {
      users.push({
        id: ++lastId,
        username: action.payload.username,
      });
    },
    userAddBug: (users, action) => {
      const index = users.findIndex((user) => user.id === action.payload.id);
      users[index].bug = action.payload.bug;
    },
  },
});

export const getUserWithBugs = createSelector(
  (state) => state.entities.users,
  (users) => users.filter((user) => (user.bug ? user.bug : ""))
);

export const { userAdded, userAddBug } = slice.actions;

export default slice.reducer;
