import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
// import reducer from "./bugs";
import reducer from "./reducers";
import logger from "./middleware/logger";
import toast from "./middleware/toast";

export default function configStore() {
  return configureStore({
    reducer,
    middleware: [
      ...getDefaultMiddleware(),
      logger({ destination: "console" }),
      toast,
    ],
  });
}
