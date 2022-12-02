import React from "react";
import HouseContainer from './HouseContainer';

export default function StreetContent(props) {
    return (
        <div
            onClick={() => {
                props.showPopover(props.position);
            }}
        >
            <div
                className="field_color"
                style={{ backgroundColor: props.color }}
            >
                <HouseContainer {...props}/>
            </div>
            <div className="field_info">
                <div className="name">
                    {props.cardName}
                </div>
                <div className="cost">
                    {props.costCard}
                </div>
            </div>
        </div>
    )
}