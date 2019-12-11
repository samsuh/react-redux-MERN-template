import { FETCH_BUCKETS } from "../actions/types";

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_BUCKETS:
      return action.payload;
    default:
      return state;
  }
}
