//Shows users form inputs to review before submitting
import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";

const BucketFormReview = ({ onCancel, formValues, submitBucket, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <h5>Please review and submit.</h5>
      {reviewFields}
      <p>(Note: Credit will be deducted upon successful submission)</p>
      <p className="red-text">
        {" "}
        "Confirm Submit" Not Working; loses 'user.id', actively debugging
      </p>
      <button
        className="yellow darken-3 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="green btn-flat right white-text"
        onClick={() => submitBucket(formValues, history)}
      >
        Confirm Submit <i className="material-icons right">send</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  console.log("from BucketFormReview logging state object:", state);
  return { formValues: state.form.bucketForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(BucketFormReview));
