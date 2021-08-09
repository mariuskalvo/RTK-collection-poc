import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@dnb/eufemia/style";
import { store } from "./Store/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
