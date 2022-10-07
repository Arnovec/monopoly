import React from 'react';
export default function Field(props) {
    return (
        <div className="field">
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