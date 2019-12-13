import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBuckets } from "../../actions";

class BucketList extends Component {
  componentDidMount() {
    this.props.fetchBuckets();
  }

  renderBuckets() {
    return this.props.buckets.reverse().map(bucket => {
      return (
        <div className="card blue-grey lighten-2">
          <div className="card-content black-text">
            <span className="card-title">{bucket.title}</span>
            <p>
              {bucket.body}
            </p>
            <p className="right">
              Created On: {new Date(bucket.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action">
            <span>
              <p className="orange-text text-lighten-3">
                Yes: {bucket.yes} No: {bucket.no}
              </p>
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return <div>{this.renderBuckets()}</div>;
  }
}

function mapStateToProps({ buckets }) {
  return { buckets };
}
export default connect(mapStateToProps, { fetchBuckets })(BucketList);
