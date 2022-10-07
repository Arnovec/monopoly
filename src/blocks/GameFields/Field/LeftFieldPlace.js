import React from 'react';
export default function Field(props) {
    return (
        <div className="field field_side">
            <div className="field_info_left">
                <p className="name">{props.name}</p>
                <p className="cost">{props.cost}</p>
            </div>
            <div className="color_left">
            </div>
        </div>
    )
}