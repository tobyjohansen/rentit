export default function CarListItem(props) {
    return (
        <div>
            <p>{props.id}</p>
            <p>{props.bilnavn}</p>
            <p>{props.biltype}</p>
            <p>{props.bilmodel}</p>
            <p>{props.test}</p>
        </div>
    )
}