import React, { createContext, useState } from "react";

export const AuthContext = createContext(null);

export const AuthContextProvider = (props) => {
  const [token, setToken] = useState(localStorage.getItem("user"));

  const checkAuth = () => {
    const auth = localStorage.getItem("user");
    if (auth === token) {
      console.log("User is still Authenticated");
      setToken(auth);
    } else {
      setToken("");
      console.log("User is not Authenticated");
    }
  };

  return (
    <AuthContext.Provider
      value={{
        checkAuth,
        token,
        setToken,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
