import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/global.css";
import "./styles/layout.css";
import "./styles/react.css";
import "../server";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <App />
);
