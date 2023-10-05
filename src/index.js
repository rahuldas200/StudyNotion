import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import rootReducer from './reducer'
import {configureStore}from '@reduxjs/toolkit'

const store = configureStore({
  reducer:rootReducer,
})

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>

    <Provider store = {store} >

      <BrowserRouter>
        <App />
      </BrowserRouter>

    </Provider>

  </React.StrictMode>
);
