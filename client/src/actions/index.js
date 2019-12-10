import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  console.log("fetchUser invoked");
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
  console.log("fetchUser action res.data: ", res.data);
};

export const handleToken = token => async dispatch => {
  console.log("handleToken invoked", token);
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
  console.log("handleToken action res.data: ", res.data);
};

export const submitBucket = (values, history) => async dispatch => {
  console.log("submitBucket invoked");
  const res = await axios.post("/api/buckets", values);
  history.push("/buckets");
  dispatch({ type: FETCH_USER, payload: res.data });
};
