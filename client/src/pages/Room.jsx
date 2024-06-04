import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_CHILDREN_BY_ROOM } from "../utils/queries";

const Room = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(QUERY_CHILDREN_BY_ROOM, {
    variables: { roomId: id },
    fetchPolicy: "no-cache",
  });

  const childList = data?.childrenByRoom.children || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <h1>Welcome to Our Classroom!</h1>
      </div>
      <div className="card-body m-5">
        <h2>Here is a list of students in the class:</h2>
        {loading ? (
          <div>Loading...</div>
        ) : (
          <ul className="square">
            {childList.map((child) => {
              return (
                <li key={child._id}>
                  <Link to={{ pathname: `/Children/${child._id}` }}>
                    {child.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Room;
