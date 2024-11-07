import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard p-3">
      <Link to="/profile" className="profile-link" style={{ textDecoration: "none" }}>
      
        <div className="profile d-flex align-items-center gap-3">
          <i className="fa-regular fa-user"></i>
          <h4>Profile</h4>
        </div>
      </Link>

      <h4>This is your Dashboard page.</h4>
    </div>
  );
};

export default Dashboard;
