import React from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";

import App from "./app";

const initiatingPoint = createRoot(document.getElementById("root"));
initiatingPoint.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
