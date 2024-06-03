import { DateTime } from "luxon"
export const Documentation = ({documentation}) => {
   return ( <div className="bg-white">
    <h4>
        {
            documentation.child?.name
        }
    </h4>
        <p>
            Domain: {documentation.domain}
        </p>
        <p>
            Note: {documentation.note}
        </p>
        <p>
            Goals: {documentation.goals}
        </p>
        <p>
            Created at: {new DateTime(documentation.createdAt).toFormat("DD")}
        </p>
    </div>
   )
}
export default Documentation