import { useState, useEffect } from "react";
import "./App.css";
import FeatureForm from "./components/FeatureForm";
import FeatureList from "./components/FeatureList";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  // Apply class to body (IMPORTANT)
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1 className="title">DeployPulse 🚀</h1>

        <button onClick={toggleTheme} className="toggle-btn">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <p className="subtitle">
        Feature Lifecycle Tracking Dashboard
      </p>

      <FeatureForm />
      <FeatureList />
    </div>
  );
}

export default App;