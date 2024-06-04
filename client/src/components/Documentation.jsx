import { DateTime } from "luxon";
import "./Documentation.css";

export const Documentation = ({ documentation }) => {
  return (
    <div className="documentation-container bg-white">
      <h4 className="documentation-title">{documentation.child?.name}</h4>
      <p className="documentation-info">Domain: {documentation.domain}</p>
      <p className="documentation-info">Note: {documentation.note}</p>
      <p className="documentation-info">Goals: {documentation.goals}</p>
      <p className="documentation-info">Created at: {new DateTime(documentation.createdAt).toFormat("DD")}</p>
    </div>
  );
};

export default Documentation;
