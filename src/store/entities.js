import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReduser from "./projects";
import usersReducer from "./users";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReduser,
  users: usersReducer,
});
