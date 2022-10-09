import React from "react";

export default function Field(props) {
    return (
        <div key={props.key} className={`field " + ${props.direction}`}>
            {props.children}
        </div>
    )
}