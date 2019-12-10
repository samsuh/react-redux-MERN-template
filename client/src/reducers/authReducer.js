import { FETCH_USER } from "../actions/types";

export default function(state = null, action) {
  switch (action.type) {
    case FETCH_USER:
      console.log(
        "action.payload, FETCH_USER, action from authReducer: ",
        action.payload,
        FETCH_USER,
        action
      );
      return action.payload || false;
    default:
      return state;
  }
}
