import { useQuery, useMutation } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_CHILD, QUERY_CHILDREN } from "../utils/queries";
import { CREATE_CHILD } from "../utils/mutations";
import Child from "../components/Child";
import { useState } from "react";
export const Children = () => {
  const { id } = useParams();
  const [addChild] = useMutation(CREATE_CHILD);
  const { loading: singleChildLoading, data: singleChild } = useQuery(
    QUERY_CHILD,
    {
      variables: { childId: id },
    }
  );
  const { loading: allChildrenLoading, data: allChildren } =
    useQuery(QUERY_CHILDREN);

  const [addingChild, setAddingChild] = useState(false);
  const [childName, setChildName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [primaryContact, setPrimaryContact] = useState("");
  const [error, setError] = useState("")

  const handleAddChild = async (event) => {
    event.preventDefault();

    if (!childName || !birthday || !primaryContact) {
      setError("All fields are required");
      return;
    }

    await addChild({
      variables: {
        name: childName,
        birthday,
        primaryContact,
      },
      refetchQueries: [QUERY_CHILDREN, "children"],
    });
    setChildName("");
    setBirthday("");
    setPrimaryContact("");
    setError(null);
    setAddingChild(false);
  };

  return (
    <>
      {(singleChildLoading || allChildrenLoading) && <div>Loading...</div>}
      {id && singleChild && (
        <>
          <div>
            <Child child={singleChild.child} />
          </div>
        </>
      )}
      {!id && allChildren && (
        <>
          <div>
            <button onClick={() => setAddingChild(true)} disabled={addingChild}>
              Add New Child
            </button>
            {addingChild && (
              <form onSubmit={handleAddChild}>
                <label>
                  Name:
                  <textarea
                    value={childName}
                    onChange={(e) => setChildName(e.target.value)}
                  />
                </label>
                <label>
                  DOB:
                  <textarea
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </label>
                <label>
                  Primary Contact:
                  <textarea
                    value={primaryContact}
                    onChange={(e) => setPrimaryContact(e.target.value)}
                  />
                </label>
                <button type="submit">
                  Create
                </button>
                {error && (
                  <p>{error}</p>
                )}
              </form>
            )}
          </div>

          {allChildren.children.map((child) => (
            <div key={child._id}>
              <Child child={child} />
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Children;
