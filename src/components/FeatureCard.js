import { useState } from "react";

function FeatureCard({ feature }) {
  const [editMode, setEditMode] = useState(false);
  const [updatedFeature, setUpdatedFeature] = useState(feature);

  const saveUpdate = () => {
    fetch(`http://localhost:8080/api/features/${feature.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedFeature)
    }).then(() => {
      setEditMode(false);
      window.location.reload();
    });
  };

  const deleteFeature = () => {
    fetch(`http://localhost:8080/api/features/${feature.id}`, {
      method: "DELETE"
    }).then(() => window.location.reload());
  };

  return (
    <div className="card">
      {editMode ? (
        <>
          <input
            value={updatedFeature.name}
            onChange={e =>
              setUpdatedFeature({ ...updatedFeature, name: e.target.value })
            }
          />

          <input
            value={updatedFeature.description}
            onChange={e =>
              setUpdatedFeature({ ...updatedFeature, description: e.target.value })
            }
          />

          <input
            value={updatedFeature.owner}
            onChange={e =>
              setUpdatedFeature({ ...updatedFeature, owner: e.target.value })
            }
          />

          <select
            value={updatedFeature.status}
            onChange={e =>
              setUpdatedFeature({ ...updatedFeature, status: e.target.value })
            }
          >
            <option>IN_DEVELOPMENT</option>
            <option>READY_FOR_TESTING</option>
            <option>DEPLOYED</option>
          </select>

          <button className="btn-primary" onClick={saveUpdate}>
            Save
          </button>
        </>
      ) : (
        <>
          <h4>{feature.name}</h4>
          <p>{feature.description}</p>
          <p><b>Owner:</b> {feature.owner}</p>
          <p><b>Status:</b> {feature.status}</p>

          <button className="btn-primary" onClick={() => setEditMode(true)}>
            Edit
          </button>

          <button className="btn-danger" onClick={deleteFeature}>
            Delete
          </button>
        </>
      )}
    </div>
  );
}

export default FeatureCard;
