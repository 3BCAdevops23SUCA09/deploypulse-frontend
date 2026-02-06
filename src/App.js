import "./App.css";
import FeatureForm from "./components/FeatureForm";
import FeatureList from "./components/FeatureList";

function App() {
  return (
    <div className="container">
      <h1 className="title">DeployPulse 🚀</h1>
      <p className="subtitle">
        Feature Lifecycle Tracking Dashboard
      </p>

      <FeatureForm />
      <FeatureList />
    </div>
  );
}

export default App;