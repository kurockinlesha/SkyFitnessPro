import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import { GlobalStyled } from "./GlobalAppStyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <GlobalStyled />
    <App />
  </>
);
