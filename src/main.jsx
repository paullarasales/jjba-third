import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import OurBizarreAdventure from "./OurBizarreAdventure.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <OurBizarreAdventure />
  </StrictMode>
);
