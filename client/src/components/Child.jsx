import { useQuery, useMutation } from "@apollo/client";
import { ADD_CHILD_TO_ROOM, DELETE_CHILD } from "../utils/mutations";
import { QUERY_ROOMS, QUERY_CHILDREN } from "../utils/queries";
import { Link } from "react-router-dom";
import { useState } from "react";
import Documentation from "./Documentation";
//delete goes here
export const Child = ({ child }) => {
  const [newRoom, setNewRoom] = useState("");
  const { data: roomData } = useQuery(QUERY_ROOMS);
  const [addChildToRoom] = useMutation(ADD_CHILD_TO_ROOM);
  const [deleteChild] = useMutation(DELETE_CHILD);

  const handleAddChildToRoom = async () => {
    if (!newRoom) {
      return;
    }
    await addChildToRoom({
      variables: {
        roomId: newRoom,
        childId: child._id,
      },
      refetchQueries: [QUERY_CHILDREN, "children"],
    });
    window.location.reload();
  };
  const handleDelete = async (id) => {
    await deleteChild({
      variables: { childId: id },
      refetchQueries: [QUERY_CHILDREN, "children"],
    });
  };

  return (
    <>
      <div>
        <p>
          Name: <Link to={`/Children/${child._id}`}>{child.name}</Link>
        </p>
        <p>DOB: {child.birthday}</p>
        <p>Primary Contact: {child.primaryContact}</p>
      </div>
      <div>
        <h2>Documentations</h2>
        {!child.documentations?.length && (
          <h4>
            No Documentations. Go to{" "}
            <Link to="/Documentations">Documentation</Link> to add
            Documentations.
          </h4>
        )}
        {!!child.documentations?.length && (
          <>
            {child.documentations.map((doc) => (
              <Documentation key={doc._id} documentation={doc} />
            ))}
          </>
        )}
      </div>
      <div>
        {!child.room && (
          <>
            <h2>Add child to room</h2>
            <div>
              {roomData && (
                <>
                  <select
                    value={newRoom}
                    onChange={(e) => setNewRoom(e.target.value)}
                  >
                    <option value="">Select a room</option>
                    {roomData.rooms.map((room) => (
                      <option key={room._id} value={room._id}>
                        {room.name}
                      </option>
                    ))}
                  </select>
                  <button onClick={handleAddChildToRoom}>Add</button>
                </>
              )}
            </div>
          </>
        )}
      </div>
      <button onClick={() => handleDelete(child._id)}>Delete Child</button>
    </>
  );
};

export default Child;
