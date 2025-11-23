import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { ThemeProvider } from "./app/providers/theme/ThemeProvider";
import { BrowserRouter } from "react-router-dom";
import "@/shared/config/i18n/i18n";
import "@/app/styles/index.scss";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
);
