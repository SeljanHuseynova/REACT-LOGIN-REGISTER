import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../context/MyProvider";

const Profile = (user) => {
  const { loggedInUser, setLoggedInUser } = useContext(MyContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/");
    setLoggedInUser(null);
  };

  return (
    <div className="profile-container">
    
      <Link to="/dashboard" style={{ textDecoration: "none" }} >
        <div className="go-to-dashboard">
          <h4>Go to Dashboard</h4>
        </div>
      </Link>

      <div className="user-profile">
        {loggedInUser ? (
          <div>
            <h2 style={{ textAlign: "center" }}>Welcome, {loggedInUser.username}!</h2>
            <p>Email: {loggedInUser.email}</p>
          </div>
        ) : (
          <h1>Welcome, Guest!</h1>
        )}
      </div>
      <button className="lgt-btn" onClick={handleLogout}>
        Log out
      </button>
    </div>
  );
};

export default Profile;
