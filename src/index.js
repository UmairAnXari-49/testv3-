import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.js";

const container = document.getElementById("root");
const root = createRoot(container);


ReactDOM.render(
  <React.StrictMode>
    <ContactSection />
  </React.StrictMode>,
  document.getElementById('root')
);



