import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import AuthProvider from "./Providers/AuthProvider";
import { Toaster } from "sonner";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Toaster position="top-center" richColors />
    <AuthProvider>
      <App />
    </AuthProvider>
  </BrowserRouter>
);
