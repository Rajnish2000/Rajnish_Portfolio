import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const savedTheme = localStorage.getItem("portfolio-theme") || "dark";
document.documentElement.dataset.theme = savedTheme;

createRoot(document.getElementById("root")).render(<App />);
