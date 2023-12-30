import React from "react";
import ReactDOM from "react-dom";
import ContactSection from "./components/ContactSection/ContactSection.jsx";

import App from "./App.js";

const container = document.getElementById("root");
const root = createRoot(container);

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);



