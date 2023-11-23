import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import MainPage from "./components/Pages/MainPage";
import AlertManager from "./components/Organisms/AlertManager";
import { AlertHandlerProvider } from "./contexts/alert_handler";

ReactDOM.render(
  <AlertHandlerProvider>
    <MainPage />
    <AlertManager />
  </AlertHandlerProvider>,
  document.getElementById("app")
);
