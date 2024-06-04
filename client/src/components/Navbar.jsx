import { Link, useLocation } from "react-router-dom";
import "./navbar.css";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../utils/queries";

export const Navbar = () => {
  const location = useLocation();
  const { data, loading } = useQuery(QUERY_ME);
  console.log(data);
  if (location.pathname === "/") {
    return <div></div>;
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to={`/Room/${data ? data.me?.rooms[0]._id : ""}`}>My Room</Link>
        </li>
        <li>
          <Link to="/Children/">All Children</Link>
        </li>
        <li>
          <Link to="/Documentations">Documentation</Link>
        </li>
        <li>
          <Link to="/Lessons">My Lessons</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
