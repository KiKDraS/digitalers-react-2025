import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

// JS de Bootstrap
import "bootstrap/dist/js/bootstrap.bundle.js";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
