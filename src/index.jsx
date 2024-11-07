import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/style.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import MyProvider from "./context/MyProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <MyProvider>
      <App />
    </MyProvider>
  </BrowserRouter>
);
