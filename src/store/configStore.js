import { configureStore } from "@reduxjs/toolkit";
// import reducer from "./bugs";
import reducer from "./reducers";

export default function configStore() {
  return configureStore({ reducer });
}
