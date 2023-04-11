const logger = (param) => (store) => (next) => (action) => {
  console.log("Parameter-", param);
  {
    param.destination === "console" && next(action);
  }
  // if (typeof action === "function") {
  //   action();
  // } else next(action);
};

export default logger;
