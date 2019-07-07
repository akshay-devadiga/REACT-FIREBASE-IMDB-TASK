import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

const App = props => {
  return (
    <BrowserRouter>
      <Routes {...props} />
    </BrowserRouter>
  );
};
render(<App />, document.getElementById("root"));
