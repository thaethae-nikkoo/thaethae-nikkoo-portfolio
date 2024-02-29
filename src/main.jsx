import ReactDOM from "react-dom/client";
import Router from "./routes/index";
import { ThemeContextProvider } from "./contexts/ThemeContext";
import "./main.scss";
ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeContextProvider>
    <Router />
  </ThemeContextProvider>
);
