import React from "react";
import ReactDOM from "react-dom/client";
import App from "./adapter/primary/web/App.tsx";
import "./adapter/primary/web/app/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
