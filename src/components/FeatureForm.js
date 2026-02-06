import { useState } from "react";

function FeatureForm() {
  const [feature, setFeature] = useState({
    name: "",
    description: "",
    owner: "",
    status: "IN_DEVELOPMENT"
  });

  const submitFeature = () => {
    fetch("https://deploypulse-backend.onrender.com/api/features", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(feature)
    }).then(() => {
      setFeature({
        name: "",
        description: "",
        owner: "",
        status: "IN_DEVELOPMENT"
      });
      window.location.reload();
    });
  };

  return (
    <div className="card">
      <h3>Create Feature</h3>

      <input
        placeholder="Feature Name"
        value={feature.name}
        onChange={(e) =>
          setFeature({ ...feature, name: e.target.value })
        }
      />

      <input
        placeholder="Description"
        value={feature.description}
        onChange={(e) =>
          setFeature({ ...feature, description: e.target.value })
        }
      />

      <input
        placeholder="Owner"
        value={feature.owner}
        onChange={(e) =>
          setFeature({ ...feature, owner: e.target.value })
        }
      />

      <select
        value={feature.status}
        onChange={(e) =>
          setFeature({ ...feature, status: e.target.value })
        }
      >
        <option value="IN_DEVELOPMENT">IN_DEVELOPMENT</option>
        <option value="READY_FOR_TESTING">READY_FOR_TESTING</option>
        <option value="DEPLOYED">DEPLOYED</option>
      </select>

      <button className="btn-primary" onClick={submitFeature}>
        Add Feature
      </button>
    </div>
  );
}

export default FeatureForm;