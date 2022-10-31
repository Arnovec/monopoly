import React from "react";
import PlayersContainer from "./PlayersContainer";

export default function Field(props) {

    return (
        <div className={`field ${props.direction ? 'field_side' : ''}`}>
            <div className={props.direction}>
                {props.children}
            </div>
            <PlayersContainer {...props}/>
        </div>
    )
}