import { combineReducers } from "redux";
import authReducer from "./authReducer";
import bucketsReducer from "./bucketsReducer";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  buckets: bucketsReducer,
});
