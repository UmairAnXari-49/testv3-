import React from "react";
import { createRoot } from "react-dom/client";
import ContactSection from "./components/ContactSection/ContactSection.jsx";

import App from "./App.js";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />    
  <ContactSection />
  </React.StrictMode>
);
