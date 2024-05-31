import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const Documentation = () => {
  let { id } = useParams();
  const [kid, setKid] = useState('');
  const [description, setDescription] = useState('');
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validate the form data
    if (!kid || !description) {
      setError('Both fields are required');
      return;
    }
    // Save the form data to the submittedData state
    setSubmittedData({ kid, description, timestamp: new Date() });
    // Clear the error
    setError(null);
  };

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Here is the matchup!</h1>
      </div>

      <div className="blog-post">
        <h2 className="blog-post-title">Blog Post Title</h2>
        <p className="blog-post-meta">January 1, 2022 by <a href="#">Author</a></p>
        <p>This is some sample blog post content. You can replace this with actual content.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <label>
          Kid:
          <select value={kid} onChange={e => setKid(e.target.value)}>
            <option value="">Select a kid</option>
            {/* Here you can add options for each kid */}
            <option value="kid1">Kid 1</option>
            <option value="kid2">Kid 2</option>
            // Add more kids as needed
          </select>
        </label>
        <label>
          Description:
          <textarea value={description} onChange={e => setDescription(e.target.value)} />
        </label>
        <input type="submit" value="Submit" />
      </form>

      {/* Display the error message */}
      {error && <p>{error}</p>}

      {/* Display the submitted form data */}
      {submittedData && (
        <div>
          <h2>Submitted Form Data:</h2>
          <p>Kid: {submittedData.kid}</p>
          <p>Description: {submittedData.description}</p>
          <p>Submitted at: {submittedData.timestamp.toString()}</p>
        </div>
      )}
    </div>
  );
};

export default Documentation;