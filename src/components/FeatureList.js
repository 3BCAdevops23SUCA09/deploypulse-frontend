import { useEffect, useState } from "react";
import FeatureCard from "./FeatureCard";

function FeatureList() {
  const [features, setFeatures] = useState([]);

  useEffect(() => {
    fetch("https://deploypulse-backend.onrender.com/api/features")
      .then(res => res.json())
      .then(data => setFeatures(data));
  }, []);

  return (
    <div>
      <h3>All Features</h3>
      {features.map(f =>
        <FeatureCard key={f.id} feature={f} />
      )}
    </div>
  );
}

export default FeatureList;