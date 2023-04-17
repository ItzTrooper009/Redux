const logger = (param) => (store) => (next) => (action) => {
  console.log("Parameter-", store.getState().entities.bugs.list);
  // setTimeout(() => {
  // }, 3000);
  {
    param.destination === "console" && next(action);
  }
  // if (typeof action === "function") {
  //   action();
  // } else next(action);
};

export default logger;
