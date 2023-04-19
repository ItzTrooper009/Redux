const logger = (param) => (store) => (next) => (action) => {
  // console.log("Parameter-", param);
  // setTimeout(() => {
  // }, 3000);

  return next(action);

  // if (typeof action === "function") {
  //   action();
  // } else next(action);
};

export default logger;
