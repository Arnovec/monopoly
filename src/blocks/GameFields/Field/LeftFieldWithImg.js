export default function Field(props) {
    return (
        <div className="field field_side">
            <div className="field_with_img_left">
                <p className="name">{props.name}</p>
                <div className="field_img_container">
                    <img className="field_img" />
                </div>
                <p className="cost">{props.cost}</p>
            </div>
        </div>
    )
}