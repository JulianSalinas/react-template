import React from "react";
import ReactDOM from "react-dom";

import "./css/material.css";
import App from "./app/App";

import { BrowserRouter } from "react-router-dom";
import registerServiceWorker from "./service-worker";

const renderPage = () =>
    <BrowserRouter>
        <App/>
    </BrowserRouter>;

ReactDOM.render(renderPage(), document.getElementById("root"));
registerServiceWorker();
