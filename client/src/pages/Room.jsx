import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_CHILD } from '../utils/queries';
import logo from '../assets/logo.png'; // import your logo

const Room = () => {
  const { loading, data } = useQuery(QUERY_CHILD, {
    fetchPolicy: "no-cache"
  });

  const childList = data?.child || [];

  return (
    <div className="card bg-white card-rounded w-50">
      <div className="card-header bg-dark text-center">
        <img src={logo} alt="Classroom Logo" /> {/* Display the logo */}
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
                  <Link to={{ pathname: `/child/${child._id}` }}>
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