import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import Modal from "react-modal";
import { CalendarProvider } from "./context/CalendarContext";

Modal.setAppElement("#root");

const rootElement = document.getElementById("root");
if (rootElement === null) {
  throw new Error("Root element not found!");
}
const root = createRoot(rootElement);
root.render(
  <React.StrictMode>
    <CalendarProvider>
      <App />
    </CalendarProvider>
  </React.StrictMode>
);


