import React from "react";
import { Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../store/store";
import NavBar from "./navbar/NavBar";

const RootLayout = () => {
  return (
    <div>
      <Provider store={store}>
        <NavBar/>
        <main>
          <Outlet />
        </main>
      </Provider>
    </div>
  );
};

export default RootLayout;
