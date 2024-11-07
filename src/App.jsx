import { Navigate, Route, Router, Routes } from "react-router-dom";
import image from "./assets/images/89e31fb982e6d87f239196db2b3e9ccc copy 2.png";
import Login from "./components/Login";
import Register from "./components/Register";
import mainImage from "./assets/images/main-image.png";
import { useContext, useEffect } from "react";
import { MyContext } from "./context/MyProvider";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";

function App() {
  const { loggedInUser, setLoggedInUser } = useContext(MyContext);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("currentUser"));
    if (user) {
      setLoggedInUser(user);
    }
  }, []);

  return (
    <div className="container-fluid">
      <img src={image} alt="" className="bg-image" />
      <div className="container-lg">
        <div className="main-container row g-3 p-4">
          <div className="col-12 col-md-5">
            <Routes>
              <Route
                path="/"
                element={loggedInUser ? <Dashboard /> : <Login />}
              />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />}/>
              <Route path="/dashboard" element={<Dashboard />} />
            </Routes>
          </div>

          <div className="col-0 col-md-7 image-part d-flex align-items-center">
            <img src={mainImage} alt="" className="main-image" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
