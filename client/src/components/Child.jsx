//Render all data about children
//Take child as a prop
//children/_id link for it
//based on the data in the stringify
export const Child = ({ child }) => {
    return (

        <div>
            <p>
                Name: {child.name}
            </p>
            <p>
                DOB: {child.birthday}
            </p>
            <p>
                Primary Contact: {child.primaryContact}
            </p>
        </div>
    )
}

export default Child