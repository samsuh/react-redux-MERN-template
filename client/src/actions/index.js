import axios from "axios";
import { FETCH_USER } from "./types";

export const fetchUser = () => async dispatch => {
  console.log("fetchUser invoked");
  const res = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const handleToken = token => async dispatch => {
  console.log("handleToken invoked");
  const res = await axios.post("/api/stripe", token);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const submitBucket = values => async dispatch => {
  console.log("submitBucket invoked");
  const res = await axios.post("/api/buckets", values);
  dispatch({ type: FETCH_USER, payload: res.data });
};
