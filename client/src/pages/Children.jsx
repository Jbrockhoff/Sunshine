import { useQuery } from "@apollo/client"
import { useParams } from "react-router-dom"
import { QUERY_CHILDREN_BY_ROOM, QUERY_CHILDREN } from "../utils/queries"
import Child from "../components/Child"
export const Children = () => {
    const { id } = useParams()
    const { loading: roomChildrenLoading, data: roomChildren } = useQuery(QUERY_CHILDREN_BY_ROOM, {
        variables: id
    })
    const { loading: allChildrenLoading, data: allChildren } = useQuery(QUERY_CHILDREN)
    return (<>
        {(roomChildrenLoading || allChildrenLoading) && (
            <div>
                Loading...
            </div>
        )}
        {id && roomChildren && (<>
            {roomChildren.childrenByRoom.map((child) => (
                <div key={child._id}><Child child={child} /></div>

            ))}
        </>
        )}
        {!id && allChildren && (
            <>
                {allChildren.children.map((child) => (
                    <div key={child._id}><Child child={child} /></div>
                ))}
            </>
        )}
    </>)
}

export default Children