import React, { useState } from "react";
import { useParams } from "react-router-dom";

import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Documentations = () => {
  let { id } = useParams();
  const [child, setChild] = useState("");
  const [domain, setDomain] = useState("");
  const [note, setNote] = useState("");
  const [goals, setGoals] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!child || !domain || !note || !goals) {
      setError("All fields are required");
      return;
    }

    setSubmittedData({ child, domain, note, goals, timestamp: new Date() });
    setError(null);
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Classroom Observations and Documentation</h1>
      </div>

     

      <form onSubmit={handleSubmit}>
        <label>
          Child:
          <select value={child} onChange={(e) => setChild(e.target.value)}>
            <option value="">Select a Child</option>
            {children.map((child) => (
              <option key={child._id} value={child._id}>
                {child.name}
              </option>
            ))}
          </select>
        </label>
        <label>
          Domain:
          <textarea
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
          />
        </label>
        <label>
          Note:
          <textarea value={note} onChange={(e) => setNote(e.target.value)} />
        </label>
        <label>
          Goals:
          <textarea value={goals} onChange={(e) => setGoals(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {error && <p>{error}</p>}

      {submittedData && (
        <div>
          <h2>Submitted Form Data:</h2>
          <p>Child: {submittedData.child}</p>
          <p>Domain: {submittedData.domain}</p>
          <p>Note: {submittedData.note}</p>
          <p>Goals: {submittedData.goals}</p>
          <p>Submitted at: {submittedData.timestamp.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default Documentations;
