import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);
    next(action);

    const { url, method, data, onSuccess, onError } = action.payload;

    try {
      const response = await axios.request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      });
      //normal scenario
      dispatch(actions.apiCallSuccess(response.data));
      //special scenario
      if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
      console.log(response.data);
    } catch (err) {
      //normal scenario
      dispatch(actions.apiCallFailed(err));
      //special scenario
      if (onError) dispatch({ type: onError, payload: err });
    }
  };

export default api;
