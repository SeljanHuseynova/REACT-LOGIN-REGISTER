import React, { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/MyProvider";
import { Link, Navigate, useNavigate } from "react-router-dom";

const Register = () => {
  const { username, setUsername, password, setPassword, error, setError } =
    useContext(MyContext);

  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const validateInputs = (event) => {
    event.preventDefault();
    const errors = {};
    let isValid = true;
    const usernameValid = /^[a-zA-Z]+$/.test(username);
    const passwordValid = /^[0-9]+$/.test(password);
    const emailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);

    if (!username) {
      errors.username = "Username is required.";
      isValid = false;
    } else if (!usernameValid) {
      errors.username = "Username must contain only letters.";
      isValid = false;
    }

    if (!password) {
      errors.password = "Password is required.";
      isValid = false;
    } else if (!passwordValid) {
      errors.password = "Password must contain only numbers.";
      isValid = false;
    } else if (password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
      isValid = false;
    }

    if (!email) {
      errors.email = "Email is required.";
      isValid = false;
    } else if (!emailValid) {
      errors.email = "Not a valid Email.";
      isValid = false;
    }

    const userArray = JSON.parse(localStorage.getItem("Users")) || [];

    const usernameExists = userArray.some((user) => user.username === username);
    if (usernameExists) {
      errors.username = "Username already exists.";
      isValid = false;
    }

    const emailExists = userArray.some((user) => user.email === email);
    if (emailExists) {
      errors.email = "Email is already in use.";
      isValid = false;
    }

    setError(errors);

    if (isValid) {
      const newUser = { username, email, password };
      userArray.push(newUser);
      localStorage.setItem("Users", JSON.stringify(userArray));

      setUsername("");
      setEmail("");
      navigate("/");
      setPassword("");
      alert("Registration successful!");
    }
  };

  useEffect(() => {
    setError({});
  }, [setError]);

  return (
    <div className="form-container">
      <div className="form p-3 p-md-5">
        <form onSubmit={validateInputs}>
          <span>Your logo</span>
          <h2>Register</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <span className="error">{error.username}</span>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
          />
          <span className="error">{error.email}</span>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span className="error">{error.password}</span>

          <input type="submit" id="sbt-btn" value="Register" />
          <span className="error">{error.usercheck}</span>
        </form>
        <p style={{ margin: "0 auto", textAlign: "center" }} className="my-1">
          Or Continue With
        </p>

        <div className="icons my-3">
          <i class="fa-brands fa-google"></i>
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-facebook"></i>
        </div>

        <p style={{ margin: "0 auto" }}>
          Already have an account?{" "}
          <Link to="/" style={{ textDecoration: "none" }}>
            <span className="register-link">Sign in</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
