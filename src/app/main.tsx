import React from "react";
import { createRoot } from "react-dom/client";
import App from "../App";
import "./index.css";
import { AppKitProvider } from "../appkit";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { ThemeProvider } from "./context/ThemeContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <Provider store={store}>
        <AppKitProvider>
          <App />
        </AppKitProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
