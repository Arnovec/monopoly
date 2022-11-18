import React from "react";
import FieldPopover from "../FieldPopover";

export default function StreetContent(props) {
    return (
        <div
            onClick={() => {
                props.showPopover(props.position);
            }}
        >
            <div className="field_color"></div>
            <div className="field_info">
                <div className="name">
                    {props.streeatName} {props.position}
                </div>
                <div className="cost">
                    {props.costCard}
                </div>
            </div>
        </div>
    )
}