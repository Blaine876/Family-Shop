import React from "react";

import { BrowserRouter } from "react-router-dom";

import Router from "./components/Router";

import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App;
