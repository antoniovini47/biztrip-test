import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Navbar from "./components/navbar.tsx";
import { globalStyles } from "../stitches.config";
import QueryProvider from "./providers/query.providers.tsx";

globalStyles();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryProvider>
      <Navbar />
      <App />
    </QueryProvider>
  </StrictMode>
);
