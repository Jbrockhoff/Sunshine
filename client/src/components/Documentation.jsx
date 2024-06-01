export const Documentation = ({documentation}) => {
    <div>
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
            Created at: {documentation.createdAt}
        </p>
    </div>
}
export default Documentation