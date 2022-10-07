export default function Field(props) {
    return (
        <div className="field field_side">
            <div className="color_right">
            </div>
            <div className="field_info_right">
                <p className="name">{props.name}</p>
                <p className="cost">{props.cost}</p>
            </div>
        </div>
    )
}