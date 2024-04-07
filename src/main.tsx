import React from "react";
import ReactDOM from "react-dom/client";
import MyRouter from "./components/Routes/MyRouter.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MyRouter />
  </React.StrictMode>
);
