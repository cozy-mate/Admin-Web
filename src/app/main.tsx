import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import App from "./App";
import { ScrollToTop } from "@/shared/ui/scrollToTop";

const CLIENT_ID = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <GoogleOAuthProvider clientId={CLIENT_ID}>
        <ScrollToTop />
        <App />
      </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>
);
