//BucketNew shows BucketForm and BucketFormReview
import React, { Component } from "react";
import { reduxForm } from "redux-form";
import BucketForm from "./BucketForm";
import BucketFormReview from "./BucketFormReview";

class BucketNew extends Component {
  state = { showFormReview: false };

  renderContent() {
    if (this.state.showFormReview) {
      return (
        <BucketFormReview
          onCancel={() => this.setState({ showFormReview: false })}
        />
      );
    }
    return (
      <BucketForm
        onBucketSubmit={() => this.setState({ showFormReview: true })}
      />
    );
  }

  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: "bucketForm",
})(BucketNew);
