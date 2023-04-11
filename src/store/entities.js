import { combineReducers } from "redux";
import bugsReducer from "./bugs";
import projectsReduser from "./projects";
import usersReducer from "./users";
import errorsReducer from "./error";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReduser,
  users: usersReducer,
  errors: errorsReducer,
});
