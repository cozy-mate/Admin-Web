import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ScrollToTop } from "@/shared/ui/scrollToTop";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <ScrollToTop />
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
