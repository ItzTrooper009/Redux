import axios from "axios";
import * as actions from "../api";

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== actions.apiCallBegan.type) return next(action);

    const { url, method, data, onStart, onSuccess, onError } = action.payload;

    dispatch({ type: onStart });

    next(action);

    // try {
    //   const response = await axios.request({
    //     baseURL: "http://localhost:9001/api",
    //     url,
    //     method,
    //     data,
    //   });
    //   //normal scenario
    //   dispatch(actions.apiCallSuccess(response.data));
    //   //special scenario
    //   if (onSuccess) dispatch({ type: onSuccess, payload: response.data });
    //   console.log(response.data);
    // } catch (err) {
    //   //normal scenario
    //   dispatch(actions.apiCallFailed(err));
    //   //special scenario
    //   if (onError) dispatch({ type: onError, payload: err });
    // }

    ////Using then catch
    axios
      .request({
        baseURL: "http://localhost:9001/api",
        url,
        method,
        data,
      })
      .then((result) => {
        dispatch(actions.apiCallSuccess(result.data));
        if (onSuccess) dispatch({ type: onSuccess, payload: result.data });
        // console.log(result.data.filter((data) => data.resolved));
      })
      .catch((err) => {
        dispatch(actions.apiCallFailed(err.message));
        if (onError) dispatch({ type: onError, payload: err.message });
      });
  };

export default api;
