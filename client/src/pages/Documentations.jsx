import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_CHILDREN, QUERY_DOCUMENTATIONS } from "../utils/queries";
import { CREATE_DOCUMENTATION, DELETE_DOCUMENTATION } from "../utils/mutations";
import Documentation from "../components/Documentation";

const Documentations = () => {
  let { id } = useParams();
  const [child, setChild] = useState("");
  const [domain, setDomain] = useState("");
  const [note, setNote] = useState("");
  const [goals, setGoals] = useState("");
  const [error, setError] = useState(null);
  const { data: childData } = useQuery(QUERY_CHILDREN);
  const { data, loading } = useQuery(QUERY_DOCUMENTATIONS);
  const [createDocumentation] = useMutation(CREATE_DOCUMENTATION);
  const [deleteDocumentation] = useMutation(DELETE_DOCUMENTATION);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!child || !domain || !note || !goals) {
      setError("All fields are required");
      return;
    }
    await createDocumentation({
      variables: {
        childId: child,
        domain,
        note,
        goals,
      },
      refetchQueries: [QUERY_DOCUMENTATIONS, "documentations"],
    });
    setChild("");
    setDomain("");
    setNote("");
    setGoals("");
    setError(null);
  };
  const handleDelete = async (id) => {
    await deleteDocumentation({
      variables: { id: id },
      refetchQueries: [QUERY_DOCUMENTATIONS, "documentations"],
    });
  };

  return (
    <>
      <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          <h1>Classroom Observations and Documentation</h1>
        </div>

        <form onSubmit={handleSubmit}>
          <label>
            Child:
            <select value={child} onChange={(e) => setChild(e.target.value)}>
              <option value="">Select a Child</option>
              {childData?.children.map((child) => (
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
            <textarea
              value={goals}
              onChange={(e) => setGoals(e.target.value)}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>

        {error && <p>{error}</p>}
      </div>
      <div className="bg-white">
        {data?.documentations.map((doc) => (
          <div>
            <Documentation key={doc._id} documentation={doc} />
            <button onClick={() => handleDelete(doc._id)}>Delete</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Documentations;
