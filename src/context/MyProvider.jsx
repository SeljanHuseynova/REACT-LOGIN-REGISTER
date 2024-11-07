import React, { createContext, useState } from "react";

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(null);
  return (
    <MyContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        error,
        setError,
        loggedInUser,
        setLoggedInUser,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;
