import { useContext, useEffect } from "react";
import { MyContext } from "../context/MyProvider";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    error,
    setError,
    setLoggedInUser,
  } = useContext(MyContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    let isValid = true;
    let errors = {};

    if (!username) {
      errors.username = "Username cannot be empty.";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password cannot be empty.";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    setError(errors);

    if (isValid) {
      const storedUsers = JSON.parse(localStorage.getItem("Users")) || [];
      let userExists = false;
      let currentUser = null;

      for (let i = 0; i < storedUsers.length; i++) {
        const user = storedUsers[i];
        if (user.username === username && user.password === password) {
          userExists = true;
          currentUser = user;
          break;
        }
      }

      if (userExists) {
        localStorage.setItem("currentUser", JSON.stringify(currentUser));

        setLoggedInUser(currentUser);
      } else {
        setError({ usercheck: "Invalid username or password." });
      }
    }
  };

  useEffect(() => {
    setError({});
  }, [setError]);

  return (
    <div className="form-container">
      <div className="form p-3 p-md-5">
        <form onSubmit={handleSubmit}>
          <span>Your logo</span>
          <h2>Login</h2>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder="Username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="error">{error.username}</span>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error">{error.password}</span>

          <p className="ms-auto forgot" style={{ cursor: "pointer" }}>
            Forgot password?
          </p>

          <input type="submit" id="sbt-btn" value="Sign in" className="mb-2" />
          <span className="error">{error.usercheck}</span>
        </form>

        <p style={{ margin: "0 auto", textAlign: "center" }}>
          Or Continue With
        </p>

        <div className="icons my-2">
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>

        <p className="my-3 register-link-container">
          Don't have an account yet?{" "}
          <Link to="/register" style={{ textDecoration: "none" }}>
            <span className="register-link">Register for free</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
