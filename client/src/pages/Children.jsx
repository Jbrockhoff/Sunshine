import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { QUERY_CHILD, QUERY_CHILDREN } from "../utils/queries";
import Child from "../components/Child";
export const Children = () => {
  const { id } = useParams();
  const { loading: singleChildLoading, data: singleChild } = useQuery(
    QUERY_CHILD,
    {
      variables: { childId: id },
    }
  );
  const { loading: allChildrenLoading, data: allChildren } =
    useQuery(QUERY_CHILDREN);
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
