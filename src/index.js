import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Router>
    <App></App>
  </Router>,
  document.getElementById("root")
);
