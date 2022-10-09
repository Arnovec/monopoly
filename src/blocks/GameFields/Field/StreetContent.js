import React from "react";

export default function StreetContent(props) {
    return(
        <div>
            <div className="color"></div>
            <div className="field_info">
                <div className="name">
                    {props.name}
                </div>
                <div className="cost">
                    {props.cost}
                </div>
            </div>
        </div>
    )
}