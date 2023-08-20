import React from "react";
import { createRoot } from "react-dom/client"
import App from "./App";
import Modal from "react-modal";

Modal.setAppElement("#root");

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = createRoot(rootElement); // Use createRoot here
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Couldn't find root element");
}
