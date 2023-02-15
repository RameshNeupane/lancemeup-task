import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import store from "./app/store";
import { fetchUsers } from "./features/users/usersSlice";
import { Provider } from "react-redux";

// fetch all users when app is loading
store.dispatch(fetchUsers());

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
