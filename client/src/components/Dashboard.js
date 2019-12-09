import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <div className="fixed-action-btn">
        <Link
          to="/buckets/new"
          className="btn-floating btn-large red waves-effect waves-light"
        >
          <i className="large material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
