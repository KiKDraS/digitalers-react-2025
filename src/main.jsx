import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

//document.getElementById("root").innerHTML = App();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
